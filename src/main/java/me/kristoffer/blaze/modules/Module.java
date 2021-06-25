package me.kristoffer.blaze.modules;

import java.io.File;

import org.bukkit.command.CommandExecutor;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.event.HandlerList;
import org.bukkit.event.Listener;

import me.kristoffer.blaze.Blaze;

public class Module implements Listener {

	public Blaze plugin;
	public String name;
	public File dataFolder;

	public Module(String name, Blaze plugin) {
		this.plugin = plugin;
		this.name = name;
		setDataFolder(name);
	}

	protected void setDataFolder(String path) {
		dataFolder = new File(plugin.getDataFolder().getAbsolutePath() + "/" + path);
		dataFolder.mkdirs();
	}

	public File getFile(String path) {
		return new File(dataFolder.getAbsolutePath() + "/" + path);
	}

	public YamlConfiguration getConfig(String name) {
		return YamlConfiguration.loadConfiguration(getFile(name));
	}

	public void registerListeners() {
		plugin.getServer().getPluginManager().registerEvents(this, plugin);
	}

	public void deregisterListeners() {
		HandlerList.unregisterAll(this);
	}

	public void registerCommand(String label) {
		if (this instanceof CommandExecutor) {
			plugin.getCommand(label).setExecutor((CommandExecutor) this);
		}
	}

	public void onEnable() {

	}

	public void onDisable() {

	}

}
