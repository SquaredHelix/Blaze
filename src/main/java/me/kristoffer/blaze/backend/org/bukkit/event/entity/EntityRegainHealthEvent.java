package me.kristoffer.blaze.backend.org.bukkit.event.entity;

public class EntityRegainHealthEvent {

	public class RegainReason {

		public org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason from(String name) {
			return org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason.valueOf(name);
		}

	}

}
