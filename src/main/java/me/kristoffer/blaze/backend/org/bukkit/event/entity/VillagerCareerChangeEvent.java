package me.kristoffer.blaze.backend.org.bukkit.event.entity;

public class VillagerCareerChangeEvent {

	public class ChangeReason {

		public org.bukkit.event.entity.VillagerCareerChangeEvent.ChangeReason from(String name) {
			return org.bukkit.event.entity.VillagerCareerChangeEvent.ChangeReason.valueOf(name);
		}

	}

}
