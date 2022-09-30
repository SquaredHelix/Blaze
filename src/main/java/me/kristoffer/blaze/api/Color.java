package me.kristoffer.blaze.api;

import me.kristoffer.blaze.TSDefined;
import net.md_5.bungee.api.ChatColor;

public class Color implements TSDefined {

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

	public Color() {
		
	}
	
	public String gradient(String text, String... additionalHex) {
		String endText = "";
		int length = text.length();
		System.out.println("xyz");
		double pieceLength = (double) length / (double) additionalHex.length;
		for (int i = 0; i < additionalHex.length - 1; i++) {
			int currentPieceStart = (int) (0 + pieceLength * i);
			int currentPieceEnd = (int) (pieceLength + pieceLength * i);
			String piece;
			if (i == additionalHex.length - 2) {
				piece = text.substring(currentPieceStart, length);
			} else {
				piece = text.substring(currentPieceStart, currentPieceEnd);
			}
			endText += gradient(piece, additionalHex[i], additionalHex[i + 1]);
		}

		return endText;
	}

	public String gradient(String text, String hexStart, String hexEnd) {
		boolean bold = false;
		boolean italic = false;
		boolean underline = false;
		boolean strikethrough = false;
		if (text.startsWith("§l")) {
			bold = true;
			text = text.replace("§l", "");
		} else if (text.startsWith("§o")) {
			italic = true;
			text = text.replace("§o", "");
		} else if (text.startsWith("§n")) {
			underline = true;
			text = text.replace("§n", "");
		} else if (text.startsWith("§m")) {
			strikethrough = true;
			text = text.replace("§m", "");
		}
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
			if (bold) {
				endText += ChatColor.of(new java.awt.Color((int) startRed, (int) startGreen, (int) startBlue))
						.toString() + BOLD + c;
			} else if (italic) {
				endText += ChatColor.of(new java.awt.Color((int) startRed, (int) startGreen, (int) startBlue))
						.toString() + ITALIC + c;
			} else if (underline) {
				endText += ChatColor.of(new java.awt.Color((int) startRed, (int) startGreen, (int) startBlue))
						.toString() + UNDERLINE + c;
			} else if (strikethrough) {
				endText += ChatColor.of(new java.awt.Color((int) startRed, (int) startGreen, (int) startBlue))
						.toString() + STRIKETHROUGH + c;
			} else {
				endText += ChatColor.of(new java.awt.Color((int) startRed, (int) startGreen, (int) startBlue))
						.toString() + c;
			}
		}
		return endText;
	}

	private java.awt.Color hexToColor(String color) {
		return java.awt.Color.decode(color);
	}

	@Override
	public String defineTypescript() {
		return """
				declare enum Color {
					BLACK,
					DARK_BLUE,
					DARK_GREEN,
					DARK_AQUA,
					DARK_RED,
					DARK_PURPLE,
					GOLD,
					GRAY,
					DARK_GRAY,
					BLUE,
					GREEN,
					AQUA,
					RED,
					LIGHT_PURPLE,
					YELLOW,
					WHITE,
					MAGIC,
					BOLD,
					STRIKETHROUGH,
					UNDERLINE,
					ITALIC,
					RESET,
				}
				""";
	}

}
