package me.kristoffer.blaze.backend.org.bukkit.entity;

public class Spellcaster {

	public class Spell {

		public org.bukkit.entity.Spellcaster.Spell from(String name) {
			return org.bukkit.entity.Spellcaster.Spell.valueOf(name);
		}

	}

}
