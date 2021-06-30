package me.kristoffer.blaze;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.stream.Collectors;

import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;
import org.bukkit.event.Event;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Value;

public class Module {

	public ArrayList<Command> commandList = new ArrayList<Command>();
	public HashMap<String, ArrayList<Runnable<Event>>> listenerMap = new HashMap<String, ArrayList<Runnable<Event>>>();
	public Context context;

	public Module(Context context) {
		this.context = context;
	}

	protected void registerCommand(String command, Value function) {
		Command cmd = new Command(command) {

			@Override
			public boolean execute(CommandSender sender, String commandLabel, String[] args) {
				Player player = (Player) sender;
				function.executeVoid(player, args); // TODO: Replace function with commands-wrapper
				return true;
			}

		};
		ReflectionUtils.getCommandMap().register("blaze", cmd);
		commandList.add(cmd);
		ReflectionUtils.syncCommands();
	}

	protected void registerListener(String event, Runnable<Event> listener) {
		if (listenerMap.containsKey(event)) {
			listenerMap.get(event).add(listener);
		} else {
			ArrayList<Runnable<Event>> listeners = new ArrayList<Runnable<Event>>();
			listeners.add(listener);
			listenerMap.put(event, listeners);
		}
	}

	protected void deregisterCommand(Command cmd) {
		ReflectionUtils.getKnownCommands().remove(cmd.getName());
		cmd.unregister(ReflectionUtils.getCommandMap());
		commandList.remove(cmd);
		ReflectionUtils.syncCommands();
	}

	protected void deregisterListener(String event) {
		if (listenerMap.containsKey(event)) {
			listenerMap.remove(event);
		}
	}

	protected void deregisterCommands() {
		commandList.stream().collect(Collectors.toSet()).forEach(this::deregisterCommand);
	}

	protected void deregisterListeners() {
		listenerMap.keySet().stream().collect(Collectors.toSet()).forEach(this::deregisterListener);
	}
	
	public ArrayList<UI> registeredUI = new ArrayList<UI>();
	
	protected void registerUI(UI ui) {
		registeredUI.add(ui);
	}
	
	protected void deregisterUI(UI ui) {
		registeredUI.remove(ui);
	}

	public void disable() {
		deregisterCommands();
		deregisterListeners();
		context.close();
	}

}
