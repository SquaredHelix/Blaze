package me.kristoffer.blaze.backend.org.bukkit.event.player;

public class PlayerFishEvent {

	public class State {

		public org.bukkit.event.player.PlayerFishEvent.State from(String name) {
			return org.bukkit.event.player.PlayerFishEvent.State.valueOf(name);
		}

	}

}
