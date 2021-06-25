package me.kristoffer.blaze.backend.org.bukkit.loot;

public class LootTables {

	public org.bukkit.loot.LootTables from(String name) {
		return org.bukkit.loot.LootTables.valueOf(name);
	}

}
