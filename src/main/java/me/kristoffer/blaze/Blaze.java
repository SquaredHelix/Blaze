package me.kristoffer.blaze;

import org.bukkit.plugin.java.JavaPlugin;

public class Blaze extends JavaPlugin {

	public void onEnable() {
		new ModuleLoader(this);
	}

	public void onDisable() {
		
	}

}