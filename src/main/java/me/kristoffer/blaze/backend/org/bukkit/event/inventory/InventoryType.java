package me.kristoffer.blaze.backend.org.bukkit.event.inventory;

public class InventoryType {

	public org.bukkit.event.inventory.InventoryType from(String name) {
		return org.bukkit.event.inventory.InventoryType.valueOf(name);
	}

	public class SlotType {

		public org.bukkit.event.inventory.InventoryType.SlotType from(String name) {
			return org.bukkit.event.inventory.InventoryType.SlotType.valueOf(name);
		}

	}

}
