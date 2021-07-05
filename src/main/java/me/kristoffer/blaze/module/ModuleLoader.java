package me.kristoffer.blaze.module;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;

import org.bukkit.Bukkit;
import org.bukkit.plugin.Plugin;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Source;

public class ModuleLoader {

	private Plugin plugin;

	public ModuleLoader(Plugin plugin) {
		this.plugin = plugin;
	}

	private HashMap<String, Module> moduleMap = new HashMap<String, Module>();

	public void loadFolder(String directory) {
		try {
			Files.walk(Paths.get(plugin.getDataFolder().getAbsolutePath().toString(), directory))
					.filter(Files::isRegularFile).forEach(path -> {
						loadFile(path.toString(), false);
					});
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public void loadFile(String path, boolean silent) {
		String localPath = path.replace(plugin.getDataFolder().getAbsolutePath().toString() + "\\", "");
		if (!(localPath.endsWith(".js") || localPath.endsWith(".mjs")))
			return;
		Module module = new Module(plugin, localPath);
		Context context = module.context;
		moduleMap.put(localPath, module);
		if (!silent) {
			Bukkit.getConsoleSender()
					.sendMessage("Loading " + org.bukkit.ChatColor.GREEN + context.getBindings("js").getMember("this"));
		}

		File file = new File(plugin.getDataFolder().getAbsolutePath() + "/" + localPath);
		try {
			context.eval(Source.newBuilder("js", file).build());
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public void disable(String path, boolean silent) {
		if (!silent) {
			Bukkit.getConsoleSender().sendMessage("Disabling " + org.bukkit.ChatColor.GREEN + path);
		}
		moduleMap.get(path).close();
		moduleMap.remove(path);
	}

	public void reload(String path, boolean silent) {
		disable(path, true);
		if (!silent) {
			Bukkit.getConsoleSender().sendMessage("Reloading " + org.bukkit.ChatColor.GREEN + path);
		}
		loadFile(path, true);
	}

}