package me.kristoffer.blaze.backend.org.bukkit.event.player;

public class PlayerBedEnterEvent {

	public class BedEnterResult {

		public org.bukkit.event.player.PlayerBedEnterEvent.BedEnterResult from(String name) {
			return org.bukkit.event.player.PlayerBedEnterEvent.BedEnterResult.valueOf(name);
		}

	}

}
