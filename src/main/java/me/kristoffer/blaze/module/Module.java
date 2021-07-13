package me.kristoffer.blaze.module;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.HashMap;

import org.bukkit.inventory.AnvilInventory;
import org.bukkit.plugin.Plugin;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.HostAccess;
import org.graalvm.polyglot.Value;

import com.google.gson.Gson;
import com.google.gson.JsonIOException;
import com.google.gson.JsonSyntaxException;

import me.kristoffer.blaze.util.Runnable;
import me.kristoffer.blaze.api.Color;
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
import me.kristoffer.blaze.util.Util;

public class Module implements Closable {

	public Plugin plugin;
	private String fileName;
	public ModuleManager manager;
	public ModuleAPI api;
	public Context context;

	public Module(Plugin plugin, String fileName) {
		this.plugin = plugin;
		this.fileName = fileName;
		manager = new ModuleManager(); // TODO: Context
		api = new ModuleAPI(this);
		context = createContext();
	}

	@Override
	public void close() {
		context.close();
		manager.close();
	}

	private Gson gson = new Gson();

	@SuppressWarnings("unchecked")
	private Context createContext() {
		Context context = Context.newBuilder("js").allowHostClassLookup(s -> true).allowHostAccess(HostAccess.ALL)
				.allowIO(true).build();

		String configPath = null;
		if (fileName.endsWith(".js")) {
			configPath = fileName.replace(".js", ".config");
		} else if (fileName.endsWith(".mjs")) {
			configPath = fileName.replace(".mjs", ".config");
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

		Value bindings = context.getBindings("js");

		if (configFile.exists()) {
			bindings.putMember("config", configMap);
		}

		// bindings.putMember("debug", debug); TODO
		bindings.putMember("this", fileName);
		bindings.putMember("Bukkit", plugin.getServer());
		bindings.putMember("Runnable", Runnable.class);
		bindings.putMember("Math", Math.class);
		bindings.putMember("Util", new Util());
		bindings.putMember("Color", new Color());
		bindings.putMember("AnvilInventory", AnvilInventory.class);
		bindings.putMember("blaze", api);

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

		bindings.putMember("EntitySpawnEvent", "EntitySpawnEvent");
		bindings.putMember("EntityTameEvent", "EntityTameEvent");
		bindings.putMember("FurnaceBurnEvent", "FurnaceBurnEvent");
		bindings.putMember("ServerCommandEvent", "ServerCommandEvent");
		bindings.putMember("PlayerBucketEntityEvent", "PlayerBucketEntityEvent");
		bindings.putMember("InventoryOpenEvent", "InventoryOpenEvent");
		bindings.putMember("ExplosionPrimeEvent", "ExplosionPrimeEvent");
		bindings.putMember("BlockGrowEvent", "BlockGrowEvent");
		bindings.putMember("HangingBreakByEntityEvent", "HangingBreakByEntityEvent");
		bindings.putMember("InventoryCreativeEvent", "InventoryCreativeEvent");
		bindings.putMember("PlayerLocaleChangeEvent", "PlayerLocaleChangeEvent");
		bindings.putMember("VehicleEntityCollisionEvent", "VehicleEntityCollisionEvent");
		bindings.putMember("VehicleDamageEvent", "VehicleDamageEvent");
		bindings.putMember("PlayerLevelChangeEvent", "PlayerLevelChangeEvent");
		bindings.putMember("PlayerResourcePackStatusEvent", "PlayerResourcePackStatusEvent");
		bindings.putMember("EntityCombustByBlockEvent", "EntityCombustByBlockEvent");
		bindings.putMember("TimeSkipEvent", "TimeSkipEvent");
		bindings.putMember("PluginEvent", "PluginEvent");
		bindings.putMember("RemoteServerCommandEvent", "RemoteServerCommandEvent");
		bindings.putMember("EntityBreedEvent", "EntityBreedEvent");
		bindings.putMember("InventoryPickupItemEvent", "InventoryPickupItemEvent");
		bindings.putMember("WeatherChangeEvent", "WeatherChangeEvent");
		bindings.putMember("VehicleDestroyEvent", "VehicleDestroyEvent");
		bindings.putMember("CraftItemEvent", "CraftItemEvent");
		bindings.putMember("LeavesDecayEvent", "LeavesDecayEvent");
		bindings.putMember("PigZombieAngerEvent", "PigZombieAngerEvent");
		bindings.putMember("WorldEvent", "WorldEvent");
		bindings.putMember("BlockExplodeEvent", "BlockExplodeEvent");
		bindings.putMember("EntityUnleashEvent", "EntityUnleashEvent");
		bindings.putMember("SlimeSplitEvent", "SlimeSplitEvent");
		bindings.putMember("PlayerVelocityEvent", "PlayerVelocityEvent");
		bindings.putMember("WorldSaveEvent", "WorldSaveEvent");
		bindings.putMember("BlockRedstoneEvent", "BlockRedstoneEvent");
		bindings.putMember("EnchantItemEvent", "EnchantItemEvent");
		bindings.putMember("PlayerToggleFlightEvent", "PlayerToggleFlightEvent");
		bindings.putMember("MoistureChangeEvent", "MoistureChangeEvent");
		bindings.putMember("InventoryCloseEvent", "InventoryCloseEvent");
		bindings.putMember("PlayerRespawnEvent", "PlayerRespawnEvent");
		bindings.putMember("PlayerBucketFishEvent", "PlayerBucketFishEvent");
		bindings.putMember("VehicleCreateEvent", "VehicleCreateEvent");
		bindings.putMember("EntityPlaceEvent", "EntityPlaceEvent");
		bindings.putMember("ServerListPingEvent", "ServerListPingEvent");
		bindings.putMember("TabCompleteEvent", "TabCompleteEvent");
		bindings.putMember("EntityPortalEvent", "EntityPortalEvent");
		bindings.putMember("PlayerToggleSprintEvent", "PlayerToggleSprintEvent");
		bindings.putMember("PlayerItemBreakEvent", "PlayerItemBreakEvent");
		bindings.putMember("EntityDropItemEvent", "EntityDropItemEvent");
		bindings.putMember("EnderDragonChangePhaseEvent", "EnderDragonChangePhaseEvent");
		bindings.putMember("PlayerFishEvent", "PlayerFishEvent");
		bindings.putMember("PluginDisableEvent", "PluginDisableEvent");
		bindings.putMember("PlayerItemDamageEvent", "PlayerItemDamageEvent");
		bindings.putMember("StriderTemperatureChangeEvent", "StriderTemperatureChangeEvent");
		bindings.putMember("PlayerShearEntityEvent", "PlayerShearEntityEvent");
		bindings.putMember("FurnaceSmeltEvent", "FurnaceSmeltEvent");
		bindings.putMember("ExpBottleEvent", "ExpBottleEvent");
		bindings.putMember("BlockIgniteEvent", "BlockIgniteEvent");
		bindings.putMember("PlayerDeathEvent", "PlayerDeathEvent");
		bindings.putMember("HangingEvent", "HangingEvent");
		bindings.putMember("EntityPickupItemEvent", "EntityPickupItemEvent");
		bindings.putMember("SheepRegrowWoolEvent", "SheepRegrowWoolEvent");
		bindings.putMember("PlayerPickupArrowEvent", "PlayerPickupArrowEvent");
		bindings.putMember("PlayerDropItemEvent", "PlayerDropItemEvent");
		bindings.putMember("PlayerItemHeldEvent", "PlayerItemHeldEvent");
		bindings.putMember("PlayerBucketEmptyEvent", "PlayerBucketEmptyEvent");
		bindings.putMember("PlayerInteractAtEntityEvent", "PlayerInteractAtEntityEvent");
		bindings.putMember("FoodLevelChangeEvent", "FoodLevelChangeEvent");
		bindings.putMember("PlayerEvent", "PlayerEvent");
		bindings.putMember("ServiceEvent", "ServiceEvent");
		bindings.putMember("PlayerChangedWorldEvent", "PlayerChangedWorldEvent");
		bindings.putMember("InventoryEvent", "InventoryEvent");
		bindings.putMember("PlayerPortalEvent", "PlayerPortalEvent");
		bindings.putMember("PlayerMoveEvent", "PlayerMoveEvent");
		bindings.putMember("PlayerToggleSneakEvent", "PlayerToggleSneakEvent");
		bindings.putMember("EntityExhaustionEvent", "EntityExhaustionEvent");
		bindings.putMember("FurnaceExtractEvent", "FurnaceExtractEvent");
		bindings.putMember("VehicleUpdateEvent", "VehicleUpdateEvent");
		bindings.putMember("VehicleMoveEvent", "VehicleMoveEvent");
		bindings.putMember("CreeperPowerEvent", "CreeperPowerEvent");
		bindings.putMember("EntityShootBowEvent", "EntityShootBowEvent");
		bindings.putMember("PlayerEggThrowEvent", "PlayerEggThrowEvent");
		bindings.putMember("StructureGrowEvent", "StructureGrowEvent");
		bindings.putMember("RaidTriggerEvent", "RaidTriggerEvent");
		bindings.putMember("PlayerPickupItemEvent", "PlayerPickupItemEvent");
		bindings.putMember("PlayerPreLoginEvent", "PlayerPreLoginEvent");
		bindings.putMember("RaidStopEvent", "RaidStopEvent");
		bindings.putMember("BlockReceiveGameEvent", "BlockReceiveGameEvent");
		bindings.putMember("InventoryInteractEvent", "InventoryInteractEvent");
		bindings.putMember("FluidLevelChangeEvent", "FluidLevelChangeEvent");
		bindings.putMember("BrewEvent", "BrewEvent");
		bindings.putMember("PlayerArmorStandManipulateEvent", "PlayerArmorStandManipulateEvent");
		bindings.putMember("PlayerExpChangeEvent", "PlayerExpChangeEvent");
		bindings.putMember("BlockDropItemEvent", "BlockDropItemEvent");
		bindings.putMember("PrepareItemEnchantEvent", "PrepareItemEnchantEvent");
		bindings.putMember("WorldUnloadEvent", "WorldUnloadEvent");
		bindings.putMember("ChunkEvent", "ChunkEvent");
		bindings.putMember("BlockBurnEvent", "BlockBurnEvent");
		bindings.putMember("EntityCombustEvent", "EntityCombustEvent");
		bindings.putMember("ProjectileHitEvent", "ProjectileHitEvent");
		bindings.putMember("PlayerBedLeaveEvent", "PlayerBedLeaveEvent");
		bindings.putMember("LootGenerateEvent", "LootGenerateEvent");
		bindings.putMember("BlockPlaceEvent", "BlockPlaceEvent");
		bindings.putMember("BlockPhysicsEvent", "BlockPhysicsEvent");
		bindings.putMember("PlayerLoginEvent", "PlayerLoginEvent");
		bindings.putMember("ChunkPopulateEvent", "ChunkPopulateEvent");
		bindings.putMember("PrepareItemCraftEvent", "PrepareItemCraftEvent");
		bindings.putMember("EntityExplodeEvent", "EntityExplodeEvent");
		bindings.putMember("PiglinBarterEvent", "PiglinBarterEvent");
		bindings.putMember("VehicleEvent", "VehicleEvent");
		bindings.putMember("BlockShearEntityEvent", "BlockShearEntityEvent");
		bindings.putMember("ChunkUnloadEvent", "ChunkUnloadEvent");
		bindings.putMember("WorldInitEvent", "WorldInitEvent");
		bindings.putMember("EntityDamageByEntityEvent", "EntityDamageByEntityEvent");
		bindings.putMember("PlayerJoinEvent", "PlayerJoinEvent");
		bindings.putMember("CreatureSpawnEvent", "CreatureSpawnEvent");
		bindings.putMember("WorldLoadEvent", "WorldLoadEvent");
		bindings.putMember("EntityDeathEvent", "EntityDeathEvent");
		bindings.putMember("PlayerCommandSendEvent", "PlayerCommandSendEvent");
		bindings.putMember("BlockBreakEvent", "BlockBreakEvent");
		bindings.putMember("EntityPotionEffectEvent", "EntityPotionEffectEvent");
		bindings.putMember("PlayerTeleportEvent", "PlayerTeleportEvent");
		bindings.putMember("BlockDispenseArmorEvent", "BlockDispenseArmorEvent");
		bindings.putMember("PlayerRecipeDiscoverEvent", "PlayerRecipeDiscoverEvent");
		bindings.putMember("RaidFinishEvent", "RaidFinishEvent");
		bindings.putMember("PlayerStatisticIncrementEvent", "PlayerStatisticIncrementEvent");
		bindings.putMember("BlockFormEvent", "BlockFormEvent");
		bindings.putMember("CauldronLevelChangeEvent", "CauldronLevelChangeEvent");
		bindings.putMember("EntityBreakDoorEvent", "EntityBreakDoorEvent");
		bindings.putMember("LightningStrikeEvent", "LightningStrikeEvent");
		bindings.putMember("BlockSpreadEvent", "BlockSpreadEvent");
		bindings.putMember("EntityEvent", "EntityEvent");
		bindings.putMember("EntityResurrectEvent", "EntityResurrectEvent");
		bindings.putMember("LingeringPotionSplashEvent", "LingeringPotionSplashEvent");
		bindings.putMember("PlayerItemMendEvent", "PlayerItemMendEvent");
		bindings.putMember("PlayerChatTabCompleteEvent", "PlayerChatTabCompleteEvent");
		bindings.putMember("PlayerQuitEvent", "PlayerQuitEvent");
		bindings.putMember("PortalCreateEvent", "PortalCreateEvent");
		bindings.putMember("AreaEffectCloudApplyEvent", "AreaEffectCloudApplyEvent");
		bindings.putMember("SheepDyeWoolEvent", "SheepDyeWoolEvent");
		bindings.putMember("EntityEnterBlockEvent", "EntityEnterBlockEvent");
		bindings.putMember("ServiceUnregisterEvent", "ServiceUnregisterEvent");
		bindings.putMember("ItemMergeEvent", "ItemMergeEvent");
		bindings.putMember("EntityDamageByBlockEvent", "EntityDamageByBlockEvent");
		bindings.putMember("PlayerBucketEvent", "PlayerBucketEvent");
		bindings.putMember("EntityEnterLoveModeEvent", "EntityEnterLoveModeEvent");
		bindings.putMember("PlayerKickEvent", "PlayerKickEvent");
		bindings.putMember("PlayerAdvancementDoneEvent", "PlayerAdvancementDoneEvent");
		bindings.putMember("ThunderChangeEvent", "ThunderChangeEvent");
		bindings.putMember("EntityTargetLivingEntityEvent", "EntityTargetLivingEntityEvent");
		bindings.putMember("PlayerAnimationEvent", "PlayerAnimationEvent");
		bindings.putMember("ItemDespawnEvent", "ItemDespawnEvent");
		bindings.putMember("EntitySpellCastEvent", "EntitySpellCastEvent");
		bindings.putMember("HangingBreakEvent", "HangingBreakEvent");
		bindings.putMember("ServiceRegisterEvent", "ServiceRegisterEvent");
		bindings.putMember("HorseJumpEvent", "HorseJumpEvent");
		bindings.putMember("ServerLoadEvent", "ServerLoadEvent");
		bindings.putMember("BlockPistonEvent", "BlockPistonEvent");
		bindings.putMember("BlockExpEvent", "BlockExpEvent");
		bindings.putMember("PlayerTakeLecternBookEvent", "PlayerTakeLecternBookEvent");
		bindings.putMember("BlockDispenseEvent", "BlockDispenseEvent");
		bindings.putMember("AsyncPlayerPreLoginEvent", "AsyncPlayerPreLoginEvent");
		bindings.putMember("BlockPistonRetractEvent", "BlockPistonRetractEvent");
		bindings.putMember("EntityCreatePortalEvent", "EntityCreatePortalEvent");
		bindings.putMember("ProjectileLaunchEvent", "ProjectileLaunchEvent");
		bindings.putMember("BlockMultiPlaceEvent", "BlockMultiPlaceEvent");
		bindings.putMember("PlayerChangedMainHandEvent", "PlayerChangedMainHandEvent");
		bindings.putMember("PlayerRegisterChannelEvent", "PlayerRegisterChannelEvent");
		bindings.putMember("PlayerInteractEvent", "PlayerInteractEvent");
		bindings.putMember("RaidSpawnWaveEvent", "RaidSpawnWaveEvent");
		bindings.putMember("PotionSplashEvent", "PotionSplashEvent");
		bindings.putMember("BlockCookEvent", "BlockCookEvent");
		bindings.putMember("SpawnChangeEvent", "SpawnChangeEvent");
		bindings.putMember("EntityPortalEnterEvent", "EntityPortalEnterEvent");
		bindings.putMember("BrewingStandFuelEvent", "BrewingStandFuelEvent");
		bindings.putMember("PlayerBedEnterEvent", "PlayerBedEnterEvent");
		bindings.putMember("WeatherEvent", "WeatherEvent");
		bindings.putMember("InventoryClickEvent", "InventoryClickEvent");
		bindings.putMember("PlayerGameModeChangeEvent", "PlayerGameModeChangeEvent");
		bindings.putMember("PlayerItemConsumeEvent", "PlayerItemConsumeEvent");
		bindings.putMember("EntityTargetEvent", "EntityTargetEvent");
		bindings.putMember("EntityInteractEvent", "EntityInteractEvent");
		bindings.putMember("BlockFadeEvent", "BlockFadeEvent");
		bindings.putMember("VillagerAcquireTradeEvent", "VillagerAcquireTradeEvent");
		bindings.putMember("PlayerCommandPreprocessEvent", "PlayerCommandPreprocessEvent");
		bindings.putMember("PlayerEditBookEvent", "PlayerEditBookEvent");
		bindings.putMember("BroadcastMessageEvent", "BroadcastMessageEvent");
		bindings.putMember("VehicleBlockCollisionEvent", "VehicleBlockCollisionEvent");
		bindings.putMember("VillagerReplenishTradeEvent", "VillagerReplenishTradeEvent");
		bindings.putMember("BlockPistonExtendEvent", "BlockPistonExtendEvent");
		bindings.putMember("ItemSpawnEvent", "ItemSpawnEvent");
		bindings.putMember("PlayerUnleashEntityEvent", "PlayerUnleashEntityEvent");
		bindings.putMember("MapInitializeEvent", "MapInitializeEvent");
		bindings.putMember("PrepareSmithingEvent", "PrepareSmithingEvent");
		bindings.putMember("InventoryDragEvent", "InventoryDragEvent");
		bindings.putMember("PlayerBucketFillEvent", "PlayerBucketFillEvent");
		bindings.putMember("FireworkExplodeEvent", "FireworkExplodeEvent");
		bindings.putMember("PlayerUnregisterChannelEvent", "PlayerUnregisterChannelEvent");
		bindings.putMember("PlayerHarvestBlockEvent", "PlayerHarvestBlockEvent");
		bindings.putMember("PlayerInteractEntityEvent", "PlayerInteractEntityEvent");
		bindings.putMember("ArrowBodyCountChangeEvent", "ArrowBodyCountChangeEvent");
		bindings.putMember("HangingPlaceEvent", "HangingPlaceEvent");
		bindings.putMember("PluginEnableEvent", "PluginEnableEvent");
		bindings.putMember("EntityToggleSwimEvent", "EntityToggleSwimEvent");
		bindings.putMember("PlayerLeashEntityEvent", "PlayerLeashEntityEvent");
		bindings.putMember("EntityAirChangeEvent", "EntityAirChangeEvent");
		bindings.putMember("VehicleExitEvent", "VehicleExitEvent");
		bindings.putMember("RaidEvent", "RaidEvent");
		bindings.putMember("SpawnerSpawnEvent", "SpawnerSpawnEvent");
		bindings.putMember("PlayerSwapHandItemsEvent", "PlayerSwapHandItemsEvent");
		bindings.putMember("AsyncPlayerChatEvent", "AsyncPlayerChatEvent");
		bindings.putMember("GenericGameEvent", "GenericGameEvent");
		bindings.putMember("EntityBlockFormEvent", "EntityBlockFormEvent");
		bindings.putMember("PlayerChatEvent", "PlayerChatEvent");
		bindings.putMember("BlockCanBuildEvent", "BlockCanBuildEvent");
		bindings.putMember("BlockFromToEvent", "BlockFromToEvent");
		bindings.putMember("EntityPoseChangeEvent", "EntityPoseChangeEvent");
		bindings.putMember("EntityPortalExitEvent", "EntityPortalExitEvent");
		bindings.putMember("PigZapEvent", "PigZapEvent");
		bindings.putMember("VillagerCareerChangeEvent", "VillagerCareerChangeEvent");
		bindings.putMember("PrepareAnvilEvent", "PrepareAnvilEvent");
		bindings.putMember("BatToggleSleepEvent", "BatToggleSleepEvent");
		bindings.putMember("VehicleEnterEvent", "VehicleEnterEvent");
		bindings.putMember("EntityToggleGlideEvent", "EntityToggleGlideEvent");
		bindings.putMember("SignChangeEvent", "SignChangeEvent");
		bindings.putMember("EntityChangeBlockEvent", "EntityChangeBlockEvent");
		bindings.putMember("ChunkLoadEvent", "ChunkLoadEvent");
		bindings.putMember("EntityTeleportEvent", "EntityTeleportEvent");
		bindings.putMember("EntityRegainHealthEvent", "EntityRegainHealthEvent");
		bindings.putMember("TradeSelectEvent", "TradeSelectEvent");
		bindings.putMember("PlayerRiptideEvent", "PlayerRiptideEvent");
		bindings.putMember("BlockEvent", "BlockEvent");
		bindings.putMember("SmithItemEvent", "SmithItemEvent");
		bindings.putMember("SpongeAbsorbEvent", "SpongeAbsorbEvent");
		bindings.putMember("NotePlayEvent", "NotePlayEvent");
		bindings.putMember("EntityCombustByEntityEvent", "EntityCombustByEntityEvent");
		bindings.putMember("VehicleCollisionEvent", "VehicleCollisionEvent");
		bindings.putMember("PlayerChannelEvent", "PlayerChannelEvent");
		bindings.putMember("ServerEvent", "ServerEvent");
		bindings.putMember("EntityTransformEvent", "EntityTransformEvent");
		bindings.putMember("InventoryMoveItemEvent", "InventoryMoveItemEvent");
		bindings.putMember("BlockDamageEvent", "BlockDamageEvent");
		bindings.putMember("EntityDamageEvent", "EntityDamageEvent");
		bindings.putMember("BlockFertilizeEvent", "BlockFertilizeEvent");

		
		return context;
	}

}
