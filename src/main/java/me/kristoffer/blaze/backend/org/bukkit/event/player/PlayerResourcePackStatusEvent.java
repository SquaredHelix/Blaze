package me.kristoffer.blaze.backend.org.bukkit.event.player;

public class PlayerResourcePackStatusEvent {

	public class Status {

		public org.bukkit.event.player.PlayerResourcePackStatusEvent.Status from(String name) {
			return org.bukkit.event.player.PlayerResourcePackStatusEvent.Status.valueOf(name);
		}

	}

}
