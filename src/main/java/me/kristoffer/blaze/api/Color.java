package me.kristoffer.blaze.api;

import net.md_5.bungee.api.ChatColor;

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

	public String translateAlternateColorCodes(char altColorChar, String textToTranslate) {
		return ChatColor.translateAlternateColorCodes(altColorChar, textToTranslate);
	}

	public String text(String textToTranslate) {
		return ChatColor.translateAlternateColorCodes('&', textToTranslate);
	}

	public ChatColor of(String string) {
		return ChatColor.of(string);
	}

	public ChatColor valueOf(String name) {
		return ChatColor.of(name);
	}

	public String gradient(String text, String hexStart, String hexEnd) {
		String endText = "";
		int textLength = text.length();
		java.awt.Color startColor = hexToColor(hexStart);
		java.awt.Color endColor = hexToColor(hexEnd);
		double startRed = startColor.getRed();
		double startGreen = startColor.getGreen();
		double startBlue = startColor.getBlue();
		double endRed = endColor.getRed();
		double endGreen = endColor.getGreen();
		double endBlue = endColor.getBlue();
		double deltaRed = startRed - endRed;
		double deltaGreen = startGreen - endGreen;
		double deltaBlue = startBlue - endBlue;
		double redGradientImpact = 0;
		double greenGradientImpact = 0;
		double blueGradientImpact = 0;
		redGradientImpact = deltaRed / textLength;
		greenGradientImpact = deltaGreen / textLength;
		blueGradientImpact = deltaBlue / textLength;
		if (redGradientImpact < 0)
			redGradientImpact = redGradientImpact * -1;
		if (greenGradientImpact < 0)
			greenGradientImpact = greenGradientImpact * -1;
		if (blueGradientImpact < 0)
			blueGradientImpact = blueGradientImpact * -1;
		for (char c : text.toCharArray()) {
			if (deltaRed < 0) {
				startRed += redGradientImpact;
			} else {
				startRed -= redGradientImpact;
			}
			if (deltaGreen < 0) {
				startGreen += greenGradientImpact;
			} else {
				startGreen -= greenGradientImpact;
			}
			if (deltaBlue < 0) {
				startBlue += blueGradientImpact;
			} else {
				startBlue -= blueGradientImpact;
			}
			if (startRed > 255)
				startRed = 255;
			if (startGreen > 255)
				startGreen = 255;
			if (startBlue > 255)
				startBlue = 255;
			if (startRed < 0)
				startRed = 0;
			if (startGreen < 0)
				startGreen = 0;
			if (startBlue < 0)
				startBlue = 0;
			endText += ChatColor.of(new java.awt.Color((int) startRed, (int) startGreen, (int) startBlue)).toString()
					+ c;
		}
		return endText;
	}

	private java.awt.Color hexToColor(String color) {
		return java.awt.Color.decode(color);
	}

}
