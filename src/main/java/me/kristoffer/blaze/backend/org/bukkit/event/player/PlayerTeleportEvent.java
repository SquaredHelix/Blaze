package me.kristoffer.blaze.backend.org.bukkit.event.player;

public class PlayerTeleportEvent {

	public class TeleportCause {

		public org.bukkit.event.player.PlayerTeleportEvent.TeleportCause from(String name) {
			return org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.valueOf(name);
		}

	}

}
