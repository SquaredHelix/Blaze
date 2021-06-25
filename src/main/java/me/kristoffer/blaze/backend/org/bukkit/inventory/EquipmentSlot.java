package me.kristoffer.blaze.backend.org.bukkit.inventory;

public class EquipmentSlot {

	public org.bukkit.inventory.EquipmentSlot from(String name) {
		return org.bukkit.inventory.EquipmentSlot.valueOf(name);
	}

}
