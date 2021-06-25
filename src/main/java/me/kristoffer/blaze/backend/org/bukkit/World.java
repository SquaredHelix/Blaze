package me.kristoffer.blaze.backend.org.bukkit;

public class World {

	public class Environment {

		public org.bukkit.World.Environment from(String name) {
			return org.bukkit.World.Environment.valueOf(name);
		}

	}

}
