package me.kristoffer.blaze.backend.org.bukkit.entity;

public class Villager {

	public class Type {

		public org.bukkit.entity.Villager.Type from(String name) {
			return org.bukkit.entity.Villager.Type.valueOf(name);
		}

	}

	public class Profession {

		public org.bukkit.entity.Villager.Profession from(String name) {
			return org.bukkit.entity.Villager.Profession.valueOf(name);
		}

	}

}
