package me.kristoffer.blaze.backend.org.bukkit.potion;

public class PotionType {

	public org.bukkit.potion.PotionType from(String name) {
		return org.bukkit.potion.PotionType.valueOf(name);
	}

}
