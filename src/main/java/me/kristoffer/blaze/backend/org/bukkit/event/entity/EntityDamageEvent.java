package me.kristoffer.blaze.backend.org.bukkit.event.entity;

public class EntityDamageEvent {

	public class DamageCause {

		public org.bukkit.event.entity.EntityDamageEvent.DamageCause from(String name) {
			return org.bukkit.event.entity.EntityDamageEvent.DamageCause.valueOf(name);
		}

	}

}
