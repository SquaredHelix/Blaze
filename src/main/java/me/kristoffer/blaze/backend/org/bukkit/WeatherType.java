package me.kristoffer.blaze.backend.org.bukkit;

public class WeatherType {

	public org.bukkit.WeatherType from(String name) {
		return org.bukkit.WeatherType.valueOf(name);
	}

}
