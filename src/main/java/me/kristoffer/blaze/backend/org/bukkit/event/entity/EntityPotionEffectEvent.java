package me.kristoffer.blaze.backend.org.bukkit.event.entity;

public class EntityPotionEffectEvent {

	public class Action {

		public org.bukkit.event.entity.EntityPotionEffectEvent.Action from(String name) {
			return org.bukkit.event.entity.EntityPotionEffectEvent.Action.valueOf(name);
		}

	}

	public class Cause {

		public org.bukkit.event.entity.EntityPotionEffectEvent.Cause from(String name) {
			return org.bukkit.event.entity.EntityPotionEffectEvent.Cause.valueOf(name);
		}

	}

}
