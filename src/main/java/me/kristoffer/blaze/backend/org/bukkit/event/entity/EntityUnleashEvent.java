package me.kristoffer.blaze.backend.org.bukkit.event.entity;

public class EntityUnleashEvent {

	public class UnleashReason {

		public org.bukkit.event.entity.EntityUnleashEvent.UnleashReason from(String name) {
			return org.bukkit.event.entity.EntityUnleashEvent.UnleashReason.valueOf(name);
		}

	}

}
