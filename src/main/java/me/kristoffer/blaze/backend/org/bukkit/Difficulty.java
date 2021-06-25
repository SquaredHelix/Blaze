package me.kristoffer.blaze.backend.org.bukkit;

public class Difficulty {

	public org.bukkit.Difficulty from(String name) {
		return org.bukkit.Difficulty.valueOf(name);
	}

}
