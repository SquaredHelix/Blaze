package me.kristoffer.blaze.backend.org.bukkit;

public class FluidCollisionMode {

	public org.bukkit.FluidCollisionMode from(String name) {
		return org.bukkit.FluidCollisionMode.valueOf(name);
	}

}
