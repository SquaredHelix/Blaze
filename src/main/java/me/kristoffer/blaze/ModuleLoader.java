package me.kristoffer.blaze;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Set;
import java.util.stream.Collectors;

import org.bukkit.Bukkit;
import org.bukkit.command.Command;
import org.bukkit.entity.Player;
import org.bukkit.inventory.AnvilInventory;
import org.bukkit.plugin.Plugin;
import org.bukkit.scheduler.BukkitRunnable;
import org.bukkit.scheduler.BukkitTask;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.HostAccess;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.Value;

import com.google.gson.Gson;
import com.google.gson.JsonIOException;
import com.google.gson.JsonSyntaxException;

import me.kristoffer.blaze.backend.org.bukkit.Art;
import me.kristoffer.blaze.backend.org.bukkit.Axis;
import me.kristoffer.blaze.backend.org.bukkit.BanList;
import me.kristoffer.blaze.backend.org.bukkit.ChatColor;
import me.kristoffer.blaze.backend.org.bukkit.CoalType;
import me.kristoffer.blaze.backend.org.bukkit.CropState;
import me.kristoffer.blaze.backend.org.bukkit.Difficulty;
import me.kristoffer.blaze.backend.org.bukkit.DyeColor;
import me.kristoffer.blaze.backend.org.bukkit.Effect;
import me.kristoffer.blaze.backend.org.bukkit.EntityEffect;
import me.kristoffer.blaze.backend.org.bukkit.FireworkEffect;
import me.kristoffer.blaze.backend.org.bukkit.Fluid;
import me.kristoffer.blaze.backend.org.bukkit.FluidCollisionMode;
import me.kristoffer.blaze.backend.org.bukkit.GameMode;
import me.kristoffer.blaze.backend.org.bukkit.GrassSpecies;
import me.kristoffer.blaze.backend.org.bukkit.HeightMap;
import me.kristoffer.blaze.backend.org.bukkit.Instrument;
import me.kristoffer.blaze.backend.org.bukkit.Material;
import me.kristoffer.blaze.backend.org.bukkit.NetherWartsState;
import me.kristoffer.blaze.backend.org.bukkit.Note;
import me.kristoffer.blaze.backend.org.bukkit.Particle;
import me.kristoffer.blaze.backend.org.bukkit.PortalType;
import me.kristoffer.blaze.backend.org.bukkit.Raid;
import me.kristoffer.blaze.backend.org.bukkit.Rotation;
import me.kristoffer.blaze.backend.org.bukkit.SandstoneType;
import me.kristoffer.blaze.backend.org.bukkit.Sound;
import me.kristoffer.blaze.backend.org.bukkit.SoundCategory;
import me.kristoffer.blaze.backend.org.bukkit.Statistic;
import me.kristoffer.blaze.backend.org.bukkit.TreeSpecies;
import me.kristoffer.blaze.backend.org.bukkit.TreeType;
import me.kristoffer.blaze.backend.org.bukkit.Warning;
import me.kristoffer.blaze.backend.org.bukkit.WeatherType;
import me.kristoffer.blaze.backend.org.bukkit.World;
import me.kristoffer.blaze.backend.org.bukkit.WorldType;
import me.kristoffer.blaze.backend.org.bukkit.attribute.Attribute;
import me.kristoffer.blaze.backend.org.bukkit.attribute.AttributeModifier;
import me.kristoffer.blaze.backend.org.bukkit.block.Biome;
import me.kristoffer.blaze.backend.org.bukkit.block.BlockFace;
import me.kristoffer.blaze.backend.org.bukkit.block.PistonMoveReaction;
import me.kristoffer.blaze.backend.org.bukkit.block.banner.PatternType;
import me.kristoffer.blaze.backend.org.bukkit.block.data.Bisected;
import me.kristoffer.blaze.backend.org.bukkit.block.data.FaceAttachable;
import me.kristoffer.blaze.backend.org.bukkit.block.data.Rail;
import me.kristoffer.blaze.backend.org.bukkit.block.data.type.Bamboo;
import me.kristoffer.blaze.backend.org.bukkit.block.data.type.Bed;
import me.kristoffer.blaze.backend.org.bukkit.block.data.type.Bell;
import me.kristoffer.blaze.backend.org.bukkit.block.data.type.BigDripleaf;
import me.kristoffer.blaze.backend.org.bukkit.block.data.type.Chest;
import me.kristoffer.blaze.backend.org.bukkit.block.data.type.Comparator;
import me.kristoffer.blaze.backend.org.bukkit.block.data.type.Door;
import me.kristoffer.blaze.backend.org.bukkit.block.data.type.Jigsaw;
import me.kristoffer.blaze.backend.org.bukkit.block.data.type.PointedDripstone;
import me.kristoffer.blaze.backend.org.bukkit.block.data.type.RedstoneWire;
import me.kristoffer.blaze.backend.org.bukkit.block.data.type.SculkSensor;
import me.kristoffer.blaze.backend.org.bukkit.block.data.type.Slab;
import me.kristoffer.blaze.backend.org.bukkit.block.data.type.Stairs;
import me.kristoffer.blaze.backend.org.bukkit.block.data.type.StructureBlock;
import me.kristoffer.blaze.backend.org.bukkit.block.data.type.TechnicalPiston;
import me.kristoffer.blaze.backend.org.bukkit.block.data.type.Wall;
import me.kristoffer.blaze.backend.org.bukkit.block.structure.Mirror;
import me.kristoffer.blaze.backend.org.bukkit.block.structure.StructureRotation;
import me.kristoffer.blaze.backend.org.bukkit.block.structure.UsageMode;
import me.kristoffer.blaze.backend.org.bukkit.boss.BarColor;
import me.kristoffer.blaze.backend.org.bukkit.boss.BarFlag;
import me.kristoffer.blaze.backend.org.bukkit.boss.BarStyle;
import me.kristoffer.blaze.backend.org.bukkit.boss.DragonBattle;
import me.kristoffer.blaze.backend.org.bukkit.conversations.Conversation;
import me.kristoffer.blaze.backend.org.bukkit.enchantments.EnchantmentTarget;
import me.kristoffer.blaze.backend.org.bukkit.entity.AbstractArrow;
import me.kristoffer.blaze.backend.org.bukkit.entity.ArmorStand;
import me.kristoffer.blaze.backend.org.bukkit.entity.Axolotl;
import me.kristoffer.blaze.backend.org.bukkit.entity.Cat;
import me.kristoffer.blaze.backend.org.bukkit.entity.EntityCategory;
import me.kristoffer.blaze.backend.org.bukkit.entity.EntityType;
import me.kristoffer.blaze.backend.org.bukkit.entity.FishHook;
import me.kristoffer.blaze.backend.org.bukkit.entity.Fox;
import me.kristoffer.blaze.backend.org.bukkit.entity.Horse;
import me.kristoffer.blaze.backend.org.bukkit.entity.Llama;
import me.kristoffer.blaze.backend.org.bukkit.entity.MushroomCow;
import me.kristoffer.blaze.backend.org.bukkit.entity.Panda;
import me.kristoffer.blaze.backend.org.bukkit.entity.Parrot;
import me.kristoffer.blaze.backend.org.bukkit.entity.Pose;
import me.kristoffer.blaze.backend.org.bukkit.entity.Rabbit;
import me.kristoffer.blaze.backend.org.bukkit.entity.Spellcaster;
import me.kristoffer.blaze.backend.org.bukkit.entity.Villager;
import me.kristoffer.blaze.backend.org.bukkit.event.Event;
import me.kristoffer.blaze.backend.org.bukkit.event.EventPriority;
import me.kristoffer.blaze.backend.org.bukkit.event.block.Action;
import me.kristoffer.blaze.backend.org.bukkit.event.block.BlockIgniteEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.block.CauldronLevelChangeEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.entity.CreatureSpawnEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.entity.CreeperPowerEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.entity.EntityDamageEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.entity.EntityExhaustionEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.entity.EntityPotionEffectEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.entity.EntityRegainHealthEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.entity.EntityTargetEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.entity.EntityTransformEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.entity.EntityUnleashEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.entity.VillagerCareerChangeEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.hanging.HangingBreakEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.inventory.ClickType;
import me.kristoffer.blaze.backend.org.bukkit.event.inventory.DragType;
import me.kristoffer.blaze.backend.org.bukkit.event.inventory.InventoryAction;
import me.kristoffer.blaze.backend.org.bukkit.event.inventory.InventoryType;
import me.kristoffer.blaze.backend.org.bukkit.event.player.AsyncPlayerPreLoginEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.player.PlayerAnimationType;
import me.kristoffer.blaze.backend.org.bukkit.event.player.PlayerBedEnterEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.player.PlayerFishEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.player.PlayerLoginEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.player.PlayerResourcePackStatusEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.player.PlayerTeleportEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.raid.RaidStopEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.server.ServerLoadEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.weather.LightningStrikeEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.world.PortalCreateEvent;
import me.kristoffer.blaze.backend.org.bukkit.event.world.TimeSkipEvent;
import me.kristoffer.blaze.backend.org.bukkit.inventory.EquipmentSlot;
import me.kristoffer.blaze.backend.org.bukkit.inventory.InventoryView;
import me.kristoffer.blaze.backend.org.bukkit.inventory.ItemFlag;
import me.kristoffer.blaze.backend.org.bukkit.inventory.MainHand;
import me.kristoffer.blaze.backend.org.bukkit.loot.LootTables;
import me.kristoffer.blaze.backend.org.bukkit.map.MapCursor;
import me.kristoffer.blaze.backend.org.bukkit.material.types.MushroomBlockTexture;
import me.kristoffer.blaze.backend.org.bukkit.metadata.LazyMetadataValue;
import me.kristoffer.blaze.backend.org.bukkit.permissions.PermissionDefault;
import me.kristoffer.blaze.backend.org.bukkit.plugin.PluginLoadOrder;
import me.kristoffer.blaze.backend.org.bukkit.plugin.ServicePriority;
import me.kristoffer.blaze.backend.org.bukkit.plugin.messaging.PluginChannelDirection;
import me.kristoffer.blaze.backend.org.bukkit.potion.PotionType;
import me.kristoffer.blaze.backend.org.bukkit.scoreboard.DisplaySlot;
import me.kristoffer.blaze.backend.org.bukkit.scoreboard.RenderType;
import me.kristoffer.blaze.backend.org.bukkit.scoreboard.Team;

