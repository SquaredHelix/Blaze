package me.kristoffer.blaze.backend.org.bukkit.inventory;

public class InventoryView {

	public class Property {

		public org.bukkit.inventory.InventoryView.Property from(String name) {
			return org.bukkit.inventory.InventoryView.Property.valueOf(name);
		}

	}

}
