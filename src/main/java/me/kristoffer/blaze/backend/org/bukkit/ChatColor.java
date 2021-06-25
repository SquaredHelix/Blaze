package me.kristoffer.blaze.backend.org.bukkit;

public class ChatColor {

	public org.bukkit.ChatColor from(String name) {
		return org.bukkit.ChatColor.valueOf(name);
	}

	public org.bukkit.ChatColor getByChar(String code) {
		return org.bukkit.ChatColor.getByChar(code);
	}

	public String translateAlternateColorCodes(char altColorChar, String textToTranslate) {
		return org.bukkit.ChatColor.translateAlternateColorCodes(altColorChar, textToTranslate);
	}

}
