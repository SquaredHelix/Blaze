package me.kristoffer.blaze.backend.org.bukkit;

public class CropState {

	public org.bukkit.CropState from(String name) {
		return org.bukkit.CropState.valueOf(name);
	}

}
