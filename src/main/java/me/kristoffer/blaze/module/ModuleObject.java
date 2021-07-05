package me.kristoffer.blaze.module;

import org.bukkit.plugin.Plugin;

abstract class ModuleObject implements Closable {
	
	public Plugin plugin;
	
	public ModuleObject(Plugin plugin) {
		this.plugin = plugin;
	}
	
	abstract void init();
	
}
