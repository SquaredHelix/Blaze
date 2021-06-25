package me.kristoffer.blaze.backend.org.bukkit.event.player;

public class AsyncPlayerPreLoginEvent {

	public class Result {

		public org.bukkit.event.player.AsyncPlayerPreLoginEvent.Result from(String name) {
			return org.bukkit.event.player.AsyncPlayerPreLoginEvent.Result.valueOf(name);
		}

	}

}
