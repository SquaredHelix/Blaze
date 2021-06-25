package me.kristoffer.blaze.modules;

import java.util.ArrayList;

import org.bukkit.Material;
import org.bukkit.Rotation;
import org.bukkit.block.Block;
import org.bukkit.block.Chest;
import org.bukkit.block.Container;
import org.bukkit.block.DoubleChest;
import org.bukkit.entity.EntityType;
import org.bukkit.entity.ItemFrame;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.inventory.InventoryCloseEvent;
import org.bukkit.event.player.PlayerInteractAtEntityEvent;
import org.bukkit.scheduler.BukkitRunnable;

import me.kristoffer.blaze.Blaze;

public class ItemFrameFix extends Module {

	public ItemFrameFix(Blaze plugin) {
		super("ItemFrameFix", plugin);
	}

	public void onEnable() {
		registerListeners();
	}
	
	// Avoid double-opening of the chest, caused by a bug in the event
	public ArrayList<Container> clickedList = new ArrayList<Container>();
	public ArrayList<Player> openInventories = new ArrayList<Player>();

	@EventHandler
	public void onPlaterInteract(PlayerInteractAtEntityEvent event) {
		if (event.getPlayer().isSneaking()) {
			return;
		}
		Player player = event.getPlayer();
		if (event.getRightClicked().getType().equals(EntityType.ITEM_FRAME)) {
			ItemFrame itemFrame = (ItemFrame) event.getRightClicked();
			Block block = itemFrame.getLocation().getBlock().getRelative(itemFrame.getAttachedFace());
			if (block.getState() instanceof Container) {
				if (itemFrame.getItem().getType().equals(Material.AIR)) {
					if (!(player.getInventory().getItemInOffHand().getType().equals(Material.AIR))
							|| (!player.getInventory().getItemInMainHand().getType().equals(Material.AIR))) {
						return;
					}
				}
				Container container = (Container) block.getState();
				if (clickedList.contains(container)) {
					return;
				}
				clickedList.add(container);
				if (container instanceof Chest) {
					openInventories.add(event.getPlayer());
					event.getPlayer().openInventory(container.getInventory());
				} else {
					event.getPlayer().openInventory(container.getInventory());
				}
				Rotation rotation = itemFrame.getRotation();
				new BukkitRunnable() {

					@Override
					public void run() {
						itemFrame.setRotation(rotation);
						clickedList.remove(container);
					}

				}.runTaskLater(plugin, 1L);
			}
		}
	}

	@EventHandler
	public void onInventoryCloseEvent(InventoryCloseEvent event) {
		if (!openInventories.contains(event.getPlayer())) {
			return;
		}
		if (event.getInventory().getHolder() instanceof DoubleChest) {
			DoubleChest doubleChest = (DoubleChest) event.getInventory().getHolder();
			new BukkitRunnable() {
				@Override
				public void run() {
					Chest leftChest = (Chest) doubleChest.getLeftSide();
					Chest rightChest = (Chest) doubleChest.getRightSide();
					leftChest.open();
					rightChest.open();
					leftChest.close();
					rightChest.close();
					openInventories.remove(event.getPlayer());
				}
			}.runTaskLater(plugin, 1L);
		}

	}
}
