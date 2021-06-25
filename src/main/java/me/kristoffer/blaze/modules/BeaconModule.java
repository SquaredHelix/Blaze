package me.kristoffer.blaze.modules;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.bukkit.Bukkit;
import org.bukkit.Location;
import org.bukkit.Material;
import org.bukkit.block.Beacon;
import org.bukkit.block.Block;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.entity.Monster;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.block.BlockBreakEvent;
import org.bukkit.event.block.BlockPlaceEvent;
import org.bukkit.event.entity.EntitySpawnEvent;
import org.bukkit.scheduler.BukkitRunnable;

import me.kristoffer.blaze.Blaze;
import net.md_5.bungee.api.ChatMessageType;
import net.md_5.bungee.api.chat.TextComponent;

public class BeaconModule extends Module {

	private final Material protectorMaterial = Material.NETHERITE_BLOCK;
	/*
	 * private final List<Material> beaconStructureMaterials =
	 * Arrays.asList(Material.IRON_BLOCK, Material.GOLD_BLOCK,
	 * Material.DIAMOND_BLOCK, Material.EMERALD_BLOCK, Material.NETHERITE_BLOCK);
	 * private final int tiers = 4;
	 */
	private YamlConfiguration data;
	private ArrayList<Block> watchedBeacons = new ArrayList<Block>();

	public BeaconModule(Blaze plugin) {
		super("BeaconModule", plugin);
	}

	public void onEnable() {
		registerListeners();
		data = getConfig("data.dat");
		for (String key : data.getStringList("beacons")) {
			Block beacon = deserializeLocation(key).getBlock();
			watchedBeacons.add(beacon);
		}
		new BukkitRunnable() {

			@Override
			public void run() {
				beaconUpdaterTick();
			}

		}.runTaskTimer(plugin, 10L, 10L);
	}

	public void beaconUpdaterTick() {
		for (Block block : watchedBeacons) {
			Beacon beacon = (Beacon) block.getState();
			// System.out.println(beacon.getTier() + " | " + validityCheck(beacon));
			if (beacon.getTier() > 0 && validityCheck(beacon)) {
				for (Player player : Bukkit.getOnlinePlayers()) {
					if (inBeaconRange(player.getLocation())) {
						player.spigot().sendMessage(ChatMessageType.ACTION_BAR, new TextComponent("⚔"));
					}
				}
			}
		}
	}

	@EventHandler
	public void onBlockPlace(BlockPlaceEvent event) {
		if (!(event.getBlock().getType() == Material.BEACON)) {
			return;
		}
		Beacon beacon = (Beacon) event.getBlock().getState();
		updateStoredBeacon(beacon, true);
		watchedBeacons.add(beacon.getBlock());
	}

	@EventHandler
	public void onBlockBreak(BlockBreakEvent event) {
		if (!(event.getBlock().getType() == Material.BEACON)) {
			return;
		}
		Beacon beacon = (Beacon) event.getBlock().getState();
		updateStoredBeacon(beacon, false);
		watchedBeacons.remove(beacon.getBlock());
	}

	@EventHandler
	public void onEntitySpawn(EntitySpawnEvent event) {
		if (!(event.getEntity() instanceof Monster)) {
			return;
		}
		// System.out.println("Entity spawned");
		if (inBeaconRange(event.getLocation())) {
			// System.out.println("Entity in range");
			event.setCancelled(true);
		} else {
			// System.out.println("Entity not in range");
		}
	}

	public boolean inBeaconRange(Location location) {
		for (Block block : watchedBeacons) {
			Beacon beacon = (Beacon) block.getState();
			if (beacon.getTier() < 1) {
				continue;
			}
			// System.out.println(location.distance(block.getLocation()));
			// System.out.println(getBeaconRange(beacon.getTier()));
			if (location.getWorld().equals(block.getWorld())) {
				if (location.distance(block.getLocation()) <= getBeaconRange(beacon.getTier())) {
					return true;
				}
			}
		}
		return false;
	}

	public int getBeaconRange(int tier) {
		int range = (tier * 10) + 10;
		return range;
	}

	public void updateStoredBeacon(Beacon beacon, boolean add) {
		Location loc = beacon.getLocation();
		String serializedLocation = serializeLocation(loc);
		List<String> beaconLocations;
		if (data.contains("beacons")) {
			beaconLocations = data.getStringList("beacons");
		} else {
			beaconLocations = new ArrayList<String>();
		}
		if (beaconLocations.contains(serializedLocation)) {
			if (!add) {
				beaconLocations.remove(serializedLocation);
			}
		} else {
			if (add) {
				beaconLocations.add(serializedLocation);
			}
		}
		data.set("beacons", beaconLocations);
		try {
			data.save(getFile("data.dat"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	// Method to check if the beacon is valid for monster protection
	public boolean validityCheck(Beacon beacon) {
		int tier = beacon.getTier();
		if (tier == 0) {
			return false;
		}
		Block netheriteBlock = beacon.getBlock().getRelative(0, (tier * -1) - 1, 0); // Subtract tier
		if (!(netheriteBlock.getType() == protectorMaterial)) {
			return false;
		}
		return true;
	}

	public String serializeLocation(Location location) {
		int x = location.getBlockX();
		int y = location.getBlockY();
		int z = location.getBlockZ();
		return x + "@" + y + "@" + z;
	}

	public Location deserializeLocation(String string) {
		String[] xyz = string.split("@");
		int x = Integer.parseInt(xyz[0]);
		int y = Integer.parseInt(xyz[1]);
		int z = Integer.parseInt(xyz[2]);
		return new Location(plugin.getServer().getWorlds().get(0), x, y, z);
	}

}
