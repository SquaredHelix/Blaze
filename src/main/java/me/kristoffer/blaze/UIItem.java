package me.kristoffer.blaze;

import java.util.ArrayList;

import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import org.graalvm.polyglot.Value;

public class UIItem {

	private ArrayList<Value> functions = new ArrayList<Value>();
	public ItemStack backendItemStack;

	public UIItem(String name, int amount, Material material) {
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
			function.execute(player);
		});
	}

}
