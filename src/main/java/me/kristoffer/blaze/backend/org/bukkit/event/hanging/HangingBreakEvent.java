package me.kristoffer.blaze.backend.org.bukkit.event.hanging;

public class HangingBreakEvent {

	public class RemoveCause {

		public org.bukkit.event.hanging.HangingBreakEvent.RemoveCause from(String name) {
			return org.bukkit.event.hanging.HangingBreakEvent.RemoveCause.valueOf(name);
		}

	}

}
