package me.kristoffer.blaze;

import org.bukkit.ChatColor;

public class Color {
	
	public final ChatColor AQUA = ChatColor.AQUA;
	public final ChatColor BLACK = ChatColor.BLACK;
	public final ChatColor BLUE = ChatColor.BLUE;
	public final ChatColor BOLD = ChatColor.BOLD;
	public final ChatColor DARK_AQUA = ChatColor.DARK_AQUA;
	public final ChatColor DARK_BLUE = ChatColor.DARK_BLUE;
	public final ChatColor DARK_GRAY = ChatColor.DARK_GRAY;
	public final ChatColor DARK_GREEN = ChatColor.DARK_GREEN;
	public final ChatColor DARK_PURPLE = ChatColor.DARK_PURPLE;
	public final ChatColor DARK_RED = ChatColor.DARK_RED;
	public final ChatColor GOLD = ChatColor.GOLD;
	public final ChatColor GRAY = ChatColor.GRAY;
	public final ChatColor GREEN = ChatColor.GREEN;
	public final ChatColor ITALIC = ChatColor.ITALIC;
	public final ChatColor LIGHT_PURPLE = ChatColor.LIGHT_PURPLE;
	public final ChatColor MAGIC = ChatColor.MAGIC;
	public final ChatColor RED = ChatColor.RED;
	public final ChatColor RESET = ChatColor.RESET;
	public final ChatColor STRIKETHROUGH = ChatColor.STRIKETHROUGH;
	public final ChatColor UNDERLINE = ChatColor.UNDERLINE;
	public final ChatColor WHITE = ChatColor.WHITE;
	public final ChatColor YELLOW = ChatColor.YELLOW;
	
	public ChatColor getByChar(String code) {
		return ChatColor.getByChar(code);
	}
	
	public String getLastColors(String input) {
		return ChatColor.getLastColors(input);
	}
	
	public String translateAlternateColorCodes(char altColorChar, String textToTranslate) {
		return ChatColor.translateAlternateColorCodes(altColorChar, textToTranslate);
	}
	
	public ChatColor valueOf(String name) {
		return ChatColor.valueOf(name);
	}
	
	
}
