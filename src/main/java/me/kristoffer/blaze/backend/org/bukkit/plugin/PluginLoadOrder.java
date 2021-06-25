package me.kristoffer.blaze.backend.org.bukkit.plugin;

public class PluginLoadOrder {

	public org.bukkit.plugin.PluginLoadOrder from(String name) {
		return org.bukkit.plugin.PluginLoadOrder.valueOf(name);
	}

}
