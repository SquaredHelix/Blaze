package me.kristoffer.blaze.backend.org.bukkit;

public class BanList {

	public class Type {

		public org.bukkit.BanList.Type from(String name) {
			return org.bukkit.BanList.Type.valueOf(name);
		}

	}

}
