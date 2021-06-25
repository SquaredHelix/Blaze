package me.kristoffer.blaze.backend.org.bukkit;

public class GameMode {
    
	public org.bukkit.GameMode from(String name) {
		return org.bukkit.GameMode.valueOf(name);
	}
	
}
