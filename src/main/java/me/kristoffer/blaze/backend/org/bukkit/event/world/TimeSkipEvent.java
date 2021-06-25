package me.kristoffer.blaze.backend.org.bukkit.event.world;

public class TimeSkipEvent {

	public class SkipReason {

		public org.bukkit.event.world.TimeSkipEvent.SkipReason from(String name) {
			return org.bukkit.event.world.TimeSkipEvent.SkipReason.valueOf(name);
		}

	}

}
