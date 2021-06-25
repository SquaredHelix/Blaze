package me.kristoffer.blaze.backend.org.bukkit.event.entity;

public class EntityExhaustionEvent {

	public class ExhaustionReason {

		public org.bukkit.event.entity.EntityExhaustionEvent.ExhaustionReason from(String name) {
			return org.bukkit.event.entity.EntityExhaustionEvent.ExhaustionReason.valueOf(name);
		}

	}

}
