package me.kristoffer.blaze.module;

import java.util.function.BiFunction;

import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

import me.kristoffer.blaze.util.ReflectionUtils;

class Command extends ModuleObject implements CommandExecutor {

	private String name;
	private BiFunction<Player, String[], Boolean> function;
	
	public Command(String name, BiFunction<Player, String[], Boolean> function) {
		this.name = name;
		this.function = function;
	}

	@Override
	public boolean onCommand(CommandSender sender, org.bukkit.command.Command cmd, String label, String[] args) {
		if (!(sender instanceof Player))
			return false; // TODO
		return function.apply((Player) sender, args);
	}

	@Override
	void init() {
		org.bukkit.command.Command cmd = new org.bukkit.command.Command(name) {

			@Override
			public boolean execute(CommandSender sender, String commandLabel, String[] args) {
				if (!(sender instanceof Player))
					return false; // TODO
				return function.apply((Player) sender, args);
			}

		};
		ReflectionUtils.getCommandMap().register("blaze", cmd);
		//commandList.add(cmd);
		ReflectionUtils.syncCommands();
	}

	@Override
	void close() {
		
	}

}
