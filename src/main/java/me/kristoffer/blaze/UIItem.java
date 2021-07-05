package me.kristoffer.blaze;

import java.util.ArrayList;
import java.util.Arrays;

import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import org.graalvm.polyglot.Value;

public class UIItem {

	private ArrayList<Value> functions = new ArrayList<Value>();
	public ItemStack backendItemStack;
	public int slot;
	private UI ui;

	public UIItem(UI ui, int slot, String name, int amount, Material material) {
		this.slot = slot;
		this.ui = ui;
		backendItemStack = new ItemStack(material, amount);
		ItemMeta itemMeta = backendItemStack.getItemMeta();
		itemMeta.setDisplayName(name);
		backendItemStack.setItemMeta(itemMeta);
	}

	public void onClick(Value function) {
		functions.add(function);
	}

	public void click(Player player) {
		functions.forEach(function -> {
			function.execute(player, this);
		});
	}

	public UIItem setType(Material material) {
		backendItemStack.setType(material);
		update();
		return this;
	}

	public UIItem setAmount(int amount) {
		backendItemStack.setAmount(amount);
		update();
		return this;
	}

	public UIItem setName(String name) {
		ItemMeta itemMeta = backendItemStack.getItemMeta();
		itemMeta.setDisplayName(name);
		backendItemStack.setItemMeta(itemMeta);
		update();
		return this;
	}

	public UIItem setDescription(String description) {
		ItemMeta itemMeta = backendItemStack.getItemMeta();
		itemMeta.setLore(Arrays.asList(description));
		backendItemStack.setItemMeta(itemMeta);
		update();
		return this;
	}

	private void update() {
		ui.update(this);
	}

}
