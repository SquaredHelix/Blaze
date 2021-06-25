package me.kristoffer.blaze.backend.org.bukkit.event.player;

public class PlayerLoginEvent {

	public class Result {

		public org.bukkit.event.player.PlayerLoginEvent.Result from(String name) {
			return org.bukkit.event.player.PlayerLoginEvent.Result.valueOf(name);
		}

	}

}