public class ModuleLoader {

	private Plugin plugin;
	private Module currentModule;
	public ArrayList<Module> registeredModules = new ArrayList<Module>();

	public ModuleLoader(Plugin plugin) {
		this.plugin = plugin;
	}

	public BukkitTask runLater(int delay, java.lang.Runnable runnable) {
		BukkitTask task = new BukkitRunnable() {

			@Override
			public void run() {
				runnable.run();
			}

		}.runTaskLater(plugin, delay);
		return task;
	}

	public BukkitTask runRepeating(int delay, int period, java.lang.Runnable runnable) {
		BukkitTask task = new BukkitRunnable() {

			@Override
			public void run() {
				runnable.run();
			}

		}.runTaskTimer(plugin, delay, period);
		return task;
	}

	public BukkitTask runAsync(int ticks, java.lang.Runnable runnable) {
		BukkitTask task = new BukkitRunnable() {

			@Override
			public void run() {
				runnable.run();
			}

		}.runTaskAsynchronously(plugin);
		return task;
	}

	public void onEvent(String eventName, Value function) {
		currentModule.registerListener(eventName, event -> {
			function.executeVoid(event);
		});
	}

	public void onCommand(String command, Value function) {
		currentModule.registerCommand(command, function);
	}

	public UI createUI(String title, int size) {
		UI ui = new UI(currentModule, plugin, title, size);
		currentModule.registerUI(ui);
		return ui;
	}

