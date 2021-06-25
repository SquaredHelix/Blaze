package me.kristoffer.blaze.backend.org.bukkit.event;

public class Event {

	public class Result {

		public org.bukkit.event.Event.Result from(String name) {
			return org.bukkit.event.Event.Result.valueOf(name);
		}

	}

}
