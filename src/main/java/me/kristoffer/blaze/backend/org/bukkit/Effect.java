package me.kristoffer.blaze.backend.org.bukkit;

public class Effect {

	public org.bukkit.Effect from(String name) {
		return org.bukkit.Effect.valueOf(name);
	}

	public class Type {

		public org.bukkit.Effect.Type from(String name) {
			return org.bukkit.Effect.Type.valueOf(name);
		}

	}

}