	public void removeListener(String eventName) {
		currentModule.deregisterListener(eventName);
	}

	public void removeCommand(Command cmd) {
		currentModule.deregisterCommand(cmd);
	}

	private Gson gson = new Gson();
	private HashMap<String, Module> moduleMap = new HashMap<String, Module>();

	public void loadFolder(String directory) {
		try {
			Files.walk(Paths.get(plugin.getDataFolder().getAbsolutePath().toString(), directory))
					.filter(Files::isRegularFile).forEach(path -> {
						loadFile(path.toString(), false);
					});
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public void loadFile(String path, boolean silent) {
		String localPath = path.replace(plugin.getDataFolder().getAbsolutePath().toString() + "\\", "");
		Context context = createContext(localPath);
		currentModule = new Module(context);
		registeredModules.add(currentModule);
		moduleMap.put(localPath, currentModule);
		if (!silent) {
			Bukkit.getConsoleSender()
					.sendMessage("Loading " + org.bukkit.ChatColor.GREEN + context.getBindings("js").getMember("this"));
		}

		String fileName = path;
		if (!(fileName.endsWith(".js") || fileName.endsWith(".mjs")))
			return;
		File file = new File(plugin.getDataFolder().getAbsolutePath() + "/" + localPath);
		try {
			context.eval(Source.newBuilder("js", file).build());
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public void disable(String path, boolean silent) {
		if (!silent) {
			Bukkit.getConsoleSender().sendMessage("Disabling " + org.bukkit.ChatColor.GREEN + path);
		}
		Module module = moduleMap.get(path);
		module.registeredUI.stream().collect(Collectors.toSet()).forEach(module.registeredUI::remove);
		module.disable();
		moduleMap.remove(path);
	}

	public void reload(String path, boolean silent) {
		Module module = moduleMap.get(path);
		Set<UI> uiDebugs = module.registeredUI.stream().filter(ui -> ui.debugKey != null).collect(Collectors.toSet());
		disable(path, true);
		if (!silent) {
			Bukkit.getConsoleSender().sendMessage("Reloading " + org.bukkit.ChatColor.GREEN + path);
		}
		loadFile(path, true);
		module = moduleMap.get(path);
		module.registeredUI.stream().forEach(newUI -> {
			ArrayList<Player> viewers = new ArrayList<Player>();
			uiDebugs.stream().filter(oldUI -> newUI.debugKey.equals(oldUI.debugKey)).map(oldUI -> oldUI.viewers)
					.findFirst().get().forEach(viewers::add);
			new BukkitRunnable() {

				@Override
				public void run() {
					viewers.forEach(newUI::open);
				}

			}.runTaskLater(plugin, 20L);
		});
	}

	public void useExperimentalBindings() {
		Value bindings = currentModule.context.getBindings("js");
		bindings.putMember("Color", new Color());
	}

	@SuppressWarnings("unchecked")
	public Context createContext(String localPath) {
		Context polyglot = Context.newBuilder("js").allowHostClassLookup(s -> true).allowHostAccess(HostAccess.ALL)
				.allowIO(true).build();

		String configPath = null;
		if (localPath.endsWith(".js")) {
			configPath = localPath.replace(".js", ".config");
		} else if (localPath.endsWith(".mjs")) {
			configPath = localPath.replace(".mjs", ".config");
		} else {
			return null;
		}

		File configFile = new File(plugin.getDataFolder(), configPath);
		HashMap<String, Object> configMap = null;
		if (configFile.exists()) {
			try {
				configMap = gson.fromJson(new FileReader(configFile), new HashMap<String, Object>().getClass());
			} catch (JsonSyntaxException | JsonIOException | FileNotFoundException e) { // TODO Auto-generated catch
																						// block
				e.printStackTrace();
			}
		}

		Value bindings = polyglot.getBindings("js");

		if (configFile.exists()) {
			bindings.putMember("config", configMap);
		}

		bindings.putMember("this", localPath);
		bindings.putMember("Bukkit", plugin.getServer());
		bindings.putMember("Runnable", Runnable.class);
		bindings.putMember("Math", Math.class);
		bindings.putMember("Util", new Util());
		bindings.putMember("AnvilInventory", AnvilInventory.class);
		bindings.putMember("blaze", this);

		// AUTOMATICALLY GENERATED BINDINGS
		bindings.putMember("Art", new Art());
		bindings.putMember("Attribute", new Attribute());
		bindings.putMember("AttributeModifier", new AttributeModifier());
		bindings.putMember("Axis", new Axis());
		bindings.putMember("BanList", new BanList());
		bindings.putMember("PatternType", new PatternType());
		bindings.putMember("Biome", new Biome());
		bindings.putMember("BlockFace", new BlockFace());
		bindings.putMember("Bisected", new Bisected());
		bindings.putMember("FaceAttachable", new FaceAttachable());
		bindings.putMember("Rail", new Rail());
		bindings.putMember("Bamboo", new Bamboo());
		bindings.putMember("Bed", new Bed());
		bindings.putMember("Bell", new Bell());
		bindings.putMember("BigDripleaf", new BigDripleaf());
		bindings.putMember("Chest", new Chest());
		bindings.putMember("Comparator", new Comparator());
		bindings.putMember("Door", new Door());
		bindings.putMember("Jigsaw", new Jigsaw());
		bindings.putMember("PointedDripstone", new PointedDripstone());
		bindings.putMember("RedstoneWire", new RedstoneWire());
		bindings.putMember("SculkSensor", new SculkSensor());
		bindings.putMember("Slab", new Slab());
		bindings.putMember("Stairs", new Stairs());
		bindings.putMember("StructureBlock", new StructureBlock());
		bindings.putMember("TechnicalPiston", new TechnicalPiston());
		bindings.putMember("Wall", new Wall());
		bindings.putMember("PistonMoveReaction", new PistonMoveReaction());
		bindings.putMember("Mirror", new Mirror());
		bindings.putMember("StructureRotation", new StructureRotation());
		bindings.putMember("UsageMode", new UsageMode());
		bindings.putMember("BarColor", new BarColor());
		bindings.putMember("BarFlag", new BarFlag());
		bindings.putMember("BarStyle", new BarStyle());
		bindings.putMember("DragonBattle", new DragonBattle());
		bindings.putMember("ChatColor", new ChatColor());
		bindings.putMember("CoalType", new CoalType());
		bindings.putMember("Conversation", new Conversation());
		bindings.putMember("CropState", new CropState());
		bindings.putMember("Difficulty", new Difficulty());
		bindings.putMember("DyeColor", new DyeColor());
		bindings.putMember("Effect", new Effect());
		bindings.putMember("EnchantmentTarget", new EnchantmentTarget());
		bindings.putMember("AbstractArrow", new AbstractArrow());
		bindings.putMember("ArmorStand", new ArmorStand());
		bindings.putMember("Axolotl", new Axolotl());
		bindings.putMember("Cat", new Cat());
		bindings.putMember("EntityCategory", new EntityCategory());
		bindings.putMember("EntityType", new EntityType());
		bindings.putMember("FishHook", new FishHook());
		bindings.putMember("Fox", new Fox());
		bindings.putMember("Horse", new Horse());
		bindings.putMember("Llama", new Llama());
		bindings.putMember("MushroomCow", new MushroomCow());
		bindings.putMember("Panda", new Panda());
		bindings.putMember("Parrot", new Parrot());
		bindings.putMember("Pose", new Pose());
		bindings.putMember("Rabbit", new Rabbit());
		bindings.putMember("Spellcaster", new Spellcaster());
		bindings.putMember("Villager", new Villager());
		bindings.putMember("EntityEffect", new EntityEffect());
		bindings.putMember("Action", new Action());
		bindings.putMember("BlockIgniteEvent", new BlockIgniteEvent());
		bindings.putMember("CauldronLevelChangeEvent", new CauldronLevelChangeEvent());
		bindings.putMember("CreatureSpawnEvent", new CreatureSpawnEvent());
		bindings.putMember("CreeperPowerEvent", new CreeperPowerEvent());
		bindings.putMember("EntityDamageEvent", new EntityDamageEvent());
		bindings.putMember("EntityExhaustionEvent", new EntityExhaustionEvent());
		bindings.putMember("EntityPotionEffectEvent", new EntityPotionEffectEvent());
		bindings.putMember("EntityRegainHealthEvent", new EntityRegainHealthEvent());
		bindings.putMember("EntityTargetEvent", new EntityTargetEvent());
		bindings.putMember("EntityTransformEvent", new EntityTransformEvent());
		bindings.putMember("EntityUnleashEvent", new EntityUnleashEvent());
		bindings.putMember("VillagerCareerChangeEvent", new VillagerCareerChangeEvent());
		bindings.putMember("Event", new Event());
		bindings.putMember("EventPriority", new EventPriority());
		bindings.putMember("HangingBreakEvent", new HangingBreakEvent());
		bindings.putMember("ClickType", new ClickType());
		bindings.putMember("DragType", new DragType());
		bindings.putMember("InventoryAction", new InventoryAction());
		bindings.putMember("InventoryType", new InventoryType());
		bindings.putMember("AsyncPlayerPreLoginEvent", new AsyncPlayerPreLoginEvent());
		bindings.putMember("PlayerAnimationType", new PlayerAnimationType());
		bindings.putMember("PlayerBedEnterEvent", new PlayerBedEnterEvent());
		bindings.putMember("PlayerFishEvent", new PlayerFishEvent());
		bindings.putMember("PlayerLoginEvent", new PlayerLoginEvent());
		bindings.putMember("PlayerResourcePackStatusEvent", new PlayerResourcePackStatusEvent());
		bindings.putMember("PlayerTeleportEvent", new PlayerTeleportEvent());
		bindings.putMember("RaidStopEvent", new RaidStopEvent());
		bindings.putMember("ServerLoadEvent", new ServerLoadEvent());
		bindings.putMember("LightningStrikeEvent", new LightningStrikeEvent());
		bindings.putMember("PortalCreateEvent", new PortalCreateEvent());
		bindings.putMember("TimeSkipEvent", new TimeSkipEvent());
		bindings.putMember("FireworkEffect", new FireworkEffect());
		bindings.putMember("Fluid", new Fluid());
		bindings.putMember("FluidCollisionMode", new FluidCollisionMode());
		bindings.putMember("GameMode", new GameMode());
		bindings.putMember("GrassSpecies", new GrassSpecies());
		bindings.putMember("HeightMap", new HeightMap());
		bindings.putMember("Instrument", new Instrument());
		bindings.putMember("EquipmentSlot", new EquipmentSlot());
		bindings.putMember("InventoryView", new InventoryView());
		bindings.putMember("ItemFlag", new ItemFlag());
		bindings.putMember("MainHand", new MainHand());
		bindings.putMember("LootTables", new LootTables());
		bindings.putMember("MapCursor", new MapCursor());
		bindings.putMember("MushroomBlockTexture", new MushroomBlockTexture());
		bindings.putMember("Material", new Material());
		bindings.putMember("LazyMetadataValue", new LazyMetadataValue());
		bindings.putMember("NetherWartsState", new NetherWartsState());
		bindings.putMember("Note", new Note());
		bindings.putMember("Particle", new Particle());
		bindings.putMember("PermissionDefault", new PermissionDefault());
		bindings.putMember("PluginChannelDirection", new PluginChannelDirection());
		bindings.putMember("PluginLoadOrder", new PluginLoadOrder());
		bindings.putMember("ServicePriority", new ServicePriority());
		bindings.putMember("PortalType", new PortalType());
		bindings.putMember("PotionType", new PotionType());
		bindings.putMember("Raid", new Raid());
		bindings.putMember("Rotation", new Rotation());
		bindings.putMember("SandstoneType", new SandstoneType());
		bindings.putMember("DisplaySlot", new DisplaySlot());
		bindings.putMember("RenderType", new RenderType());
		bindings.putMember("Team", new Team());
		bindings.putMember("Sound", new Sound());
		bindings.putMember("SoundCategory", new SoundCategory());
		bindings.putMember("Statistic", new Statistic());
		bindings.putMember("TreeSpecies", new TreeSpecies());
		bindings.putMember("TreeType", new TreeType());
		bindings.putMember("Warning", new Warning());
		bindings.putMember("WeatherType", new WeatherType());
		bindings.putMember("World", new World());
		bindings.putMember("WorldType", new WorldType());

		return polyglot;
	}

}
