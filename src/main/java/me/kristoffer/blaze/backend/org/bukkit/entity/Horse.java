package me.kristoffer.blaze.backend.org.bukkit.entity;

public class Horse {

	public class Color {

		public org.bukkit.entity.Horse.Color from(String name) {
			return org.bukkit.entity.Horse.Color.valueOf(name);
		}

	}

	public class Style {

		public org.bukkit.entity.Horse.Style from(String name) {
			return org.bukkit.entity.Horse.Style.valueOf(name);
		}

	}

}
