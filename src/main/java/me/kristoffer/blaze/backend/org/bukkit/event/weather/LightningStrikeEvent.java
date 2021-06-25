package me.kristoffer.blaze.backend.org.bukkit.event.weather;

public class LightningStrikeEvent {

	public class Cause {

		public org.bukkit.event.weather.LightningStrikeEvent.Cause from(String name) {
			return org.bukkit.event.weather.LightningStrikeEvent.Cause.valueOf(name);
		}

	}

}
