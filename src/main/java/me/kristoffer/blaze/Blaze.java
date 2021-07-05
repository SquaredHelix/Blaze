package me.kristoffer.blaze;

import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.StandardWatchEventKinds;
import java.nio.file.WatchKey;
import java.nio.file.WatchService;

import org.bukkit.event.Listener;
import org.bukkit.plugin.java.JavaPlugin;
import org.bukkit.scheduler.BukkitRunnable;

import me.kristoffer.blaze.module.ModuleLoader;

public class Blaze extends JavaPlugin implements Listener {

	private ModuleLoader moduleLoader;

	public void onEnable() {
		moduleLoader = new ModuleLoader(this);
		moduleLoader.loadFolder("");
		setupWatchers();
	}

	public void setupWatchers() {
		try {
			final WatchService createWatcher = FileSystems.getDefault().newWatchService();
			final WatchService deleteWatcher = FileSystems.getDefault().newWatchService();
			final WatchService modifyWatcher = FileSystems.getDefault().newWatchService();

			WatchKey create = getDataFolder().toPath().register(createWatcher, StandardWatchEventKinds.ENTRY_CREATE);
			WatchKey delete = getDataFolder().toPath().register(deleteWatcher, StandardWatchEventKinds.ENTRY_DELETE);
			WatchKey modify = getDataFolder().toPath().register(modifyWatcher, StandardWatchEventKinds.ENTRY_MODIFY);

			new BukkitRunnable() {

				@Override
				public void run() {
					create.pollEvents().forEach(event -> {
						if (event.context().toString().endsWith(".js") || event.context().toString().endsWith(".mjs")
								|| event.context().toString().endsWith(".config")) {
							moduleLoader.loadFile(event.context().toString(), false);
						}
					});
					delete.pollEvents().forEach(event -> {
						if (event.context().toString().endsWith(".js") || event.context().toString().endsWith(".mjs")
								|| event.context().toString().endsWith(".config")) {
							moduleLoader.disable(event.context().toString(), false);
						}
					});
					modify.pollEvents().forEach(event -> {
						if (event.context().toString().endsWith(".js") || event.context().toString().endsWith(".mjs")
								|| event.context().toString().endsWith(".config")) {
							moduleLoader.reload(event.context().toString(), false);
						}
					});
				}

			}.runTaskTimer(this, 4L, 20L);
		} catch (IOException e2) {
			e2.printStackTrace();
		}
	}

}