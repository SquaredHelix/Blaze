package me.kristoffer.blaze.module;

import org.bukkit.scheduler.BukkitRunnable;
import org.bukkit.scheduler.BukkitTask;
import org.graalvm.polyglot.Value;

import me.kristoffer.blaze.TSDefined;

public class ModuleAPI implements TSDefined {

	private Module module;

	public ModuleAPI() {
		
	}
	
	public ModuleAPI(Module module) {
		this.module = module;
	}

	public BukkitTask runLater(int delay, java.lang.Runnable runnable) {
		BukkitTask task = new BukkitRunnable() {

			@Override
			public void run() {
				runnable.run();
			}

		}.runTaskLater(module.plugin, delay);
		return task;
	}

	public BukkitTask runRepeating(int delay, int period, java.lang.Runnable runnable) {
		BukkitTask task = new BukkitRunnable() {

			@Override
			public void run() {
				runnable.run();
			}

		}.runTaskTimer(module.plugin, delay, period);
		return task;
	}

	public BukkitTask runAsync(int ticks, java.lang.Runnable runnable) {
		BukkitTask task = new BukkitRunnable() {

			@Override
			public void run() {
				runnable.run();
			}

		}.runTaskAsynchronously(module.plugin);
		return task;
	}

	public Listener onEvent(String eventName, Value function) {
		Listener listener = new Listener(module.plugin, eventName, function::executeVoid);
		module.manager.registerObject(listener);
		return listener;
	}

	public Listener onEvent(String prefix, String eventName, Value function) {
		Listener listener = new Listener(module.plugin, eventName, function::executeVoid, prefix);
		module.manager.registerObject(listener);
		return listener;
	}

	public Command onCommand(String command, Value function) {
		Command cmd = new Command(module.plugin, command, (player, args) -> function.execute(player, args));
		module.manager.registerObject(cmd);
		return cmd;
	}

	@Override
	public String defineTypescript() {
		return """
				declare namespace blaze {
				    function onEvent<Type>(event: Type, listener: ListenerFunction<Type>): void
				    function onCommand(commandName: string, listener: CommandFunction): void
				}""";
	}

}
