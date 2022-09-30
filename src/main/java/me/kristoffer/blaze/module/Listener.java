package me.kristoffer.blaze.module;

import java.util.function.Consumer;

import org.bukkit.Bukkit;
import org.bukkit.event.Event;
import org.bukkit.event.EventPriority;
import org.bukkit.event.HandlerList;
import org.bukkit.plugin.EventExecutor;
import org.bukkit.plugin.Plugin;

import me.kristoffer.blaze.TSDefined;
import me.kristoffer.blaze.util.ReflectionUtils;

public class Listener extends ModuleObject implements org.bukkit.event.Listener, TSDefined {

	private String eventName;
	private Consumer<Event> function;
	private String prefix;

	public Listener() {
		super(null);
	}

	public Listener(Plugin plugin, String eventName, Consumer<Event> function, String prefix) {
		super(plugin);
		this.eventName = eventName;
		this.function = function;
		this.prefix = prefix;
	}

	public Listener(Plugin plugin, String eventName, Consumer<Event> function) {
		this(plugin, eventName, function, "org.bukkit");
	}

	@Override
	void init() {
		EventExecutor eventsExecutor = (listener, event) -> function.accept(event);
		ReflectionUtils.getEvents(prefix).forEach(event -> {
			String name = event.getSimpleName();
			if (name.equals(eventName)) {
				Bukkit.getPluginManager().registerEvent(event, this, EventPriority.MONITOR, eventsExecutor, plugin);
			} else {
				// TODO
			}
		});
		// getLogger().info("Registered " + bukkitEvents.size() + " events from " +
		// prefix + "!");
	}

	@Override
	public void close() {
		HandlerList.unregisterAll(this);
	}

	public void remove() {
		close();
	}

	@Override
	public String defineTypescript() {
		return """
				type ListenerFunction<Type> = (event: Type) => void
				type CommandFunction = (player: Player, args: any) => void
				""";
	}

}
