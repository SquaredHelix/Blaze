package me.kristoffer.blaze.backend.org.bukkit.entity;

public class EntityType {

	public org.bukkit.entity.EntityType from(String name) {
		return org.bukkit.entity.EntityType.valueOf(name);
	}

}
