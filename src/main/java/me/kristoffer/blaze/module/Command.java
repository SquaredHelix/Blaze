package me.kristoffer.blaze.module;

import java.util.function.BiConsumer;

import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;
import org.bukkit.plugin.Plugin;

import me.kristoffer.blaze.util.ReflectionUtils;

class Command extends ModuleObject {

	private String name;
	private BiConsumer<Player, String[]> function;

	public Command(Plugin plugin, String name, BiConsumer<Player, String[]> function) {
		super(plugin);
		this.name = name;
		this.function = function;
	}

	private org.bukkit.command.Command thisCommand;

	@Override
	void init() {
		thisCommand = new org.bukkit.command.Command(name) {

			@Override
			public boolean execute(CommandSender sender, String commandLabel, String[] args) {
				if (!(sender instanceof Player))
					return false; // TODO
				function.accept((Player) sender, args);
				return true;
			}

		};
		ReflectionUtils.getCommandMap().register("blaze", thisCommand);
		// commandList.add(cmd);
		ReflectionUtils.syncCommands();
	}

	@Override
	public void close() {
		ReflectionUtils.getKnownCommands().remove(name);
		thisCommand.unregister(ReflectionUtils.getCommandMap());
		// commandList.remove(cmd);
		ReflectionUtils.syncCommands();
	}

	public void remove() {
		close();
	}

}
