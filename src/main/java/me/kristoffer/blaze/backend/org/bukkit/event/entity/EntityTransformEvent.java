package me.kristoffer.blaze.backend.org.bukkit.event.entity;

public class EntityTransformEvent {

	public class TransformReason {

		public org.bukkit.event.entity.EntityTransformEvent.TransformReason from(String name) {
			return org.bukkit.event.entity.EntityTransformEvent.TransformReason.valueOf(name);
		}

	}

}
