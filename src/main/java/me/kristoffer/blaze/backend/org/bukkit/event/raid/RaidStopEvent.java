package me.kristoffer.blaze.backend.org.bukkit.event.raid;

public class RaidStopEvent {

    public class Reason {

		public org.bukkit.event.raid.RaidStopEvent.Reason from(String name) {
			return org.bukkit.event.raid.RaidStopEvent.Reason.valueOf(name);
		}

	}

}
