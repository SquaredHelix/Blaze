package me.kristoffer.blaze.backend.org.bukkit.event.world;

public class PortalCreateEvent {

	public class CreateReason {

		public org.bukkit.event.world.PortalCreateEvent.CreateReason from(String name) {
			return org.bukkit.event.world.PortalCreateEvent.CreateReason.valueOf(name);
		}

	}

}
