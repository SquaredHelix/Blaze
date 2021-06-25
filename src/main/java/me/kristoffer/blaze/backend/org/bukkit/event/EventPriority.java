package me.kristoffer.blaze.backend.org.bukkit.event;

public class EventPriority {

	public org.bukkit.event.EventPriority from(String name) {
		return org.bukkit.event.EventPriority.valueOf(name);
	}

}
