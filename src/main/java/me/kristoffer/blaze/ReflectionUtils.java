package me.kristoffer.blaze;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.bukkit.Bukkit;
import org.bukkit.command.Command;
import org.bukkit.command.CommandMap;
import org.bukkit.command.SimpleCommandMap;
import org.bukkit.event.Event;
import org.bukkit.event.EventPriority;
import org.bukkit.event.Listener;
import org.bukkit.plugin.EventExecutor;
import org.bukkit.plugin.Plugin;
import org.reflections.Reflections;

public class ReflectionUtils {

	public static CommandMap getCommandMap() {
		try {
			Field commandMapF = Bukkit.getServer().getClass().getDeclaredField("commandMap");
			commandMapF.setAccessible(true);
			final CommandMap commandMap = (CommandMap) commandMapF.get(Bukkit.getServer());
			return commandMap;
		} catch (NoSuchFieldException | SecurityException | IllegalArgumentException | IllegalAccessException e) {
			e.printStackTrace();
			return null;
		}
	}

	@SuppressWarnings("unchecked")
	public static Map<String, Command> getKnownCommands() {
		try {
			Field commandMapF = Bukkit.getServer().getClass().getDeclaredField("commandMap");
			commandMapF.setAccessible(true);
			Field knownCommandsF = SimpleCommandMap.class.getDeclaredField("knownCommands");
			knownCommandsF.setAccessible(true);
			Map<String, Command> knownCommands = (Map<String, Command>) knownCommandsF
					.get((SimpleCommandMap) commandMapF.get(Bukkit.getServer()));
			return knownCommands;
		} catch (NoSuchFieldException | SecurityException | IllegalArgumentException | IllegalAccessException e) {
			e.printStackTrace();
			return null;
		}
	}

	public static void syncCommands() {
		try {
			Method syncCommandsM;
			syncCommandsM = Bukkit.getServer().getClass().getDeclaredMethod("syncCommands");
			syncCommandsM.setAccessible(true);
			IntStream.range(0, 5).forEach(i -> {
				try {
					syncCommandsM.invoke(Bukkit.getServer());
				} catch (IllegalAccessException | IllegalArgumentException | InvocationTargetException e) {
					e.printStackTrace();
				}
			});
		} catch (NoSuchMethodException | SecurityException e) {
			e.printStackTrace();
		}
	}

	public static Set<Class<? extends Event>> getEvents(String prefix) {
		Reflections reflections = new Reflections(prefix);
		Set<Class<? extends Event>> eventClasses = reflections.getSubTypesOf(Event.class).stream()
				.filter(clazz -> Arrays.stream(clazz.getDeclaredFields())
						.anyMatch(field -> field.getType().getName().endsWith("HandlerList")))
				.collect(Collectors.toSet());
		return eventClasses;
	}

	public static void registerEventExecutor(Listener listener, Plugin plugin, Set<Class<? extends Event>> events,
			EventExecutor eventExecutor) {
		events.forEach(clazz -> Bukkit.getServer().getPluginManager().registerEvent(clazz, listener,
				EventPriority.MONITOR, eventExecutor, plugin));
	}

}
