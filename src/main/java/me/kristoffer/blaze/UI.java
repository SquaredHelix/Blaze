package me.kristoffer.blaze;

import java.util.ArrayList;
import java.util.HashMap;

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
import org.bukkit.inventory.ItemStack;
import org.bukkit.plugin.Plugin;
import org.graalvm.polyglot.Value;

public class UI implements Listener, Debuggable, Cloneable {

	public ArrayList<Player> viewers = new ArrayList<Player>();
	private ArrayList<UIItem> uiItems = new ArrayList<UIItem>();
	protected Inventory backendInventory;
	protected Module module;
	public String title;
	public Value stateHandle;
	public HashMap<String, UI> stateMap = new HashMap<String, UI>();

	public UI(Module module, Plugin plugin, String title, int size) {
		this.module = module;
		this.title = title;
		backendInventory = Bukkit.createInventory(null, size, title);
		plugin.getServer().getPluginManager().registerEvents(this, plugin);
	}

	public void open(Player player) {
		player.closeInventory();
		if (stateHandle == null) {
			try {
				player.openInventory(((UI) this.clone()).backendInventory);
			} catch (CloneNotSupportedException e) {
				e.printStackTrace();
			}
			return;
		}
		String handle = stateHandle.execute(player).asString();
		if (!stateMap.containsKey(handle)) {
			try {
				stateMap.put(handle, (UI) this.clone());
			} catch (CloneNotSupportedException e) {
				e.printStackTrace();
			}
		}
		player.openInventory(stateMap.get(handle).backendInventory);
	}

	public UIItem addItem(int slot, String name, int amount, Material material) {
		UIItem item = new UIItem(this, slot, name, amount, material);
		uiItems.add(item);
		backendInventory.setItem(slot, item.backendItemStack);
		return item;
	}

	public void removeItem(UIItem item) {
		uiItems.remove(item);
		backendInventory.setItem(item.slot, new ItemStack(Material.AIR));
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

	@Override
	public void reload(Debuggable debuggable) {
		UI ui = (UI) debuggable;
		@SuppressWarnings("unchecked")
		ArrayList<Player> viewers = (ArrayList<Player>) this.viewers.clone();
		if (viewers == null) {
			System.out.println("for some reason null");
			return;
		}
		viewers.forEach(viewer -> {
			ui.open(viewer);
		});
	}

	public void update(UIItem item) {
		backendInventory.setItem(item.slot, item.backendItemStack);
		/*
		 * viewers.stream().collect(Collectors.toSet()).forEach(viewer -> {
		 * open(viewer); })
		 */;
	}

	public void setStateHandle(Value function) {
		this.stateHandle = function;
	}

}
