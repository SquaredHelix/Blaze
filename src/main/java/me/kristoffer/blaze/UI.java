package me.kristoffer.blaze;

import java.util.ArrayList;

import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.event.inventory.InventoryCloseEvent;
import org.bukkit.event.inventory.InventoryMoveItemEvent;
import org.bukkit.event.inventory.InventoryOpenEvent;
import org.bukkit.inventory.Inventory;
import org.bukkit.plugin.Plugin;

public class UI implements Listener {

	public String debugKey;

	public ArrayList<Player> viewers = new ArrayList<Player>();
	private ArrayList<UIItem> uiItems = new ArrayList<UIItem>();
	protected Inventory backendInventory;
	protected Module module;

	public String title;

	public UI(Module module, Plugin plugin, String title, int size) {
		this.module = module;
		this.title = title;
		backendInventory = Bukkit.createInventory(null, size, title);
		plugin.getServer().getPluginManager().registerEvents(this, plugin);
	}

	public void open(Player player) {
		player.openInventory(backendInventory);
	}

	public UIItem addItem(String name, int amount, Material material) {
		UIItem item = new UIItem(name, amount, material);
		uiItems.add(item);
		backendInventory.addItem(item.backendItemStack);
		return item;
	}

	public void removeItem(UIItem item) {
		uiItems.remove(item);
	}

	public void attachDebugKey(String key) {
		this.debugKey = key;
	}

	@EventHandler
	private void onInventoryClick(InventoryClickEvent event) {
		if (!(event.getInventory() == backendInventory))
			return;
		if (event.getCurrentItem() == null) {
			return;
		}
		uiItems.stream().filter(item -> item.backendItemStack.equals(event.getCurrentItem())).forEach(item -> {
			item.click((Player) event.getWhoClicked());
		});
		event.setCancelled(true);
	}

	@EventHandler
	private void onInventoryOpen(InventoryOpenEvent event) {
		if (!event.getInventory().equals(backendInventory))
			return;
		viewers.add((Player) event.getPlayer());
	}

	@EventHandler
	private void onInventoryClose(InventoryCloseEvent event) {
		if (!event.getInventory().equals(backendInventory))
			return;
		viewers.remove(event.getPlayer());
	}

	@EventHandler
	private void onInventoryMoveItem(InventoryMoveItemEvent event) {
		if (event.getDestination().equals(backendInventory))
			event.setCancelled(true);
		if (event.getSource().equals(backendInventory))
			event.setCancelled(true);
	}

}
