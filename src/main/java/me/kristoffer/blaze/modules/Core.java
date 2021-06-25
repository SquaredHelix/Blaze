package me.kristoffer.blaze.modules;

import java.io.IOException;
import java.util.ArrayList;

import org.bukkit.configuration.file.YamlConfiguration;

import me.kristoffer.blaze.Blaze;

public class Core extends Module {

	private YamlConfiguration settings;

	public Core(Blaze plugin) {
		super("Core", plugin);
		setDataFolder(""); // Set data folder to back to root
		settings = getConfig("settings.yml");
	}

	public void afterModuleHook() {
		ArrayList<Module> toRemove = new ArrayList<Module>();
		for (Module module : plugin.getStandardModules()) {
			if (!settings.contains("moduleToggles." + name)) {
				return;
			}
			if (!settings.getBoolean("moduleToggles." + name)) {
				toRemove.add(module);
			}
		}
		for (Module module : toRemove) {
			plugin.getStandardModules().remove(module);
		}
	}

	public void onEnable() {
		for (Module module : plugin.getLoadedModules()) {
			if (module instanceof Core) {
				return;
			}
			settings.addDefault("moduleToggles." + module.name, true);
		}
		try {
			settings.save(getFile("settings.yml"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
