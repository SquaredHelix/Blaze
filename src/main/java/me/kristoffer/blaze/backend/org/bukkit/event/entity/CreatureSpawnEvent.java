package me.kristoffer.blaze.backend.org.bukkit.event.entity;

public class CreatureSpawnEvent {

	public class SpawnReason {

		public org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason from(String name) {
			return org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason.valueOf(name);
		}

	}

}
