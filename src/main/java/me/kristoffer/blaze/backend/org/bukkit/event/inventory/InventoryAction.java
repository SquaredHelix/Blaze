package me.kristoffer.blaze.backend.org.bukkit.event.inventory;

public class InventoryAction {

	public org.bukkit.event.inventory.InventoryAction from(String name) {
		return org.bukkit.event.inventory.InventoryAction.valueOf(name);
	}
	
}
