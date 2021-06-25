package me.kristoffer.blaze.backend.org.bukkit;

public class Statistic {

	public org.bukkit.Statistic from(String name) {
		return org.bukkit.Statistic.valueOf(name);
	}

	public class Type {

		public org.bukkit.Statistic from(String name) {
			return org.bukkit.Statistic.valueOf(name);
		}

	}
}
