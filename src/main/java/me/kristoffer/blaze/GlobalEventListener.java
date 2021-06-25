package me.kristoffer.blaze;

import java.util.ArrayList;
/*
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
import java.util.Arrays;
import java.util.ConcurrentModificationException;
import java.util.HashMap;
import java.util.Set;
import java.util.stream.Collectors;

import org.bukkit.event.Event;
import org.bukkit.event.EventPriority;
import org.bukkit.event.Listener;
import org.bukkit.plugin.EventExecutor;
import org.bukkit.plugin.Plugin;
import org.graalvm.polyglot.Context;
import org.reflections.Reflections;

public class GlobalEventListener implements Listener {

	public HashMap<String, EventFunction> functionMap = new HashMap<String, EventFunction>();

	public void doStuff(Plugin plugin) {
		// search event classes
		Reflections reflections = new Reflections("org.bukkit");// change to also find custom events
		Set<Class<? extends Event>> eventClasses = reflections.getSubTypesOf(Event.class).stream()
				.filter(clazz -> Arrays.stream(clazz.getDeclaredFields())
						.anyMatch(field -> field.getType().getName().endsWith("HandlerList")))
				.collect(Collectors.toSet());
		plugin.getLogger().info("Found " + eventClasses.size() + " available events!");
		// plugin.getLogger().info(eventClasses.stream().map(Class::getName).collect(Collectors.joining(",
		// ")));

		// register events
		EventExecutor eventExecutor = (listener, event) -> iGetCalledForEveryEvent(event);
		eventClasses.forEach(clazz -> plugin.getServer().getPluginManager().registerEvent(clazz, this,
				EventPriority.MONITOR, eventExecutor, plugin));
	}

	private final String[] ignored = {};
	/*
	 * private final String[] ignored = { "VehicleBlockCollisionEvent",
	 * "EntityAirChangeEvent", "VehicleUpdateEvent", "ChunkUnloadEvent",
	 * "ChunkLoadEvent" };
	 */

	public void iGetCalledForEveryEvent(Event event) {
		try {
			if (Arrays.stream(ignored).anyMatch(ignored -> event.getEventName().equals(ignored))) {
				return;
			}
			// plugin.getLogger().info(event.getEventName() + " was called!");
			if (!functionMap.containsKey(event.getEventName())) {
				return;
			}
			EventFunction functions = functionMap.get(event.getEventName());
			for (ArrayList<Runnable<Event>> runnableContext : functions.runnableMap.values()) {
				for (Runnable<Event> runnable : runnableContext) {
					runnable.run(event);
				}
			}
		} catch (ConcurrentModificationException ex) {
			System.err.println("!!! You cannot register listeners at runtime !!!");
		}
	}

	public void registerFunction(Context context, String listenerName, Runnable<Event> runnable) {
		if (functionMap.containsKey(listenerName)) {
			functionMap.get(listenerName).addFunction(context, runnable); // maybe todo
		} else {
			EventFunction eventFunction = new EventFunction();
			eventFunction.addFunction(context, runnable);
			functionMap.put(listenerName, eventFunction);
		}
	}

	public void unregisterFunctions(Context context) {
		functionMap.values().forEach(eventFunction -> {
			eventFunction.removeFunctions(context);
		});
	}

}