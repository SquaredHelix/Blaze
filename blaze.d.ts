declare class PerlinNoiseGenerator extends NoiseGenerator {
	getNoise(arg0: double): double
	getNoise(arg0: double, arg1: double, arg2: double, arg3: int, arg4: double, arg5: double): double
	getNoise(arg0: double, arg1: double, arg2: double): double
	getNoise(arg0: double, arg1: int, arg2: double, arg3: double): double
	getNoise(arg0: double, arg1: double, arg2: int, arg3: double, arg4: double): double
	getNoise(arg0: double, arg1: double): double
	noise(arg0: double, arg1: double, arg2: double): double
	getInstance(): PerlinNoiseGenerator
}
declare class SmithingRecipe implements Recipe, Keyed {
	getBase(): RecipeChoice
	getAddition(): RecipeChoice
	getKey(): NamespacedKey
	getResult(): ItemStack
}
declare interface DaylightDetector extends TileState {
}
namespace EntitySpawnEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getLocation(): Location
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace EntityTameEvent {
	function getEntity(): Entity
	function getEntity(): LivingEntity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getOwner(): AnimalTamer
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace FurnaceBurnEvent {
	function getFuel(): ItemStack
	function isBurning(): boolean
	function setBurning(arg0: boolean): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getBurnTime(): int
	function setBurnTime(arg0: int): void
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace ServerCommandEvent {
	function getCommand(): String
	function setCommand(arg0: String): void
	function getSender(): CommandSender
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Diode extends MaterialData implements Directional, Redstone {
	setDelay(arg0: int): void
	getDelay(): int
	getFacing(): BlockFace
	isPowered(): boolean
	setFacingDirection(arg0: BlockFace): void
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): Object
	clone(): Diode
	clone(): MaterialData
}
declare interface Jigsaw extends TileState {
}
declare class Location implements Cloneable, ConfigurationSerializable {
	getBlock(): Block
	getWorld(): World
	getX(): double
	getY(): double
	getZ(): double
	getChunk(): Chunk
	setWorld(arg0: World): void
	setX(arg0: double): void
	getBlockX(): int
	locToBlock(arg0: double): int
	setY(arg0: double): void
	getBlockY(): int
	setZ(arg0: double): void
	getBlockZ(): int
	setYaw(arg0: float): void
	getYaw(): float
	setPitch(arg0: float): void
	getPitch(): float
	subtract(arg0: Location): Location
	subtract(arg0: Vector): Location
	subtract(arg0: double, arg1: double, arg2: double): Location
	toVector(): Vector
	serialize(): Map
	isWorldLoaded(): boolean
	getDirection(): Vector
	setDirection(arg0: Vector): Location
	lengthSquared(): double
	distanceSquared(arg0: Location): double
	checkFinite(): void
	deserialize(arg0: Map): Location
	normalizeYaw(arg0: float): float
	normalizePitch(arg0: float): float
	add(arg0: Vector): Location
	add(arg0: double, arg1: double, arg2: double): Location
	add(arg0: Location): Location
	equals(arg0: Object): boolean
	length(): double
	toString(): String
	hashCode(): int
	clone(): Location
	clone(): Object
	zero(): Location
	distance(arg0: Location): double
	multiply(arg0: double): Location
}
declare interface HelpTopicFactory {
	createTopic(arg0: Command): HelpTopic
}
declare class PressurePlate extends MaterialData implements PressureSensor {
	isPressed(): boolean
	toString(): String
	clone(): PressurePlate
	clone(): MaterialData
	clone(): Object
}
declare class TrapDoor extends SimpleAttachableMaterialData implements Openable {
	setOpen(arg0: boolean): void
	isInverted(): boolean
	setFacingDirection(arg0: BlockFace): void
	setInverted(arg0: boolean): void
	getAttachedFace(): BlockFace
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): MaterialData
	clone(): Object
	clone(): SimpleAttachableMaterialData
	clone(): TrapDoor
	isOpen(): boolean
}
declare interface SculkSensor extends TileState {
	getLastVibrationFrequency(): int
	setLastVibrationFrequency(arg0: int): void
}
declare interface Sign extends TileState, Colorable {
	getLines(): String[]
	getLine(arg0: int): String
	setLine(arg0: int, arg1: String): void
	isEditable(): boolean
	setEditable(arg0: boolean): void
	isGlowingText(): boolean
	setGlowingText(arg0: boolean): void
}
declare interface Blaze extends Monster {
}
namespace PlayerBucketEntityEvent {
	function getEntity(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getEntityBucket(): ItemStack
	function getOriginalBucket(): ItemStack
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Zoglin extends Monster, Ageable {
	isBaby(): boolean
	setBaby(arg0: boolean): void
}
declare class Hopper extends MaterialData implements Directional, Redstone {
	setActive(arg0: boolean): void
	getFacing(): BlockFace
	isPowered(): boolean
	setFacingDirection(arg0: BlockFace): void
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): Hopper
	clone(): Object
	clone(): MaterialData
	isActive(): boolean
}
declare interface TabExecutor extends TabCompleter, CommandExecutor {
}
declare interface FurnaceInventory extends Inventory {
	setFuel(arg0: ItemStack): void
	getHolder(): Furnace
	getHolder(): InventoryHolder
	getFuel(): ItemStack
	getSmelting(): ItemStack
	setSmelting(arg0: ItemStack): void
	getResult(): ItemStack
	setResult(arg0: ItemStack): void
}
declare class Tripwire extends MaterialData {
	isActivated(): boolean
	setActivated(arg0: boolean): void
	isObjectTriggering(): boolean
	setObjectTriggering(arg0: boolean): void
	toString(): String
	clone(): Tripwire
	clone(): MaterialData
	clone(): Object
}
declare class EulerAngle {
	getX(): double
	getY(): double
	getZ(): double
	setX(arg0: double): EulerAngle
	setY(arg0: double): EulerAngle
	setZ(arg0: double): EulerAngle
	subtract(arg0: double, arg1: double, arg2: double): EulerAngle
	add(arg0: double, arg1: double, arg2: double): EulerAngle
	equals(arg0: Object): boolean
	hashCode(): int
}
namespace InventoryOpenEvent {
	function getPlayer(): HumanEntity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getViewers(): List
	function getView(): InventoryView
	function getInventory(): Inventory
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Flags extends Enum implements PluginAwareness {
	values(): Flags[]
	valueOf(arg0: String): Flags
}
declare interface Redstone {
	isPowered(): boolean
}
declare class Step extends TexturedMaterial {
	isInverted(): boolean
	getTextures(): List
	getTextureIndex(): int
	setTextureIndex(arg0: int): void
	setInverted(arg0: boolean): void
	toString(): String
	clone(): MaterialData
	clone(): Object
	clone(): TexturedMaterial
	clone(): Step
}
declare class Rails extends MaterialData {
	isOnSlope(): boolean
	isCurve(): boolean
	getDirection(): BlockFace
	setDirection(arg0: BlockFace, arg1: boolean): void
	getConvertedData(): byte
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): Rails
	clone(): Object
	clone(): MaterialData
}
declare interface IronGolem extends Golem {
	isPlayerCreated(): boolean
	setPlayerCreated(arg0: boolean): void
}
namespace ExplosionPrimeEvent {
	function getRadius(): float
	function setRadius(arg0: float): void
	function getFire(): boolean
	function setFire(arg0: boolean): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace BlockGrowEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getNewState(): BlockState
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Wither extends Monster, Boss {
}
namespace HangingBreakByEntityEvent {
	function getRemover(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getCause(): RemoveCause
	function getHandlers(): HandlerList
	function getEntity(): Hanging
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface BannerMeta extends ItemMeta {
	addPattern(arg0: Pattern): void
	getPattern(arg0: int): Pattern
	setPattern(arg0: int, arg1: Pattern): void
	getBaseColor(): DyeColor
	setBaseColor(arg0: DyeColor): void
	getPatterns(): List
	setPatterns(arg0: List): void
	removePattern(arg0: int): Pattern
	numberOfPatterns(): int
}
declare class Spigot extends Spigot {
	isSilent(): boolean
}
declare interface Warning extends Annotation {
	value(): boolean
	reason(): String
}
namespace InventoryCreativeEvent {
	function getCursor(): ItemStack
	function setCursor(arg0: ItemStack): void
	function getRawSlot(): int
	function getAction(): InventoryAction
	function getClick(): ClickType
	function getSlotType(): SlotType
	function getCurrentItem(): ItemStack
	function isRightClick(): boolean
	function isLeftClick(): boolean
	function isShiftClick(): boolean
	function setCurrentItem(arg0: ItemStack): void
	function getClickedInventory(): Inventory
	function getHotbarButton(): int
	function getHandlerList(): HandlerList
	function getSlot(): int
	function getHandlers(): HandlerList
	function getWhoClicked(): HumanEntity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getResult(): Result
	function setResult(arg0: Result): void
	function getViewers(): List
	function getView(): InventoryView
	function getInventory(): Inventory
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface CommandMap {
	getCommand(arg0: String): Command
	registerAll(arg0: String, arg1: List): void
	clearCommands(): void
	tabComplete(arg0: CommandSender, arg1: String, arg2: Location): List
	tabComplete(arg0: CommandSender, arg1: String): List
	dispatch(arg0: CommandSender, arg1: String): boolean
	register(arg0: String, arg1: Command): boolean
	register(arg0: String, arg1: String, arg2: Command): boolean
}
declare interface Prompt extends Cloneable {
	getPromptText(arg0: ConversationContext): String
	blocksForInput(arg0: ConversationContext): boolean
	acceptInput(arg0: ConversationContext, arg1: String): Prompt
}
declare interface Lightable extends BlockData {
	isLit(): boolean
	setLit(arg0: boolean): void
}
declare interface Directional extends BlockData {
	setFacing(arg0: BlockFace): void
	getFaces(): Set
	getFacing(): BlockFace
}
namespace PlayerLocaleChangeEvent {
	function getLocale(): String
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface ExplosiveMinecart extends Minecart {
}
declare interface Spellcaster extends Illager {
	getSpell(): Spell
	setSpell(arg0: Spell): void
}
namespace VehicleEntityCollisionEvent {
	function getEntity(): Entity
	function isPickupCancelled(): boolean
	function setPickupCancelled(arg0: boolean): void
	function isCollisionCancelled(): boolean
	function setCollisionCancelled(arg0: boolean): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getVehicle(): Vehicle
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace VehicleDamageEvent {
	function setDamage(arg0: double): void
	function getDamage(): double
	function getAttacker(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getVehicle(): Vehicle
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface CachedServerIcon {
}
declare interface BanEntry {
	getCreated(): Date
	setCreated(arg0: Date): void
	setSource(arg0: String): void
	setReason(arg0: String): void
	getExpiration(): Date
	setExpiration(arg0: Date): void
	save(): void
	getTarget(): String
	getReason(): String
	getSource(): String
}
declare interface AnvilInventory extends Inventory {
	getRenameText(): String
	getRepairCost(): int
	setRepairCost(arg0: int): void
	getMaximumRepairCost(): int
	setMaximumRepairCost(arg0: int): void
}
declare interface SuspiciousStewMeta extends ItemMeta {
	addCustomEffect(arg0: PotionEffect, arg1: boolean): boolean
	removeCustomEffect(arg0: PotionEffectType): boolean
	hasCustomEffect(arg0: PotionEffectType): boolean
	clearCustomEffects(): boolean
	hasCustomEffects(): boolean
	getCustomEffects(): List
	clone(): Object
	clone(): ItemMeta
	clone(): SuspiciousStewMeta
}
declare class Skull extends MaterialData implements Directional {
	getFacing(): BlockFace
	setFacingDirection(arg0: BlockFace): void
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): Object
	clone(): Skull
	clone(): MaterialData
}
namespace PlayerLevelChangeEvent {
	function getOldLevel(): int
	function getNewLevel(): int
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace PlayerResourcePackStatusEvent {
	function getStatus(): Status
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class YamlConfiguration extends FileConfiguration {
	saveToString(): String
	buildHeader(): String
	loadFromString(arg0: String): void
	parseHeader(arg0: String): String
	convertMapsToSections(arg0: Map, arg1: ConfigurationSection): void
	loadConfiguration(arg0: Reader): YamlConfiguration
	loadConfiguration(arg0: File): YamlConfiguration
	options(): MemoryConfigurationOptions
	options(): ConfigurationOptions
	options(): FileConfigurationOptions
	options(): YamlConfigurationOptions
}
namespace EntityCombustByBlockEvent {
	function getCombuster(): Block
	function getDuration(): int
	function setDuration(arg0: int): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class EnchantmentOffer {
	getCost(): int
	setCost(arg0: int): void
	getEnchantment(): Enchantment
	setEnchantment(arg0: Enchantment): void
	getEnchantmentLevel(): int
	setEnchantmentLevel(arg0: int): void
}
declare class RegexPrompt extends ValidatingPrompt {
	isInputValid(arg0: ConversationContext, arg1: String): boolean
}
declare interface PersistentDataAdapterContext {
	newPersistentDataContainer(): PersistentDataContainer
}
declare class ChatPaginator {
	paginate(arg0: String, arg1: int, arg2: int, arg3: int): ChatPage
	paginate(arg0: String, arg1: int): ChatPage
	wordWrap(arg0: String, arg1: int): String[]
}
declare interface MerchantInventory extends Inventory {
	getSelectedRecipeIndex(): int
	getSelectedRecipe(): MerchantRecipe
	getMerchant(): Merchant
}
declare interface Stairs extends Bisected, Directional, Waterlogged {
	getShape(): Shape
	setShape(arg0: Shape): void
}
declare class ChunkGenerator {
	canSpawn(arg0: World, arg1: int, arg2: int): boolean
	generateChunkData(arg0: World, arg1: Random, arg2: int, arg3: int, arg4: BiomeGrid): ChunkData
	createChunkData(arg0: World): ChunkData
	getDefaultPopulators(arg0: World): List
	getFixedSpawnLocation(arg0: World, arg1: Random): Location
	isParallelCapable(): boolean
	shouldGenerateCaves(): boolean
	shouldGenerateDecorations(): boolean
	shouldGenerateMobs(): boolean
	shouldGenerateStructures(): boolean
	$SWITCH_TABLE$org$bukkit$World$Environment(): int[]
}
declare interface Illager extends Raider {
}
declare interface PoweredMinecart extends Minecart {
	setFuel(arg0: int): void
	getFuel(): int
}
namespace TimeSkipEvent {
	function getSkipReason(): SkipReason
	function getSkipAmount(): long
	function setSkipAmount(arg0: long): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface PressureSensor {
	isPressed(): boolean
}
declare class LootTables extends Enum implements Keyed {
	getLootTable(): LootTable
	values(): LootTables[]
	valueOf(arg0: String): LootTables
	getKey(): NamespacedKey
}
namespace PluginEvent {
	function getPlugin(): Plugin
	function isAsynchronous(): boolean
	function getEventName(): String
	function getHandlers(): HandlerList
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Pillager extends Illager, InventoryHolder {
}
declare class StringPrompt implements Prompt {
	blocksForInput(arg0: ConversationContext): boolean
}
declare interface MagmaCube extends Slime {
}
declare interface CommandMinecart extends Minecart {
	getCommand(): String
	setCommand(arg0: String): void
	setName(arg0: String): void
}
declare interface BanList {
	addBan(arg0: String, arg1: String, arg2: Date, arg3: String): BanEntry
	isBanned(arg0: String): boolean
	pardon(arg0: String): void
	getBanEntry(arg0: String): BanEntry
	getBanEntries(): Set
}
declare class EntityType extends Enum implements Keyed {
	getTypeId(): short
	fromName(arg0: String): EntityType
	fromId(arg0: int): EntityType
	getEntityClass(): Class
	isSpawnable(): boolean
	getName(): String
	values(): EntityType[]
	valueOf(arg0: String): EntityType
	getKey(): NamespacedKey
	isAlive(): boolean
}
declare interface Lockable {
	getLock(): String
	setLock(arg0: String): void
	isLocked(): boolean
}
namespace RemoteServerCommandEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getCommand(): String
	function setCommand(arg0: String): void
	function getSender(): CommandSender
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class BroadcastPermissions {
	registerPermissions(arg0: Permission): Permission
}
declare class DustTransition extends DustOptions {
	getToColor(): Color
}
namespace EntityBreedEvent {
	function getMother(): LivingEntity
	function getFather(): LivingEntity
	function getBreeder(): LivingEntity
	function getEntity(): Entity
	function getEntity(): LivingEntity
	function setExperience(arg0: int): void
	function getBredWith(): ItemStack
	function getExperience(): int
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Snow extends BlockData {
	getLayers(): int
	setLayers(arg0: int): void
	getMinimumLayers(): int
	getMaximumLayers(): int
}
declare class NullConversationPrefix implements ConversationPrefix {
	getPrefix(arg0: ConversationContext): String
}
declare interface RemoteConsoleCommandSender extends CommandSender {
}
declare class Wool extends MaterialData implements Colorable {
	getColor(): DyeColor
	toString(): String
	clone(): Wool
	clone(): MaterialData
	clone(): Object
	setColor(arg0: DyeColor): void
}
namespace InventoryPickupItemEvent {
	function getInventory(): Inventory
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getItem(): Item
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Pig extends Steerable, Vehicle {
}
declare interface Wall extends Waterlogged {
	isUp(): boolean
	setUp(arg0: boolean): void
	setHeight(arg0: BlockFace, arg1: Height): void
	getHeight(arg0: BlockFace): Height
}
declare interface ShulkerBox extends Container, Lootable, Lidded {
	getColor(): DyeColor
}
declare class PlayerNamePrompt extends ValidatingPrompt {
	isInputValid(arg0: ConversationContext, arg1: String): boolean
	acceptValidatedInput(arg0: ConversationContext, arg1: Player): Prompt
	acceptValidatedInput(arg0: ConversationContext, arg1: String): Prompt
}
declare interface Cod extends Fish {
}
namespace WeatherChangeEvent {
	function toWeatherState(): boolean
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Trident extends AbstractArrow, ThrowableProjectile {
}
namespace VehicleDestroyEvent {
	function getAttacker(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getVehicle(): Vehicle
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Consumer {
	accept(arg0: Object): void
}
declare interface WorldBorder {
	getCenter(): Location
	setCenter(arg0: double, arg1: double): void
	setCenter(arg0: Location): void
	isInside(arg0: Location): boolean
	getDamageBuffer(): double
	setDamageBuffer(arg0: double): void
	getDamageAmount(): double
	setDamageAmount(arg0: double): void
	getWarningTime(): int
	setWarningTime(arg0: int): void
	getWarningDistance(): int
	setWarningDistance(arg0: int): void
	getSize(): double
	reset(): void
	setSize(arg0: double): void
	setSize(arg0: double, arg1: long): void
}
declare interface Llama extends ChestedHorse {
	getColor(): Color
	getStrength(): int
	setStrength(arg0: int): void
	getInventory(): AbstractHorseInventory
	getInventory(): LlamaInventory
	getInventory(): Inventory
	setColor(arg0: Color): void
}
declare interface MushroomCow extends Cow {
	setVariant(arg0: Variant): void
	getVariant(): Variant
}
declare class TimingsCommand extends BukkitCommand {
	tabComplete(arg0: CommandSender, arg1: String, arg2: String[]): List
	executeSpigotTimings(arg0: CommandSender, arg1: String[]): void
	execute(arg0: CommandSender, arg1: String, arg2: String[]): boolean
}
declare interface MapView {
	isVirtual(): boolean
	getScale(): Scale
	setScale(arg0: Scale): void
	getCenterX(): int
	getCenterZ(): int
	setCenterX(arg0: int): void
	setCenterZ(arg0: int): void
	setLocked(arg0: boolean): void
	getWorld(): World
	setWorld(arg0: World): void
	getRenderers(): List
	addRenderer(arg0: MapRenderer): void
	removeRenderer(arg0: MapRenderer): boolean
	isTrackingPosition(): boolean
	setTrackingPosition(arg0: boolean): void
	isUnlimitedTracking(): boolean
	setUnlimitedTracking(arg0: boolean): void
	getId(): int
	isLocked(): boolean
}
declare class Wood extends MaterialData {
	setSpecies(arg0: TreeSpecies): void
	getSpecies(): TreeSpecies
	getSpeciesType(arg0: Material, arg1: TreeSpecies): Material
	$SWITCH_TABLE$org$bukkit$TreeSpecies(): int[]
	$SWITCH_TABLE$org$bukkit$Material(): int[]
	toString(): String
	clone(): Wood
	clone(): Object
	clone(): MaterialData
}
declare interface PiglinAbstract extends Monster, Ageable {
	isBaby(): boolean
	setBaby(arg0: boolean): void
	isImmuneToZombification(): boolean
	setImmuneToZombification(arg0: boolean): void
	getConversionTime(): int
	setConversionTime(arg0: int): void
	isConverting(): boolean
}
namespace CraftItemEvent {
	function getRecipe(): Recipe
	function getInventory(): CraftingInventory
	function getInventory(): Inventory
	function getCursor(): ItemStack
	function setCursor(arg0: ItemStack): void
	function getRawSlot(): int
	function getAction(): InventoryAction
	function getClick(): ClickType
	function getSlotType(): SlotType
	function getCurrentItem(): ItemStack
	function isRightClick(): boolean
	function isLeftClick(): boolean
	function isShiftClick(): boolean
	function setCurrentItem(arg0: ItemStack): void
	function getClickedInventory(): Inventory
	function getHotbarButton(): int
	function getHandlerList(): HandlerList
	function getSlot(): int
	function getHandlers(): HandlerList
	function getWhoClicked(): HumanEntity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getResult(): Result
	function setResult(arg0: Result): void
	function getViewers(): List
	function getView(): InventoryView
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace LeavesDecayEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Command extends MaterialData implements Redstone {
	setPowered(arg0: boolean): void
	isPowered(): boolean
	toString(): String
	clone(): Object
	clone(): MaterialData
	clone(): Command
}
namespace PigZombieAngerEvent {
	function getEntity(): Entity
	function getEntity(): PigZombie
	function getNewAnger(): int
	function setNewAnger(arg0: int): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getTarget(): Entity
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface ScoreboardManager {
	getMainScoreboard(): Scoreboard
	getNewScoreboard(): Scoreboard
}
declare class PerlinOctaveGenerator extends OctaveGenerator {
	createOctaves(arg0: Random, arg1: int): NoiseGenerator[]
}
namespace WorldEvent {
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function getHandlers(): HandlerList
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface TripwireHook extends Attachable, Directional, Powerable {
}
namespace BlockExplodeEvent {
	function getYield(): float
	function blockList(): List
	function setYield(arg0: float): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface TippedArrow extends Arrow {
}
declare interface Cow extends Animals {
}
declare interface RedstoneWire extends AnaloguePowerable {
	getFace(arg0: BlockFace): Connection
	setFace(arg0: BlockFace, arg1: Connection): void
	getAllowedFaces(): Set
}
declare interface Goat extends Animals {
	isScreaming(): boolean
	setScreaming(arg0: boolean): void
}
declare interface Furnace extends Directional, Lightable {
}
declare interface TechnicalPiston extends Directional {
	setType(arg0: Type): void
	getType(): Type
}
declare interface RespawnAnchor extends BlockData {
	getCharges(): int
	setCharges(arg0: int): void
	getMaximumCharges(): int
}
namespace EntityUnleashEvent {
	function getHandlerList(): HandlerList
	function getReason(): UnleashReason
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace SlimeSplitEvent {
	function setCount(arg0: int): void
	function getEntity(): Slime
	function getEntity(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getCount(): int
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace PlayerVelocityEvent {
	function setVelocity(arg0: Vector): void
	function getVelocity(): Vector
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface BeaconInventory extends Inventory {
	setItem(arg0: ItemStack): void
	getItem(): ItemStack
}
declare interface EnderChest extends TileState {
}
declare interface Chest extends Directional, Waterlogged {
	setType(arg0: Type): void
	getType(): Type
}
declare class YamlConfigurationOptions extends FileConfigurationOptions {
	copyHeader(arg0: boolean): YamlConfigurationOptions
	copyHeader(arg0: boolean): FileConfigurationOptions
	header(arg0: String): FileConfigurationOptions
	header(arg0: String): YamlConfigurationOptions
	copyDefaults(arg0: boolean): ConfigurationOptions
	copyDefaults(arg0: boolean): MemoryConfigurationOptions
	copyDefaults(arg0: boolean): FileConfigurationOptions
	copyDefaults(arg0: boolean): YamlConfigurationOptions
	indent(arg0: int): YamlConfigurationOptions
	indent(): int
	configuration(): YamlConfiguration
	configuration(): FileConfiguration
	configuration(): MemoryConfiguration
	configuration(): Configuration
	pathSeparator(arg0: char): MemoryConfigurationOptions
	pathSeparator(arg0: char): ConfigurationOptions
	pathSeparator(arg0: char): FileConfigurationOptions
	pathSeparator(arg0: char): YamlConfigurationOptions
}
declare interface ItemFrame extends Hanging {
	isVisible(): boolean
	setVisible(arg0: boolean): void
	isFixed(): boolean
	setFixed(arg0: boolean): void
	setItem(arg0: ItemStack): void
	setItem(arg0: ItemStack, arg1: boolean): void
	getItemDropChance(): float
	setItemDropChance(arg0: float): void
	getRotation(): Rotation
	setRotation(arg0: Rotation): void
	getItem(): ItemStack
}
declare class MonsterEggs extends TexturedMaterial {
	getTextures(): List
	clone(): MaterialData
	clone(): Object
	clone(): TexturedMaterial
	clone(): MonsterEggs
}
namespace WorldSaveEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Chunk extends PersistentDataHolder {
	getBlock(arg0: int, arg1: int, arg2: int): Block
	getWorld(): World
	getX(): int
	getZ(): int
	getChunkSnapshot(arg0: boolean, arg1: boolean, arg2: boolean): ChunkSnapshot
	getChunkSnapshot(): ChunkSnapshot
	getEntities(): Entity[]
	getTileEntities(): BlockState[]
	isSlimeChunk(): boolean
	isForceLoaded(): boolean
	setForceLoaded(arg0: boolean): void
	addPluginChunkTicket(arg0: Plugin): boolean
	removePluginChunkTicket(arg0: Plugin): boolean
	getPluginChunkTickets(): Collection
	getInhabitedTime(): long
	setInhabitedTime(arg0: long): void
	load(arg0: boolean): boolean
	load(): boolean
	contains(arg0: BlockData): boolean
	isLoaded(): boolean
	unload(arg0: boolean): boolean
	unload(): boolean
}
namespace BlockRedstoneEvent {
	function getOldCurrent(): int
	function getNewCurrent(): int
	function setNewCurrent(arg0: int): void
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface FireworkEffectMeta extends ItemMeta {
	setEffect(arg0: FireworkEffect): void
	hasEffect(): boolean
	getEffect(): FireworkEffect
	clone(): Object
	clone(): ItemMeta
	clone(): FireworkEffectMeta
}
declare interface ConversationAbandonedListener extends EventListener {
	conversationAbandoned(arg0: ConversationAbandonedEvent): void
}
namespace EnchantItemEvent {
	function getEnchanter(): Player
	function getEnchantBlock(): Block
	function getExpLevelCost(): int
	function setExpLevelCost(arg0: int): void
	function getEnchantsToAdd(): Map
	function whichButton(): int
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getItem(): ItemStack
	function getViewers(): List
	function getView(): InventoryView
	function getInventory(): Inventory
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface BlockData extends Cloneable {
	getMaterial(): Material
	getSoundGroup(): SoundGroup
	getAsString(arg0: boolean): String
	getAsString(): String
	clone(): BlockData
	clone(): Object
	matches(arg0: BlockData): boolean
	merge(arg0: BlockData): BlockData
}
declare interface PermissionRemovedExecutor {
	attachmentRemoved(arg0: PermissionAttachment): void
}
declare class Spigot extends Spigot {
}
declare class CampfireRecipe extends CookingRecipe {
}
namespace PlayerToggleFlightEvent {
	function isFlying(): boolean
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Spider extends Monster {
}
declare class BukkitCommand extends Command {
}
declare class ItemStack implements Cloneable, ConfigurationSerializable {
	createData(arg0: byte): void
	getAmount(): int
	setAmount(arg0: int): void
	isSimilar(arg0: ItemStack): boolean
	getData(): MaterialData
	setType(arg0: Material): void
	setData(arg0: MaterialData): void
	serialize(): Map
	setDurability(arg0: short): void
	hasItemMeta(): boolean
	getItemMeta(): ItemMeta
	setItemMeta0(arg0: ItemMeta, arg1: Material): boolean
	getDurability(): short
	setItemMeta(arg0: ItemMeta): boolean
	containsEnchantment(arg0: Enchantment): boolean
	getEnchantments(): Map
	addEnchantments(arg0: Map): void
	addEnchantment(arg0: Enchantment, arg1: int): void
	addUnsafeEnchantment(arg0: Enchantment, arg1: int): void
	addUnsafeEnchantments(arg0: Map): void
	removeEnchantment(arg0: Enchantment): int
	getEnchantmentLevel(arg0: Enchantment): int
	deserialize(arg0: Map): ItemStack
	getMaxStackSize(): int
	equals(arg0: Object): boolean
	toString(): String
	hashCode(): int
	clone(): Object
	clone(): ItemStack
	getType(): Material
}
declare interface Hanging extends Entity, Attachable {
	setFacingDirection(arg0: BlockFace, arg1: boolean): boolean
}
declare interface BlockDataMeta extends ItemMeta {
	hasBlockData(): boolean
	setBlockData(arg0: BlockData): void
	getBlockData(arg0: Material): BlockData
}
declare interface Sapling extends BlockData {
	getStage(): int
	setStage(arg0: int): void
	getMaximumStage(): int
}
declare class DefaultPermissions {
	registerPermission(arg0: Permission, arg1: Permission): Permission
	registerPermission(arg0: String, arg1: String): Permission
	registerPermission(arg0: String, arg1: String, arg2: PermissionDefault, arg3: Map): Permission
	registerPermission(arg0: String, arg1: String, arg2: PermissionDefault): Permission
	registerPermission(arg0: String, arg1: String, arg2: PermissionDefault, arg3: Permission): Permission
	registerPermission(arg0: String, arg1: String, arg2: Permission): Permission
	registerPermission(arg0: String, arg1: String, arg2: PermissionDefault, arg3: Map, arg4: Permission): Permission
	registerPermission(arg0: Permission): Permission
	registerPermission(arg0: Permission, arg1: boolean): Permission
	registerCorePermissions(): void
}
declare class MapFont {
	getHeight(): int
	getWidth(arg0: String): int
	isValid(arg0: String): boolean
	getChar(arg0: char): CharacterSprite
	setChar(arg0: char, arg1: CharacterSprite): void
}
declare interface Bisected extends BlockData {
	getHalf(): Half
	setHalf(arg0: Half): void
}
namespace MoistureChangeEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getNewState(): BlockState
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class GameRule {
	getName(): String
	equals(arg0: Object): boolean
	toString(): String
	values(): GameRule[]
	getType(): Class
	getByName(arg0: String): GameRule
}
declare class StonecuttingRecipe implements Recipe, Keyed {
	getGroup(): String
	setGroup(arg0: String): void
	setInputChoice(arg0: RecipeChoice): StonecuttingRecipe
	getInputChoice(): RecipeChoice
	getKey(): NamespacedKey
	getResult(): ItemStack
	setInput(arg0: Material): StonecuttingRecipe
	getInput(): ItemStack
}
declare interface CaveVines extends Ageable, CaveVinesPlant {
}
namespace InventoryCloseEvent {
	function getPlayer(): HumanEntity
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getViewers(): List
	function getView(): InventoryView
	function getInventory(): Inventory
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace PlayerRespawnEvent {
	function isBedSpawn(): boolean
	function isAnchorSpawn(): boolean
	function getRespawnLocation(): Location
	function setRespawnLocation(arg0: Location): void
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace PlayerBucketFishEvent {
	function getEntity(): Entity
	function getEntity(): Fish
	function getWaterBucket(): ItemStack
	function getFishBucket(): ItemStack
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getEntityBucket(): ItemStack
	function getOriginalBucket(): ItemStack
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface LeashHitch extends Hanging {
}
declare interface Cake extends BlockData {
	getBites(): int
	setBites(arg0: int): void
	getMaximumBites(): int
}
declare interface CaveVinesPlant extends BlockData {
	isBerries(): boolean
	setBerries(arg0: boolean): void
}
declare interface Chain extends Orientable, Waterlogged {
}
declare interface Skull extends TileState {
	hasOwner(): boolean
	getRotation(): BlockFace
	getOwningPlayer(): OfflinePlayer
	setOwningPlayer(arg0: OfflinePlayer): void
	getSkullType(): SkullType
	setSkullType(arg0: SkullType): void
	setRotation(arg0: BlockFace): void
	getOwner(): String
	setOwner(arg0: String): boolean
}
declare class FormattedCommandAlias extends Command {
	buildCommand(arg0: String, arg1: String[]): String
	execute(arg0: CommandSender, arg1: String, arg2: String[]): boolean
	inRange(arg0: int, arg1: int, arg2: int): boolean
}
namespace VehicleCreateEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getVehicle(): Vehicle
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace EntityPlaceEvent {
	function getPlayer(): Player
	function getBlock(): Block
	function getBlockFace(): BlockFace
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace ServerListPingEvent {
	function getMotd(): String
	function setMotd(arg0: String): void
	function getNumPlayers(): int
	function getMaxPlayers(): int
	function setMaxPlayers(arg0: int): void
	function setServerIcon(arg0: CachedServerIcon): void
	function getHandlerList(): HandlerList
	function iterator(): Iterator
	function getAddress(): InetAddress
	function getHandlers(): HandlerList
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
	function spliterator(): Spliterator
	function forEach(arg0: Consumer): void
}
declare interface Vehicle extends Entity {
	setVelocity(arg0: Vector): void
	getVelocity(): Vector
}
declare interface ServicesManager {
	unregisterAll(arg0: Plugin): void
	getRegistration(arg0: Class): RegisteredServiceProvider
	getRegistrations(arg0: Class): Collection
	getRegistrations(arg0: Plugin): List
	getKnownServices(): Collection
	isProvidedFor(arg0: Class): boolean
	load(arg0: Class): Object
	register(arg0: Class, arg1: Object, arg2: Plugin, arg3: ServicePriority): void
	unregister(arg0: Object): void
	unregister(arg0: Class, arg1: Object): void
}
declare interface Server extends PluginMessageRecipient {
	getRecipe(arg0: NamespacedKey): Recipe
	reload(): void
	getPlayer(arg0: UUID): Player
	getPlayer(arg0: String): Player
	getBossBar(arg0: NamespacedKey): KeyedBossBar
	spigot(): Spigot
	getMotd(): String
	getIp(): String
	getWorlds(): List
	reloadData(): void
	addRecipe(arg0: Recipe): boolean
	isHardcore(): boolean
	getIPBans(): Set
	banIP(arg0: String): void
	unbanIP(arg0: String): void
	getBanList(arg0: Type): BanList
	getHelpMap(): HelpMap
	getTags(arg0: String, arg1: Class): Iterable
	getWorld(arg0: String): World
	getWorld(arg0: UUID): World
	getEntity(arg0: UUID): Entity
	getOnlinePlayers(): Collection
	getConsoleSender(): ConsoleCommandSender
	createChunkData(arg0: World): ChunkData
	getItemFactory(): ItemFactory
	dispatchCommand(arg0: CommandSender, arg1: String): boolean
	getMaxPlayers(): int
	getBukkitVersion(): String
	getViewDistance(): int
	getWorldType(): String
	getGenerateStructures(): boolean
	getMaxWorldSize(): int
	getAllowEnd(): boolean
	getAllowNether(): boolean
	hasWhitelist(): boolean
	setWhitelist(arg0: boolean): void
	isWhitelistEnforced(): boolean
	setWhitelistEnforced(arg0: boolean): void
	getWhitelistedPlayers(): Set
	reloadWhitelist(): void
	broadcastMessage(arg0: String): int
	getUpdateFolder(): String
	getUpdateFolderFile(): File
	getConnectionThrottle(): long
	getTicksPerAnimalSpawns(): int
	getTicksPerMonsterSpawns(): int
	getTicksPerWaterSpawns(): int
	getTicksPerAmbientSpawns(): int
	getPlayerExact(arg0: String): Player
	matchPlayer(arg0: String): List
	getScheduler(): BukkitScheduler
	getServicesManager(): ServicesManager
	createWorld(arg0: WorldCreator): World
	unloadWorld(arg0: String, arg1: boolean): boolean
	unloadWorld(arg0: World, arg1: boolean): boolean
	createExplorerMap(arg0: World, arg1: Location, arg2: StructureType, arg3: int, arg4: boolean): ItemStack
	createExplorerMap(arg0: World, arg1: Location, arg2: StructureType): ItemStack
	getPluginCommand(arg0: String): PluginCommand
	savePlayers(): void
	getRecipesFor(arg0: ItemStack): List
	recipeIterator(): Iterator
	clearRecipes(): void
	resetRecipes(): void
	removeRecipe(arg0: NamespacedKey): boolean
	getCommandAliases(): Map
	getSpawnRadius(): int
	setSpawnRadius(arg0: int): void
	getOnlineMode(): boolean
	getAllowFlight(): boolean
	getBannedPlayers(): Set
	getOperators(): Set
	getDefaultGameMode(): GameMode
	setDefaultGameMode(arg0: GameMode): void
	getWorldContainer(): File
	getOfflinePlayers(): OfflinePlayer[]
	getMessenger(): Messenger
	createInventory(arg0: InventoryHolder, arg1: InventoryType): Inventory
	createInventory(arg0: InventoryHolder, arg1: int): Inventory
	createInventory(arg0: InventoryHolder, arg1: int, arg2: String): Inventory
	createInventory(arg0: InventoryHolder, arg1: InventoryType, arg2: String): Inventory
	createMerchant(arg0: String): Merchant
	getMonsterSpawnLimit(): int
	getAnimalSpawnLimit(): int
	getWaterAnimalSpawnLimit(): int
	getWaterAmbientSpawnLimit(): int
	getAmbientSpawnLimit(): int
	isPrimaryThread(): boolean
	getShutdownMessage(): String
	getWarningState(): WarningState
	getScoreboardManager(): ScoreboardManager
	getServerIcon(): CachedServerIcon
	loadServerIcon(arg0: File): CachedServerIcon
	loadServerIcon(arg0: BufferedImage): CachedServerIcon
	setIdleTimeout(arg0: int): void
	getIdleTimeout(): int
	createBossBar(arg0: String, arg1: BarColor, arg2: BarStyle, arg3: BarFlag[]): BossBar
	createBossBar(arg0: NamespacedKey, arg1: String, arg2: BarColor, arg3: BarStyle, arg4: BarFlag[]): KeyedBossBar
	getBossBars(): Iterator
	removeBossBar(arg0: NamespacedKey): boolean
	getAdvancement(arg0: NamespacedKey): Advancement
	advancementIterator(): Iterator
	createBlockData(arg0: Material): BlockData
	createBlockData(arg0: Material, arg1: Consumer): BlockData
	createBlockData(arg0: String): BlockData
	createBlockData(arg0: Material, arg1: String): BlockData
	selectEntities(arg0: CommandSender, arg1: String): List
	getLootTable(arg0: NamespacedKey): LootTable
	getOfflinePlayer(arg0: String): OfflinePlayer
	getOfflinePlayer(arg0: UUID): OfflinePlayer
	getPluginManager(): PluginManager
	getTicksPerWaterAmbientSpawns(): int
	getName(): String
	shutdown(): void
	getUnsafe(): UnsafeValues
	getLogger(): Logger
	getPort(): int
	broadcast(arg0: String, arg1: String): int
	getVersion(): String
	getMap(arg0: int): MapView
	createMap(arg0: World): MapView
	getTag(arg0: String, arg1: NamespacedKey, arg2: Class): Tag
}
namespace TabCompleteEvent {
	function getBuffer(): String
	function getSender(): CommandSender
	function getCompletions(): List
	function setCompletions(arg0: List): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class OctaveGenerator {
	setScale(arg0: double): void
	setXScale(arg0: double): void
	setYScale(arg0: double): void
	setZScale(arg0: double): void
	getXScale(): double
	getYScale(): double
	getZScale(): double
	getOctaves(): NoiseGenerator[]
	noise(arg0: double, arg1: double, arg2: double, arg3: double, arg4: boolean): double
	noise(arg0: double, arg1: double, arg2: double, arg3: double): double
	noise(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double): double
	noise(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: boolean): double
	noise(arg0: double, arg1: double, arg2: double): double
	noise(arg0: double, arg1: double, arg2: double, arg3: boolean): double
}
declare interface Bamboo extends Ageable, Sapling {
	getLeaves(): Leaves
	setLeaves(arg0: Leaves): void
}
declare interface Raid {
	getStatus(): RaidStatus
	isStarted(): boolean
	getHeroes(): Set
	getRaiders(): List
	getActiveTicks(): long
	getBadOmenLevel(): int
	setBadOmenLevel(arg0: int): void
	getSpawnedGroups(): int
	getTotalGroups(): int
	getTotalWaves(): int
	getTotalHealth(): float
	getLocation(): Location
}
declare interface MetadataStore {
	invalidateAll(arg0: Plugin): void
	setMetadata(arg0: Object, arg1: String, arg2: MetadataValue): void
	removeMetadata(arg0: Object, arg1: String, arg2: Plugin): void
	hasMetadata(arg0: Object, arg1: String): boolean
	getMetadata(arg0: Object, arg1: String): List
}
namespace EntityPortalEvent {
	function setSearchRadius(arg0: int): void
	function getSearchRadius(): int
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getFrom(): Location
	function setFrom(arg0: Location): void
	function getTo(): Location
	function setTo(arg0: Location): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class LazyMetadataValue extends MetadataValueAdapter {
	eval(): void
	value(): Object
	invalidate(): void
}
declare class Sandstone extends MaterialData {
	setType(arg0: SandstoneType): void
	toString(): String
	clone(): Object
	clone(): Sandstone
	clone(): MaterialData
	getType(): SandstoneType
}
declare class Stairs extends MaterialData implements Directional {
	getFacing(): BlockFace
	isInverted(): boolean
	getAscendingDirection(): BlockFace
	getDescendingDirection(): BlockFace
	setFacingDirection(arg0: BlockFace): void
	setInverted(arg0: boolean): void
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): Stairs
	clone(): Object
	clone(): MaterialData
}
namespace PlayerToggleSprintEvent {
	function isSprinting(): boolean
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Builder {
	withTrail(): Builder
	withColor(arg0: Color): Builder
	withColor(arg0: Color[]): Builder
	withColor(arg0: Iterable): Builder
	withFade(arg0: Color): Builder
	withFade(arg0: Color[]): Builder
	withFade(arg0: Iterable): Builder
	flicker(arg0: boolean): Builder
	trail(arg0: boolean): Builder
	withFlicker(): Builder
	build(): FireworkEffect
	with(arg0: Type): Builder
}
namespace PlayerItemBreakEvent {
	function getHandlerList(): HandlerList
	function getBrokenItem(): ItemStack
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace EntityDropItemEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getItemDrop(): Item
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class MetadataStoreBase {
	invalidateAll(arg0: Plugin): void
	setMetadata(arg0: Object, arg1: String, arg2: MetadataValue): void
	removeMetadata(arg0: Object, arg1: String, arg2: Plugin): void
	hasMetadata(arg0: Object, arg1: String): boolean
	getMetadata(arg0: Object, arg1: String): List
	disambiguate(arg0: Object, arg1: String): String
}
declare class PluginDescriptionFile {
	getPrefix(): String
	asMap(arg0: Object): Map
	loadMap(arg0: Map): void
	getMain(): String
	getLoad(): PluginLoadOrder
	getAuthors(): List
	getWebsite(): String
	getDepend(): List
	saveMap(): Map
	getRawName(): String
	getDescription(): String
	getProvides(): List
	getContributors(): List
	getSoftDepend(): List
	getLoadBefore(): List
	getCommands(): Map
	getFullName(): String
	getPermissionDefault(): PermissionDefault
	getAwareness(): Set
	getAPIVersion(): String
	getLibraries(): List
	getClassLoaderOf(): String
	makePluginNameList(arg0: Map, arg1: String): List
	getName(): String
	getPermissions(): List
	save(arg0: Writer): void
	getVersion(): String
}
declare interface LlamaInventory extends AbstractHorseInventory {
	getDecor(): ItemStack
	setDecor(arg0: ItemStack): void
}
declare interface Fish extends WaterMob {
}
namespace EnderDragonChangePhaseEvent {
	function getEntity(): Entity
	function getEntity(): EnderDragon
	function setNewPhase(arg0: Phase): void
	function getCurrentPhase(): Phase
	function getNewPhase(): Phase
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Enchantment implements Keyed {
	isTreasure(): boolean
	isCursed(): boolean
	getByKey(arg0: NamespacedKey): Enchantment
	getStartLevel(): int
	getMaxLevel(): int
	canEnchantItem(arg0: ItemStack): boolean
	getItemTarget(): EnchantmentTarget
	conflictsWith(arg0: Enchantment): boolean
	registerEnchantment(arg0: Enchantment): void
	isAcceptingRegistrations(): boolean
	stopAcceptingRegistrations(): void
	getName(): String
	equals(arg0: Object): boolean
	toString(): String
	values(): Enchantment[]
	hashCode(): int
	getKey(): NamespacedKey
	getByName(arg0: String): Enchantment
}
namespace PlayerFishEvent {
	function getCaught(): Entity
	function getHook(): FishHook
	function getExpToDrop(): int
	function setExpToDrop(arg0: int): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getState(): State
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface SkullMeta extends ItemMeta {
	hasOwner(): boolean
	getOwningPlayer(): OfflinePlayer
	setOwningPlayer(arg0: OfflinePlayer): boolean
	clone(): SkullMeta
	clone(): ItemMeta
	clone(): Object
	getOwner(): String
	setOwner(arg0: String): boolean
}
declare interface EnchantingInventory extends Inventory {
	setItem(arg0: ItemStack): void
	setSecondary(arg0: ItemStack): void
	getSecondary(): ItemStack
	getItem(): ItemStack
}
declare interface EventHandler extends Annotation {
	ignoreCancelled(): boolean
	priority(): EventPriority
}
declare interface Hopper extends Directional {
	isEnabled(): boolean
	setEnabled(arg0: boolean): void
}
declare class FurnaceAndDispenser extends DirectionalContainer {
	clone(): Object
	clone(): MaterialData
	clone(): DirectionalContainer
	clone(): FurnaceAndDispenser
}
declare interface EvokerFangs extends Entity {
	getOwner(): LivingEntity
	setOwner(arg0: LivingEntity): void
}
declare interface BlockInventoryHolder extends InventoryHolder {
	getBlock(): Block
}
declare interface Block extends Metadatable {
	getFace(arg0: Block): BlockFace
	getData(): byte
	setType(arg0: Material): void
	setType(arg0: Material, arg1: boolean): void
	getBiome(): Biome
	setBiome(arg0: Biome): void
	isLiquid(): boolean
	getDrops(arg0: ItemStack, arg1: Entity): Collection
	getDrops(arg0: ItemStack): Collection
	getDrops(): Collection
	isPassable(): boolean
	rayTrace(arg0: Location, arg1: Vector, arg2: double, arg3: FluidCollisionMode): RayTraceResult
	getWorld(): World
	getX(): int
	getY(): int
	getZ(): int
	getChunk(): Chunk
	getBoundingBox(): BoundingBox
	getPistonMoveReaction(): PistonMoveReaction
	setBlockData(arg0: BlockData): void
	setBlockData(arg0: BlockData, arg1: boolean): void
	getLightLevel(): byte
	getBlockData(): BlockData
	getRelative(arg0: BlockFace, arg1: int): Block
	getRelative(arg0: BlockFace): Block
	getRelative(arg0: int, arg1: int, arg2: int): Block
	getLightFromSky(): byte
	getLightFromBlocks(): byte
	isBlockPowered(): boolean
	isBlockIndirectlyPowered(): boolean
	isBlockFacePowered(arg0: BlockFace): boolean
	getBlockPower(arg0: BlockFace): int
	getBlockPower(): int
	getTemperature(): double
	getHumidity(): double
	breakNaturally(arg0: ItemStack): boolean
	breakNaturally(): boolean
	applyBoneMeal(arg0: BlockFace): boolean
	isPreferredTool(arg0: ItemStack): boolean
	getBreakSpeed(arg0: Player): float
	getCollisionShape(): VoxelShape
	isBlockFaceIndirectlyPowered(arg0: BlockFace): boolean
	isEmpty(): boolean
	getLocation(arg0: Location): Location
	getLocation(): Location
	getState(): BlockState
	getType(): Material
}
declare interface GlowSquid extends Squid {
	getDarkTicksRemaining(): int
	setDarkTicksRemaining(arg0: int): void
}
declare class FileConfigurationOptions extends MemoryConfigurationOptions {
	copyHeader(arg0: boolean): FileConfigurationOptions
	copyHeader(): boolean
	header(): String
	header(arg0: String): FileConfigurationOptions
	copyDefaults(arg0: boolean): ConfigurationOptions
	copyDefaults(arg0: boolean): FileConfigurationOptions
	copyDefaults(arg0: boolean): MemoryConfigurationOptions
	configuration(): FileConfiguration
	configuration(): Configuration
	configuration(): MemoryConfiguration
	pathSeparator(arg0: char): ConfigurationOptions
	pathSeparator(arg0: char): MemoryConfigurationOptions
	pathSeparator(arg0: char): FileConfigurationOptions
}
declare interface Sheep extends Animals, Colorable {
	isSheared(): boolean
	setSheared(arg0: boolean): void
}
declare class Type extends Enum implements Keyed {
	values(): Type[]
	valueOf(arg0: String): Type
	getKey(): NamespacedKey
}
declare interface EnderChest extends Directional, Waterlogged {
}
namespace PluginDisableEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getPlugin(): Plugin
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class BlockPopulator {
	populate(arg0: World, arg1: Random, arg2: Chunk): void
}
namespace PlayerItemDamageEvent {
	function setDamage(arg0: int): void
	function getDamage(): int
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getItem(): ItemStack
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace StriderTemperatureChangeEvent {
	function getEntity(): Strider
	function getEntity(): Entity
	function isShivering(): boolean
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface SmallDripleaf extends Dripleaf, Bisected {
}
namespace PlayerShearEntityEvent {
	function getHand(): EquipmentSlot
	function getEntity(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getItem(): ItemStack
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace FurnaceSmeltEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getResult(): ItemStack
	function setResult(arg0: ItemStack): void
	function getHandlers(): HandlerList
	function getSource(): ItemStack
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Rotatable extends BlockData {
	getRotation(): BlockFace
	setRotation(arg0: BlockFace): void
}
declare class PluginCommand extends Command implements PluginIdentifiableCommand {
	getPlugin(): Plugin
	setExecutor(arg0: CommandExecutor): void
	getExecutor(): CommandExecutor
	setTabCompleter(arg0: TabCompleter): void
	getTabCompleter(): TabCompleter
	tabComplete(arg0: CommandSender, arg1: String, arg2: String[]): List
	toString(): String
	execute(arg0: CommandSender, arg1: String, arg2: String[]): boolean
}
namespace ExpBottleEvent {
	function getEntity(): ThrownExpBottle
	function getEntity(): Projectile
	function getEntity(): Entity
	function setExperience(arg0: int): void
	function getExperience(): int
	function getShowEffect(): boolean
	function setShowEffect(arg0: boolean): void
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getHitBlock(): Block
	function getHitBlockFace(): BlockFace
	function getHitEntity(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace BlockIgniteEvent {
	function getPlayer(): Player
	function getIgnitingEntity(): Entity
	function getIgnitingBlock(): Block
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getCause(): IgniteCause
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Nameable {
	getCustomName(): String
	setCustomName(arg0: String): void
}
namespace PlayerDeathEvent {
	function getNewExp(): int
	function setNewExp(arg0: int): void
	function getEntity(): LivingEntity
	function getEntity(): Player
	function getEntity(): Entity
	function getNewLevel(): int
	function setDeathMessage(arg0: String): void
	function getDeathMessage(): String
	function setNewLevel(arg0: int): void
	function getNewTotalExp(): int
	function setNewTotalExp(arg0: int): void
	function getKeepLevel(): boolean
	function setKeepLevel(arg0: boolean): void
	function setKeepInventory(arg0: boolean): void
	function getKeepInventory(): boolean
	function getDrops(): List
	function getDroppedExp(): int
	function setDroppedExp(arg0: int): void
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Wrapper implements Serializable {
	newWrapper(arg0: ConfigurationSerializable): Wrapper
}
declare interface Wolf extends Tameable, Sittable {
	isAngry(): boolean
	setAngry(arg0: boolean): void
	getCollarColor(): DyeColor
	setCollarColor(arg0: DyeColor): void
}
declare interface MetadataValue {
	asInt(): int
	asFloat(): float
	asDouble(): double
	asLong(): long
	asShort(): short
	asByte(): byte
	asBoolean(): boolean
	asString(): String
	getOwningPlugin(): Plugin
	value(): Object
	invalidate(): void
}
declare interface PotionBrewer {
	getEffects(arg0: PotionType, arg1: boolean, arg2: boolean): Collection
	createEffect(arg0: PotionEffectType, arg1: int, arg2: int): PotionEffect
	getEffectsFromDamage(arg0: int): Collection
}
declare class DoubleChest implements InventoryHolder {
	getWorld(): World
	getX(): double
	getY(): double
	getZ(): double
	getInventory(): Inventory
	getLeftSide(): InventoryHolder
	getRightSide(): InventoryHolder
	getLocation(): Location
}
namespace HangingEvent {
	function getEntity(): Hanging
	function isAsynchronous(): boolean
	function getEventName(): String
	function getHandlers(): HandlerList
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface CrossbowMeta extends ItemMeta {
	hasChargedProjectiles(): boolean
	getChargedProjectiles(): List
	setChargedProjectiles(arg0: List): void
	addChargedProjectile(arg0: ItemStack): void
}
declare interface Lidded {
	close(): void
	open(): void
}
declare class CocoaPlant extends MaterialData implements Directional, Attachable {
	$SWITCH_TABLE$org$bukkit$material$CocoaPlant$CocoaPlantSize(): int[]
	getFacing(): BlockFace
	setFacingDirection(arg0: BlockFace): void
	getAttachedFace(): BlockFace
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): Object
	clone(): MaterialData
	clone(): CocoaPlant
	getSize(): CocoaPlantSize
	setSize(arg0: CocoaPlantSize): void
}
declare interface RecipeChoice extends Predicate, Cloneable {
	getItemStack(): ItemStack
	clone(): Object
	clone(): RecipeChoice
	test(arg0: Object): boolean
	test(arg0: ItemStack): boolean
}
declare class Sign extends MaterialData implements Attachable {
	isWallSign(): boolean
	getFacing(): BlockFace
	setFacingDirection(arg0: BlockFace): void
	getAttachedFace(): BlockFace
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): Object
	clone(): Sign
	clone(): MaterialData
}
namespace EntityPickupItemEvent {
	function getEntity(): LivingEntity
	function getEntity(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getRemaining(): int
	function getHandlers(): HandlerList
	function getItem(): Item
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface FaceAttachable extends BlockData {
	getAttachedFace(): AttachedFace
	setAttachedFace(arg0: AttachedFace): void
}
declare interface TileState extends BlockState, PersistentDataHolder {
	getPersistentDataContainer(): PersistentDataContainer
}
declare interface PotionMeta extends ItemMeta {
	hasColor(): boolean
	getColor(): Color
	setBasePotionData(arg0: PotionData): void
	getBasePotionData(): PotionData
	addCustomEffect(arg0: PotionEffect, arg1: boolean): boolean
	removeCustomEffect(arg0: PotionEffectType): boolean
	hasCustomEffect(arg0: PotionEffectType): boolean
	clearCustomEffects(): boolean
	hasCustomEffects(): boolean
	getCustomEffects(): List
	setMainEffect(arg0: PotionEffectType): boolean
	clone(): Object
	clone(): ItemMeta
	clone(): PotionMeta
	setColor(arg0: Color): void
}
declare interface ZombieHorse extends AbstractHorse {
}
namespace SheepRegrowWoolEvent {
	function getEntity(): Entity
	function getEntity(): Sheep
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Sittable {
	isSitting(): boolean
	setSitting(arg0: boolean): void
}
declare interface Giant extends Monster {
}
namespace PlayerPickupArrowEvent {
	function getArrow(): AbstractArrow
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getRemaining(): int
	function getHandlers(): HandlerList
	function getItem(): Item
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface StructureBlock extends BlockData {
	getMode(): Mode
	setMode(arg0: Mode): void
}
declare interface HumanEntity extends LivingEntity, AnimalTamer, InventoryHolder {
	wakeup(arg0: boolean): void
	isBlocking(): boolean
	dropItem(arg0: boolean): boolean
	hasCooldown(arg0: Material): boolean
	getCooldown(arg0: Material): int
	setCooldown(arg0: Material, arg1: int): void
	getSleepTicks(): int
	getBedLocation(): Location
	getGameMode(): GameMode
	setGameMode(arg0: GameMode): void
	isHandRaised(): boolean
	getItemInUse(): ItemStack
	getExpToLevel(): int
	getAttackCooldown(): float
	discoverRecipe(arg0: NamespacedKey): boolean
	discoverRecipes(arg0: Collection): int
	undiscoverRecipe(arg0: NamespacedKey): boolean
	undiscoverRecipes(arg0: Collection): int
	hasDiscoveredRecipe(arg0: NamespacedKey): boolean
	getDiscoveredRecipes(): Set
	getShoulderEntityLeft(): Entity
	setShoulderEntityLeft(arg0: Entity): void
	getShoulderEntityRight(): Entity
	setShoulderEntityRight(arg0: Entity): void
	getExhaustion(): float
	setExhaustion(arg0: float): void
	getSaturation(): float
	setSaturation(arg0: float): void
	getFoodLevel(): int
	setFoodLevel(arg0: int): void
	getSaturatedRegenRate(): int
	setSaturatedRegenRate(arg0: int): void
	getUnsaturatedRegenRate(): int
	setUnsaturatedRegenRate(arg0: int): void
	getStarvationRate(): int
	setStarvationRate(arg0: int): void
	getInventory(): Inventory
	getInventory(): PlayerInventory
	getEnderChest(): Inventory
	getMainHand(): MainHand
	setWindowProperty(arg0: Property, arg1: int): boolean
	getOpenInventory(): InventoryView
	openInventory(arg0: Inventory): InventoryView
	openInventory(arg0: InventoryView): void
	openWorkbench(arg0: Location, arg1: boolean): InventoryView
	openEnchanting(arg0: Location, arg1: boolean): InventoryView
	openMerchant(arg0: Villager, arg1: boolean): InventoryView
	openMerchant(arg0: Merchant, arg1: boolean): InventoryView
	closeInventory(): void
	getItemInHand(): ItemStack
	setItemInHand(arg0: ItemStack): void
	getItemOnCursor(): ItemStack
	setItemOnCursor(arg0: ItemStack): void
	getName(): String
	sleep(arg0: Location, arg1: boolean): boolean
}
declare interface Team {
	getPrefix(): String
	setPrefix(arg0: String): void
	getSuffix(): String
	setSuffix(arg0: String): void
	getPlayers(): Set
	addPlayer(arg0: OfflinePlayer): void
	hasPlayer(arg0: OfflinePlayer): boolean
	hasEntry(arg0: String): boolean
	getOption(arg0: Option): OptionStatus
	setOption(arg0: Option, arg1: OptionStatus): void
	getColor(): ChatColor
	setDisplayName(arg0: String): void
	allowFriendlyFire(): boolean
	setAllowFriendlyFire(arg0: boolean): void
	canSeeFriendlyInvisibles(): boolean
	getNameTagVisibility(): NameTagVisibility
	setNameTagVisibility(arg0: NameTagVisibility): void
	getScoreboard(): Scoreboard
	removePlayer(arg0: OfflinePlayer): boolean
	removeEntry(arg0: String): boolean
	setCanSeeFriendlyInvisibles(arg0: boolean): void
	getName(): String
	addEntry(arg0: String): void
	getSize(): int
	getEntries(): Set
	setColor(arg0: ChatColor): void
	getDisplayName(): String
	unregister(): void
}
declare class NamespacedKey {
	minecraft(arg0: String): NamespacedKey
	randomKey(): NamespacedKey
	fromString(arg0: String): NamespacedKey
	fromString(arg0: String, arg1: Plugin): NamespacedKey
	getNamespace(): String
	equals(arg0: Object): boolean
	toString(): String
	hashCode(): int
	getKey(): String
}
declare class ManuallyAbandonedConversationCanceller implements ConversationCanceller {
	setConversation(arg0: Conversation): void
	cancelBasedOnInput(arg0: ConversationContext, arg1: String): boolean
	clone(): ConversationCanceller
	clone(): Object
}
declare interface GrindstoneInventory extends Inventory {
}
declare interface BlockState extends Metadatable {
	getData(): MaterialData
	setType(arg0: Material): void
	getBlock(): Block
	getWorld(): World
	getX(): int
	getY(): int
	getZ(): int
	getChunk(): Chunk
	setData(arg0: MaterialData): void
	getRawData(): byte
	setRawData(arg0: byte): void
	isPlaced(): boolean
	setBlockData(arg0: BlockData): void
	getLightLevel(): byte
	getBlockData(): BlockData
	update(arg0: boolean, arg1: boolean): boolean
	update(arg0: boolean): boolean
	update(): boolean
	getLocation(arg0: Location): Location
	getLocation(): Location
	getType(): Material
}
namespace PlayerDropItemEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getItemDrop(): Item
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface PolarBear extends Animals {
}
namespace PlayerItemHeldEvent {
	function getNewSlot(): int
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getPreviousSlot(): int
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace PlayerBucketEmptyEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getBucket(): Material
	function getBlock(): Block
	function getBlockFace(): BlockFace
	function getItemStack(): ItemStack
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function setItemStack(arg0: ItemStack): void
	function getBlockClicked(): Block
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Coal extends MaterialData {
	setType(arg0: CoalType): void
	toString(): String
	clone(): Object
	clone(): Coal
	clone(): MaterialData
	getType(): CoalType
}
namespace PlayerInteractAtEntityEvent {
	function getHandlerList(): HandlerList
	function getClickedPosition(): Vector
	function getHandlers(): HandlerList
	function getHand(): EquipmentSlot
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getRightClicked(): Entity
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace FoodLevelChangeEvent {
	function getEntity(): HumanEntity
	function getEntity(): Entity
	function getFoodLevel(): int
	function setFoodLevel(arg0: int): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getItem(): ItemStack
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class MaterialChoice implements RecipeChoice {
	getChoices(): List
	getItemStack(): ItemStack
	equals(arg0: Object): boolean
	toString(): String
	hashCode(): int
	clone(): Object
	clone(): RecipeChoice
	clone(): MaterialChoice
	test(arg0: Object): boolean
	test(arg0: ItemStack): boolean
}
declare interface Metadatable {
	setMetadata(arg0: String, arg1: MetadataValue): void
	removeMetadata(arg0: String, arg1: Plugin): void
	hasMetadata(arg0: String): boolean
	getMetadata(arg0: String): List
}
namespace PlayerEvent {
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function getHandlers(): HandlerList
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace ServiceEvent {
	function getProvider(): RegisteredServiceProvider
	function isAsynchronous(): boolean
	function getEventName(): String
	function getHandlers(): HandlerList
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface EnderPearl extends ThrowableProjectile {
}
namespace PlayerChangedWorldEvent {
	function getFrom(): World
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface BrewingStand extends Container {
	getBrewingTime(): int
	setBrewingTime(arg0: int): void
	getInventory(): BrewerInventory
	getInventory(): Inventory
	getSnapshotInventory(): Inventory
	getSnapshotInventory(): BrewerInventory
	setFuelLevel(arg0: int): void
	getFuelLevel(): int
}
declare interface Lantern extends Waterlogged {
	isHanging(): boolean
	setHanging(arg0: boolean): void
}
declare interface ElderGuardian extends Guardian {
}
declare interface LoomInventory extends Inventory {
}
declare interface BrewerInventory extends Inventory {
	setFuel(arg0: ItemStack): void
	getHolder(): BrewingStand
	getHolder(): InventoryHolder
	getFuel(): ItemStack
	getIngredient(): ItemStack
	setIngredient(arg0: ItemStack): void
}
namespace InventoryEvent {
	function getViewers(): List
	function getView(): InventoryView
	function getInventory(): Inventory
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace PlayerPortalEvent {
	function getCanCreatePortal(): boolean
	function setCanCreatePortal(arg0: boolean): void
	function setCreationRadius(arg0: int): void
	function getCreationRadius(): int
	function setSearchRadius(arg0: int): void
	function getSearchRadius(): int
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getCause(): TeleportCause
	function getFrom(): Location
	function setFrom(arg0: Location): void
	function getTo(): Location
	function setTo(arg0: Location): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Explosive extends Entity {
	getYield(): float
	setYield(arg0: float): void
	setIsIncendiary(arg0: boolean): void
	isIncendiary(): boolean
}
declare class EnderChest extends DirectionalContainer {
	clone(): Object
	clone(): MaterialData
	clone(): DirectionalContainer
	clone(): EnderChest
}
namespace PlayerMoveEvent {
	function getFrom(): Location
	function setFrom(arg0: Location): void
	function getTo(): Location
	function setTo(arg0: Location): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Drowned extends Zombie {
}
declare interface Enderman extends Monster {
	getCarriedMaterial(): MaterialData
	setCarriedMaterial(arg0: MaterialData): void
	getCarriedBlock(): BlockData
	setCarriedBlock(arg0: BlockData): void
}
declare interface Jigsaw extends BlockData {
	getOrientation(): Orientation
	setOrientation(arg0: Orientation): void
}
declare class SmoothBrick extends TexturedMaterial {
	getTextures(): List
	clone(): MaterialData
	clone(): Object
	clone(): TexturedMaterial
	clone(): SmoothBrick
}
declare interface StonecutterInventory extends Inventory {
}
declare class Potion {
	setType(arg0: PotionType): void
	getEffects(): Collection
	splash(): Potion
	setSplash(arg0: boolean): void
	extend(): Potion
	getBrewer(): PotionBrewer
	isSplash(): boolean
	fromDamage(arg0: int): Potion
	getNameId(): int
	toItemStack(arg0: int): ItemStack
	setHasExtendedDuration(arg0: boolean): void
	hasExtendedDuration(): boolean
	toDamageValue(): short
	fromItemStack(arg0: ItemStack): Potion
	setPotionBrewer(arg0: PotionBrewer): void
	equals(arg0: Object): boolean
	hashCode(): int
	apply(arg0: LivingEntity): void
	apply(arg0: ItemStack): void
	getType(): PotionType
	getLevel(): int
	setLevel(arg0: int): void
}
namespace PlayerToggleSneakEvent {
	function isSneaking(): boolean
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class PluginCommandYamlParser {
	parse(arg0: Plugin): List
}
declare interface BlockStateMeta extends ItemMeta {
	hasBlockState(): boolean
	getBlockState(): BlockState
	setBlockState(arg0: BlockState): void
}
namespace EntityExhaustionEvent {
	function getEntity(): Entity
	function getEntity(): HumanEntity
	function getExhaustion(): float
	function setExhaustion(arg0: float): void
	function getExhaustionReason(): ExhaustionReason
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Gate extends MaterialData implements Directional, Openable {
	getFacing(): BlockFace
	setOpen(arg0: boolean): void
	setFacingDirection(arg0: BlockFace): void
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): Gate
	clone(): Object
	clone(): MaterialData
	isOpen(): boolean
}
declare interface NPC extends Creature {
}
declare interface EnderSignal extends Entity {
	setItem(arg0: ItemStack): void
	getTargetLocation(): Location
	setTargetLocation(arg0: Location): void
	getDropItem(): boolean
	setDropItem(arg0: boolean): void
	getDespawnTimer(): int
	setDespawnTimer(arg0: int): void
	getItem(): ItemStack
}
declare interface Entity extends Metadatable, CommandSender, Nameable, PersistentDataHolder {
	getHeight(): double
	getWidth(): double
	isOnGround(): boolean
	isInWater(): boolean
	teleport(arg0: Entity, arg1: TeleportCause): boolean
	teleport(arg0: Location, arg1: TeleportCause): boolean
	teleport(arg0: Entity): boolean
	teleport(arg0: Location): boolean
	isDead(): boolean
	isValid(): boolean
	getServer(): Server
	eject(): boolean
	playEffect(arg0: EntityEffect): void
	getVehicle(): Entity
	setGlowing(arg0: boolean): void
	isGlowing(): boolean
	isSilent(): boolean
	setSilent(arg0: boolean): void
	hasGravity(): boolean
	setGravity(arg0: boolean): void
	getPose(): Pose
	spigot(): Spigot
	spigot(): Spigot
	getWorld(): World
	getFacing(): BlockFace
	setVelocity(arg0: Vector): void
	getVelocity(): Vector
	getBoundingBox(): BoundingBox
	setRotation(arg0: float, arg1: float): void
	getNearbyEntities(arg0: double, arg1: double, arg2: double): List
	getEntityId(): int
	getFireTicks(): int
	getMaxFireTicks(): int
	setFireTicks(arg0: int): void
	setVisualFire(arg0: boolean): void
	isVisualFire(): boolean
	getFreezeTicks(): int
	getMaxFreezeTicks(): int
	setFreezeTicks(arg0: int): void
	isPersistent(): boolean
	setPersistent(arg0: boolean): void
	getPassenger(): Entity
	setPassenger(arg0: Entity): boolean
	getPassengers(): List
	addPassenger(arg0: Entity): boolean
	removePassenger(arg0: Entity): boolean
	getFallDistance(): float
	setFallDistance(arg0: float): void
	setLastDamageCause(arg0: EntityDamageEvent): void
	getLastDamageCause(): EntityDamageEvent
	getUniqueId(): UUID
	getTicksLived(): int
	setTicksLived(arg0: int): void
	isInsideVehicle(): boolean
	leaveVehicle(): boolean
	setCustomNameVisible(arg0: boolean): void
	isCustomNameVisible(): boolean
	setInvulnerable(arg0: boolean): void
	isInvulnerable(): boolean
	getPortalCooldown(): int
	setPortalCooldown(arg0: int): void
	getScoreboardTags(): Set
	addScoreboardTag(arg0: String): boolean
	removeScoreboardTag(arg0: String): boolean
	getPistonMoveReaction(): PistonMoveReaction
	remove(): void
	isEmpty(): boolean
	getLocation(arg0: Location): Location
	getLocation(): Location
	getType(): EntityType
	isFrozen(): boolean
}
namespace FurnaceExtractEvent {
	function getPlayer(): Player
	function getItemAmount(): int
	function getItemType(): Material
	function getExpToDrop(): int
	function setExpToDrop(arg0: int): void
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Lectern extends Directional, Powerable {
	hasBook(): boolean
}
declare class BlockVector extends Vector {
	deserialize(arg0: Map): BlockVector
	equals(arg0: Object): boolean
	hashCode(): int
	clone(): BlockVector
	clone(): Vector
	clone(): Object
}
declare interface OfflinePlayer extends ServerOperator, AnimalTamer, ConfigurationSerializable {
	isBanned(): boolean
	getPlayer(): Player
	isOnline(): boolean
	isWhitelisted(): boolean
	setWhitelisted(arg0: boolean): void
	getFirstPlayed(): long
	getLastPlayed(): long
	hasPlayedBefore(): boolean
	getBedSpawnLocation(): Location
	incrementStatistic(arg0: Statistic, arg1: int): void
	incrementStatistic(arg0: Statistic, arg1: EntityType): void
	incrementStatistic(arg0: Statistic, arg1: Material): void
	incrementStatistic(arg0: Statistic, arg1: Material, arg2: int): void
	incrementStatistic(arg0: Statistic, arg1: EntityType, arg2: int): void
	incrementStatistic(arg0: Statistic): void
	decrementStatistic(arg0: Statistic, arg1: EntityType, arg2: int): void
	decrementStatistic(arg0: Statistic, arg1: Material): void
	decrementStatistic(arg0: Statistic, arg1: Material, arg2: int): void
	decrementStatistic(arg0: Statistic, arg1: EntityType): void
	decrementStatistic(arg0: Statistic, arg1: int): void
	decrementStatistic(arg0: Statistic): void
	setStatistic(arg0: Statistic, arg1: EntityType, arg2: int): void
	setStatistic(arg0: Statistic, arg1: Material, arg2: int): void
	setStatistic(arg0: Statistic, arg1: int): void
	getStatistic(arg0: Statistic, arg1: Material): int
	getStatistic(arg0: Statistic, arg1: EntityType): int
	getStatistic(arg0: Statistic): int
	getUniqueId(): UUID
	getName(): String
}
declare class InventoryView {
	getPlayer(): HumanEntity
	setItem(arg0: int, arg1: ItemStack): void
	getCursor(): ItemStack
	setCursor(arg0: ItemStack): void
	countSlots(): int
	getTitle(): String
	getInventory(arg0: int): Inventory
	getTopInventory(): Inventory
	convertSlot(arg0: int): int
	getSlotType(arg0: int): SlotType
	getBottomInventory(): Inventory
	$SWITCH_TABLE$org$bukkit$event$inventory$InventoryType(): int[]
	setProperty(arg0: Property, arg1: int): boolean
	close(): void
	getType(): InventoryType
	getItem(arg0: int): ItemStack
}
namespace VehicleUpdateEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getVehicle(): Vehicle
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface FallingBlock extends Entity {
	getDropItem(): boolean
	setDropItem(arg0: boolean): void
	getMaterial(): Material
	getBlockData(): BlockData
	canHurtEntities(): boolean
	setHurtEntities(arg0: boolean): void
}
namespace VehicleMoveEvent {
	function getFrom(): Location
	function getTo(): Location
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getVehicle(): Vehicle
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Panda extends Animals {
	getMainGene(): Gene
	setMainGene(arg0: Gene): void
	getHiddenGene(): Gene
	setHiddenGene(arg0: Gene): void
}
declare class NumericPrompt extends ValidatingPrompt {
	isInputValid(arg0: ConversationContext, arg1: String): boolean
	acceptValidatedInput(arg0: ConversationContext, arg1: String): Prompt
	acceptValidatedInput(arg0: ConversationContext, arg1: Number): Prompt
	getFailedValidationText(arg0: ConversationContext, arg1: Number): String
	getFailedValidationText(arg0: ConversationContext, arg1: String): String
	isNumberValid(arg0: ConversationContext, arg1: Number): boolean
	getInputNotNumericText(arg0: ConversationContext, arg1: String): String
}
declare interface Mob extends LivingEntity, Lootable {
	setAware(arg0: boolean): void
	isAware(): boolean
	getTarget(): LivingEntity
	setTarget(arg0: LivingEntity): void
}
namespace CreeperPowerEvent {
	function getEntity(): Entity
	function getEntity(): Creeper
	function getLightning(): LightningStrike
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getCause(): PowerCause
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Ageable extends BlockData {
	getAge(): int
	setAge(arg0: int): void
	getMaximumAge(): int
}
declare interface PluginMessageListener {
	onPluginMessageReceived(arg0: String, arg1: Player, arg2: byte[]): void
}
declare interface Beacon extends TileState, Lockable, Nameable {
	getTier(): int
	getEntitiesInRange(): Collection
	getPrimaryEffect(): PotionEffect
	setPrimaryEffect(arg0: PotionEffectType): void
	getSecondaryEffect(): PotionEffect
	setSecondaryEffect(arg0: PotionEffectType): void
}
namespace EntityShootBowEvent {
	function getBow(): ItemStack
	function getForce(): float
	function getHand(): EquipmentSlot
	function getEntity(): Entity
	function getEntity(): LivingEntity
	function getConsumable(): ItemStack
	function getProjectile(): Entity
	function setProjectile(arg0: Entity): void
	function setConsumeItem(arg0: boolean): void
	function shouldConsumeItem(): boolean
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Profession extends Enum implements Keyed {
	values(): Profession[]
	valueOf(arg0: String): Profession
	getKey(): NamespacedKey
}
declare class ConfigurationOptions {
	copyDefaults(arg0: boolean): ConfigurationOptions
	copyDefaults(): boolean
	configuration(): Configuration
	pathSeparator(): char
	pathSeparator(arg0: char): ConfigurationOptions
}
declare class FurnaceRecipe extends CookingRecipe {
	setInputChoice(arg0: RecipeChoice): FurnaceRecipe
	setInputChoice(arg0: RecipeChoice): CookingRecipe
	setInput(arg0: Material, arg1: int): FurnaceRecipe
	setInput(arg0: Material): CookingRecipe
	setInput(arg0: MaterialData): FurnaceRecipe
	setInput(arg0: Material): FurnaceRecipe
}
declare class SmokingRecipe extends CookingRecipe {
}
namespace PlayerEggThrowEvent {
	function getEgg(): Egg
	function isHatching(): boolean
	function setHatching(arg0: boolean): void
	function getHatchingType(): EntityType
	function setHatchingType(arg0: EntityType): void
	function getNumHatches(): byte
	function setNumHatches(arg0: byte): void
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Messenger {
	isReservedChannel(arg0: String): boolean
	getOutgoingChannels(arg0: Plugin): Set
	getOutgoingChannels(): Set
	getIncomingChannels(): Set
	getIncomingChannels(arg0: Plugin): Set
	isRegistrationValid(arg0: PluginMessageListenerRegistration): boolean
	dispatchIncomingMessage(arg0: Player, arg1: String, arg2: byte[]): void
	registerOutgoingPluginChannel(arg0: Plugin, arg1: String): void
	unregisterOutgoingPluginChannel(arg0: Plugin): void
	unregisterOutgoingPluginChannel(arg0: Plugin, arg1: String): void
	registerIncomingPluginChannel(arg0: Plugin, arg1: String, arg2: PluginMessageListener): PluginMessageListenerRegistration
	unregisterIncomingPluginChannel(arg0: Plugin): void
	unregisterIncomingPluginChannel(arg0: Plugin, arg1: String): void
	unregisterIncomingPluginChannel(arg0: Plugin, arg1: String, arg2: PluginMessageListener): void
	getIncomingChannelRegistrations(arg0: Plugin): Set
	getIncomingChannelRegistrations(arg0: String): Set
	getIncomingChannelRegistrations(arg0: Plugin, arg1: String): Set
	isIncomingChannelRegistered(arg0: Plugin, arg1: String): boolean
	isOutgoingChannelRegistered(arg0: Plugin, arg1: String): boolean
}
namespace StructureGrowEvent {
	function getSpecies(): TreeType
	function getPlayer(): Player
	function getBlocks(): List
	function isFromBonemeal(): boolean
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getLocation(): Location
	function getHandlers(): HandlerList
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class PluginBase implements Plugin {
	getName(): String
	equals(arg0: Object): boolean
	hashCode(): int
}
namespace RaidTriggerEvent {
	function getPlayer(): Player
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getRaid(): Raid
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace PlayerPickupItemEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getRemaining(): int
	function getHandlers(): HandlerList
	function getItem(): Item
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface InventoryHolder {
	getInventory(): Inventory
}
declare interface BossBar {
	isVisible(): boolean
	setVisible(arg0: boolean): void
	getPlayers(): List
	addPlayer(arg0: Player): void
	getTitle(): String
	setTitle(arg0: String): void
	getStyle(): BarStyle
	setStyle(arg0: BarStyle): void
	removeFlag(arg0: BarFlag): void
	hasFlag(arg0: BarFlag): boolean
	show(): void
	hide(): void
	getColor(): BarColor
	removePlayer(arg0: Player): void
	setProgress(arg0: double): void
	getProgress(): double
	removeAll(): void
	addFlag(arg0: BarFlag): void
	setColor(arg0: BarColor): void
}
namespace PlayerPreLoginEvent {
	function getUniqueId(): UUID
	function getHandlerList(): HandlerList
	function getKickMessage(): String
	function setKickMessage(arg0: String): void
	function getName(): String
	function disallow(arg0: Result, arg1: String): void
	function allow(): void
	function getAddress(): InetAddress
	function getResult(): Result
	function setResult(arg0: Result): void
	function getHandlers(): HandlerList
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace RaidStopEvent {
	function getHandlerList(): HandlerList
	function getReason(): Reason
	function getHandlers(): HandlerList
	function getRaid(): Raid
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface BundleMeta extends ItemMeta {
	hasItems(): boolean
	getItems(): List
	setItems(arg0: List): void
	addItem(arg0: ItemStack): void
}
declare interface Plugin extends TabExecutor {
	getConfig(): FileConfiguration
	getServer(): Server
	saveConfig(): void
	onDisable(): void
	onLoad(): void
	onEnable(): void
	isNaggable(): boolean
	isEnabled(): boolean
	getDescription(): PluginDescriptionFile
	getDataFolder(): File
	saveDefaultConfig(): void
	saveResource(arg0: String, arg1: boolean): void
	reloadConfig(): void
	getPluginLoader(): PluginLoader
	setNaggable(arg0: boolean): void
	getDefaultWorldGenerator(arg0: String, arg1: String): ChunkGenerator
	getName(): String
	getResource(arg0: String): InputStream
	getLogger(): Logger
}
declare interface LlamaSpit extends Projectile {
}
namespace BlockReceiveGameEvent {
	function getEvent(): GameEvent
	function getEntity(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Salmon extends Fish {
}
declare interface Turtle extends Animals {
}
declare interface Cocoa extends Ageable, Directional {
}
declare interface Player extends HumanEntity, Conversable, OfflinePlayer, PluginMessageRecipient {
	canSee(arg0: Player): boolean
	isOnGround(): boolean
	playEffect(arg0: Location, arg1: Effect, arg2: int): void
	playEffect(arg0: Location, arg1: Effect, arg2: Object): void
	spigot(): Spigot
	spigot(): Spigot
	spigot(): Spigot
	getLocale(): String
	kickPlayer(arg0: String): void
	chat(arg0: String): void
	saveData(): void
	loadData(): void
	playNote(arg0: Location, arg1: Instrument, arg2: Note): void
	playNote(arg0: Location, arg1: byte, arg2: byte): void
	playSound(arg0: Location, arg1: String, arg2: SoundCategory, arg3: float, arg4: float): void
	playSound(arg0: Location, arg1: Sound, arg2: SoundCategory, arg3: float, arg4: float): void
	playSound(arg0: Location, arg1: String, arg2: float, arg3: float): void
	playSound(arg0: Location, arg1: Sound, arg2: float, arg3: float): void
	stopSound(arg0: String): void
	stopSound(arg0: Sound, arg1: SoundCategory): void
	stopSound(arg0: Sound): void
	stopSound(arg0: String, arg1: SoundCategory): void
	breakBlock(arg0: Block): boolean
	sendMap(arg0: MapView): void
	giveExp(arg0: int): void
	getExp(): float
	setExp(arg0: float): void
	hidePlayer(arg0: Plugin, arg1: Player): void
	hidePlayer(arg0: Player): void
	showPlayer(arg0: Plugin, arg1: Player): void
	showPlayer(arg0: Player): void
	setFlying(arg0: boolean): void
	sendTitle(arg0: String, arg1: String, arg2: int, arg3: int, arg4: int): void
	sendTitle(arg0: String, arg1: String): void
	resetTitle(): void
	getPing(): int
	openBook(arg0: ItemStack): void
	isSneaking(): boolean
	isFlying(): boolean
	getBedSpawnLocation(): Location
	getPlayerListName(): String
	setPlayerListName(arg0: String): void
	getPlayerListHeader(): String
	getPlayerListFooter(): String
	setPlayerListHeader(arg0: String): void
	getAllowFlight(): boolean
	isSprinting(): boolean
	setDisplayName(arg0: String): void
	sendRawMessage(arg0: String): void
	setPlayerListHeaderFooter(arg0: String, arg1: String): void
	setCompassTarget(arg0: Location): void
	setPlayerListFooter(arg0: String): void
	performCommand(arg0: String): boolean
	getCompassTarget(): Location
	getScoreboard(): Scoreboard
	setSneaking(arg0: boolean): void
	setSprinting(arg0: boolean): void
	setSleepingIgnored(arg0: boolean): void
	isSleepingIgnored(): boolean
	setBedSpawnLocation(arg0: Location, arg1: boolean): void
	setBedSpawnLocation(arg0: Location): void
	sendBlockChange(arg0: Location, arg1: BlockData): void
	sendBlockChange(arg0: Location, arg1: Material, arg2: byte): void
	sendBlockDamage(arg0: Location, arg1: float): void
	sendChunkChange(arg0: Location, arg1: int, arg2: int, arg3: int, arg4: byte[]): boolean
	sendSignChange(arg0: Location, arg1: String[]): void
	sendSignChange(arg0: Location, arg1: String[], arg2: DyeColor): void
	updateInventory(): void
	setPlayerTime(arg0: long, arg1: boolean): void
	getPlayerTime(): long
	getPlayerTimeOffset(): long
	isPlayerTimeRelative(): boolean
	resetPlayerTime(): void
	setPlayerWeather(arg0: WeatherType): void
	getPlayerWeather(): WeatherType
	resetPlayerWeather(): void
	giveExpLevels(arg0: int): void
	getTotalExperience(): int
	setTotalExperience(arg0: int): void
	sendExperienceChange(arg0: float, arg1: int): void
	sendExperienceChange(arg0: float): void
	setAllowFlight(arg0: boolean): void
	setFlySpeed(arg0: float): void
	setWalkSpeed(arg0: float): void
	getFlySpeed(): float
	getWalkSpeed(): float
	setTexturePack(arg0: String): void
	setResourcePack(arg0: String, arg1: byte[]): void
	setResourcePack(arg0: String): void
	setScoreboard(arg0: Scoreboard): void
	isHealthScaled(): boolean
	setHealthScaled(arg0: boolean): void
	setHealthScale(arg0: double): void
	getHealthScale(): double
	getSpectatorTarget(): Entity
	setSpectatorTarget(arg0: Entity): void
	spawnParticle(arg0: Particle, arg1: double, arg2: double, arg3: double, arg4: int, arg5: double, arg6: double, arg7: double, arg8: double): void
	spawnParticle(arg0: Particle, arg1: Location, arg2: int, arg3: double, arg4: double, arg5: double, arg6: double): void
	spawnParticle(arg0: Particle, arg1: double, arg2: double, arg3: double, arg4: int, arg5: double, arg6: double, arg7: double, arg8: Object): void
	spawnParticle(arg0: Particle, arg1: Location, arg2: int, arg3: double, arg4: double, arg5: double, arg6: double, arg7: Object): void
	spawnParticle(arg0: Particle, arg1: double, arg2: double, arg3: double, arg4: int, arg5: double, arg6: double, arg7: double, arg8: double, arg9: Object): void
	spawnParticle(arg0: Particle, arg1: double, arg2: double, arg3: double, arg4: int, arg5: Object): void
	spawnParticle(arg0: Particle, arg1: Location, arg2: int, arg3: Object): void
	spawnParticle(arg0: Particle, arg1: double, arg2: double, arg3: double, arg4: int): void
	spawnParticle(arg0: Particle, arg1: Location, arg2: int): void
	spawnParticle(arg0: Particle, arg1: Location, arg2: int, arg3: double, arg4: double, arg5: double, arg6: Object): void
	spawnParticle(arg0: Particle, arg1: double, arg2: double, arg3: double, arg4: int, arg5: double, arg6: double, arg7: double): void
	spawnParticle(arg0: Particle, arg1: Location, arg2: int, arg3: double, arg4: double, arg5: double): void
	getAdvancementProgress(arg0: Advancement): AdvancementProgress
	getClientViewDistance(): int
	updateCommands(): void
	getAddress(): InetSocketAddress
	getLevel(): int
	setLevel(arg0: int): void
	getDisplayName(): String
}
declare class NoiseGenerator {
	noise(arg0: double, arg1: int, arg2: double, arg3: double, arg4: boolean): double
	noise(arg0: double, arg1: int, arg2: double, arg3: double): double
	noise(arg0: double, arg1: double, arg2: double, arg3: int, arg4: double, arg5: double, arg6: boolean): double
	noise(arg0: double, arg1: double): double
	noise(arg0: double, arg1: double, arg2: int, arg3: double, arg4: double): double
	noise(arg0: double, arg1: double, arg2: int, arg3: double, arg4: double, arg5: boolean): double
	noise(arg0: double, arg1: double, arg2: double, arg3: int, arg4: double, arg5: double): double
	noise(arg0: double): double
	noise(arg0: double, arg1: double, arg2: double): double
	fade(arg0: double): double
	grad(arg0: int, arg1: double, arg2: double, arg3: double): double
	lerp(arg0: double, arg1: double, arg2: double): double
	floor(arg0: double): int
}
declare interface Scoreboard {
	getScores(arg0: OfflinePlayer): Set
	getScores(arg0: String): Set
	getTeam(arg0: String): Team
	getTeams(): Set
	clearSlot(arg0: DisplaySlot): void
	getPlayers(): Set
	registerNewObjective(arg0: String, arg1: String): Objective
	registerNewObjective(arg0: String, arg1: String, arg2: String): Objective
	registerNewObjective(arg0: String, arg1: String, arg2: String, arg3: RenderType): Objective
	getObjective(arg0: String): Objective
	getObjective(arg0: DisplaySlot): Objective
	getObjectivesByCriteria(arg0: String): Set
	getObjectives(): Set
	resetScores(arg0: OfflinePlayer): void
	resetScores(arg0: String): void
	getPlayerTeam(arg0: OfflinePlayer): Team
	getEntryTeam(arg0: String): Team
	registerNewTeam(arg0: String): Team
	getEntries(): Set
}
declare interface UnsafeValues {
	toLegacy(arg0: Material): Material
	fromLegacy(arg0: Material, arg1: byte): BlockData
	fromLegacy(arg0: MaterialData, arg1: boolean): Material
	fromLegacy(arg0: MaterialData): Material
	fromLegacy(arg0: Material): Material
	getDataVersion(): int
	getMaterial(arg0: String, arg1: int): Material
	modifyItemStack(arg0: ItemStack, arg1: String): ItemStack
	checkSupported(arg0: PluginDescriptionFile): void
	processClass(arg0: PluginDescriptionFile, arg1: String, arg2: byte[]): byte[]
	loadAdvancement(arg0: NamespacedKey, arg1: String): Advancement
	removeAdvancement(arg0: NamespacedKey): boolean
}
declare class MessagePrompt implements Prompt {
	blocksForInput(arg0: ConversationContext): boolean
	acceptInput(arg0: ConversationContext, arg1: String): Prompt
	getNextPrompt(arg0: ConversationContext): Prompt
}
declare class MapRenderer {
	render(arg0: MapView, arg1: MapCanvas, arg2: Player): void
	isContextual(): boolean
	initialize(arg0: MapView): void
}
declare interface Boat extends Vehicle {
	getMaxSpeed(): double
	setMaxSpeed(arg0: double): void
	getWoodType(): TreeSpecies
	setWoodType(arg0: TreeSpecies): void
	getOccupiedDeceleration(): double
	setOccupiedDeceleration(arg0: double): void
	getUnoccupiedDeceleration(): double
	setUnoccupiedDeceleration(arg0: double): void
	getWorkOnLand(): boolean
	setWorkOnLand(arg0: boolean): void
}
declare interface BlastFurnace extends Furnace {
}
declare interface ItemFactory {
	asMetaFor(arg0: ItemMeta, arg1: ItemStack): ItemMeta
	asMetaFor(arg0: ItemMeta, arg1: Material): ItemMeta
	getItemMeta(arg0: Material): ItemMeta
	isApplicable(arg0: ItemMeta, arg1: ItemStack): boolean
	isApplicable(arg0: ItemMeta, arg1: Material): boolean
	updateMaterial(arg0: ItemMeta, arg1: Material): Material
	getDefaultLeatherColor(): Color
	equals(arg0: ItemMeta, arg1: ItemMeta): boolean
}
namespace InventoryInteractEvent {
	function getWhoClicked(): HumanEntity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getResult(): Result
	function setResult(arg0: Result): void
	function getViewers(): List
	function getView(): InventoryView
	function getInventory(): Inventory
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Stray extends AbstractSkeleton {
}
declare interface LargeFireball extends SizedFireball {
}
declare interface Villager extends AbstractVillager {
	shakeHead(): void
	wakeup(): void
	getProfession(): Profession
	setProfession(arg0: Profession): void
	getVillagerType(): Type
	setVillagerType(arg0: Type): void
	getVillagerLevel(): int
	setVillagerLevel(arg0: int): void
	getVillagerExperience(): int
	setVillagerExperience(arg0: int): void
	sleep(arg0: Location): boolean
}
namespace FluidLevelChangeEvent {
	function getNewData(): BlockData
	function setNewData(arg0: BlockData): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface PluginMessageRecipient {
	sendPluginMessage(arg0: Plugin, arg1: String, arg2: byte[]): void
	getListeningPluginChannels(): Set
}
declare class Crops extends MaterialData {
	$SWITCH_TABLE$org$bukkit$Material(): int[]
	toString(): String
	clone(): Object
	clone(): Crops
	clone(): MaterialData
	getState(): CropState
	setState(arg0: CropState): void
}
namespace BrewEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getContents(): BrewerInventory
	function getFuelLevel(): int
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace PlayerArmorStandManipulateEvent {
	function getHandlerList(): HandlerList
	function getRightClicked(): ArmorStand
	function getRightClicked(): Entity
	function getPlayerItem(): ItemStack
	function getArmorStandItem(): ItemStack
	function getSlot(): EquipmentSlot
	function getHandlers(): HandlerList
	function getHand(): EquipmentSlot
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace PlayerExpChangeEvent {
	function getAmount(): int
	function setAmount(arg0: int): void
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Vibration {
	getOrigin(): Location
	getDestination(): Destination
	getArrivalTime(): int
}
namespace BlockDropItemEvent {
	function getPlayer(): Player
	function getItems(): List
	function getBlockState(): BlockState
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface BukkitTask {
	getTaskId(): int
	cancel(): void
	isCancelled(): boolean
	getOwner(): Plugin
	isSync(): boolean
}
declare interface Smoker extends Furnace {
}
declare class Command {
	getLabel(): String
	setLabel(arg0: String): boolean
	getAliases(): List
	getUsage(): String
	setAliases(arg0: List): Command
	setUsage(arg0: String): Command
	tabComplete0(arg0: CommandSender, arg1: String, arg2: String[], arg3: Location): List
	testPermissionSilent(arg0: CommandSender): boolean
	allowChangesFrom(arg0: CommandMap): boolean
	getPermissionMessage(): String
	getDescription(): String
	setDescription(arg0: String): Command
	setPermissionMessage(arg0: String): Command
	broadcastCommandMessage(arg0: CommandSender, arg1: String, arg2: boolean): void
	broadcastCommandMessage(arg0: CommandSender, arg1: String): void
	tabComplete(arg0: CommandSender, arg1: String, arg2: String[], arg3: Location): List
	tabComplete(arg0: CommandSender, arg1: String, arg2: String[]): List
	testPermission(arg0: CommandSender): boolean
	getName(): String
	toString(): String
	isRegistered(): boolean
	register(arg0: CommandMap): boolean
	execute(arg0: CommandSender, arg1: String, arg2: String[]): boolean
	setName(arg0: String): boolean
	setPermission(arg0: String): void
	getPermission(): String
	unregister(arg0: CommandMap): boolean
}
declare class ExtendedRails extends Rails {
	isCurve(): boolean
	setDirection(arg0: BlockFace, arg1: boolean): void
	getConvertedData(): byte
	clone(): MaterialData
	clone(): Object
	clone(): Rails
	clone(): ExtendedRails
}
declare interface Parrot extends Tameable, Sittable {
	setVariant(arg0: Variant): void
	getVariant(): Variant
}
namespace PrepareItemEnchantEvent {
	function getOffers(): EnchantmentOffer[]
	function getEnchanter(): Player
	function getEnchantBlock(): Block
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getExpLevelCostsOffered(): int[]
	function getEnchantmentBonus(): int
	function getHandlers(): HandlerList
	function getItem(): ItemStack
	function getViewers(): List
	function getView(): InventoryView
	function getInventory(): Inventory
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface AnaloguePowerable extends BlockData {
	getPower(): int
	setPower(arg0: int): void
	getMaximumPower(): int
}
declare class MapCursorCollection {
	addCursor(arg0: int, arg1: int, arg2: byte, arg3: byte, arg4: boolean, arg5: String): MapCursor
	addCursor(arg0: int, arg1: int, arg2: byte): MapCursor
	addCursor(arg0: int, arg1: int, arg2: byte, arg3: byte): MapCursor
	addCursor(arg0: int, arg1: int, arg2: byte, arg3: byte, arg4: boolean): MapCursor
	addCursor(arg0: MapCursor): MapCursor
	getCursor(arg0: int): MapCursor
	removeCursor(arg0: MapCursor): boolean
	size(): int
}
declare interface Orientable extends BlockData {
	getAxis(): Axis
	setAxis(arg0: Axis): void
	getAxes(): Set
}
declare class FireworkEffect implements ConfigurationSerializable {
	hasFlicker(): boolean
	hasTrail(): boolean
	getColors(): List
	serialize(): Map
	deserialize(arg0: Map): ConfigurationSerializable
	getFadeColors(): List
	equals(arg0: Object): boolean
	toString(): String
	hashCode(): int
	builder(): Builder
	getType(): Type
}
declare interface ItemMeta extends Cloneable, ConfigurationSerializable, PersistentDataHolder {
	addEnchant(arg0: Enchantment, arg1: int, arg2: boolean): boolean
	setVersion(arg0: int): void
	hasLore(): boolean
	getLore(): List
	setLore(arg0: List): void
	hasEnchant(arg0: Enchantment): boolean
	hasDisplayName(): boolean
	setDisplayName(arg0: String): void
	hasLocalizedName(): boolean
	getLocalizedName(): String
	setLocalizedName(arg0: String): void
	hasCustomModelData(): boolean
	getCustomModelData(): int
	setCustomModelData(arg0: Integer): void
	hasEnchants(): boolean
	isUnbreakable(): boolean
	setUnbreakable(arg0: boolean): void
	hasAttributeModifiers(): boolean
	getAttributeModifiers(arg0: EquipmentSlot): Multimap
	getAttributeModifiers(arg0: Attribute): Collection
	getAttributeModifiers(): Multimap
	addAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean
	setAttributeModifiers(arg0: Multimap): void
	removeAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean
	removeAttributeModifier(arg0: EquipmentSlot): boolean
	removeAttributeModifier(arg0: Attribute): boolean
	getCustomTagContainer(): CustomItemTagContainer
	getItemFlags(): Set
	hasItemFlag(arg0: ItemFlag): boolean
	hasConflictingEnchant(arg0: Enchantment): boolean
	getEnchants(): Map
	addItemFlags(arg0: ItemFlag[]): void
	removeItemFlags(arg0: ItemFlag[]): void
	removeEnchant(arg0: Enchantment): boolean
	getEnchantLevel(arg0: Enchantment): int
	clone(): ItemMeta
	clone(): Object
	getDisplayName(): String
}
declare class Bed extends MaterialData implements Directional {
	getFacing(): BlockFace
	setFacingDirection(arg0: BlockFace): void
	isHeadOfBed(): boolean
	setHeadOfBed(arg0: boolean): void
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): Object
	clone(): Bed
	clone(): MaterialData
}
declare interface PistonHead extends TechnicalPiston {
	isShort(): boolean
	setShort(arg0: boolean): void
}
declare class FixedMetadataValue extends LazyMetadataValue {
	value(): Object
	invalidate(): void
}
declare class WorldCreator {
	hardcore(): boolean
	hardcore(arg0: boolean): WorldCreator
	createWorld(): World
	generateStructures(arg0: boolean): WorldCreator
	generateStructures(): boolean
	generatorSettings(arg0: String): WorldCreator
	generatorSettings(): String
	getGeneratorForName(arg0: String, arg1: String, arg2: CommandSender): ChunkGenerator
	name(): String
	name(arg0: String): WorldCreator
	type(): WorldType
	type(arg0: WorldType): WorldCreator
	copy(arg0: WorldCreator): WorldCreator
	copy(arg0: World): WorldCreator
	generator(arg0: ChunkGenerator): WorldCreator
	generator(arg0: String): WorldCreator
	generator(): ChunkGenerator
	generator(arg0: String, arg1: CommandSender): WorldCreator
	seed(arg0: long): WorldCreator
	seed(): long
	environment(arg0: Environment): WorldCreator
	environment(): Environment
}
declare interface PiglinBrute extends PiglinAbstract {
}
declare class PermissionAttachment {
	getPlugin(): Plugin
	setRemovalCallback(arg0: PermissionRemovedExecutor): void
	getRemovalCallback(): PermissionRemovedExecutor
	getPermissible(): Permissible
	unsetPermission(arg0: Permission): void
	unsetPermission(arg0: String): void
	remove(): boolean
	getPermissions(): Map
	setPermission(arg0: String, arg1: boolean): void
	setPermission(arg0: Permission, arg1: boolean): void
}
namespace WorldUnloadEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace ChunkEvent {
	function getChunk(): Chunk
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function getHandlers(): HandlerList
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace BlockBurnEvent {
	function getIgnitingBlock(): Block
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class SimpleRegistry implements Registry {
	get(arg0: NamespacedKey): Keyed
	get(arg0: NamespacedKey): Enum
	iterator(): Iterator
}
declare class BlockDestination implements Destination {
	getBlock(): Block
	getLocation(): Location
}
namespace EntityCombustEvent {
	function getDuration(): int
	function setDuration(arg0: int): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Door extends Bisected, Directional, Openable, Powerable {
	getHinge(): Hinge
	setHinge(arg0: Hinge): void
}
declare interface PluginIdentifiableCommand {
	getPlugin(): Plugin
}
declare interface LecternInventory extends Inventory {
	getHolder(): Lectern
	getHolder(): InventoryHolder
}
declare interface ShulkerBullet extends Projectile {
	getTarget(): Entity
	setTarget(arg0: Entity): void
}
declare interface ConversationPrefix {
	getPrefix(arg0: ConversationContext): String
}
declare interface BigDripleaf extends Dripleaf {
	getTilt(): Tilt
	setTilt(arg0: Tilt): void
}
declare interface Mule extends ChestedHorse {
}
declare interface EntityEquipment {
	getHolder(): Entity
	setItem(arg0: EquipmentSlot, arg1: ItemStack): void
	setItem(arg0: EquipmentSlot, arg1: ItemStack, arg2: boolean): void
	getHelmet(): ItemStack
	setHelmet(arg0: ItemStack, arg1: boolean): void
	setHelmet(arg0: ItemStack): void
	getBoots(): ItemStack
	setBoots(arg0: ItemStack, arg1: boolean): void
	setBoots(arg0: ItemStack): void
	getItemInHand(): ItemStack
	setItemInHand(arg0: ItemStack): void
	getItemInMainHand(): ItemStack
	setItemInMainHand(arg0: ItemStack, arg1: boolean): void
	setItemInMainHand(arg0: ItemStack): void
	getItemInOffHand(): ItemStack
	setItemInOffHand(arg0: ItemStack, arg1: boolean): void
	setItemInOffHand(arg0: ItemStack): void
	getChestplate(): ItemStack
	setChestplate(arg0: ItemStack): void
	setChestplate(arg0: ItemStack, arg1: boolean): void
	getLeggings(): ItemStack
	setLeggings(arg0: ItemStack, arg1: boolean): void
	setLeggings(arg0: ItemStack): void
	getArmorContents(): ItemStack[]
	setArmorContents(arg0: ItemStack[]): void
	getItemInHandDropChance(): float
	setItemInHandDropChance(arg0: float): void
	getItemInOffHandDropChance(): float
	setItemInOffHandDropChance(arg0: float): void
	getHelmetDropChance(): float
	setHelmetDropChance(arg0: float): void
	getChestplateDropChance(): float
	setChestplateDropChance(arg0: float): void
	getLeggingsDropChance(): float
	setLeggingsDropChance(arg0: float): void
	getBootsDropChance(): float
	setBootsDropChance(arg0: float): void
	getItemInMainHandDropChance(): float
	setItemInMainHandDropChance(arg0: float): void
	clear(): void
	getItem(arg0: EquipmentSlot): ItemStack
}
namespace ProjectileHitEvent {
	function getEntity(): Entity
	function getEntity(): Projectile
	function getHitBlock(): Block
	function getHitBlockFace(): BlockFace
	function getHitEntity(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface GlowLichen extends MultipleFacing, Waterlogged {
}
declare interface ServerOperator {
	isOp(): boolean
	setOp(arg0: boolean): void
}
declare class MetadataValueAdapter implements MetadataValue {
	asInt(): int
	asFloat(): float
	asDouble(): double
	asLong(): long
	asShort(): short
	asByte(): byte
	asBoolean(): boolean
	asString(): String
	getOwningPlugin(): Plugin
}
declare interface TrapDoor extends Bisected, Directional, Openable, Powerable, Waterlogged {
}
namespace PlayerBedLeaveEvent {
	function getBed(): Block
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function shouldSetSpawnLocation(): boolean
	function setSpawnLocation(arg0: boolean): void
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface World extends PluginMessageRecipient, Metadatable {
	playEffect(arg0: Location, arg1: Effect, arg2: int): void
	playEffect(arg0: Location, arg1: Effect, arg2: int, arg3: int): void
	playEffect(arg0: Location, arg1: Effect, arg2: Object): void
	playEffect(arg0: Location, arg1: Effect, arg2: Object, arg3: int): void
	spigot(): Spigot
	playSound(arg0: Location, arg1: Sound, arg2: SoundCategory, arg3: float, arg4: float): void
	playSound(arg0: Location, arg1: String, arg2: SoundCategory, arg3: float, arg4: float): void
	playSound(arg0: Location, arg1: String, arg2: float, arg3: float): void
	playSound(arg0: Location, arg1: Sound, arg2: float, arg3: float): void
	getPlayers(): List
	loadChunk(arg0: Chunk): void
	loadChunk(arg0: int, arg1: int): void
	loadChunk(arg0: int, arg1: int, arg2: boolean): boolean
	spawnArrow(arg0: Location, arg1: Vector, arg2: float, arg3: float, arg4: Class): AbstractArrow
	spawnArrow(arg0: Location, arg1: Vector, arg2: float, arg3: float): Arrow
	hasStorm(): boolean
	setStorm(arg0: boolean): void
	getPVP(): boolean
	setPVP(arg0: boolean): void
	spawn(arg0: Location, arg1: Class, arg2: Consumer): Entity
	spawn(arg0: Location, arg1: Class): Entity
	isAutoSave(): boolean
	isGameRule(arg0: String): boolean
	getRaids(): List
	dropItem(arg0: Location, arg1: ItemStack): Item
	dropItem(arg0: Location, arg1: ItemStack, arg2: Consumer): Item
	getBiome(arg0: int, arg1: int, arg2: int): Biome
	getBiome(arg0: int, arg1: int): Biome
	setBiome(arg0: int, arg1: int, arg2: Biome): void
	setBiome(arg0: int, arg1: int, arg2: int, arg3: Biome): void
	rayTrace(arg0: Location, arg1: Vector, arg2: double, arg3: FluidCollisionMode, arg4: boolean, arg5: double, arg6: Predicate): RayTraceResult
	isHardcore(): boolean
	getSeed(): long
	getUID(): UUID
	getChunkAt(arg0: Block): Chunk
	getChunkAt(arg0: Location): Chunk
	getChunkAt(arg0: int, arg1: int): Chunk
	getBlockAt(arg0: int, arg1: int, arg2: int): Block
	getBlockAt(arg0: Location): Block
	getGameRuleValue(arg0: String): String
	getGameRuleValue(arg0: GameRule): Object
	getHighestBlockYAt(arg0: int, arg1: int, arg2: HeightMap): int
	getHighestBlockYAt(arg0: Location, arg1: HeightMap): int
	getHighestBlockYAt(arg0: Location): int
	getHighestBlockYAt(arg0: int, arg1: int): int
	getEnvironment(): Environment
	getEntities(): List
	addPluginChunkTicket(arg0: int, arg1: int, arg2: Plugin): boolean
	removePluginChunkTicket(arg0: int, arg1: int, arg2: Plugin): boolean
	getPluginChunkTickets(arg0: int, arg1: int): Collection
	getPluginChunkTickets(): Map
	getViewDistance(): int
	getWorldType(): WorldType
	getTicksPerAnimalSpawns(): long
	getTicksPerMonsterSpawns(): long
	getTicksPerWaterSpawns(): long
	getTicksPerAmbientSpawns(): long
	getMonsterSpawnLimit(): int
	getAnimalSpawnLimit(): int
	getWaterAnimalSpawnLimit(): int
	getWaterAmbientSpawnLimit(): int
	getAmbientSpawnLimit(): int
	rayTraceBlocks(arg0: Location, arg1: Vector, arg2: double, arg3: FluidCollisionMode, arg4: boolean): RayTraceResult
	rayTraceBlocks(arg0: Location, arg1: Vector, arg2: double): RayTraceResult
	rayTraceBlocks(arg0: Location, arg1: Vector, arg2: double, arg3: FluidCollisionMode): RayTraceResult
	getNearbyEntities(arg0: Location, arg1: double, arg2: double, arg3: double, arg4: Predicate): Collection
	getNearbyEntities(arg0: Location, arg1: double, arg2: double, arg3: double): Collection
	getNearbyEntities(arg0: BoundingBox, arg1: Predicate): Collection
	getNearbyEntities(arg0: BoundingBox): Collection
	getTemperature(arg0: int, arg1: int, arg2: int): double
	getTemperature(arg0: int, arg1: int): double
	getHumidity(arg0: int, arg1: int): double
	getHumidity(arg0: int, arg1: int, arg2: int): double
	dropItemNaturally(arg0: Location, arg1: ItemStack): Item
	dropItemNaturally(arg0: Location, arg1: ItemStack, arg2: Consumer): Item
	getGenerator(): ChunkGenerator
	canGenerateStructures(): boolean
	spawnParticle(arg0: Particle, arg1: Location, arg2: int, arg3: double, arg4: double, arg5: double, arg6: Object): void
	spawnParticle(arg0: Particle, arg1: double, arg2: double, arg3: double, arg4: int, arg5: double, arg6: double, arg7: double): void
	spawnParticle(arg0: Particle, arg1: Location, arg2: int, arg3: double, arg4: double, arg5: double, arg6: double, arg7: Object, arg8: boolean): void
	spawnParticle(arg0: Particle, arg1: double, arg2: double, arg3: double, arg4: int, arg5: double, arg6: double, arg7: double, arg8: double, arg9: Object): void
	spawnParticle(arg0: Particle, arg1: Location, arg2: int, arg3: double, arg4: double, arg5: double, arg6: double, arg7: Object): void
	spawnParticle(arg0: Particle, arg1: double, arg2: double, arg3: double, arg4: int, arg5: double, arg6: double, arg7: double, arg8: double): void
	spawnParticle(arg0: Particle, arg1: Location, arg2: int, arg3: double, arg4: double, arg5: double, arg6: double): void
	spawnParticle(arg0: Particle, arg1: double, arg2: double, arg3: double, arg4: int, arg5: double, arg6: double, arg7: double, arg8: Object): void
	spawnParticle(arg0: Particle, arg1: Location, arg2: int, arg3: Object): void
	spawnParticle(arg0: Particle, arg1: double, arg2: double, arg3: double, arg4: int): void
	spawnParticle(arg0: Particle, arg1: Location, arg2: int, arg3: double, arg4: double, arg5: double): void
	spawnParticle(arg0: Particle, arg1: double, arg2: double, arg3: double, arg4: int, arg5: double, arg6: double, arg7: double, arg8: double, arg9: Object, arg10: boolean): void
	spawnParticle(arg0: Particle, arg1: double, arg2: double, arg3: double, arg4: int, arg5: Object): void
	spawnParticle(arg0: Particle, arg1: Location, arg2: int): void
	setSpawnLocation(arg0: Location): boolean
	setSpawnLocation(arg0: int, arg1: int, arg2: int, arg3: float): boolean
	setSpawnLocation(arg0: int, arg1: int, arg2: int): boolean
	getHighestBlockAt(arg0: Location): Block
	getHighestBlockAt(arg0: int, arg1: int): Block
	getHighestBlockAt(arg0: int, arg1: int, arg2: HeightMap): Block
	getHighestBlockAt(arg0: Location, arg1: HeightMap): Block
	isChunkLoaded(arg0: int, arg1: int): boolean
	isChunkLoaded(arg0: Chunk): boolean
	getLoadedChunks(): Chunk[]
	isChunkGenerated(arg0: int, arg1: int): boolean
	isChunkInUse(arg0: int, arg1: int): boolean
	unloadChunk(arg0: int, arg1: int, arg2: boolean): boolean
	unloadChunk(arg0: int, arg1: int): boolean
	unloadChunk(arg0: Chunk): boolean
	unloadChunkRequest(arg0: int, arg1: int): boolean
	regenerateChunk(arg0: int, arg1: int): boolean
	refreshChunk(arg0: int, arg1: int): boolean
	isChunkForceLoaded(arg0: int, arg1: int): boolean
	setChunkForceLoaded(arg0: int, arg1: int, arg2: boolean): void
	getForceLoadedChunks(): Collection
	removePluginChunkTickets(arg0: Plugin): void
	generateTree(arg0: Location, arg1: TreeType, arg2: BlockChangeDelegate): boolean
	generateTree(arg0: Location, arg1: TreeType): boolean
	spawnEntity(arg0: Location, arg1: EntityType): Entity
	strikeLightning(arg0: Location): LightningStrike
	strikeLightningEffect(arg0: Location): LightningStrike
	getLivingEntities(): List
	getEntitiesByClass(arg0: Class[]): Collection
	getEntitiesByClass(arg0: Class): Collection
	getEntitiesByClasses(arg0: Class[]): Collection
	rayTraceEntities(arg0: Location, arg1: Vector, arg2: double, arg3: Predicate): RayTraceResult
	rayTraceEntities(arg0: Location, arg1: Vector, arg2: double): RayTraceResult
	rayTraceEntities(arg0: Location, arg1: Vector, arg2: double, arg3: double): RayTraceResult
	rayTraceEntities(arg0: Location, arg1: Vector, arg2: double, arg3: double, arg4: Predicate): RayTraceResult
	getSpawnLocation(): Location
	getFullTime(): long
	setFullTime(arg0: long): void
	getGameTime(): long
	getWeatherDuration(): int
	setWeatherDuration(arg0: int): void
	isThundering(): boolean
	setThundering(arg0: boolean): void
	getThunderDuration(): int
	setThunderDuration(arg0: int): void
	isClearWeather(): boolean
	setClearWeatherDuration(arg0: int): void
	getClearWeatherDuration(): int
	createExplosion(arg0: double, arg1: double, arg2: double, arg3: float): boolean
	createExplosion(arg0: Location, arg1: float, arg2: boolean, arg3: boolean, arg4: Entity): boolean
	createExplosion(arg0: double, arg1: double, arg2: double, arg3: float, arg4: boolean, arg5: boolean, arg6: Entity): boolean
	createExplosion(arg0: Location, arg1: float): boolean
	createExplosion(arg0: Location, arg1: float, arg2: boolean): boolean
	createExplosion(arg0: Location, arg1: float, arg2: boolean, arg3: boolean): boolean
	createExplosion(arg0: double, arg1: double, arg2: double, arg3: float, arg4: boolean, arg5: boolean): boolean
	createExplosion(arg0: double, arg1: double, arg2: double, arg3: float, arg4: boolean): boolean
	getPopulators(): List
	spawnFallingBlock(arg0: Location, arg1: BlockData): FallingBlock
	spawnFallingBlock(arg0: Location, arg1: Material, arg2: byte): FallingBlock
	spawnFallingBlock(arg0: Location, arg1: MaterialData): FallingBlock
	getEmptyChunkSnapshot(arg0: int, arg1: int, arg2: boolean, arg3: boolean): ChunkSnapshot
	setSpawnFlags(arg0: boolean, arg1: boolean): void
	getAllowAnimals(): boolean
	getAllowMonsters(): boolean
	getMinHeight(): int
	getMaxHeight(): int
	getSeaLevel(): int
	getKeepSpawnInMemory(): boolean
	setKeepSpawnInMemory(arg0: boolean): void
	setAutoSave(arg0: boolean): void
	setDifficulty(arg0: Difficulty): void
	getDifficulty(): Difficulty
	getWorldFolder(): File
	setHardcore(arg0: boolean): void
	setTicksPerAnimalSpawns(arg0: int): void
	setTicksPerMonsterSpawns(arg0: int): void
	setTicksPerWaterSpawns(arg0: int): void
	setTicksPerAmbientSpawns(arg0: int): void
	setMonsterSpawnLimit(arg0: int): void
	setAnimalSpawnLimit(arg0: int): void
	setWaterAnimalSpawnLimit(arg0: int): void
	setWaterAmbientSpawnLimit(arg0: int): void
	setAmbientSpawnLimit(arg0: int): void
	getGameRules(): String[]
	setGameRuleValue(arg0: String, arg1: String): boolean
	getGameRuleDefault(arg0: GameRule): Object
	setGameRule(arg0: GameRule, arg1: Object): boolean
	getWorldBorder(): WorldBorder
	locateNearestStructure(arg0: Location, arg1: StructureType, arg2: int, arg3: boolean): Location
	locateNearestRaid(arg0: Location, arg1: int): Raid
	getEnderDragonBattle(): DragonBattle
	getTicksPerWaterAmbientSpawns(): long
	setTicksPerWaterAmbientSpawns(arg0: int): void
	getName(): String
	save(): void
	getTime(): long
	setTime(arg0: long): void
}
declare interface SerializableAs extends Annotation {
	value(): String
}
namespace LootGenerateEvent {
	function setLoot(arg0: Collection): void
	function getLoot(): List
	function isPlugin(): boolean
	function getEntity(): Entity
	function getLootTable(): LootTable
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getInventoryHolder(): InventoryHolder
	function getLootContext(): LootContext
	function getHandlers(): HandlerList
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace BlockPlaceEvent {
	function getPlayer(): Player
	function canBuild(): boolean
	function setBuild(arg0: boolean): void
	function getHand(): EquipmentSlot
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getItemInHand(): ItemStack
	function getBlockPlaced(): Block
	function getBlockReplacedState(): BlockState
	function getBlockAgainst(): Block
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Material extends Enum implements Keyed {
	isLegacy(): boolean
	getNewData(arg0: byte): MaterialData
	hasGravity(): boolean
	getData(): Class
	isBlock(): boolean
	isEdible(): boolean
	isSolid(): boolean
	isAir(): boolean
	isBurnable(): boolean
	isFuel(): boolean
	isItem(): boolean
	getMaxDurability(): short
	createBlockData(arg0: Consumer): BlockData
	createBlockData(arg0: String): BlockData
	createBlockData(): BlockData
	getMaterial(arg0: String, arg1: boolean): Material
	getMaterial(arg0: String): Material
	getMaxStackSize(): int
	matchMaterial(arg0: String, arg1: boolean): Material
	matchMaterial(arg0: String): Material
	isTransparent(): boolean
	isFlammable(): boolean
	isOccluding(): boolean
	isInteractable(): boolean
	getHardness(): float
	getBlastResistance(): float
	getSlipperiness(): float
	getCraftingRemainingItem(): Material
	getEquipmentSlot(): EquipmentSlot
	$SWITCH_TABLE$org$bukkit$Material(): int[]
	values(): Material[]
	valueOf(arg0: String): Material
	isRecord(): boolean
	getKey(): NamespacedKey
	getId(): int
}
declare interface BrewingStand extends BlockData {
	hasBottle(arg0: int): boolean
	setBottle(arg0: int, arg1: boolean): void
	getBottles(): Set
	getMaximumBottles(): int
}
namespace BlockPhysicsEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getSourceBlock(): Block
	function getChangedType(): Material
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Conduit extends TileState {
}
declare interface Rabbit extends Animals {
	getRabbitType(): Type
	setRabbitType(arg0: Type): void
}
declare interface Vex extends Monster {
	isCharging(): boolean
	setCharging(arg0: boolean): void
}
namespace PlayerLoginEvent {
	function getHandlerList(): HandlerList
	function getKickMessage(): String
	function setKickMessage(arg0: String): void
	function getRealAddress(): InetAddress
	function getHostname(): String
	function disallow(arg0: Result, arg1: String): void
	function allow(): void
	function getAddress(): InetAddress
	function getResult(): Result
	function setResult(arg0: Result): void
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface ComplexEntityPart extends Entity {
	getParent(): ComplexLivingEntity
}
declare interface Dropper extends Container, Lootable {
	drop(): void
}
declare class TexturedMaterial extends MaterialData {
	setMaterial(arg0: Material): void
	getTextures(): List
	getTextureIndex(): int
	setTextureIndex(arg0: int): void
	getMaterial(): Material
	toString(): String
	clone(): MaterialData
	clone(): Object
	clone(): TexturedMaterial
}
declare interface Cat extends Tameable, Sittable {
	getCatType(): Type
	setCatType(arg0: Type): void
	getCollarColor(): DyeColor
	setCollarColor(arg0: DyeColor): void
}
declare interface CustomItemTagContainer {
	setCustomTag(arg0: NamespacedKey, arg1: ItemTagType, arg2: Object): void
	hasCustomTag(arg0: NamespacedKey, arg1: ItemTagType): boolean
	getCustomTag(arg0: NamespacedKey, arg1: ItemTagType): Object
	removeCustomTag(arg0: NamespacedKey): void
	getAdapterContext(): ItemTagAdapterContext
	isEmpty(): boolean
}
namespace ChunkPopulateEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getChunk(): Chunk
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class BlastingRecipe extends CookingRecipe {
}
namespace PrepareItemCraftEvent {
	function getRecipe(): Recipe
	function isRepair(): boolean
	function getInventory(): Inventory
	function getInventory(): CraftingInventory
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getViewers(): List
	function getView(): InventoryView
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface FishHook extends Projectile {
	getMinWaitTime(): int
	setMinWaitTime(arg0: int): void
	getMaxWaitTime(): int
	setMaxWaitTime(arg0: int): void
	getApplyLure(): boolean
	setApplyLure(arg0: boolean): void
	getBiteChance(): double
	setBiteChance(arg0: double): void
	isInOpenWater(): boolean
	getHookedEntity(): Entity
	setHookedEntity(arg0: Entity): void
	pullHookedEntity(): boolean
	getState(): HookState
}
declare interface Silverfish extends Monster {
}
namespace EntityExplodeEvent {
	function getYield(): float
	function blockList(): List
	function setYield(arg0: float): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getLocation(): Location
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class FlowerPot extends MaterialData {
	getContents(): MaterialData
	setContents(arg0: MaterialData): void
	toString(): String
	clone(): Object
	clone(): MaterialData
	clone(): FlowerPot
}
declare interface Registry extends Iterable {
	lambda$0(arg0: EntityType): boolean
	lambda$1(arg0: Material): boolean
	get(arg0: NamespacedKey): Keyed
}
declare interface Phantom extends Flying {
	getSize(): int
	setSize(arg0: int): void
}
namespace PiglinBarterEvent {
	function getOutcome(): List
	function getEntity(): Entity
	function getEntity(): Piglin
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getInput(): ItemStack
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class LootContext {
	getKiller(): HumanEntity
	getLuck(): float
	getLootingModifier(): int
	getLootedEntity(): Entity
	getLocation(): Location
}
declare class PoweredRail extends ExtendedRails implements Redstone {
	setPowered(arg0: boolean): void
	isPowered(): boolean
	clone(): MaterialData
	clone(): Object
	clone(): Rails
	clone(): ExtendedRails
	clone(): PoweredRail
}
declare class GenericCommandHelpTopic extends HelpTopic {
	canSee(arg0: CommandSender): boolean
}
namespace VehicleEvent {
	function getVehicle(): Vehicle
	function isAsynchronous(): boolean
	function getEventName(): String
	function getHandlers(): HandlerList
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class MemoryKey implements Keyed {
	getByKey(arg0: NamespacedKey): MemoryKey
	getMemoryClass(): Class
	values(): Set
	getKey(): NamespacedKey
}
declare interface CartographyInventory extends Inventory {
}
declare interface Flying extends Mob {
}
namespace BlockShearEntityEvent {
	function getTool(): ItemStack
	function getEntity(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Golem extends Creature {
}
declare interface SoundGroup {
	getVolume(): float
	getPitch(): float
	getBreakSound(): Sound
	getStepSound(): Sound
	getPlaceSound(): Sound
	getHitSound(): Sound
	getFallSound(): Sound
}
declare class Spigot {
	strikeLightning(arg0: Location, arg1: boolean): LightningStrike
	strikeLightningEffect(arg0: Location, arg1: boolean): LightningStrike
}
declare interface SmallFireball extends SizedFireball {
}
declare interface Egg extends ThrowableProjectile {
}
namespace ChunkUnloadEvent {
	function getHandlerList(): HandlerList
	function isSaveChunk(): boolean
	function setSaveChunk(arg0: boolean): void
	function getHandlers(): HandlerList
	function getChunk(): Chunk
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface ChunkSnapshot {
	getData(arg0: int, arg1: int, arg2: int): int
	getBiome(arg0: int, arg1: int): Biome
	getBiome(arg0: int, arg1: int, arg2: int): Biome
	getX(): int
	getZ(): int
	getHighestBlockYAt(arg0: int, arg1: int): int
	getBlockData(arg0: int, arg1: int, arg2: int): BlockData
	getWorldName(): String
	getBlockType(arg0: int, arg1: int, arg2: int): Material
	getBlockSkyLight(arg0: int, arg1: int, arg2: int): int
	getBlockEmittedLight(arg0: int, arg1: int, arg2: int): int
	getRawBiomeTemperature(arg0: int, arg1: int, arg2: int): double
	getRawBiomeTemperature(arg0: int, arg1: int): double
	getCaptureFullTime(): long
	isSectionEmpty(arg0: int): boolean
	contains(arg0: BlockData): boolean
}
declare class Statistic extends Enum implements Keyed {
	isBlock(): boolean
	isSubstatistic(): boolean
	values(): Statistic[]
	valueOf(arg0: String): Statistic
	getKey(): NamespacedKey
	getType(): Type
}
declare interface ConfigurationSection {
	getValues(arg0: boolean): Map
	isString(arg0: String): boolean
	isInt(arg0: String): boolean
	isBoolean(arg0: String): boolean
	isDouble(arg0: String): boolean
	isLong(arg0: String): boolean
	getList(arg0: String, arg1: List): List
	getList(arg0: String): List
	isList(arg0: String): boolean
	getMapList(arg0: String): List
	getVector(arg0: String, arg1: Vector): Vector
	getVector(arg0: String): Vector
	isVector(arg0: String): boolean
	isColor(arg0: String): boolean
	isLocation(arg0: String): boolean
	addDefault(arg0: String, arg1: Object): void
	getColor(arg0: String): Color
	getColor(arg0: String, arg1: Color): Color
	createSection(arg0: String, arg1: Map): ConfigurationSection
	createSection(arg0: String): ConfigurationSection
	getCurrentPath(): String
	getStringList(arg0: String): List
	getIntegerList(arg0: String): List
	getBooleanList(arg0: String): List
	getDoubleList(arg0: String): List
	getFloatList(arg0: String): List
	getLongList(arg0: String): List
	getByteList(arg0: String): List
	getCharacterList(arg0: String): List
	getShortList(arg0: String): List
	getSerializable(arg0: String, arg1: Class, arg2: ConfigurationSerializable): ConfigurationSerializable
	getSerializable(arg0: String, arg1: Class): ConfigurationSerializable
	getOfflinePlayer(arg0: String, arg1: OfflinePlayer): OfflinePlayer
	getOfflinePlayer(arg0: String): OfflinePlayer
	isOfflinePlayer(arg0: String): boolean
	getItemStack(arg0: String, arg1: ItemStack): ItemStack
	getItemStack(arg0: String): ItemStack
	isItemStack(arg0: String): boolean
	getConfigurationSection(arg0: String): ConfigurationSection
	isConfigurationSection(arg0: String): boolean
	getDefaultSection(): ConfigurationSection
	getName(): String
	get(arg0: String, arg1: Object): Object
	get(arg0: String): Object
	getBoolean(arg0: String): boolean
	getBoolean(arg0: String, arg1: boolean): boolean
	getInt(arg0: String, arg1: int): int
	getInt(arg0: String): int
	getLong(arg0: String, arg1: long): long
	getLong(arg0: String): long
	getDouble(arg0: String, arg1: double): double
	getDouble(arg0: String): double
	contains(arg0: String, arg1: boolean): boolean
	contains(arg0: String): boolean
	getLocation(arg0: String): Location
	getLocation(arg0: String, arg1: Location): Location
	getParent(): ConfigurationSection
	set(arg0: String, arg1: Object): void
	isSet(arg0: String): boolean
	getRoot(): Configuration
	getObject(arg0: String, arg1: Class, arg2: Object): Object
	getObject(arg0: String, arg1: Class): Object
	getString(arg0: String, arg1: String): String
	getString(arg0: String): String
	getKeys(arg0: boolean): Set
}
declare interface BlockChangeDelegate {
	getHeight(): int
	setBlockData(arg0: int, arg1: int, arg2: int, arg3: BlockData): boolean
	getBlockData(arg0: int, arg1: int, arg2: int): BlockData
	isEmpty(arg0: int, arg1: int, arg2: int): boolean
}
declare class IndexHelpTopic extends HelpTopic {
	canSee(arg0: CommandSender): boolean
	amendCanSee(arg0: String): void
	getFullText(arg0: CommandSender): String
	setTopicsCollection(arg0: Collection): void
	buildPreamble(arg0: CommandSender): String
	buildIndexLine(arg0: CommandSender, arg1: HelpTopic): String
}
declare class Chest extends DirectionalContainer {
	clone(): Object
	clone(): MaterialData
	clone(): DirectionalContainer
	clone(): Chest
}
namespace WorldInitEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Objective {
	getScore(arg0: String): Score
	getScore(arg0: OfflinePlayer): Score
	setDisplayName(arg0: String): void
	getScoreboard(): Scoreboard
	getCriteria(): String
	isModifiable(): boolean
	setDisplaySlot(arg0: DisplaySlot): void
	getDisplaySlot(): DisplaySlot
	setRenderType(arg0: RenderType): void
	getRenderType(): RenderType
	getName(): String
	getDisplayName(): String
	unregister(): void
}
declare class Conversation {
	getPrefix(): ConversationPrefix
	getForWhom(): Conversable
	isModal(): boolean
	setModal(arg0: boolean): void
	abandon(arg0: ConversationAbandonedEvent): void
	abandon(): void
	setPrefix(arg0: ConversationPrefix): void
	acceptInput(arg0: String): void
	isLocalEchoEnabled(): boolean
	setLocalEchoEnabled(arg0: boolean): void
	addConversationCanceller(arg0: ConversationCanceller): void
	getCancellers(): List
	outputNextPrompt(): void
	addConversationAbandonedListener(arg0: ConversationAbandonedListener): void
	removeConversationAbandonedListener(arg0: ConversationAbandonedListener): void
	begin(): void
	getContext(): ConversationContext
	getState(): ConversationState
}
declare class Furnace extends FurnaceAndDispenser {
	clone(): MaterialData
	clone(): Object
	clone(): DirectionalContainer
	clone(): FurnaceAndDispenser
	clone(): Furnace
}
namespace EntityDamageByEntityEvent {
	function getDamager(): Entity
	function setDamage(arg0: DamageModifier, arg1: double): void
	function setDamage(arg0: double): void
	function getDamage(): double
	function getDamage(arg0: DamageModifier): double
	function isApplicable(arg0: DamageModifier): boolean
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getOriginalDamage(arg0: DamageModifier): double
	function getFinalDamage(): double
	function getCause(): DamageCause
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Bukkit {
	getRecipe(arg0: NamespacedKey): Recipe
	reload(): void
	getPlayer(arg0: String): Player
	getPlayer(arg0: UUID): Player
	getBossBar(arg0: NamespacedKey): KeyedBossBar
	getServer(): Server
	spigot(): Spigot
	setServer(arg0: Server): void
	getMotd(): String
	getIp(): String
	getWorlds(): List
	reloadData(): void
	addRecipe(arg0: Recipe): boolean
	isHardcore(): boolean
	getIPBans(): Set
	banIP(arg0: String): void
	unbanIP(arg0: String): void
	getBanList(arg0: Type): BanList
	getHelpMap(): HelpMap
	getTags(arg0: String, arg1: Class): Iterable
	getWorld(arg0: UUID): World
	getWorld(arg0: String): World
	getEntity(arg0: UUID): Entity
	getOnlinePlayers(): Collection
	getConsoleSender(): ConsoleCommandSender
	createChunkData(arg0: World): ChunkData
	getItemFactory(): ItemFactory
	dispatchCommand(arg0: CommandSender, arg1: String): boolean
	getMaxPlayers(): int
	getBukkitVersion(): String
	getViewDistance(): int
	getWorldType(): String
	getGenerateStructures(): boolean
	getMaxWorldSize(): int
	getAllowEnd(): boolean
	getAllowNether(): boolean
	hasWhitelist(): boolean
	setWhitelist(arg0: boolean): void
	isWhitelistEnforced(): boolean
	setWhitelistEnforced(arg0: boolean): void
	getWhitelistedPlayers(): Set
	reloadWhitelist(): void
	broadcastMessage(arg0: String): int
	getUpdateFolder(): String
	getUpdateFolderFile(): File
	getConnectionThrottle(): long
	getTicksPerAnimalSpawns(): int
	getTicksPerMonsterSpawns(): int
	getTicksPerWaterSpawns(): int
	getTicksPerAmbientSpawns(): int
	getPlayerExact(arg0: String): Player
	matchPlayer(arg0: String): List
	getScheduler(): BukkitScheduler
	getServicesManager(): ServicesManager
	createWorld(arg0: WorldCreator): World
	unloadWorld(arg0: World, arg1: boolean): boolean
	unloadWorld(arg0: String, arg1: boolean): boolean
	createExplorerMap(arg0: World, arg1: Location, arg2: StructureType, arg3: int, arg4: boolean): ItemStack
	createExplorerMap(arg0: World, arg1: Location, arg2: StructureType): ItemStack
	getPluginCommand(arg0: String): PluginCommand
	savePlayers(): void
	getRecipesFor(arg0: ItemStack): List
	recipeIterator(): Iterator
	clearRecipes(): void
	resetRecipes(): void
	removeRecipe(arg0: NamespacedKey): boolean
	getCommandAliases(): Map
	getSpawnRadius(): int
	setSpawnRadius(arg0: int): void
	getOnlineMode(): boolean
	getAllowFlight(): boolean
	getBannedPlayers(): Set
	getOperators(): Set
	getDefaultGameMode(): GameMode
	setDefaultGameMode(arg0: GameMode): void
	getWorldContainer(): File
	getOfflinePlayers(): OfflinePlayer[]
	getMessenger(): Messenger
	createInventory(arg0: InventoryHolder, arg1: InventoryType): Inventory
	createInventory(arg0: InventoryHolder, arg1: InventoryType, arg2: String): Inventory
	createInventory(arg0: InventoryHolder, arg1: int, arg2: String): Inventory
	createInventory(arg0: InventoryHolder, arg1: int): Inventory
	createMerchant(arg0: String): Merchant
	getMonsterSpawnLimit(): int
	getAnimalSpawnLimit(): int
	getWaterAnimalSpawnLimit(): int
	getWaterAmbientSpawnLimit(): int
	getAmbientSpawnLimit(): int
	isPrimaryThread(): boolean
	getShutdownMessage(): String
	getWarningState(): WarningState
	getScoreboardManager(): ScoreboardManager
	getServerIcon(): CachedServerIcon
	loadServerIcon(arg0: BufferedImage): CachedServerIcon
	loadServerIcon(arg0: File): CachedServerIcon
	setIdleTimeout(arg0: int): void
	getIdleTimeout(): int
	createBossBar(arg0: String, arg1: BarColor, arg2: BarStyle, arg3: BarFlag[]): BossBar
	createBossBar(arg0: NamespacedKey, arg1: String, arg2: BarColor, arg3: BarStyle, arg4: BarFlag[]): KeyedBossBar
	getBossBars(): Iterator
	removeBossBar(arg0: NamespacedKey): boolean
	getAdvancement(arg0: NamespacedKey): Advancement
	advancementIterator(): Iterator
	createBlockData(arg0: Material, arg1: Consumer): BlockData
	createBlockData(arg0: String): BlockData
	createBlockData(arg0: Material, arg1: String): BlockData
	createBlockData(arg0: Material): BlockData
	selectEntities(arg0: CommandSender, arg1: String): List
	getLootTable(arg0: NamespacedKey): LootTable
	getOfflinePlayer(arg0: String): OfflinePlayer
	getOfflinePlayer(arg0: UUID): OfflinePlayer
	getPluginManager(): PluginManager
	getTicksPerWaterAmbientSpawns(): int
	getName(): String
	shutdown(): void
	getUnsafe(): UnsafeValues
	getLogger(): Logger
	getPort(): int
	broadcast(arg0: String, arg1: String): int
	getVersion(): String
	getMap(arg0: int): MapView
	createMap(arg0: World): MapView
	getTag(arg0: String, arg1: NamespacedKey, arg2: Class): Tag
}
declare interface Attributable {
	getAttribute(arg0: Attribute): AttributeInstance
}
namespace PlayerJoinEvent {
	function getHandlerList(): HandlerList
	function getJoinMessage(): String
	function setJoinMessage(arg0: String): void
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface HopperMinecart extends Minecart, InventoryHolder, Lootable {
	isEnabled(): boolean
	setEnabled(arg0: boolean): void
}
namespace CreatureSpawnEvent {
	function getEntity(): Entity
	function getEntity(): LivingEntity
	function getSpawnReason(): SpawnReason
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getLocation(): Location
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Leaves extends BlockData {
	isPersistent(): boolean
	setPersistent(arg0: boolean): void
	getDistance(): int
	setDistance(arg0: int): void
}
declare interface FireworkMeta extends ItemMeta {
	getPower(): int
	setPower(arg0: int): void
	addEffect(arg0: FireworkEffect): void
	addEffects(arg0: FireworkEffect[]): void
	addEffects(arg0: Iterable): void
	hasEffects(): boolean
	getEffects(): List
	getEffectsSize(): int
	removeEffect(arg0: int): void
	clearEffects(): void
	clone(): Object
	clone(): ItemMeta
	clone(): FireworkMeta
}
declare class RedstoneWire extends MaterialData implements Redstone {
	isPowered(): boolean
	toString(): String
	clone(): RedstoneWire
	clone(): MaterialData
	clone(): Object
}
declare interface SpectralArrow extends AbstractArrow {
	getGlowingTicks(): int
	setGlowingTicks(arg0: int): void
}
declare interface Horse extends AbstractHorse {
	getStyle(): Style
	setStyle(arg0: Style): void
	getColor(): Color
	isCarryingChest(): boolean
	setCarryingChest(arg0: boolean): void
	getInventory(): Inventory
	getInventory(): AbstractHorseInventory
	getInventory(): HorseInventory
	setColor(arg0: Color): void
}
declare interface WitherSkeleton extends AbstractSkeleton {
}
declare interface Piston extends Directional {
	isExtended(): boolean
	setExtended(arg0: boolean): void
}
declare class ConfigurationSerialization {
	getAlias(arg0: Class): String
	deserialize(arg0: Map): ConfigurationSerializable
	registerClass(arg0: Class): void
	registerClass(arg0: Class, arg1: String): void
	deserializeViaMethod(arg0: Method, arg1: Map): ConfigurationSerializable
	deserializeViaCtor(arg0: Constructor, arg1: Map): ConfigurationSerializable
	deserializeObject(arg0: Map): ConfigurationSerializable
	deserializeObject(arg0: Map, arg1: Class): ConfigurationSerializable
	getClassByAlias(arg0: String): Class
	unregisterClass(arg0: Class): void
	unregisterClass(arg0: String): void
	getMethod(arg0: String, arg1: boolean): Method
	getConstructor(): Constructor
}
declare class Door extends MaterialData implements Directional, Openable {
	setTopHalf(arg0: boolean): void
	isTopHalf(): boolean
	getHinge(): boolean
	setHinge(arg0: boolean): void
	getFacing(): BlockFace
	setOpen(arg0: boolean): void
	setFacingDirection(arg0: BlockFace): void
	getWoodDoorOfSpecies(arg0: TreeSpecies): Material
	getHingeCorner(): BlockFace
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	$SWITCH_TABLE$org$bukkit$TreeSpecies(): int[]
	toString(): String
	clone(): Object
	clone(): MaterialData
	clone(): Door
	isOpen(): boolean
}
declare interface Gate extends Directional, Openable, Powerable {
	isInWall(): boolean
	setInWall(arg0: boolean): void
}
declare class Leaves extends Wood {
	isDecaying(): boolean
	isDecayable(): boolean
	setDecayable(arg0: boolean): void
	setDecaying(arg0: boolean): void
	toString(): String
	clone(): Object
	clone(): MaterialData
	clone(): Wood
	clone(): Leaves
}
declare interface Waterlogged extends BlockData {
	isWaterlogged(): boolean
	setWaterlogged(arg0: boolean): void
}
declare interface WallSign extends Directional, Waterlogged {
}
namespace WorldLoadEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class MultipleCommandAlias extends Command {
	getCommands(): Command[]
	execute(arg0: CommandSender, arg1: String, arg2: String[]): boolean
}
declare interface Arrow extends AbstractArrow {
	getColor(): Color
	setBasePotionData(arg0: PotionData): void
	getBasePotionData(): PotionData
	addCustomEffect(arg0: PotionEffect, arg1: boolean): boolean
	removeCustomEffect(arg0: PotionEffectType): boolean
	hasCustomEffect(arg0: PotionEffectType): boolean
	clearCustomEffects(): void
	hasCustomEffects(): boolean
	getCustomEffects(): List
	setColor(arg0: Color): void
}
declare interface Illusioner extends Spellcaster {
}
namespace EntityDeathEvent {
	function getDrops(): List
	function getEntity(): Entity
	function getEntity(): LivingEntity
	function getDroppedExp(): int
	function setDroppedExp(arg0: int): void
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class ExactMatchConversationCanceller implements ConversationCanceller {
	setConversation(arg0: Conversation): void
	cancelBasedOnInput(arg0: ConversationContext, arg1: String): boolean
	clone(): ConversationCanceller
	clone(): Object
}
declare interface WitherSkull extends Fireball {
	setCharged(arg0: boolean): void
	isCharged(): boolean
}
declare interface Dispenser extends Container, Nameable, Lootable {
	dispense(): boolean
	getBlockProjectileSource(): BlockProjectileSource
}
declare class Vine extends MaterialData {
	isOnFace(arg0: BlockFace): boolean
	putOnFace(arg0: BlockFace): void
	removeFromFace(arg0: BlockFace): void
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): Vine
	clone(): Object
	clone(): MaterialData
}
declare interface Minecart extends Vehicle {
	setDamage(arg0: double): void
	getDamage(): double
	getMaxSpeed(): double
	setMaxSpeed(arg0: double): void
	isSlowWhenEmpty(): boolean
	setSlowWhenEmpty(arg0: boolean): void
	getFlyingVelocityMod(): Vector
	setFlyingVelocityMod(arg0: Vector): void
	getDerailedVelocityMod(): Vector
	setDerailedVelocityMod(arg0: Vector): void
	setDisplayBlock(arg0: MaterialData): void
	getDisplayBlock(): MaterialData
	setDisplayBlockData(arg0: BlockData): void
	getDisplayBlockData(): BlockData
	setDisplayBlockOffset(arg0: int): void
	getDisplayBlockOffset(): int
}
declare class ReloadCommand extends BukkitCommand {
	tabComplete(arg0: CommandSender, arg1: String, arg2: String[]): List
	execute(arg0: CommandSender, arg1: String, arg2: String[]): boolean
}
declare interface Donkey extends ChestedHorse {
}
declare class StandardMessenger implements Messenger {
	isReservedChannel(arg0: String): boolean
	getOutgoingChannels(arg0: Plugin): Set
	getOutgoingChannels(): Set
	getIncomingChannels(arg0: Plugin): Set
	getIncomingChannels(): Set
	isRegistrationValid(arg0: PluginMessageListenerRegistration): boolean
	dispatchIncomingMessage(arg0: Player, arg1: String, arg2: byte[]): void
	addToOutgoing(arg0: Plugin, arg1: String): void
	removeFromOutgoing(arg0: Plugin): void
	removeFromOutgoing(arg0: Plugin, arg1: String): void
	addToIncoming(arg0: PluginMessageListenerRegistration): void
	removeFromIncoming(arg0: Plugin, arg1: String): void
	removeFromIncoming(arg0: Plugin): void
	removeFromIncoming(arg0: PluginMessageListenerRegistration): void
	validateAndCorrectChannel(arg0: String): String
	validateChannel(arg0: String): void
	validatePluginMessage(arg0: Messenger, arg1: Plugin, arg2: String, arg3: byte[]): void
	registerOutgoingPluginChannel(arg0: Plugin, arg1: String): void
	unregisterOutgoingPluginChannel(arg0: Plugin, arg1: String): void
	unregisterOutgoingPluginChannel(arg0: Plugin): void
	registerIncomingPluginChannel(arg0: Plugin, arg1: String, arg2: PluginMessageListener): PluginMessageListenerRegistration
	unregisterIncomingPluginChannel(arg0: Plugin, arg1: String, arg2: PluginMessageListener): void
	unregisterIncomingPluginChannel(arg0: Plugin): void
	unregisterIncomingPluginChannel(arg0: Plugin, arg1: String): void
	getIncomingChannelRegistrations(arg0: String): Set
	getIncomingChannelRegistrations(arg0: Plugin): Set
	getIncomingChannelRegistrations(arg0: Plugin, arg1: String): Set
	isIncomingChannelRegistered(arg0: Plugin, arg1: String): boolean
	isOutgoingChannelRegistered(arg0: Plugin, arg1: String): boolean
}
declare interface CreatureSpawner extends TileState {
	setDelay(arg0: int): void
	getDelay(): int
	getSpawnedType(): EntityType
	setSpawnedType(arg0: EntityType): void
	setCreatureTypeByName(arg0: String): void
	getCreatureTypeName(): String
	getMinSpawnDelay(): int
	setMinSpawnDelay(arg0: int): void
	getMaxSpawnDelay(): int
	setMaxSpawnDelay(arg0: int): void
	getSpawnCount(): int
	setSpawnCount(arg0: int): void
	getMaxNearbyEntities(): int
	setMaxNearbyEntities(arg0: int): void
	getRequiredPlayerRange(): int
	setRequiredPlayerRange(arg0: int): void
	getSpawnRange(): int
	setSpawnRange(arg0: int): void
}
namespace PlayerCommandSendEvent {
	function getCommands(): Collection
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace BlockBreakEvent {
	function getPlayer(): Player
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function setDropItems(arg0: boolean): void
	function isDropItems(): boolean
	function getExpToDrop(): int
	function setExpToDrop(arg0: int): void
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Tree extends Wood {
	getDirection(): BlockFace
	setDirection(arg0: BlockFace): void
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): Tree
	clone(): MaterialData
	clone(): Object
	clone(): Wood
}
namespace EntityPotionEffectEvent {
	function getAction(): Action
	function isOverride(): boolean
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getOldEffect(): PotionEffect
	function getNewEffect(): PotionEffect
	function getModifiedType(): PotionEffectType
	function setOverride(arg0: boolean): void
	function getCause(): Cause
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface CommandExecutor {
	onCommand(arg0: CommandSender, arg1: Command, arg2: String, arg3: String[]): boolean
}
declare class RayTraceResult {
	getHitBlock(): Block
	getHitBlockFace(): BlockFace
	getHitEntity(): Entity
	getHitPosition(): Vector
	equals(arg0: Object): boolean
	toString(): String
	hashCode(): int
}
declare interface Chicken extends Animals {
}
namespace PlayerTeleportEvent {
	function getHandlerList(): HandlerList
	function getCause(): TeleportCause
	function getHandlers(): HandlerList
	function getFrom(): Location
	function setFrom(arg0: Location): void
	function getTo(): Location
	function setTo(arg0: Location): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace BlockDispenseArmorEvent {
	function getTargetEntity(): LivingEntity
	function setItem(arg0: ItemStack): void
	function setVelocity(arg0: Vector): void
	function getVelocity(): Vector
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getItem(): ItemStack
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace PlayerRecipeDiscoverEvent {
	function getRecipe(): NamespacedKey
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface EnderDragon extends ComplexLivingEntity, Boss {
	getPhase(): Phase
	setPhase(arg0: Phase): void
	getDragonBattle(): DragonBattle
	getDeathAnimationTicks(): int
}
declare class MapPalette {
	matchColor(arg0: int, arg1: int, arg2: int): byte
	matchColor(arg0: Color): byte
	getColor(arg0: byte): Color
	getDistance(arg0: Color, arg1: Color): double
	resizeImage(arg0: Image): BufferedImage
	imageToBytes(arg0: Image): byte[]
	c(arg0: int, arg1: int, arg2: int): Color
}
namespace RaidFinishEvent {
	function getWinners(): List
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getRaid(): Raid
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Tameable extends Animals {
	isTamed(): boolean
	setTamed(arg0: boolean): void
	getOwner(): AnimalTamer
	setOwner(arg0: AnimalTamer): void
}
declare interface GlowItemFrame extends ItemFrame {
}
declare interface EndPortalFrame extends Directional {
	hasEye(): boolean
	setEye(arg0: boolean): void
}
declare interface Bell extends Directional, Powerable {
	getAttachment(): Attachment
	setAttachment(arg0: Attachment): void
}
declare interface Dripleaf extends Directional, Waterlogged {
}
namespace PlayerStatisticIncrementEvent {
	function getStatistic(): Statistic
	function getMaterial(): Material
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getEntityType(): EntityType
	function getPreviousValue(): int
	function getNewValue(): int
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Event {
	isAsynchronous(): boolean
	getEventName(): String
	getHandlers(): HandlerList
}
namespace BlockFormEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getNewState(): BlockState
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface PluginAwareness {
}
declare interface BubbleColumn extends BlockData {
	isDrag(): boolean
	setDrag(arg0: boolean): void
}
declare class Spigot {
	sendMessage(arg0: UUID, arg1: BaseComponent): void
	sendMessage(arg0: UUID, arg1: BaseComponent[]): void
	sendMessage(arg0: BaseComponent): void
	sendMessage(arg0: BaseComponent[]): void
}
declare class PluginNameConversationPrefix implements ConversationPrefix {
	getPrefix(arg0: ConversationContext): String
}
declare interface Monster extends Creature {
}
declare interface EndGateway extends TileState {
	getAge(): long
	setAge(arg0: long): void
	getExitLocation(): Location
	setExitLocation(arg0: Location): void
	isExactTeleport(): boolean
	setExactTeleport(arg0: boolean): void
}
declare class PistonExtensionMaterial extends MaterialData implements Attachable {
	isSticky(): boolean
	setSticky(arg0: boolean): void
	getFacing(): BlockFace
	setFacingDirection(arg0: BlockFace): void
	getAttachedFace(): BlockFace
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	clone(): MaterialData
	clone(): Object
	clone(): PistonExtensionMaterial
}
declare interface Directional {
	getFacing(): BlockFace
	setFacingDirection(arg0: BlockFace): void
}
namespace CauldronLevelChangeEvent {
	function getEntity(): Entity
	function getOldLevel(): int
	function getNewLevel(): int
	function setNewLevel(arg0: int): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getNewState(): BlockState
	function getReason(): ChangeReason
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace EntityBreakDoorEvent {
	function getEntity(): LivingEntity
	function getEntity(): Entity
	function getTo(): Material
	function getBlock(): Block
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getBlockData(): BlockData
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface WanderingTrader extends AbstractVillager {
	getDespawnDelay(): int
	setDespawnDelay(arg0: int): void
}
declare interface Ageable extends Creature {
	setBaby(): void
	getAge(): int
	setAge(arg0: int): void
	setAgeLock(arg0: boolean): void
	getAgeLock(): boolean
	setAdult(): void
	isAdult(): boolean
	canBreed(): boolean
	setBreed(arg0: boolean): void
}
namespace LightningStrikeEvent {
	function getLightning(): LightningStrike
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getCause(): Cause
	function getHandlers(): HandlerList
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace BlockSpreadEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getSource(): Block
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getNewState(): BlockState
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace EntityEvent {
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function getHandlers(): HandlerList
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Advancement extends Keyed {
	getCriteria(): Collection
}
namespace EntityResurrectEvent {
	function getEntity(): Entity
	function getEntity(): LivingEntity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class VersionCommand extends BukkitCommand {
	access$0(arg0: VersionCommand): void
	tabComplete(arg0: CommandSender, arg1: String, arg2: String[]): List
	getDistance(arg0: String, arg1: String): int
	sendVersion(arg0: CommandSender): void
	describeToSender(arg0: Plugin, arg1: CommandSender): void
	getNameList(arg0: List): String
	obtainVersion(): void
	setVersionMessage(arg0: String): void
	execute(arg0: CommandSender, arg1: String, arg2: String[]): boolean
}
namespace LingeringPotionSplashEvent {
	function getEntity(): ThrownPotion
	function getEntity(): Projectile
	function getEntity(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getAreaEffectCloud(): AreaEffectCloud
	function getHandlers(): HandlerList
	function getHitBlock(): Block
	function getHitBlockFace(): BlockFace
	function getHitEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Fox extends Animals, Sittable {
	getFoxType(): Type
	setFoxType(arg0: Type): void
	isCrouching(): boolean
	setCrouching(arg0: boolean): void
	setSleeping(arg0: boolean): void
	getFirstTrustedPlayer(): AnimalTamer
	setFirstTrustedPlayer(arg0: AnimalTamer): void
	getSecondTrustedPlayer(): AnimalTamer
	setSecondTrustedPlayer(arg0: AnimalTamer): void
}
namespace PlayerItemMendEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getExperienceOrb(): ExperienceOrb
	function getRepairAmount(): int
	function setRepairAmount(arg0: int): void
	function getHandlers(): HandlerList
	function getItem(): ItemStack
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace PlayerChatTabCompleteEvent {
	function getHandlerList(): HandlerList
	function getChatMessage(): String
	function getLastToken(): String
	function getTabCompletions(): Collection
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace PlayerQuitEvent {
	function getHandlerList(): HandlerList
	function getQuitMessage(): String
	function setQuitMessage(arg0: String): void
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Beehive extends Directional {
	getHoneyLevel(): int
	setHoneyLevel(arg0: int): void
	getMaximumHoneyLevel(): int
}
declare class NumberConversions {
	toInt(arg0: Object): int
	toLong(arg0: Object): long
	toShort(arg0: Object): short
	toByte(arg0: Object): byte
	square(arg0: double): double
	toDouble(arg0: Object): double
	toFloat(arg0: Object): float
	checkFinite(arg0: double, arg1: String): void
	checkFinite(arg0: float, arg1: String): void
	floor(arg0: double): int
	ceil(arg0: double): int
	isFinite(arg0: double): boolean
	isFinite(arg0: float): boolean
	round(arg0: double): int
}
declare interface Lectern extends TileState, BlockInventoryHolder {
	getPage(): int
	setPage(arg0: int): void
	getInventory(): Inventory
	getSnapshotInventory(): Inventory
}
declare interface ConversationCanceller extends Cloneable {
	setConversation(arg0: Conversation): void
	cancelBasedOnInput(arg0: ConversationContext, arg1: String): boolean
	clone(): Object
	clone(): ConversationCanceller
}
declare class BoundingBox implements Cloneable, ConfigurationSerializable {
	getMinX(): double
	getMinY(): double
	getMinZ(): double
	getMin(): Vector
	getMaxX(): double
	getMaxY(): double
	getMaxZ(): double
	getMax(): Vector
	getWidthX(): double
	getWidthZ(): double
	getCenterY(): double
	overlaps(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): boolean
	overlaps(arg0: BoundingBox): boolean
	overlaps(arg0: Vector, arg1: Vector): boolean
	getCenter(): Vector
	getCenterX(): double
	getCenterZ(): double
	getHeight(): double
	getVolume(): double
	rayTrace(arg0: Vector, arg1: Vector, arg2: double): RayTraceResult
	serialize(): Map
	deserialize(arg0: Map): BoundingBox
	expandDirectional(arg0: Vector): BoundingBox
	expandDirectional(arg0: double, arg1: double, arg2: double): BoundingBox
	intersection(arg0: BoundingBox): BoundingBox
	equals(arg0: Object): boolean
	toString(): String
	hashCode(): int
	clone(): Object
	clone(): BoundingBox
	of(arg0: Location, arg1: double, arg2: double, arg3: double): BoundingBox
	of(arg0: Vector, arg1: double, arg2: double, arg3: double): BoundingBox
	of(arg0: Block): BoundingBox
	of(arg0: Vector, arg1: Vector): BoundingBox
	of(arg0: Location, arg1: Location): BoundingBox
	of(arg0: Block, arg1: Block): BoundingBox
	contains(arg0: BoundingBox): boolean
	contains(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): boolean
	contains(arg0: Vector): boolean
	contains(arg0: double, arg1: double, arg2: double): boolean
	contains(arg0: Vector, arg1: Vector): boolean
	copy(arg0: BoundingBox): BoundingBox
	expand(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): BoundingBox
	expand(arg0: double): BoundingBox
	expand(arg0: Vector, arg1: double): BoundingBox
	expand(arg0: double, arg1: double, arg2: double, arg3: double): BoundingBox
	expand(arg0: BlockFace, arg1: double): BoundingBox
	expand(arg0: Vector): BoundingBox
	expand(arg0: double, arg1: double, arg2: double): BoundingBox
	shift(arg0: Location): BoundingBox
	shift(arg0: double, arg1: double, arg2: double): BoundingBox
	shift(arg0: Vector): BoundingBox
	resize(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): BoundingBox
	union(arg0: Vector): BoundingBox
	union(arg0: BoundingBox): BoundingBox
	union(arg0: Location): BoundingBox
	union(arg0: double, arg1: double, arg2: double): BoundingBox
}
namespace PortalCreateEvent {
	function getBlocks(): List
	function getEntity(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getReason(): CreateReason
	function getHandlers(): HandlerList
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace AreaEffectCloudApplyEvent {
	function getEntity(): Entity
	function getEntity(): AreaEffectCloud
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getAffectedEntities(): List
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface EnchantingTable extends TileState, Nameable {
}
namespace SheepDyeWoolEvent {
	function getEntity(): Entity
	function getEntity(): Sheep
	function getColor(): DyeColor
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function setColor(arg0: DyeColor): void
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface LingeringPotion extends ThrownPotion {
}
declare interface AbstractVillager extends Breedable, NPC, InventoryHolder, Merchant {
	getInventory(): Inventory
}
declare interface Destination {
}
namespace EntityEnterBlockEvent {
	function getBlock(): Block
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace ServiceUnregisterEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getProvider(): RegisteredServiceProvider
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface BukkitScheduler {
	cancelTask(arg0: int): void
	runTask(arg0: Plugin, arg1: Runnable): BukkitTask
	runTask(arg0: Plugin, arg1: Consumer): void
	runTask(arg0: Plugin, arg1: BukkitRunnable): BukkitTask
	scheduleSyncDelayedTask(arg0: Plugin, arg1: Runnable, arg2: long): int
	scheduleSyncDelayedTask(arg0: Plugin, arg1: BukkitRunnable, arg2: long): int
	scheduleSyncDelayedTask(arg0: Plugin, arg1: Runnable): int
	scheduleSyncDelayedTask(arg0: Plugin, arg1: BukkitRunnable): int
	scheduleSyncRepeatingTask(arg0: Plugin, arg1: BukkitRunnable, arg2: long, arg3: long): int
	scheduleSyncRepeatingTask(arg0: Plugin, arg1: Runnable, arg2: long, arg3: long): int
	scheduleAsyncDelayedTask(arg0: Plugin, arg1: Runnable, arg2: long): int
	scheduleAsyncDelayedTask(arg0: Plugin, arg1: Runnable): int
	scheduleAsyncRepeatingTask(arg0: Plugin, arg1: Runnable, arg2: long, arg3: long): int
	callSyncMethod(arg0: Plugin, arg1: Callable): Future
	cancelTasks(arg0: Plugin): void
	isCurrentlyRunning(arg0: int): boolean
	getActiveWorkers(): List
	getPendingTasks(): List
	runTaskAsynchronously(arg0: Plugin, arg1: Consumer): void
	runTaskAsynchronously(arg0: Plugin, arg1: BukkitRunnable): BukkitTask
	runTaskAsynchronously(arg0: Plugin, arg1: Runnable): BukkitTask
	runTaskLater(arg0: Plugin, arg1: BukkitRunnable, arg2: long): BukkitTask
	runTaskLater(arg0: Plugin, arg1: Consumer, arg2: long): void
	runTaskLater(arg0: Plugin, arg1: Runnable, arg2: long): BukkitTask
	runTaskLaterAsynchronously(arg0: Plugin, arg1: BukkitRunnable, arg2: long): BukkitTask
	runTaskLaterAsynchronously(arg0: Plugin, arg1: Consumer, arg2: long): void
	runTaskLaterAsynchronously(arg0: Plugin, arg1: Runnable, arg2: long): BukkitTask
	runTaskTimer(arg0: Plugin, arg1: BukkitRunnable, arg2: long, arg3: long): BukkitTask
	runTaskTimer(arg0: Plugin, arg1: Consumer, arg2: long, arg3: long): void
	runTaskTimer(arg0: Plugin, arg1: Runnable, arg2: long, arg3: long): BukkitTask
	runTaskTimerAsynchronously(arg0: Plugin, arg1: BukkitRunnable, arg2: long, arg3: long): BukkitTask
	runTaskTimerAsynchronously(arg0: Plugin, arg1: Consumer, arg2: long, arg3: long): void
	runTaskTimerAsynchronously(arg0: Plugin, arg1: Runnable, arg2: long, arg3: long): BukkitTask
	isQueued(arg0: int): boolean
}
declare interface DoubleChestInventory extends Inventory {
	getHolder(): InventoryHolder
	getHolder(): DoubleChest
	getLeftSide(): Inventory
	getRightSide(): Inventory
}
namespace ItemMergeEvent {
	function getEntity(): Entity
	function getEntity(): Item
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getTarget(): Item
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Criterias {
}
namespace EntityDamageByBlockEvent {
	function getDamager(): Block
	function setDamage(arg0: DamageModifier, arg1: double): void
	function setDamage(arg0: double): void
	function getDamage(): double
	function getDamage(arg0: DamageModifier): double
	function isApplicable(arg0: DamageModifier): boolean
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getOriginalDamage(arg0: DamageModifier): double
	function getFinalDamage(): double
	function getCause(): DamageCause
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface SkeletonHorse extends AbstractHorse {
}
namespace PlayerBucketEvent {
	function getBucket(): Material
	function getBlock(): Block
	function getBlockFace(): BlockFace
	function getItemStack(): ItemStack
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function setItemStack(arg0: ItemStack): void
	function getBlockClicked(): Block
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function getHandlers(): HandlerList
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class ChatPage {
	getLines(): String[]
	getPageNumber(): int
	getTotalPages(): int
}
declare class Lever extends SimpleAttachableMaterialData implements Redstone {
	setPowered(arg0: boolean): void
	isPowered(): boolean
	setFacingDirection(arg0: BlockFace): void
	getAttachedFace(): BlockFace
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): SimpleAttachableMaterialData
	clone(): MaterialData
	clone(): Object
	clone(): Lever
}
declare interface ThrownPotion extends Projectile {
	setItem(arg0: ItemStack): void
	getEffects(): Collection
	getItem(): ItemStack
}
declare interface Zombie extends Monster, Ageable {
	isBaby(): boolean
	setBaby(arg0: boolean): void
	isVillager(): boolean
	setVillager(arg0: boolean): void
	setVillagerProfession(arg0: Profession): void
	getVillagerProfession(): Profession
	getConversionTime(): int
	setConversionTime(arg0: int): void
	isConverting(): boolean
}
declare interface PersistentDataHolder {
	getPersistentDataContainer(): PersistentDataContainer
}
declare interface Light extends Levelled, Waterlogged {
}
declare interface ConfigurationSerializable {
	serialize(): Map
}
declare interface Merchant {
	getRecipe(arg0: int): MerchantRecipe
	getRecipes(): List
	setRecipes(arg0: List): void
	setRecipe(arg0: int, arg1: MerchantRecipe): void
	isTrading(): boolean
	getTrader(): HumanEntity
	getRecipeCount(): int
}
declare interface Snowball extends ThrowableProjectile {
}
declare class SimplexOctaveGenerator extends OctaveGenerator {
	setScale(arg0: double): void
	setWScale(arg0: double): void
	getWScale(): double
	noise(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: boolean): double
	noise(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
	createOctaves(arg0: Random, arg1: int): NoiseGenerator[]
}
namespace EntityEnterLoveModeEvent {
	function getEntity(): Animals
	function getEntity(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHumanEntity(): HumanEntity
	function getTicksInLove(): int
	function setTicksInLove(arg0: int): void
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Utility extends Annotation {
}
declare interface Attachable extends BlockData {
	isAttached(): boolean
	setAttached(arg0: boolean): void
}
declare interface Hoglin extends Animals {
	isImmuneToZombification(): boolean
	setImmuneToZombification(arg0: boolean): void
	getConversionTime(): int
	setConversionTime(arg0: int): void
	isConverting(): boolean
	isAbleToBeHunted(): boolean
	setIsAbleToBeHunted(arg0: boolean): void
}
declare interface Boss extends Entity {
	getBossBar(): BossBar
}
declare interface AbstractHorse extends Vehicle, InventoryHolder, Tameable {
	setVariant(arg0: Variant): void
	getDomestication(): int
	setDomestication(arg0: int): void
	getMaxDomestication(): int
	setMaxDomestication(arg0: int): void
	getJumpStrength(): double
	setJumpStrength(arg0: double): void
	getInventory(): AbstractHorseInventory
	getInventory(): Inventory
	getVariant(): Variant
}
namespace PlayerKickEvent {
	function setReason(arg0: String): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getLeaveMessage(): String
	function setLeaveMessage(arg0: String): void
	function getReason(): String
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Rail extends Waterlogged {
	getShape(): Shape
	setShape(arg0: Shape): void
	getShapes(): Set
}
namespace PlayerAdvancementDoneEvent {
	function getAdvancement(): Advancement
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace ThunderChangeEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function toThunderState(): boolean
	function getHandlers(): HandlerList
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Damageable extends Entity {
	damage(arg0: double): void
	damage(arg0: double, arg1: Entity): void
	getHealth(): double
	setHealth(arg0: double): void
	getAbsorptionAmount(): double
	setAbsorptionAmount(arg0: double): void
	getMaxHealth(): double
	setMaxHealth(arg0: double): void
	resetMaxHealth(): void
}
namespace EntityTargetLivingEntityEvent {
	function getTarget(): Entity
	function getTarget(): LivingEntity
	function setTarget(arg0: Entity): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getReason(): TargetReason
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class DirectionalContainer extends MaterialData implements Directional {
	getFacing(): BlockFace
	setFacingDirection(arg0: BlockFace): void
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): DirectionalContainer
	clone(): Object
	clone(): MaterialData
}
declare interface Item extends Entity {
	setThrower(arg0: UUID): void
	getThrower(): UUID
	getItemStack(): ItemStack
	getPickupDelay(): int
	setPickupDelay(arg0: int): void
	setItemStack(arg0: ItemStack): void
	getOwner(): UUID
	setOwner(arg0: UUID): void
}
declare interface AnimalTamer {
	getUniqueId(): UUID
	getName(): String
}
declare class MemoryConfiguration extends MemorySection implements Configuration {
	addDefault(arg0: String, arg1: Object): void
	getDefaults(): Configuration
	addDefaults(arg0: Configuration): void
	addDefaults(arg0: Map): void
	setDefaults(arg0: Configuration): void
	getParent(): ConfigurationSection
	options(): ConfigurationOptions
	options(): MemoryConfigurationOptions
}
declare interface Structure extends TileState {
	getAuthor(): String
	setAuthor(arg0: LivingEntity): void
	setAuthor(arg0: String): void
	setMirror(arg0: Mirror): void
	getMirror(): Mirror
	setShowAir(arg0: boolean): void
	isShowAir(): boolean
	setSeed(arg0: long): void
	getSeed(): long
	getRotation(): StructureRotation
	setRotation(arg0: StructureRotation): void
	setMetadata(arg0: String): void
	getMetadata(): String
	getStructureName(): String
	setStructureName(arg0: String): void
	getRelativePosition(): BlockVector
	setRelativePosition(arg0: BlockVector): void
	getStructureSize(): BlockVector
	setStructureSize(arg0: BlockVector): void
	setUsageMode(arg0: UsageMode): void
	getUsageMode(): UsageMode
	setIgnoreEntities(arg0: boolean): void
	isIgnoreEntities(): boolean
	setBoundingBoxVisible(arg0: boolean): void
	isBoundingBoxVisible(): boolean
	setIntegrity(arg0: float): void
	getIntegrity(): float
}
namespace PlayerAnimationEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getAnimationType(): PlayerAnimationType
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class SimpleAttachableMaterialData extends MaterialData implements Attachable {
	getFacing(): BlockFace
	toString(): String
	clone(): SimpleAttachableMaterialData
	clone(): MaterialData
	clone(): Object
}
namespace ItemDespawnEvent {
	function getEntity(): Entity
	function getEntity(): Item
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getLocation(): Location
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace EntitySpellCastEvent {
	function getSpell(): Spell
	function getEntity(): Entity
	function getEntity(): Spellcaster
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace HangingBreakEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getCause(): RemoveCause
	function getHandlers(): HandlerList
	function getEntity(): Hanging
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class PotionEffectTypeWrapper extends PotionEffectType {
	isInstant(): boolean
	getColor(): Color
	getDurationModifier(): double
	getName(): String
	getType(): PotionEffectType
}
declare interface Openable {
	setOpen(arg0: boolean): void
	isOpen(): boolean
}
declare class Color implements ConfigurationSerializable {
	fromRGB(arg0: int): Color
	fromRGB(arg0: int, arg1: int, arg2: int): Color
	fromBGR(arg0: int): Color
	fromBGR(arg0: int, arg1: int, arg2: int): Color
	setRed(arg0: int): Color
	setGreen(arg0: int): Color
	setBlue(arg0: int): Color
	asRGB(): int
	asBGR(): int
	mixDyes(arg0: DyeColor[]): Color
	mixColors(arg0: Color[]): Color
	getRed(): int
	getGreen(): int
	getBlue(): int
	asInt(arg0: String, arg1: Map): int
	serialize(): Map
	deserialize(arg0: Map): Color
	equals(arg0: Object): boolean
	toString(): String
	hashCode(): int
}
declare interface AbstractArrow extends Projectile {
	isCritical(): boolean
	isInBlock(): boolean
	setDamage(arg0: double): void
	getDamage(): double
	getKnockbackStrength(): int
	setKnockbackStrength(arg0: int): void
	getPierceLevel(): int
	setPierceLevel(arg0: int): void
	setCritical(arg0: boolean): void
	getAttachedBlock(): Block
	getPickupStatus(): PickupStatus
	setPickupStatus(arg0: PickupStatus): void
	isShotFromCrossbow(): boolean
	setShotFromCrossbow(arg0: boolean): void
}
namespace ServiceRegisterEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getProvider(): RegisteredServiceProvider
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Vindicator extends Illager {
}
declare interface ComplexRecipe extends Recipe, Keyed {
}
namespace HorseJumpEvent {
	function getPower(): float
	function setPower(arg0: float): void
	function getEntity(): AbstractHorse
	function getEntity(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace ServerLoadEvent {
	function getHandlerList(): HandlerList
	function getType(): LoadType
	function getHandlers(): HandlerList
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Dye extends MaterialData implements Colorable {
	getColor(): DyeColor
	toString(): String
	clone(): Dye
	clone(): MaterialData
	clone(): Object
	setColor(arg0: DyeColor): void
}
namespace BlockPistonEvent {
	function isSticky(): boolean
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getDirection(): BlockFace
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function getHandlers(): HandlerList
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace BlockExpEvent {
	function getExpToDrop(): int
	function setExpToDrop(arg0: int): void
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace PlayerTakeLecternBookEvent {
	function getLectern(): Lectern
	function getBook(): ItemStack
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class PotionData {
	isUpgraded(): boolean
	isExtended(): boolean
	equals(arg0: Object): boolean
	hashCode(): int
	getType(): PotionType
}
declare interface Farmland extends BlockData {
	getMoisture(): int
	setMoisture(arg0: int): void
	getMaximumMoisture(): int
}
declare class RegisteredListener {
	callEvent(arg0: Event): void
	getPlugin(): Plugin
	isIgnoringCancelled(): boolean
	getListener(): Listener
	getPriority(): EventPriority
}
declare class Permission {
	addParent(arg0: String, arg1: boolean): Permission
	addParent(arg0: Permission, arg1: boolean): void
	recalculatePermissibles(): void
	getDescription(): String
	setDescription(arg0: String): void
	getChildren(): Map
	loadPermissions(arg0: Map, arg1: String, arg2: PermissionDefault): List
	getPermissibles(): Set
	loadPermission(arg0: String, arg1: Map): Permission
	loadPermission(arg0: String, arg1: Map, arg2: PermissionDefault, arg3: List): Permission
	extractChildren(arg0: Map, arg1: String, arg2: PermissionDefault, arg3: List): Map
	getName(): String
	getDefault(): PermissionDefault
	setDefault(arg0: PermissionDefault): void
}
declare interface ThrowableProjectile extends Projectile {
	setItem(arg0: ItemStack): void
	getItem(): ItemStack
}
declare interface Sign extends Rotatable, Waterlogged {
}
declare interface Container extends TileState, BlockInventoryHolder, Lockable, Nameable {
	getInventory(): Inventory
	getSnapshotInventory(): Inventory
}
declare class Dispenser extends FurnaceAndDispenser {
	getFacing(): BlockFace
	setFacingDirection(arg0: BlockFace): void
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	clone(): MaterialData
	clone(): DirectionalContainer
	clone(): Dispenser
	clone(): Object
	clone(): FurnaceAndDispenser
}
declare interface Grindstone extends Directional, FaceAttachable {
}
declare interface Witch extends Raider {
}
namespace BlockDispenseEvent {
	function setItem(arg0: ItemStack): void
	function setVelocity(arg0: Vector): void
	function getVelocity(): Vector
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getItem(): ItemStack
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Observer extends Directional, Powerable {
}
declare interface Tripwire extends Attachable, MultipleFacing, Powerable {
	isDisarmed(): boolean
	setDisarmed(arg0: boolean): void
}
declare class Button extends SimpleAttachableMaterialData implements Redstone {
	setPowered(arg0: boolean): void
	isPowered(): boolean
	setFacingDirection(arg0: BlockFace): void
	getAttachedFace(): BlockFace
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): SimpleAttachableMaterialData
	clone(): MaterialData
	clone(): Object
	clone(): Button
}
declare interface Colorable {
	getColor(): DyeColor
	setColor(arg0: DyeColor): void
}
declare class DustOptions {
	getColor(): Color
	getSize(): float
}
declare class BlockIterator implements Iterator {
	getXLength(arg0: Vector): double
	getXFace(arg0: Vector): BlockFace
	getYFace(arg0: Vector): BlockFace
	getYLength(arg0: Vector): double
	getZFace(arg0: Vector): BlockFace
	getZLength(arg0: Vector): double
	getXPosition(arg0: Vector, arg1: Vector, arg2: Block): double
	getYPosition(arg0: Vector, arg1: Vector, arg2: Block): double
	getZPosition(arg0: Vector, arg1: Vector, arg2: Block): double
	blockEquals(arg0: Block, arg1: Block): boolean
	getPosition(arg0: double, arg1: double, arg2: int): double
	remove(): void
	hasNext(): boolean
	next(): Object
	next(): Block
	scan(): void
}
namespace AsyncPlayerPreLoginEvent {
	function getUniqueId(): UUID
	function getHandlerList(): HandlerList
	function getKickMessage(): String
	function setKickMessage(arg0: String): void
	function getLoginResult(): Result
	function setLoginResult(arg0: Result): void
	function getName(): String
	function disallow(arg0: Result, arg1: String): void
	function disallow(arg0: Result, arg1: String): void
	function allow(): void
	function getAddress(): InetAddress
	function getResult(): Result
	function setResult(arg0: Result): void
	function getHandlers(): HandlerList
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace BlockPistonRetractEvent {
	function getBlocks(): List
	function getHandlerList(): HandlerList
	function getRetractLocation(): Location
	function getHandlers(): HandlerList
	function isSticky(): boolean
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getDirection(): BlockFace
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface StorageMinecart extends Minecart, InventoryHolder, Lootable {
}
namespace EntityCreatePortalEvent {
	function getBlocks(): List
	function getEntity(): Entity
	function getEntity(): LivingEntity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getPortalType(): PortalType
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface PersistentDataContainer {
	getAdapterContext(): PersistentDataAdapterContext
	remove(arg0: NamespacedKey): void
	get(arg0: NamespacedKey, arg1: PersistentDataType): Object
	isEmpty(): boolean
	set(arg0: NamespacedKey, arg1: PersistentDataType, arg2: Object): void
	getOrDefault(arg0: NamespacedKey, arg1: PersistentDataType, arg2: Object): Object
	has(arg0: NamespacedKey, arg1: PersistentDataType): boolean
	getKeys(): Set
}
declare interface Ghast extends Flying {
}
declare class StringUtil {
	startsWithIgnoreCase(arg0: String, arg1: String): boolean
	copyPartialMatches(arg0: String, arg1: Iterable, arg2: Collection): Collection
}
declare interface DelegateDeserialization extends Annotation {
	value(): Class
}
declare interface Campfire extends TileState {
	setItem(arg0: int, arg1: ItemStack): void
	getCookTime(arg0: int): int
	setCookTime(arg0: int, arg1: int): void
	getCookTimeTotal(arg0: int): int
	setCookTimeTotal(arg0: int, arg1: int): void
	getSize(): int
	getItem(arg0: int): ItemStack
}
namespace ProjectileLaunchEvent {
	function getEntity(): Entity
	function getEntity(): Projectile
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getLocation(): Location
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Conversable {
	sendRawMessage(arg0: UUID, arg1: String): void
	sendRawMessage(arg0: String): void
	isConversing(): boolean
	acceptConversationInput(arg0: String): void
	beginConversation(arg0: Conversation): boolean
	abandonConversation(arg0: Conversation, arg1: ConversationAbandonedEvent): void
	abandonConversation(arg0: Conversation): void
}
declare interface LeatherArmorMeta extends ItemMeta {
	getColor(): Color
	clone(): Object
	clone(): ItemMeta
	clone(): LeatherArmorMeta
	setColor(arg0: Color): void
}
namespace BlockMultiPlaceEvent {
	function getReplacedBlockStates(): List
	function getPlayer(): Player
	function canBuild(): boolean
	function setBuild(arg0: boolean): void
	function getHand(): EquipmentSlot
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getItemInHand(): ItemStack
	function getBlockPlaced(): Block
	function getBlockReplacedState(): BlockState
	function getBlockAgainst(): Block
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class PotionEffectType {
	getById(arg0: int): PotionEffectType
	isInstant(): boolean
	getColor(): Color
	stopAcceptingRegistrations(): void
	getDurationModifier(): double
	registerPotionEffectType(arg0: PotionEffectType): void
	createEffect(arg0: int, arg1: int): PotionEffect
	getName(): String
	equals(arg0: Object): boolean
	toString(): String
	values(): PotionEffectType[]
	hashCode(): int
	getId(): int
	getByName(arg0: String): PotionEffectType
}
declare interface Painting extends Hanging {
	getArt(): Art
	setArt(arg0: Art): boolean
	setArt(arg0: Art, arg1: boolean): boolean
}
namespace PlayerChangedMainHandEvent {
	function getHandlerList(): HandlerList
	function getMainHand(): MainHand
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface AbstractHorseInventory extends Inventory {
	setSaddle(arg0: ItemStack): void
	getSaddle(): ItemStack
}
declare interface ItemTagType {
	getPrimitiveType(): Class
	getComplexType(): Class
	toPrimitive(arg0: Object, arg1: ItemTagAdapterContext): Object
	fromPrimitive(arg0: Object, arg1: ItemTagAdapterContext): Object
}
declare interface Dispenser extends Directional {
	isTriggered(): boolean
	setTriggered(arg0: boolean): void
}
declare interface Powerable extends BlockData {
	setPowered(arg0: boolean): void
	isPowered(): boolean
}
declare class HelpTopic {
	canSee(arg0: CommandSender): boolean
	amendTopic(arg0: String, arg1: String): void
	amendCanSee(arg0: String): void
	getShortText(): String
	getFullText(arg0: CommandSender): String
	applyAmendment(arg0: String, arg1: String): String
	getName(): String
}
declare interface Strider extends Steerable, Vehicle {
	isShivering(): boolean
	setShivering(arg0: boolean): void
}
namespace PlayerRegisterChannelEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getChannel(): String
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Endermite extends Monster {
	isPlayerSpawned(): boolean
	setPlayerSpawned(arg0: boolean): void
}
declare class Cake extends MaterialData {
	getSlicesEaten(): int
	getSlicesRemaining(): int
	setSlicesEaten(arg0: int): void
	setSlicesRemaining(arg0: int): void
	toString(): String
	clone(): Object
	clone(): MaterialData
	clone(): Cake
}
declare class MemoryConfigurationOptions extends ConfigurationOptions {
	copyDefaults(arg0: boolean): ConfigurationOptions
	copyDefaults(arg0: boolean): MemoryConfigurationOptions
	configuration(): MemoryConfiguration
	configuration(): Configuration
	pathSeparator(arg0: char): ConfigurationOptions
	pathSeparator(arg0: char): MemoryConfigurationOptions
}
namespace PlayerInteractEvent {
	function hasItem(): boolean
	function hasBlock(): boolean
	function getAction(): Action
	function getHand(): EquipmentSlot
	function getBlockFace(): BlockFace
	function getMaterial(): Material
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function useItemInHand(): Result
	function useInteractedBlock(): Result
	function setUseInteractedBlock(arg0: Result): void
	function setUseItemInHand(arg0: Result): void
	function isBlockInHand(): boolean
	function getClickedBlock(): Block
	function getHandlers(): HandlerList
	function getItem(): ItemStack
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace RaidSpawnWaveEvent {
	function getRaiders(): List
	function getHandlerList(): HandlerList
	function getPatrolLeader(): Raider
	function getHandlers(): HandlerList
	function getRaid(): Raid
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace PotionSplashEvent {
	function getPotion(): ThrownPotion
	function getEntity(): ThrownPotion
	function getEntity(): Projectile
	function getEntity(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getIntensity(arg0: LivingEntity): double
	function setIntensity(arg0: LivingEntity, arg1: double): void
	function getAffectedEntities(): Collection
	function getHandlers(): HandlerList
	function getHitBlock(): Block
	function getHitBlockFace(): BlockFace
	function getHitEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface LootTable extends Keyed {
	populateLoot(arg0: Random, arg1: LootContext): Collection
	fillInventory(arg0: Inventory, arg1: Random, arg2: LootContext): void
}
namespace BlockCookEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getResult(): ItemStack
	function setResult(arg0: ItemStack): void
	function getHandlers(): HandlerList
	function getSource(): ItemStack
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Fire extends Ageable, MultipleFacing {
}
declare class Vector implements Cloneable, ConfigurationSerializable {
	divide(arg0: Vector): Vector
	angle(arg0: Vector): float
	midpoint(arg0: Vector): Vector
	isInAABB(arg0: Vector, arg1: Vector): boolean
	isInSphere(arg0: Vector, arg1: double): boolean
	getEpsilon(): double
	toLocation(arg0: World, arg1: float, arg2: float): Location
	toLocation(arg0: World): Location
	getMinimum(arg0: Vector, arg1: Vector): Vector
	getMaximum(arg0: Vector, arg1: Vector): Vector
	getRandom(): Vector
	getX(): double
	getY(): double
	getZ(): double
	setX(arg0: float): Vector
	setX(arg0: int): Vector
	setX(arg0: double): Vector
	getBlockX(): int
	setY(arg0: int): Vector
	setY(arg0: float): Vector
	setY(arg0: double): Vector
	getBlockY(): int
	setZ(arg0: double): Vector
	setZ(arg0: float): Vector
	setZ(arg0: int): Vector
	getBlockZ(): int
	subtract(arg0: Vector): Vector
	serialize(): Map
	lengthSquared(): double
	distanceSquared(arg0: Vector): double
	checkFinite(): void
	deserialize(arg0: Map): Vector
	getMidpoint(arg0: Vector): Vector
	crossProduct(arg0: Vector): Vector
	getCrossProduct(arg0: Vector): Vector
	normalizeZeros(): Vector
	rotateAroundX(arg0: double): Vector
	rotateAroundY(arg0: double): Vector
	rotateAroundZ(arg0: double): Vector
	rotateAroundAxis(arg0: Vector, arg1: double): Vector
	rotateAroundNonUnitAxis(arg0: Vector, arg1: double): Vector
	toBlockVector(): BlockVector
	add(arg0: Vector): Vector
	equals(arg0: Object): boolean
	length(): double
	toString(): String
	hashCode(): int
	clone(): Object
	clone(): Vector
	dot(arg0: Vector): double
	copy(arg0: Vector): Vector
	normalize(): Vector
	zero(): Vector
	distance(arg0: Vector): double
	multiply(arg0: float): Vector
	multiply(arg0: Vector): Vector
	multiply(arg0: double): Vector
	multiply(arg0: int): Vector
	isNormalized(): boolean
}
namespace SpawnChangeEvent {
	function getHandlerList(): HandlerList
	function getPreviousLocation(): Location
	function getHandlers(): HandlerList
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface BlockCommandSender extends CommandSender {
	getBlock(): Block
}
declare interface ArmorStand extends LivingEntity {
	hasArms(): boolean
	setArms(arg0: boolean): void
	isSmall(): boolean
	setSmall(arg0: boolean): void
	isMarker(): boolean
	setMarker(arg0: boolean): void
	isVisible(): boolean
	setVisible(arg0: boolean): void
	getHelmet(): ItemStack
	setHelmet(arg0: ItemStack): void
	getBoots(): ItemStack
	setBoots(arg0: ItemStack): void
	getBodyPose(): EulerAngle
	setBodyPose(arg0: EulerAngle): void
	getLeftArmPose(): EulerAngle
	setLeftArmPose(arg0: EulerAngle): void
	getRightArmPose(): EulerAngle
	setRightArmPose(arg0: EulerAngle): void
	getLeftLegPose(): EulerAngle
	setLeftLegPose(arg0: EulerAngle): void
	getRightLegPose(): EulerAngle
	setRightLegPose(arg0: EulerAngle): void
	getHeadPose(): EulerAngle
	setHeadPose(arg0: EulerAngle): void
	hasBasePlate(): boolean
	setBasePlate(arg0: boolean): void
	addEquipmentLock(arg0: EquipmentSlot, arg1: LockType): void
	removeEquipmentLock(arg0: EquipmentSlot, arg1: LockType): void
	hasEquipmentLock(arg0: EquipmentSlot, arg1: LockType): boolean
	getItemInHand(): ItemStack
	setItemInHand(arg0: ItemStack): void
	getChestplate(): ItemStack
	setChestplate(arg0: ItemStack): void
	getLeggings(): ItemStack
	setLeggings(arg0: ItemStack): void
}
declare class Cauldron extends MaterialData {
	isFull(): boolean
	toString(): String
	clone(): MaterialData
	clone(): Cauldron
	clone(): Object
	isEmpty(): boolean
}
namespace EntityPortalEnterEvent {
	function getHandlerList(): HandlerList
	function getLocation(): Location
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace BrewingStandFuelEvent {
	function getFuel(): ItemStack
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getFuelPower(): int
	function setFuelPower(arg0: int): void
	function isConsuming(): boolean
	function setConsuming(arg0: boolean): void
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class HelpTopicComparator implements Comparator {
	topicNameComparatorInstance(): TopicNameComparator
	helpTopicComparatorInstance(): HelpTopicComparator
	compare(arg0: HelpTopic, arg1: HelpTopic): int
	compare(arg0: Object, arg1: Object): int
}
declare interface Raider extends Monster {
	getPatrolTarget(): Block
	setPatrolTarget(arg0: Block): void
	isPatrolLeader(): boolean
	setPatrolLeader(arg0: boolean): void
	isCanJoinRaid(): boolean
	setCanJoinRaid(arg0: boolean): void
}
declare class Torch extends SimpleAttachableMaterialData {
	setFacingDirection(arg0: BlockFace): void
	getAttachedFace(): BlockFace
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	clone(): MaterialData
	clone(): Torch
	clone(): Object
	clone(): SimpleAttachableMaterialData
}
declare interface AbstractSkeleton extends Monster {
	getSkeletonType(): SkeletonType
	setSkeletonType(arg0: SkeletonType): void
}
declare interface HelpMap {
	addTopic(arg0: HelpTopic): void
	getHelpTopic(arg0: String): HelpTopic
	getHelpTopics(): Collection
	registerHelpTopicFactory(arg0: Class, arg1: HelpTopicFactory): void
	getIgnoredPlugins(): List
	clear(): void
}
declare interface Jukebox extends TileState {
	getPlaying(): Material
	setPlaying(arg0: Material): void
	getRecord(): ItemStack
	setRecord(arg0: ItemStack): void
	isPlaying(): boolean
	eject(): boolean
	stopPlaying(): void
}
namespace PlayerBedEnterEvent {
	function useBed(): Result
	function setUseBed(arg0: Result): void
	function getBed(): Block
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getBedEnterResult(): BedEnterResult
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Art extends Enum implements Keyed {
	getById(arg0: int): Art
	getBlockWidth(): int
	getBlockHeight(): int
	values(): Art[]
	valueOf(arg0: String): Art
	getKey(): NamespacedKey
	getId(): int
	getByName(arg0: String): Art
}
declare class Biome extends Enum implements Keyed {
	values(): Biome[]
	valueOf(arg0: String): Biome
	getKey(): NamespacedKey
}
declare interface AreaEffectCloud extends Entity {
	getRadius(): float
	setRadius(arg0: float): void
	setSource(arg0: ProjectileSource): void
	getColor(): Color
	setBasePotionData(arg0: PotionData): void
	getBasePotionData(): PotionData
	addCustomEffect(arg0: PotionEffect, arg1: boolean): boolean
	removeCustomEffect(arg0: PotionEffectType): boolean
	hasCustomEffect(arg0: PotionEffectType): boolean
	clearCustomEffects(): void
	getDuration(): int
	setDuration(arg0: int): void
	hasCustomEffects(): boolean
	getCustomEffects(): List
	getWaitTime(): int
	setWaitTime(arg0: int): void
	getReapplicationDelay(): int
	setReapplicationDelay(arg0: int): void
	getDurationOnUse(): int
	setDurationOnUse(arg0: int): void
	getRadiusOnUse(): float
	setRadiusOnUse(arg0: float): void
	getRadiusPerTick(): float
	setRadiusPerTick(arg0: float): void
	getParticle(): Particle
	setParticle(arg0: Particle): void
	setParticle(arg0: Particle, arg1: Object): void
	getSource(): ProjectileSource
	setColor(arg0: Color): void
}
declare interface WaterMob extends Creature {
}
declare class RemoveAttachmentRunnable implements Runnable {
	run(): void
}
namespace WeatherEvent {
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function getHandlers(): HandlerList
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Campfire extends Directional, Lightable, Waterlogged {
	isSignalFire(): boolean
	setSignalFire(arg0: boolean): void
}
declare interface Breedable extends Ageable {
	setAgeLock(arg0: boolean): void
	getAgeLock(): boolean
	canBreed(): boolean
	setBreed(arg0: boolean): void
}
declare interface AdvancementProgress {
	isDone(): boolean
	getAdvancement(): Advancement
	awardCriteria(arg0: String): boolean
	revokeCriteria(arg0: String): boolean
	getDateAwarded(arg0: String): Date
	getRemainingCriteria(): Collection
	getAwardedCriteria(): Collection
}
declare class SpawnEgg extends MaterialData {
	getSpawnedType(): EntityType
	setSpawnedType(arg0: EntityType): void
	toString(): String
	clone(): Object
	clone(): MaterialData
	clone(): SpawnEgg
}
declare interface TurtleEgg extends BlockData {
	getEggs(): int
	setEggs(arg0: int): void
	getHatch(): int
	setHatch(arg0: int): void
	getMinimumEggs(): int
	getMaximumEggs(): int
	getMaximumHatch(): int
}
declare interface Squid extends WaterMob {
}
namespace InventoryClickEvent {
	function getCursor(): ItemStack
	function setCursor(arg0: ItemStack): void
	function getRawSlot(): int
	function getAction(): InventoryAction
	function getClick(): ClickType
	function getSlotType(): SlotType
	function getCurrentItem(): ItemStack
	function isRightClick(): boolean
	function isLeftClick(): boolean
	function isShiftClick(): boolean
	function setCurrentItem(arg0: ItemStack): void
	function getClickedInventory(): Inventory
	function getHotbarButton(): int
	function getHandlerList(): HandlerList
	function getSlot(): int
	function getHandlers(): HandlerList
	function getWhoClicked(): HumanEntity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getResult(): Result
	function setResult(arg0: Result): void
	function getViewers(): List
	function getView(): InventoryView
	function getInventory(): Inventory
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Sound extends Enum implements Keyed {
	values(): Sound[]
	valueOf(arg0: String): Sound
	getKey(): NamespacedKey
}
declare interface Guardian extends Monster {
	isElder(): boolean
	setElder(arg0: boolean): void
}
declare class DetectorRail extends ExtendedRails implements PressureSensor {
	setPressed(arg0: boolean): void
	isPressed(): boolean
	clone(): MaterialData
	clone(): Object
	clone(): Rails
	clone(): ExtendedRails
	clone(): DetectorRail
}
declare interface BukkitWorker {
	getThread(): Thread
	getTaskId(): int
	getOwner(): Plugin
}
namespace PlayerGameModeChangeEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getNewGameMode(): GameMode
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Spigot {
	restart(): void
	getConfig(): YamlConfiguration
	broadcast(arg0: BaseComponent[]): void
	broadcast(arg0: BaseComponent): void
}
declare class BooleanPrompt extends ValidatingPrompt {
	isInputValid(arg0: ConversationContext, arg1: String): boolean
	acceptValidatedInput(arg0: ConversationContext, arg1: boolean): Prompt
	acceptValidatedInput(arg0: ConversationContext, arg1: String): Prompt
}
namespace PlayerItemConsumeEvent {
	function setItem(arg0: ItemStack): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getItem(): ItemStack
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface TropicalFish extends Fish {
	getPattern(): Pattern
	setPattern(arg0: Pattern): void
	getPatternColor(): DyeColor
	setPatternColor(arg0: DyeColor): void
	getBodyColor(): DyeColor
	setBodyColor(arg0: DyeColor): void
}
declare class PermissibleBase implements Permissible {
	isOp(): boolean
	setOp(arg0: boolean): void
	isPermissionSet(arg0: String): boolean
	isPermissionSet(arg0: Permission): boolean
	hasPermission(arg0: String): boolean
	hasPermission(arg0: Permission): boolean
	addAttachment(arg0: Plugin, arg1: String, arg2: boolean, arg3: int): PermissionAttachment
	addAttachment(arg0: Plugin, arg1: int): PermissionAttachment
	addAttachment(arg0: Plugin): PermissionAttachment
	addAttachment(arg0: Plugin, arg1: String, arg2: boolean): PermissionAttachment
	removeAttachment(arg0: PermissionAttachment): void
	recalculatePermissions(): void
	getEffectivePermissions(): Set
	clearPermissions(): void
	calculateChildPermissions(arg0: Map, arg1: boolean, arg2: PermissionAttachment): void
}
namespace EntityTargetEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getTarget(): Entity
	function setTarget(arg0: Entity): void
	function getReason(): TargetReason
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace EntityInteractEvent {
	function getBlock(): Block
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace BlockFadeEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getNewState(): BlockState
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace VillagerAcquireTradeEvent {
	function getRecipe(): MerchantRecipe
	function setRecipe(arg0: MerchantRecipe): void
	function getEntity(): Entity
	function getEntity(): AbstractVillager
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface NoteBlock extends Powerable {
	getNote(): Note
	setNote(arg0: Note): void
	getInstrument(): Instrument
	setInstrument(arg0: Instrument): void
}
namespace PlayerCommandPreprocessEvent {
	function setMessage(arg0: String): void
	function setPlayer(arg0: Player): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getRecipients(): Set
	function getMessage(): String
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class MerchantRecipe implements Recipe {
	getUses(): int
	setUses(arg0: int): void
	getMaxUses(): int
	setMaxUses(arg0: int): void
	addIngredient(arg0: ItemStack): void
	removeIngredient(arg0: int): void
	setIngredients(arg0: List): void
	getIngredients(): List
	hasExperienceReward(): boolean
	setExperienceReward(arg0: boolean): void
	getPriceMultiplier(): float
	setPriceMultiplier(arg0: float): void
	getVillagerExperience(): int
	setVillagerExperience(arg0: int): void
	getResult(): ItemStack
}
declare class Spigot {
	getPage(arg0: int): BaseComponent[]
	setPage(arg0: int, arg1: BaseComponent[]): void
	getPages(): List
	setPages(arg0: BaseComponent[][]): void
	setPages(arg0: List): void
	addPage(arg0: BaseComponent[][]): void
}
declare interface Listener {
}
declare interface ChunkData {
	getData(arg0: int, arg1: int, arg2: int): byte
	setBlock(arg0: int, arg1: int, arg2: int, arg3: BlockData): void
	setBlock(arg0: int, arg1: int, arg2: int, arg3: MaterialData): void
	setBlock(arg0: int, arg1: int, arg2: int, arg3: Material): void
	setRegion(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: BlockData): void
	setRegion(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: MaterialData): void
	setRegion(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: Material): void
	getBlockData(arg0: int, arg1: int, arg2: int): BlockData
	getTypeAndData(arg0: int, arg1: int, arg2: int): MaterialData
	getMinHeight(): int
	getMaxHeight(): int
	getType(arg0: int, arg1: int, arg2: int): Material
}
declare interface Snowable extends BlockData {
	isSnowy(): boolean
	setSnowy(arg0: boolean): void
}
namespace PlayerEditBookEvent {
	function isSigning(): boolean
	function setSigning(arg0: boolean): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getPreviousBookMeta(): BookMeta
	function getNewBookMeta(): BookMeta
	function setNewBookMeta(arg0: BookMeta): void
	function getSlot(): int
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace BroadcastMessageEvent {
	function setMessage(arg0: String): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getRecipients(): Set
	function getMessage(): String
	function getHandlers(): HandlerList
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface ExperienceOrb extends Entity {
	setExperience(arg0: int): void
	getExperience(): int
}
declare class Note {
	sharped(): Note
	flat(arg0: int, arg1: Tone): Note
	sharp(arg0: int, arg1: Tone): Note
	natural(arg0: int, arg1: Tone): Note
	flattened(): Note
	getOctave(): int
	getTone(): Tone
	isSharped(): boolean
	getToneByte(): byte
	equals(arg0: Object): boolean
	toString(): String
	hashCode(): int
	getId(): byte
}
declare class Comparator extends MaterialData implements Directional, Redstone {
	getFacing(): BlockFace
	isPowered(): boolean
	setFacingDirection(arg0: BlockFace): void
	setSubtractionMode(arg0: boolean): void
	isSubtractionMode(): boolean
	isBeingPowered(): boolean
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): Object
	clone(): Comparator
	clone(): MaterialData
}
namespace VehicleBlockCollisionEvent {
	function getBlock(): Block
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getVehicle(): Vehicle
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface RedstoneRail extends Powerable, Rail {
}
namespace VillagerReplenishTradeEvent {
	function getBonus(): int
	function setBonus(arg0: int): void
	function getRecipe(): MerchantRecipe
	function setRecipe(arg0: MerchantRecipe): void
	function getEntity(): Entity
	function getEntity(): AbstractVillager
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface SculkSensor extends AnaloguePowerable, Waterlogged {
	getPhase(): Phase
	setPhase(arg0: Phase): void
}
namespace BlockPistonExtendEvent {
	function getBlocks(): List
	function getHandlerList(): HandlerList
	function getLength(): int
	function getHandlers(): HandlerList
	function isSticky(): boolean
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getDirection(): BlockFace
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface DragonBattle {
	getBossBar(): BossBar
	getEnderDragon(): EnderDragon
	getEndPortalLocation(): Location
	generateEndPortal(arg0: boolean): boolean
	hasBeenPreviouslyKilled(): boolean
	initiateRespawn(): void
	getRespawnPhase(): RespawnPhase
	setRespawnPhase(arg0: RespawnPhase): boolean
	resetCrystals(): void
}
declare interface CraftingInventory extends Inventory {
	getMatrix(): ItemStack[]
	setMatrix(arg0: ItemStack[]): void
	getRecipe(): Recipe
	getResult(): ItemStack
	setResult(arg0: ItemStack): void
}
declare interface PointedDripstone extends Waterlogged {
	getVerticalDirection(): BlockFace
	setVerticalDirection(arg0: BlockFace): void
	getVerticalDirections(): Set
	getThickness(): Thickness
	setThickness(arg0: Thickness): void
}
declare class Ladder extends SimpleAttachableMaterialData {
	setFacingDirection(arg0: BlockFace): void
	getAttachedFace(): BlockFace
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	clone(): MaterialData
	clone(): Ladder
	clone(): Object
	clone(): SimpleAttachableMaterialData
}
declare interface EnderDragonPart extends ComplexEntityPart, Damageable {
	getParent(): EnderDragon
	getParent(): ComplexLivingEntity
}
declare class FileUtil {
	copy(arg0: File, arg1: File): boolean
}
namespace ItemSpawnEvent {
	function getEntity(): Entity
	function getEntity(): Item
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getLocation(): Location
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace PlayerUnleashEntityEvent {
	function getPlayer(): Player
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getReason(): UnleashReason
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace MapInitializeEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getMap(): MapView
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Piglin extends PiglinAbstract, InventoryHolder {
	isAbleToHunt(): boolean
	setIsAbleToHunt(arg0: boolean): void
	addBarterMaterial(arg0: Material): boolean
	removeBarterMaterial(arg0: Material): boolean
	addMaterialOfInterest(arg0: Material): boolean
	removeMaterialOfInterest(arg0: Material): boolean
	getInterestList(): Set
	getBarterList(): Set
}
declare class MaterialData implements Cloneable {
	getData(): byte
	setData(arg0: byte): void
	getItemType(): Material
	toItemStack(): ItemStack
	toItemStack(arg0: int): ItemStack
	equals(arg0: Object): boolean
	toString(): String
	hashCode(): int
	clone(): Object
	clone(): MaterialData
}
declare class CommandPermissions {
	registerPermissions(arg0: Permission): Permission
}
declare interface Axolotl extends Animals {
	setVariant(arg0: Variant): void
	isPlayingDead(): boolean
	setPlayingDead(arg0: boolean): void
	getVariant(): Variant
}
declare interface MapCanvas {
	getMapView(): MapView
	getCursors(): MapCursorCollection
	setCursors(arg0: MapCursorCollection): void
	setPixel(arg0: int, arg1: int, arg2: byte): void
	getPixel(arg0: int, arg1: int): byte
	drawText(arg0: int, arg1: int, arg2: MapFont, arg3: String): void
	drawImage(arg0: int, arg1: int, arg2: Image): void
	getBasePixel(arg0: int, arg1: int): byte
}
namespace PrepareSmithingEvent {
	function getInventory(): SmithingInventory
	function getInventory(): Inventory
	function getHandlerList(): HandlerList
	function getResult(): ItemStack
	function setResult(arg0: ItemStack): void
	function getHandlers(): HandlerList
	function getViewers(): List
	function getView(): InventoryView
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface SpawnEggMeta extends ItemMeta {
	getSpawnedType(): EntityType
	setSpawnedType(arg0: EntityType): void
	clone(): ItemMeta
	clone(): Object
	clone(): SpawnEggMeta
}
declare interface ProjectileSource {
	launchProjectile(arg0: Class): Projectile
	launchProjectile(arg0: Class, arg1: Vector): Projectile
}
declare class Observer extends MaterialData implements Directional, Redstone {
	getFacing(): BlockFace
	isPowered(): boolean
	setFacingDirection(arg0: BlockFace): void
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): Object
	clone(): Observer
	clone(): MaterialData
}
declare class Mushroom extends MaterialData {
	isStem(): boolean
	setStem(): void
	getBlockTexture(): MushroomBlockTexture
	setBlockTexture(arg0: MushroomBlockTexture): void
	isFacePainted(arg0: BlockFace): boolean
	setFacePainted(arg0: BlockFace, arg1: boolean): void
	getPaintedFaces(): Set
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): Object
	clone(): Mushroom
	clone(): MaterialData
}
declare interface PufferFish extends Fish {
	getPuffState(): int
	setPuffState(arg0: int): void
}
declare interface DragonFireball extends Fireball {
}
declare interface MapMeta extends ItemMeta {
	getMapView(): MapView
	hasMapId(): boolean
	getMapId(): int
	setMapId(arg0: int): void
	hasMapView(): boolean
	setMapView(arg0: MapView): void
	isScaling(): boolean
	setScaling(arg0: boolean): void
	hasColor(): boolean
	getColor(): Color
	hasLocationName(): boolean
	getLocationName(): String
	setLocationName(arg0: String): void
	clone(): ItemMeta
	clone(): MapMeta
	clone(): Object
	setColor(arg0: Color): void
}
declare class StructureType {
	getMapIcon(): Type
	getStructureTypes(): Map
	getName(): String
	equals(arg0: Object): boolean
	toString(): String
	hashCode(): int
	register(arg0: StructureType): StructureType
}
namespace InventoryDragEvent {
	function getCursor(): ItemStack
	function setCursor(arg0: ItemStack): void
	function getHandlerList(): HandlerList
	function getNewItems(): Map
	function getRawSlots(): Set
	function getInventorySlots(): Set
	function getOldCursor(): ItemStack
	function getType(): DragType
	function getHandlers(): HandlerList
	function getWhoClicked(): HumanEntity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getResult(): Result
	function setResult(arg0: Result): void
	function getViewers(): List
	function getView(): InventoryView
	function getInventory(): Inventory
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Fluid extends Enum implements Keyed {
	values(): Fluid[]
	valueOf(arg0: String): Fluid
	getKey(): NamespacedKey
}
declare interface ZombieVillager extends Zombie {
	setVillagerProfession(arg0: Profession): void
	getVillagerProfession(): Profession
	getConversionPlayer(): OfflinePlayer
	setConversionPlayer(arg0: OfflinePlayer): void
	getConversionTime(): int
	setConversionTime(arg0: int): void
	isConverting(): boolean
	getVillagerType(): Type
	setVillagerType(arg0: Type): void
}
namespace PlayerBucketFillEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getBucket(): Material
	function getBlock(): Block
	function getBlockFace(): BlockFace
	function getItemStack(): ItemStack
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function setItemStack(arg0: ItemStack): void
	function getBlockClicked(): Block
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Damageable {
	hasDamage(): boolean
	setDamage(arg0: int): void
	getDamage(): int
	clone(): Damageable
	clone(): Object
}
namespace FireworkExplodeEvent {
	function getEntity(): Entity
	function getEntity(): Firework
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class LongGrass extends MaterialData {
	setSpecies(arg0: GrassSpecies): void
	getSpecies(): GrassSpecies
	toString(): String
	clone(): Object
	clone(): MaterialData
	clone(): LongGrass
}
declare class Banner extends MaterialData implements Attachable {
	getFacing(): BlockFace
	setFacingDirection(arg0: BlockFace): void
	getAttachedFace(): BlockFace
	isWallBanner(): boolean
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): Object
	clone(): Banner
	clone(): MaterialData
}
declare class TripwireHook extends SimpleAttachableMaterialData implements Redstone {
	isPowered(): boolean
	isActivated(): boolean
	setActivated(arg0: boolean): void
	setFacingDirection(arg0: BlockFace): void
	getAttachedFace(): BlockFace
	isConnected(): boolean
	setConnected(arg0: boolean): void
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): MaterialData
	clone(): SimpleAttachableMaterialData
	clone(): Object
	clone(): TripwireHook
}
declare class JavaPluginLoader implements PluginLoader {
	loadPlugin(arg0: File): Plugin
	setClass(arg0: String, arg1: Class): void
	getPluginDescription(arg0: File): PluginDescriptionFile
	getPluginFileFilters(): Pattern[]
	getClassByName(arg0: String, arg1: boolean, arg2: PluginDescriptionFile): Class
	removeClass(arg0: Class): void
	createRegisteredListeners(arg0: Listener, arg1: Plugin): Map
	enablePlugin(arg0: Plugin): void
	disablePlugin(arg0: Plugin): void
}
namespace PlayerUnregisterChannelEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getChannel(): String
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Repairable {
	getRepairCost(): int
	setRepairCost(arg0: int): void
	hasRepairCost(): boolean
	clone(): Repairable
	clone(): Object
}
declare interface PersistentDataType {
	getPrimitiveType(): Class
	getComplexType(): Class
	toPrimitive(arg0: Object, arg1: PersistentDataAdapterContext): Object
	fromPrimitive(arg0: Object, arg1: PersistentDataAdapterContext): Object
}
declare class PrimitivePersistentDataType implements PersistentDataType {
	getPrimitiveType(): Class
	getComplexType(): Class
	toPrimitive(arg0: Object, arg1: PersistentDataAdapterContext): Object
	fromPrimitive(arg0: Object, arg1: PersistentDataAdapterContext): Object
}
declare class Builder {
	luck(arg0: float): Builder
	killer(arg0: HumanEntity): Builder
	lootingModifier(arg0: int): Builder
	lootedEntity(arg0: Entity): Builder
	build(): LootContext
}
declare interface ProxiedCommandSender extends CommandSender {
	getCaller(): CommandSender
	getCallee(): CommandSender
}
declare interface SmithingInventory extends Inventory {
	getRecipe(): Recipe
	getResult(): ItemStack
	setResult(arg0: ItemStack): void
}
namespace PlayerHarvestBlockEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHarvestedBlock(): Block
	function getItemsHarvested(): List
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Steerable extends Animals {
	hasSaddle(): boolean
	setSaddle(arg0: boolean): void
	getBoostTicks(): int
	setBoostTicks(arg0: int): void
	getCurrentBoostTicks(): int
	setCurrentBoostTicks(arg0: int): void
	getSteerMaterial(): Material
}
declare interface TropicalFishBucketMeta extends ItemMeta {
	hasVariant(): boolean
	getPattern(): Pattern
	setPattern(arg0: Pattern): void
	getPatternColor(): DyeColor
	setPatternColor(arg0: DyeColor): void
	getBodyColor(): DyeColor
	setBodyColor(arg0: DyeColor): void
	clone(): Object
	clone(): ItemMeta
	clone(): TropicalFishBucketMeta
}
declare interface VoxelShape {
	overlaps(arg0: BoundingBox): boolean
	getBoundingBoxes(): Collection
}
declare interface Jukebox extends BlockData {
	hasRecord(): boolean
}
declare class SimpleServicesManager implements ServicesManager {
	unregisterAll(arg0: Plugin): void
	getRegistration(arg0: Class): RegisteredServiceProvider
	getRegistrations(arg0: Class): List
	getRegistrations(arg0: Plugin): List
	getRegistrations(arg0: Class): Collection
	getKnownServices(): Collection
	getKnownServices(): Set
	isProvidedFor(arg0: Class): boolean
	load(arg0: Class): Object
	register(arg0: Class, arg1: Object, arg2: Plugin, arg3: ServicePriority): void
	unregister(arg0: Object): void
	unregister(arg0: Class, arg1: Object): void
}
declare interface CommandBlock extends TileState {
	getCommand(): String
	setCommand(arg0: String): void
	getName(): String
	setName(arg0: String): void
}
declare class EnchantmentWrapper extends Enchantment {
	isTreasure(): boolean
	isCursed(): boolean
	getStartLevel(): int
	getMaxLevel(): int
	canEnchantItem(arg0: ItemStack): boolean
	getItemTarget(): EnchantmentTarget
	conflictsWith(arg0: Enchantment): boolean
	getEnchantment(): Enchantment
	getName(): String
}
declare class BukkitRunnable implements Runnable {
	setupTask(arg0: BukkitTask): BukkitTask
	runTask(arg0: Plugin): BukkitTask
	getTaskId(): int
	cancel(): void
	isCancelled(): boolean
	checkScheduled(): void
	checkNotYetScheduled(): void
	runTaskAsynchronously(arg0: Plugin): BukkitTask
	runTaskLater(arg0: Plugin, arg1: long): BukkitTask
	runTaskLaterAsynchronously(arg0: Plugin, arg1: long): BukkitTask
	runTaskTimer(arg0: Plugin, arg1: long, arg2: long): BukkitTask
	runTaskTimerAsynchronously(arg0: Plugin, arg1: long, arg2: long): BukkitTask
}
namespace PlayerInteractEntityEvent {
	function getHand(): EquipmentSlot
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getRightClicked(): Entity
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Shulker extends Golem, Colorable {
	getPeek(): float
	setPeek(arg0: float): void
	getAttachedFace(): BlockFace
	setAttachedFace(arg0: BlockFace): void
}
declare class WoodenStep extends Wood {
	isInverted(): boolean
	setInverted(arg0: boolean): void
	toString(): String
	clone(): MaterialData
	clone(): Object
	clone(): Wood
	clone(): WoodenStep
}
declare interface Levelled extends BlockData {
	getMaximumLevel(): int
	getLevel(): int
	setLevel(arg0: int): void
}
declare interface Creeper extends Monster {
	explode(): void
	ignite(): void
	setPowered(arg0: boolean): void
	isPowered(): boolean
	setMaxFuseTicks(arg0: int): void
	getMaxFuseTicks(): int
	setFuseTicks(arg0: int): void
	getFuseTicks(): int
	setExplosionRadius(arg0: int): void
	getExplosionRadius(): int
}
namespace ArrowBodyCountChangeEvent {
	function isReset(): boolean
	function getEntity(): Entity
	function getEntity(): LivingEntity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getOldAmount(): int
	function getNewAmount(): int
	function setNewAmount(arg0: int): void
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface CompassMeta extends ItemMeta {
	hasLodestone(): boolean
	getLodestone(): Location
	setLodestone(arg0: Location): void
	isLodestoneTracked(): boolean
	setLodestoneTracked(arg0: boolean): void
	clone(): CompassMeta
	clone(): ItemMeta
	clone(): Object
}
declare class RegisteredServiceProvider implements Comparable {
	getService(): Class
	getPlugin(): Plugin
	compareTo(arg0: RegisteredServiceProvider): int
	compareTo(arg0: Object): int
	getPriority(): ServicePriority
	getProvider(): Object
}
namespace HangingPlaceEvent {
	function getPlayer(): Player
	function getBlock(): Block
	function getBlockFace(): BlockFace
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntity(): Hanging
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface PluginManager {
	loadPlugin(arg0: File): Plugin
	callEvent(arg0: Event): void
	useTimings(): boolean
	getPlugin(arg0: String): Plugin
	getPlugins(): Plugin[]
	getPermissionSubscriptions(arg0: String): Set
	addPermission(arg0: Permission): void
	enablePlugin(arg0: Plugin): void
	disablePlugin(arg0: Plugin): void
	registerInterface(arg0: Class): void
	isPluginEnabled(arg0: Plugin): boolean
	isPluginEnabled(arg0: String): boolean
	loadPlugins(arg0: File): Plugin[]
	disablePlugins(): void
	clearPlugins(): void
	registerEvents(arg0: Listener, arg1: Plugin): void
	registerEvent(arg0: Class, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin): void
	registerEvent(arg0: Class, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin, arg5: boolean): void
	removePermission(arg0: Permission): void
	removePermission(arg0: String): void
	getDefaultPermissions(arg0: boolean): Set
	subscribeToDefaultPerms(arg0: boolean, arg1: Permissible): void
	subscribeToPermission(arg0: String, arg1: Permissible): void
	unsubscribeFromPermission(arg0: String, arg1: Permissible): void
	getDefaultPermSubscriptions(arg0: boolean): Set
	recalculatePermissionDefaults(arg0: Permission): void
	unsubscribeFromDefaultPerms(arg0: boolean, arg1: Permissible): void
	getPermissions(): Set
	getPermission(arg0: String): Permission
}
declare interface LightningRod extends Directional, Powerable, Waterlogged {
}
declare interface GlassPane extends MultipleFacing, Waterlogged {
}
declare interface Evoker extends Spellcaster {
	getCurrentSpell(): Spell
	setCurrentSpell(arg0: Spell): void
}
declare interface ConsoleCommandSender extends CommandSender, Conversable {
}
declare interface SizedFireball extends Fireball {
	getDisplayItem(): ItemStack
	setDisplayItem(arg0: ItemStack): void
}
declare interface Beehive extends EntityBlockStorage {
	getFlower(): Location
	setFlower(arg0: Location): void
	isSedated(): boolean
}
declare class MemorySection implements ConfigurationSection {
	getValues(arg0: boolean): Map
	isString(arg0: String): boolean
	isInt(arg0: String): boolean
	isBoolean(arg0: String): boolean
	isDouble(arg0: String): boolean
	isLong(arg0: String): boolean
	getList(arg0: String): List
	getList(arg0: String, arg1: List): List
	isList(arg0: String): boolean
	getMapList(arg0: String): List
	getVector(arg0: String, arg1: Vector): Vector
	getVector(arg0: String): Vector
	isVector(arg0: String): boolean
	isColor(arg0: String): boolean
	isLocation(arg0: String): boolean
	createPath(arg0: ConfigurationSection, arg1: String, arg2: ConfigurationSection): String
	createPath(arg0: ConfigurationSection, arg1: String): String
	addDefault(arg0: String, arg1: Object): void
	getColor(arg0: String): Color
	getColor(arg0: String, arg1: Color): Color
	createSection(arg0: String): ConfigurationSection
	createSection(arg0: String, arg1: Map): ConfigurationSection
	getCurrentPath(): String
	getStringList(arg0: String): List
	getIntegerList(arg0: String): List
	getBooleanList(arg0: String): List
	getDoubleList(arg0: String): List
	getFloatList(arg0: String): List
	getLongList(arg0: String): List
	getByteList(arg0: String): List
	getCharacterList(arg0: String): List
	getShortList(arg0: String): List
	getSerializable(arg0: String, arg1: Class, arg2: ConfigurationSerializable): ConfigurationSerializable
	getSerializable(arg0: String, arg1: Class): ConfigurationSerializable
	getOfflinePlayer(arg0: String): OfflinePlayer
	getOfflinePlayer(arg0: String, arg1: OfflinePlayer): OfflinePlayer
	isOfflinePlayer(arg0: String): boolean
	getItemStack(arg0: String): ItemStack
	getItemStack(arg0: String, arg1: ItemStack): ItemStack
	isItemStack(arg0: String): boolean
	getConfigurationSection(arg0: String): ConfigurationSection
	isConfigurationSection(arg0: String): boolean
	getDefaultSection(): ConfigurationSection
	mapChildrenKeys(arg0: Set, arg1: ConfigurationSection, arg2: boolean): void
	mapChildrenValues(arg0: Map, arg1: ConfigurationSection, arg2: boolean): void
	isPrimitiveWrapper(arg0: Object): boolean
	getName(): String
	get(arg0: String): Object
	get(arg0: String, arg1: Object): Object
	toString(): String
	getBoolean(arg0: String, arg1: boolean): boolean
	getBoolean(arg0: String): boolean
	getInt(arg0: String): int
	getInt(arg0: String, arg1: int): int
	getLong(arg0: String, arg1: long): long
	getLong(arg0: String): long
	getDouble(arg0: String, arg1: double): double
	getDouble(arg0: String): double
	getDefault(arg0: String): Object
	contains(arg0: String, arg1: boolean): boolean
	contains(arg0: String): boolean
	getLocation(arg0: String, arg1: Location): Location
	getLocation(arg0: String): Location
	getParent(): ConfigurationSection
	set(arg0: String, arg1: Object): void
	isSet(arg0: String): boolean
	getRoot(): Configuration
	getObject(arg0: String, arg1: Class): Object
	getObject(arg0: String, arg1: Class, arg2: Object): Object
	getString(arg0: String): String
	getString(arg0: String, arg1: String): String
	getKeys(arg0: boolean): Set
}
declare class ShapelessRecipe implements Recipe, Keyed {
	getGroup(): String
	setGroup(arg0: String): void
	getIngredientList(): List
	getChoiceList(): List
	addIngredient(arg0: RecipeChoice): ShapelessRecipe
	addIngredient(arg0: int, arg1: Material, arg2: int): ShapelessRecipe
	addIngredient(arg0: int, arg1: Material): ShapelessRecipe
	addIngredient(arg0: MaterialData): ShapelessRecipe
	addIngredient(arg0: Material): ShapelessRecipe
	addIngredient(arg0: Material, arg1: int): ShapelessRecipe
	addIngredient(arg0: int, arg1: MaterialData): ShapelessRecipe
	removeIngredient(arg0: Material, arg1: int): ShapelessRecipe
	removeIngredient(arg0: int, arg1: MaterialData): ShapelessRecipe
	removeIngredient(arg0: int, arg1: Material, arg2: int): ShapelessRecipe
	removeIngredient(arg0: RecipeChoice): ShapelessRecipe
	removeIngredient(arg0: Material): ShapelessRecipe
	removeIngredient(arg0: int, arg1: Material): ShapelessRecipe
	removeIngredient(arg0: MaterialData): ShapelessRecipe
	getKey(): NamespacedKey
	getResult(): ItemStack
}
declare class SimpleCommandMap implements CommandMap {
	getCommand(arg0: String): Command
	getCommands(): Collection
	registerAll(arg0: String, arg1: List): void
	clearCommands(): void
	tabComplete(arg0: CommandSender, arg1: String): List
	tabComplete(arg0: CommandSender, arg1: String, arg2: Location): List
	registerServerAliases(): void
	setDefaultCommands(): void
	setFallbackCommands(): void
	dispatch(arg0: CommandSender, arg1: String): boolean
	register(arg0: String, arg1: Command, arg2: boolean, arg3: String): boolean
	register(arg0: String, arg1: Command): boolean
	register(arg0: String, arg1: String, arg2: Command): boolean
}
declare class TimedRegisteredListener extends RegisteredListener {
	callEvent(arg0: Event): void
	getCommonSuperclass(arg0: Class, arg1: Class): Class
	getTotalTime(): long
	getEventClass(): Class
	hasMultiple(): boolean
	reset(): void
	getCount(): int
}
declare interface BiomeGrid {
	getBiome(arg0: int, arg1: int): Biome
	getBiome(arg0: int, arg1: int, arg2: int): Biome
	setBiome(arg0: int, arg1: int, arg2: int, arg3: Biome): void
	setBiome(arg0: int, arg1: int, arg2: Biome): void
}
namespace PluginEnableEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getPlugin(): Plugin
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class ConversationFactory {
	withPrefix(arg0: ConversationPrefix): ConversationFactory
	withModality(arg0: boolean): ConversationFactory
	withLocalEcho(arg0: boolean): ConversationFactory
	withTimeout(arg0: int): ConversationFactory
	withConversationCanceller(arg0: ConversationCanceller): ConversationFactory
	withFirstPrompt(arg0: Prompt): ConversationFactory
	withInitialSessionData(arg0: Map): ConversationFactory
	withEscapeSequence(arg0: String): ConversationFactory
	buildConversation(arg0: Conversable): Conversation
	thatExcludesNonPlayersWithMessage(arg0: String): ConversationFactory
	addConversationAbandonedListener(arg0: ConversationAbandonedListener): ConversationFactory
}
declare interface Recipe {
	getResult(): ItemStack
}
declare class MinecraftFont extends MapFont {
}
declare interface PigZombie extends Zombie {
	getAnger(): int
	setAnger(arg0: int): void
	isAngry(): boolean
	setAngry(arg0: boolean): void
	getConversionTime(): int
	setConversionTime(arg0: int): void
	isConverting(): boolean
}
namespace EntityToggleSwimEvent {
	function isSwimming(): boolean
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface CommandBlock extends Directional {
	isConditional(): boolean
	setConditional(arg0: boolean): void
}
declare class EntityDestination implements Destination {
	getEntity(): Entity
}
declare interface Candle extends Lightable, Waterlogged {
	getCandles(): int
	setCandles(arg0: int): void
	getMaximumCandles(): int
}
namespace PlayerLeashEntityEvent {
	function getPlayer(): Player
	function getEntity(): Entity
	function getLeashHolder(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Sapling extends Wood {
	isInstantGrowable(): boolean
	setIsInstantGrowable(arg0: boolean): void
	toString(): String
	clone(): MaterialData
	clone(): Object
	clone(): Wood
	clone(): Sapling
}
declare class PluginsCommand extends BukkitCommand {
	tabComplete(arg0: CommandSender, arg1: String, arg2: String[]): List
	getPluginList(): String
	execute(arg0: CommandSender, arg1: String, arg2: String[]): boolean
}
declare interface LivingEntity extends Attributable, Damageable, ProjectileSource {
	getKiller(): Player
	isLeashed(): boolean
	isGliding(): boolean
	setGliding(arg0: boolean): void
	isSwimming(): boolean
	isSleeping(): boolean
	isClimbing(): boolean
	setAI(arg0: boolean): void
	hasAI(): boolean
	attack(arg0: Entity): void
	getMemory(arg0: MemoryKey): Object
	getEyeHeight(): double
	getEyeHeight(arg0: boolean): double
	getEyeLocation(): Location
	getLineOfSight(arg0: Set, arg1: int): List
	getTargetBlock(arg0: Set, arg1: int): Block
	getLastTwoTargetBlocks(arg0: Set, arg1: int): List
	getTargetBlockExact(arg0: int): Block
	getTargetBlockExact(arg0: int, arg1: FluidCollisionMode): Block
	rayTraceBlocks(arg0: double, arg1: FluidCollisionMode): RayTraceResult
	rayTraceBlocks(arg0: double): RayTraceResult
	getRemainingAir(): int
	setRemainingAir(arg0: int): void
	getMaximumAir(): int
	setMaximumAir(arg0: int): void
	getArrowCooldown(): int
	setArrowCooldown(arg0: int): void
	getArrowsInBody(): int
	setArrowsInBody(arg0: int): void
	getMaximumNoDamageTicks(): int
	setMaximumNoDamageTicks(arg0: int): void
	getLastDamage(): double
	setLastDamage(arg0: double): void
	getNoDamageTicks(): int
	setNoDamageTicks(arg0: int): void
	addPotionEffect(arg0: PotionEffect, arg1: boolean): boolean
	addPotionEffect(arg0: PotionEffect): boolean
	addPotionEffects(arg0: Collection): boolean
	hasPotionEffect(arg0: PotionEffectType): boolean
	getPotionEffect(arg0: PotionEffectType): PotionEffect
	removePotionEffect(arg0: PotionEffectType): void
	getActivePotionEffects(): Collection
	hasLineOfSight(arg0: Entity): boolean
	getRemoveWhenFarAway(): boolean
	setRemoveWhenFarAway(arg0: boolean): void
	getEquipment(): EntityEquipment
	setCanPickupItems(arg0: boolean): void
	getCanPickupItems(): boolean
	getLeashHolder(): Entity
	setLeashHolder(arg0: Entity): boolean
	setSwimming(arg0: boolean): void
	isRiptiding(): boolean
	swingMainHand(): void
	swingOffHand(): void
	setCollidable(arg0: boolean): void
	isCollidable(): boolean
	getCollidableExemptions(): Set
	getCategory(): EntityCategory
	setInvisible(arg0: boolean): void
	isInvisible(): boolean
	setMemory(arg0: MemoryKey, arg1: Object): void
}
namespace EntityAirChangeEvent {
	function getAmount(): int
	function setAmount(arg0: int): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface RideableMinecart extends Minecart {
}
declare interface AmethystCluster extends Directional, Waterlogged {
}
declare interface Ambient extends Mob {
}
declare class Spigot extends Spigot {
	respawn(): void
	sendMessage(arg0: ChatMessageType, arg1: UUID, arg2: BaseComponent[]): void
	sendMessage(arg0: BaseComponent[]): void
	sendMessage(arg0: ChatMessageType, arg1: BaseComponent): void
	sendMessage(arg0: ChatMessageType, arg1: BaseComponent[]): void
	sendMessage(arg0: ChatMessageType, arg1: UUID, arg2: BaseComponent): void
	sendMessage(arg0: BaseComponent): void
	getRawAddress(): InetSocketAddress
	getCollidesWithEntities(): boolean
	setCollidesWithEntities(arg0: boolean): void
	getHiddenPlayers(): Set
}
namespace VehicleExitEvent {
	function getExited(): LivingEntity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getVehicle(): Vehicle
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace RaidEvent {
	function getRaid(): Raid
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function getHandlers(): HandlerList
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface EnchantmentStorageMeta extends ItemMeta {
	hasStoredEnchants(): boolean
	hasStoredEnchant(arg0: Enchantment): boolean
	getStoredEnchantLevel(arg0: Enchantment): int
	getStoredEnchants(): Map
	addStoredEnchant(arg0: Enchantment, arg1: int, arg2: boolean): boolean
	removeStoredEnchant(arg0: Enchantment): boolean
	hasConflictingStoredEnchant(arg0: Enchantment): boolean
	clone(): Object
	clone(): ItemMeta
	clone(): EnchantmentStorageMeta
}
declare interface BookMeta extends ItemMeta {
	hasTitle(): boolean
	hasAuthor(): boolean
	hasPages(): boolean
	getAuthor(): String
	setAuthor(arg0: String): void
	getPage(arg0: int): String
	setPage(arg0: int, arg1: String): void
	spigot(): Spigot
	getPages(): List
	setPages(arg0: String[]): void
	setPages(arg0: List): void
	addPage(arg0: String[]): void
	getTitle(): String
	setTitle(arg0: String): boolean
	hasGeneration(): boolean
	getGeneration(): Generation
	setGeneration(arg0: Generation): void
	getPageCount(): int
	clone(): ItemMeta
	clone(): Object
	clone(): BookMeta
}
declare class Pattern implements ConfigurationSerializable {
	getPattern(): PatternType
	serialize(): Map
	getColor(): DyeColor
	equals(arg0: Object): boolean
	hashCode(): int
	getString(arg0: Map, arg1: Object): String
}
declare class ExactChoice implements RecipeChoice {
	getChoices(): List
	getItemStack(): ItemStack
	equals(arg0: Object): boolean
	toString(): String
	hashCode(): int
	clone(): RecipeChoice
	clone(): ExactChoice
	clone(): Object
	test(arg0: Object): boolean
	test(arg0: ItemStack): boolean
}
declare class ConversationContext {
	getForWhom(): Conversable
	getPlugin(): Plugin
	getAllSessionData(): Map
	getSessionData(arg0: Object): Object
	setSessionData(arg0: Object, arg1: Object): void
}
declare interface Bed extends Directional {
	getPart(): Part
	setPart(arg0: Part): void
	isOccupied(): boolean
}
namespace SpawnerSpawnEvent {
	function getSpawner(): CreatureSpawner
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getLocation(): Location
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace PlayerSwapHandItemsEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getMainHandItem(): ItemStack
	function setMainHandItem(arg0: ItemStack): void
	function getOffHandItem(): ItemStack
	function setOffHandItem(arg0: ItemStack): void
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Bed extends TileState, Colorable {
}
declare interface Furnace extends Container {
	getInventory(): FurnaceInventory
	getInventory(): Inventory
	getSnapshotInventory(): FurnaceInventory
	getSnapshotInventory(): Inventory
	getBurnTime(): short
	setBurnTime(arg0: short): void
	getCookTime(): short
	setCookTime(arg0: short): void
	getCookTimeTotal(): int
	setCookTimeTotal(arg0: int): void
}
declare interface LightningStrike extends Entity {
	isEffect(): boolean
	spigot(): Spigot
	spigot(): Spigot
	spigot(): Spigot
}
declare interface Dolphin extends WaterMob {
}
declare class ShapedRecipe implements Recipe, Keyed {
	getShape(): String[]
	getGroup(): String
	setGroup(arg0: String): void
	setIngredient(arg0: char, arg1: RecipeChoice): ShapedRecipe
	setIngredient(arg0: char, arg1: Material, arg2: int): ShapedRecipe
	setIngredient(arg0: char, arg1: Material): ShapedRecipe
	setIngredient(arg0: char, arg1: MaterialData): ShapedRecipe
	getIngredientMap(): Map
	getChoiceMap(): Map
	getKey(): NamespacedKey
	getResult(): ItemStack
	shape(arg0: String[]): ShapedRecipe
}
declare class GameEvent implements Keyed {
	getEvent(arg0: String): GameEvent
	getByKey(arg0: NamespacedKey): GameEvent
	values(): Collection
	getKey(): NamespacedKey
}
namespace AsyncPlayerChatEvent {
	function getFormat(): String
	function setFormat(arg0: String): void
	function setMessage(arg0: String): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getRecipients(): Set
	function getMessage(): String
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface UndefinedNullability extends Annotation {
	value(): String
}
namespace GenericGameEvent {
	function getRadius(): int
	function setRadius(arg0: int): void
	function getEvent(): GameEvent
	function getEntity(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getLocation(): Location
	function getHandlers(): HandlerList
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class Attribute extends Enum implements Keyed {
	values(): Attribute[]
	valueOf(arg0: String): Attribute
	getKey(): NamespacedKey
}
declare interface SpawnerMinecart extends Minecart {
}
declare interface DaylightDetector extends AnaloguePowerable {
	isInverted(): boolean
	setInverted(arg0: boolean): void
}
declare interface TraderLlama extends Llama {
}
declare class HelpCommand extends BukkitCommand {
	tabComplete(arg0: CommandSender, arg1: String, arg2: String[]): List
	findPossibleMatches(arg0: String): HelpTopic
	damerauLevenshteinDistance(arg0: String, arg1: String): int
	execute(arg0: CommandSender, arg1: String, arg2: String[]): boolean
}
namespace EntityBlockFormEvent {
	function getEntity(): Entity
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getNewState(): BlockState
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class PermissionAttachmentInfo {
	getPermissible(): Permissible
	getAttachment(): PermissionAttachment
	getValue(): boolean
	getPermission(): String
}
declare interface ItemTagAdapterContext {
	newTagContainer(): CustomItemTagContainer
}
declare class PotionEffect implements ConfigurationSerializable {
	getBool(arg0: Map, arg1: Object, arg2: boolean): boolean
	isAmbient(): boolean
	hasIcon(): boolean
	serialize(): Map
	getColor(): Color
	getDuration(): int
	getEffectType(arg0: Map): PotionEffectType
	getAmplifier(): int
	hasParticles(): boolean
	equals(arg0: Object): boolean
	toString(): String
	hashCode(): int
	getInt(arg0: Map, arg1: Object): int
	apply(arg0: LivingEntity): boolean
	getType(): PotionEffectType
}
namespace PlayerChatEvent {
	function getFormat(): String
	function setFormat(arg0: String): void
	function setMessage(arg0: String): void
	function setPlayer(arg0: Player): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getRecipients(): Set
	function getMessage(): String
	function getHandlers(): HandlerList
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Fireball extends Projectile, Explosive {
	getDirection(): Vector
	setDirection(arg0: Vector): void
}
declare class FixedSetPrompt extends ValidatingPrompt {
	isInputValid(arg0: ConversationContext, arg1: String): boolean
	formatFixedSet(): String
}
declare interface AxolotlBucketMeta extends ItemMeta {
	hasVariant(): boolean
	setVariant(arg0: Variant): void
	clone(): Object
	clone(): ItemMeta
	clone(): AxolotlBucketMeta
	getVariant(): Variant
}
namespace BlockCanBuildEvent {
	function getPlayer(): Player
	function getMaterial(): Material
	function getHandlerList(): HandlerList
	function getBlockData(): BlockData
	function isBuildable(): boolean
	function setBuildable(arg0: boolean): void
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface RedstoneWallTorch extends Directional, Lightable {
}
namespace BlockFromToEvent {
	function getToBlock(): Block
	function getFace(): BlockFace
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface TNT extends BlockData {
	isUnstable(): boolean
	setUnstable(arg0: boolean): void
}
namespace EntityPoseChangeEvent {
	function getPose(): Pose
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class LibraryLoader {
	createLoader(arg0: PluginDescriptionFile): ClassLoader
}
declare interface Slime extends Mob {
	getSize(): int
	setSize(arg0: int): void
}
declare interface TabCompleter {
	onTabComplete(arg0: CommandSender, arg1: Command, arg2: String, arg3: String[]): List
}
declare interface Animals extends Breedable {
	isLoveMode(): boolean
	getBreedCause(): UUID
	setBreedCause(arg0: UUID): void
	getLoveModeTicks(): int
	setLoveModeTicks(arg0: int): void
	isBreedItem(arg0: ItemStack): boolean
	isBreedItem(arg0: Material): boolean
}
namespace EntityPortalExitEvent {
	function getBefore(): Vector
	function getAfter(): Vector
	function setAfter(arg0: Vector): void
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getFrom(): Location
	function setFrom(arg0: Location): void
	function getTo(): Location
	function setTo(arg0: Location): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class TopicNameComparator implements Comparator {
	compare(arg0: String, arg1: String): int
	compare(arg0: Object, arg1: Object): int
}
declare interface CaveSpider extends Spider {
}
declare class ValidatingPrompt implements Prompt {
	blocksForInput(arg0: ConversationContext): boolean
	acceptInput(arg0: ConversationContext, arg1: String): Prompt
	isInputValid(arg0: ConversationContext, arg1: String): boolean
	acceptValidatedInput(arg0: ConversationContext, arg1: String): Prompt
	getFailedValidationText(arg0: ConversationContext, arg1: String): String
}
declare interface MultipleFacing extends BlockData {
	setFace(arg0: BlockFace, arg1: boolean): void
	getFaces(): Set
	hasFace(arg0: BlockFace): boolean
	getAllowedFaces(): Set
}
declare interface EnderCrystal extends Entity {
	isShowingBottom(): boolean
	setShowingBottom(arg0: boolean): void
	getBeamTarget(): Location
	setBeamTarget(arg0: Location): void
}
declare interface EventExecutor {
	execute(arg0: Listener, arg1: Event): void
}
declare class PluginMessageListenerRegistration {
	isValid(): boolean
	getPlugin(): Plugin
	getListener(): PluginMessageListener
	equals(arg0: Object): boolean
	hashCode(): int
	getChannel(): String
}
namespace PigZapEvent {
	function getEntity(): Entity
	function getEntity(): Pig
	function getLightning(): LightningStrike
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getPigZombie(): PigZombie
	function getHandlers(): HandlerList
	function getTransformedEntity(): Entity
	function getTransformedEntities(): List
	function getTransformReason(): TransformReason
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface BlockProjectileSource extends ProjectileSource {
	getBlock(): Block
}
declare interface CommandSender extends Permissible {
	getServer(): Server
	spigot(): Spigot
	sendMessage(arg0: String): void
	sendMessage(arg0: UUID, arg1: String[]): void
	sendMessage(arg0: UUID, arg1: String): void
	sendMessage(arg0: String[]): void
	getName(): String
}
declare class Pumpkin extends MaterialData implements Directional {
	isLit(): boolean
	getFacing(): BlockFace
	setFacingDirection(arg0: BlockFace): void
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	toString(): String
	clone(): Object
	clone(): Pumpkin
	clone(): MaterialData
}
namespace VillagerCareerChangeEvent {
	function getEntity(): Entity
	function getEntity(): Villager
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getProfession(): Profession
	function setProfession(arg0: Profession): void
	function getReason(): ChangeReason
	function getHandlers(): HandlerList
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface ChestedHorse extends AbstractHorse {
	isCarryingChest(): boolean
	setCarryingChest(arg0: boolean): void
}
declare class MapCursor {
	setRawType(arg0: byte): void
	getCaption(): String
	setCaption(arg0: String): void
	isVisible(): boolean
	setVisible(arg0: boolean): void
	setType(arg0: Type): void
	getX(): byte
	getY(): byte
	setX(arg0: byte): void
	setY(arg0: byte): void
	getDirection(): byte
	setDirection(arg0: byte): void
	getType(): Type
	getRawType(): byte
}
namespace PrepareAnvilEvent {
	function getInventory(): AnvilInventory
	function getInventory(): Inventory
	function getHandlerList(): HandlerList
	function getResult(): ItemStack
	function setResult(arg0: ItemStack): void
	function getHandlers(): HandlerList
	function getViewers(): List
	function getView(): InventoryView
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface KnowledgeBookMeta extends ItemMeta {
	hasRecipes(): boolean
	getRecipes(): List
	setRecipes(arg0: List): void
	addRecipe(arg0: NamespacedKey[]): void
	clone(): KnowledgeBookMeta
	clone(): ItemMeta
	clone(): Object
}
namespace BatToggleSleepEvent {
	function isAwake(): boolean
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface PluginLoader {
	loadPlugin(arg0: File): Plugin
	getPluginDescription(arg0: File): PluginDescriptionFile
	getPluginFileFilters(): Pattern[]
	createRegisteredListeners(arg0: Listener, arg1: Plugin): Map
	enablePlugin(arg0: Plugin): void
	disablePlugin(arg0: Plugin): void
}
declare class HandlerList {
	bakeAll(): void
	bake(): void
	unregisterAll(arg0: Plugin): void
	unregisterAll(arg0: Listener): void
	unregisterAll(): void
	registerAll(arg0: Collection): void
	getRegisteredListeners(arg0: Plugin): ArrayList
	getRegisteredListeners(): RegisteredListener[]
	getHandlerLists(): ArrayList
	register(arg0: RegisteredListener): void
	unregister(arg0: RegisteredListener): void
	unregister(arg0: Plugin): void
	unregister(arg0: Listener): void
}
namespace VehicleEnterEvent {
	function getEntered(): Entity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getVehicle(): Vehicle
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Tag extends Keyed {
	isTagged(arg0: Keyed): boolean
	getValues(): Set
}
namespace EntityToggleGlideEvent {
	function isGliding(): boolean
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Lootable {
	setSeed(arg0: long): void
	getSeed(): long
	setLootTable(arg0: LootTable): void
	getLootTable(): LootTable
}
declare interface SplashPotion extends ThrownPotion {
}
declare interface SeaPickle extends Waterlogged {
	getPickles(): int
	setPickles(arg0: int): void
	getMinimumPickles(): int
	getMaximumPickles(): int
}
namespace SignChangeEvent {
	function getPlayer(): Player
	function getLines(): String[]
	function getLine(arg0: int): String
	function setLine(arg0: int, arg1: String): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Hopper extends Container, Lootable {
}
namespace EntityChangeBlockEvent {
	function getTo(): Material
	function getBlock(): Block
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getBlockData(): BlockData
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class NotPlayerMessagePrompt extends MessagePrompt {
	getPromptText(arg0: ConversationContext): String
	getNextPrompt(arg0: ConversationContext): Prompt
}
declare interface Keyed {
	getKey(): NamespacedKey
}
declare interface Banner extends TileState {
	addPattern(arg0: Pattern): void
	getPattern(arg0: int): Pattern
	setPattern(arg0: int, arg1: Pattern): void
	getBaseColor(): DyeColor
	setBaseColor(arg0: DyeColor): void
	getPatterns(): List
	setPatterns(arg0: List): void
	removePattern(arg0: int): Pattern
	numberOfPatterns(): int
}
namespace ChunkLoadEvent {
	function isNewChunk(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getChunk(): Chunk
	function getWorld(): World
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Attachable extends Directional {
	getAttachedFace(): BlockFace
}
declare interface Ladder extends Directional, Waterlogged {
}
declare class InactivityConversationCanceller implements ConversationCanceller {
	access$1(arg0: InactivityConversationCanceller): void
	cancelling(arg0: Conversation): void
	startTimer(): void
	stopTimer(): void
	setConversation(arg0: Conversation): void
	cancelBasedOnInput(arg0: ConversationContext, arg1: String): boolean
	clone(): Object
	clone(): ConversationCanceller
}
declare class CookingRecipe implements Recipe, Keyed {
	getGroup(): String
	setGroup(arg0: String): void
	setExperience(arg0: float): void
	getExperience(): float
	setInputChoice(arg0: RecipeChoice): CookingRecipe
	getInputChoice(): RecipeChoice
	setCookingTime(arg0: int): void
	getCookingTime(): int
	getKey(): NamespacedKey
	getResult(): ItemStack
	setInput(arg0: Material): CookingRecipe
	getInput(): ItemStack
}
declare interface Skeleton extends AbstractSkeleton {
	getConversionTime(): int
	setConversionTime(arg0: int): void
	isConverting(): boolean
}
namespace EntityTeleportEvent {
	function getFrom(): Location
	function setFrom(arg0: Location): void
	function getTo(): Location
	function setTo(arg0: Location): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace EntityRegainHealthEvent {
	function getAmount(): double
	function setAmount(arg0: double): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getRegainReason(): RegainReason
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class NetherWarts extends MaterialData {
	$SWITCH_TABLE$org$bukkit$NetherWartsState(): int[]
	toString(): String
	clone(): MaterialData
	clone(): Object
	clone(): NetherWarts
	getState(): NetherWartsState
	setState(arg0: NetherWartsState): void
}
declare interface Bat extends Ambient {
	isAwake(): boolean
	setAwake(arg0: boolean): void
}
declare interface Ravager extends Raider {
}
declare interface Slab extends Waterlogged {
	setType(arg0: Type): void
	getType(): Type
}
declare interface EntityBlockStorage extends TileState {
	addEntity(arg0: Entity): void
	isFull(): boolean
	getEntityCount(): int
	getMaxEntities(): int
	setMaxEntities(arg0: int): void
	releaseEntities(): List
}
declare interface Repeater extends Directional, Powerable {
	setLocked(arg0: boolean): void
	setDelay(arg0: int): void
	getDelay(): int
	getMinimumDelay(): int
	getMaximumDelay(): int
	isLocked(): boolean
}
declare interface Firework extends Projectile {
	detonate(): void
	getFireworkMeta(): FireworkMeta
	setFireworkMeta(arg0: FireworkMeta): void
	isShotAtAngle(): boolean
	setShotAtAngle(arg0: boolean): void
}
declare class AttributeModifier implements ConfigurationSerializable {
	getAmount(): double
	serialize(): Map
	getUniqueId(): UUID
	deserialize(arg0: Map): AttributeModifier
	getOperation(): Operation
	getName(): String
	equals(arg0: Object): boolean
	toString(): String
	hashCode(): int
	getSlot(): EquipmentSlot
}
declare interface KeyedBossBar extends BossBar, Keyed {
}
declare class PistonBaseMaterial extends MaterialData implements Directional, Redstone {
	setPowered(arg0: boolean): void
	isSticky(): boolean
	getFacing(): BlockFace
	isPowered(): boolean
	setFacingDirection(arg0: BlockFace): void
	$SWITCH_TABLE$org$bukkit$block$BlockFace(): int[]
	clone(): MaterialData
	clone(): Object
	clone(): PistonBaseMaterial
}
declare interface Marker extends Entity {
}
namespace TradeSelectEvent {
	function getInventory(): Inventory
	function getInventory(): MerchantInventory
	function getMerchant(): Merchant
	function getHandlerList(): HandlerList
	function getIndex(): int
	function getHandlers(): HandlerList
	function getWhoClicked(): HumanEntity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getResult(): Result
	function setResult(arg0: Result): void
	function getViewers(): List
	function getView(): InventoryView
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface AttributeInstance {
	getBaseValue(): double
	setBaseValue(arg0: double): void
	addModifier(arg0: AttributeModifier): void
	removeModifier(arg0: AttributeModifier): void
	getModifiers(): Collection
	getValue(): double
	getDefaultValue(): double
	getAttribute(): Attribute
}
declare interface Projectile extends Entity {
	getShooter(): ProjectileSource
	setShooter(arg0: ProjectileSource): void
	doesBounce(): boolean
	setBounce(arg0: boolean): void
}
declare interface Score {
	setScore(arg0: int): void
	isScoreSet(): boolean
	getPlayer(): OfflinePlayer
	getScore(): int
	getScoreboard(): Scoreboard
	getObjective(): Objective
	getEntry(): String
}
declare interface Inventory extends Iterable {
	getHolder(): InventoryHolder
	setItem(arg0: int, arg1: ItemStack): void
	removeItem(arg0: ItemStack[]): HashMap
	firstEmpty(): int
	getViewers(): List
	addItem(arg0: ItemStack[]): HashMap
	containsAtLeast(arg0: ItemStack, arg1: int): boolean
	getMaxStackSize(): int
	setMaxStackSize(arg0: int): void
	getContents(): ItemStack[]
	setContents(arg0: ItemStack[]): void
	getStorageContents(): ItemStack[]
	setStorageContents(arg0: ItemStack[]): void
	remove(arg0: Material): void
	remove(arg0: ItemStack): void
	clear(): void
	clear(arg0: int): void
	isEmpty(): boolean
	iterator(): Iterator
	iterator(): ListIterator
	iterator(arg0: int): ListIterator
	contains(arg0: ItemStack, arg1: int): boolean
	contains(arg0: Material): boolean
	contains(arg0: ItemStack): boolean
	contains(arg0: Material, arg1: int): boolean
	first(arg0: Material): int
	first(arg0: ItemStack): int
	getLocation(): Location
	getType(): InventoryType
	getSize(): int
	getItem(arg0: int): ItemStack
	all(arg0: Material): HashMap
	all(arg0: ItemStack): HashMap
}
namespace PlayerRiptideEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getItem(): ItemStack
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Bell extends TileState {
}
declare interface PlayerInventory extends Inventory {
	getHolder(): HumanEntity
	getHolder(): InventoryHolder
	setItem(arg0: int, arg1: ItemStack): void
	setItem(arg0: EquipmentSlot, arg1: ItemStack): void
	getHelmet(): ItemStack
	setHelmet(arg0: ItemStack): void
	getBoots(): ItemStack
	setBoots(arg0: ItemStack): void
	getExtraContents(): ItemStack[]
	setExtraContents(arg0: ItemStack[]): void
	getHeldItemSlot(): int
	setHeldItemSlot(arg0: int): void
	getItemInHand(): ItemStack
	setItemInHand(arg0: ItemStack): void
	getItemInMainHand(): ItemStack
	setItemInMainHand(arg0: ItemStack): void
	getItemInOffHand(): ItemStack
	setItemInOffHand(arg0: ItemStack): void
	getChestplate(): ItemStack
	setChestplate(arg0: ItemStack): void
	getLeggings(): ItemStack
	setLeggings(arg0: ItemStack): void
	getArmorContents(): ItemStack[]
	setArmorContents(arg0: ItemStack[]): void
	getItem(arg0: EquipmentSlot): ItemStack
}
declare interface Creature extends Mob {
}
declare class SimplexNoiseGenerator extends PerlinNoiseGenerator {
	getNoise(arg0: double, arg1: double): double
	getNoise(arg0: double, arg1: double, arg2: double, arg3: double): double
	getNoise(arg0: double, arg1: double, arg2: double): double
	getNoise(arg0: double): double
	noise(arg0: double, arg1: double, arg2: double, arg3: double): double
	noise(arg0: double, arg1: double): double
	noise(arg0: double, arg1: double, arg2: double): double
	getInstance(): SimplexNoiseGenerator
	dot(arg0: int[], arg1: double, arg2: double, arg3: double, arg4: double): double
	dot(arg0: int[], arg1: double, arg2: double): double
	dot(arg0: int[], arg1: double, arg2: double, arg3: double): double
}
declare interface Ocelot extends Animals {
	isTrusting(): boolean
	getCatType(): Type
	setCatType(arg0: Type): void
	setTrusting(arg0: boolean): void
}
declare interface Comparator extends TileState {
}
namespace BlockEvent {
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function getHandlers(): HandlerList
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class PrimitiveTagType implements ItemTagType {
	getPrimitiveType(): Class
	getComplexType(): Class
	toPrimitive(arg0: Object, arg1: ItemTagAdapterContext): Object
	fromPrimitive(arg0: Object, arg1: ItemTagAdapterContext): Object
}
declare class RedstoneTorch extends Torch implements Redstone {
	isPowered(): boolean
	toString(): String
	clone(): SimpleAttachableMaterialData
	clone(): MaterialData
	clone(): Object
	clone(): Torch
	clone(): RedstoneTorch
}
namespace SmithItemEvent {
	function getInventory(): Inventory
	function getInventory(): SmithingInventory
	function getCursor(): ItemStack
	function setCursor(arg0: ItemStack): void
	function getRawSlot(): int
	function getAction(): InventoryAction
	function getClick(): ClickType
	function getSlotType(): SlotType
	function getCurrentItem(): ItemStack
	function isRightClick(): boolean
	function isLeftClick(): boolean
	function isShiftClick(): boolean
	function setCurrentItem(arg0: ItemStack): void
	function getClickedInventory(): Inventory
	function getHotbarButton(): int
	function getHandlerList(): HandlerList
	function getSlot(): int
	function getHandlers(): HandlerList
	function getWhoClicked(): HumanEntity
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getResult(): Result
	function setResult(arg0: Result): void
	function getViewers(): List
	function getView(): InventoryView
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface CoralWallFan extends Directional, Waterlogged {
}
declare class JavaPlugin extends PluginBase {
	getConfig(): FileConfiguration
	getServer(): Server
	getPlugin(arg0: Class): JavaPlugin
	onCommand(arg0: CommandSender, arg1: Command, arg2: String, arg3: String[]): boolean
	saveConfig(): void
	onDisable(): void
	onLoad(): void
	onEnable(): void
	isNaggable(): boolean
	isEnabled(): boolean
	setEnabled(arg0: boolean): void
	getCommand(arg0: String): PluginCommand
	getDescription(): PluginDescriptionFile
	getDataFolder(): File
	saveDefaultConfig(): void
	saveResource(arg0: String, arg1: boolean): void
	reloadConfig(): void
	getPluginLoader(): PluginLoader
	setNaggable(arg0: boolean): void
	getDefaultWorldGenerator(arg0: String, arg1: String): ChunkGenerator
	onTabComplete(arg0: CommandSender, arg1: Command, arg2: String, arg3: String[]): List
	getTextResource(arg0: String): Reader
	getProvidingPlugin(arg0: Class): JavaPlugin
	toString(): String
	getClassLoader(): ClassLoader
	getResource(arg0: String): InputStream
	init(arg0: PluginLoader, arg1: Server, arg2: PluginDescriptionFile, arg3: File, arg4: File, arg5: ClassLoader): void
	getLogger(): Logger
	getFile(): File
}
declare interface Snowman extends Golem {
	isDerp(): boolean
	setDerp(arg0: boolean): void
}
namespace SpongeAbsorbEvent {
	function getBlocks(): List
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace NotePlayEvent {
	function getNote(): Note
	function setNote(arg0: Note): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getInstrument(): Instrument
	function setInstrument(arg0: Instrument): void
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface HorseInventory extends AbstractHorseInventory {
	getArmor(): ItemStack
	setArmor(arg0: ItemStack): void
}
namespace EntityCombustByEntityEvent {
	function getCombuster(): Entity
	function getDuration(): int
	function setDuration(arg0: int): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace VehicleCollisionEvent {
	function getVehicle(): Vehicle
	function isAsynchronous(): boolean
	function getEventName(): String
	function getHandlers(): HandlerList
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace PlayerChannelEvent {
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getChannel(): String
	function getPlayer(): Player
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Bee extends Animals {
	getHive(): Location
	setHive(arg0: Location): void
	hasNectar(): boolean
	hasStung(): boolean
	getFlower(): Location
	setFlower(arg0: Location): void
	getAnger(): int
	setAnger(arg0: int): void
	setHasNectar(arg0: boolean): void
	setHasStung(arg0: boolean): void
	getCannotEnterHiveTicks(): int
	setCannotEnterHiveTicks(arg0: int): void
}
declare interface Configuration extends ConfigurationSection {
	addDefault(arg0: String, arg1: Object): void
	getDefaults(): Configuration
	addDefaults(arg0: Map): void
	addDefaults(arg0: Configuration): void
	setDefaults(arg0: Configuration): void
	options(): ConfigurationOptions
}
declare interface Cancellable {
	setCancelled(arg0: boolean): void
	isCancelled(): boolean
}
declare interface Barrel extends Container, Lootable, Lidded {
}
declare interface Switch extends Directional, FaceAttachable, Powerable {
	getFace(): Face
	setFace(arg0: Face): void
}
namespace ServerEvent {
	function isAsynchronous(): boolean
	function getEventName(): String
	function getHandlers(): HandlerList
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class SimplePluginManager implements PluginManager {
	fireEvent(arg0: Event): void
	loadPlugin(arg0: File): Plugin
	callEvent(arg0: Event): void
	useTimings(arg0: boolean): void
	useTimings(): boolean
	getPlugin(arg0: String): Plugin
	getPlugins(): Plugin[]
	getPermissionSubscriptions(arg0: String): Set
	addPermission(arg0: Permission): void
	addPermission(arg0: Permission, arg1: boolean): void
	isTransitiveDepend(arg0: PluginDescriptionFile, arg1: PluginDescriptionFile): boolean
	enablePlugin(arg0: Plugin): void
	disablePlugin(arg0: Plugin): void
	registerInterface(arg0: Class): void
	isPluginEnabled(arg0: String): boolean
	isPluginEnabled(arg0: Plugin): boolean
	loadPlugins(arg0: File): Plugin[]
	disablePlugins(): void
	clearPlugins(): void
	registerEvents(arg0: Listener, arg1: Plugin): void
	registerEvent(arg0: Class, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin): void
	registerEvent(arg0: Class, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin, arg5: boolean): void
	removePermission(arg0: String): void
	removePermission(arg0: Permission): void
	checkUpdate(arg0: File): void
	getRegistrationClass(arg0: Class): Class
	getEventListeners(arg0: Class): HandlerList
	calculatePermissionDefault(arg0: Permission, arg1: boolean): void
	dirtyPermissibles(): void
	dirtyPermissibles(arg0: boolean): void
	getDefaultPermissions(arg0: boolean): Set
	subscribeToDefaultPerms(arg0: boolean, arg1: Permissible): void
	subscribeToPermission(arg0: String, arg1: Permissible): void
	unsubscribeFromPermission(arg0: String, arg1: Permissible): void
	getDefaultPermSubscriptions(arg0: boolean): Set
	recalculatePermissionDefaults(arg0: Permission): void
	unsubscribeFromDefaultPerms(arg0: boolean, arg1: Permissible): void
	getPermissions(): Set
	getPermission(arg0: String): Permission
}
declare interface ComplexLivingEntity extends LivingEntity {
	getParts(): Set
}
declare interface Openable extends BlockData {
	setOpen(arg0: boolean): void
	isOpen(): boolean
}
namespace EntityTransformEvent {
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getTransformedEntity(): Entity
	function getTransformedEntities(): List
	function getTransformReason(): TransformReason
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class FileConfiguration extends MemoryConfiguration {
	saveToString(): String
	buildHeader(): String
	loadFromString(arg0: String): void
	load(arg0: String): void
	load(arg0: Reader): void
	load(arg0: File): void
	save(arg0: File): void
	save(arg0: String): void
	options(): ConfigurationOptions
	options(): MemoryConfigurationOptions
	options(): FileConfigurationOptions
}
namespace InventoryMoveItemEvent {
	function setItem(arg0: ItemStack): void
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getInitiator(): Inventory
	function getDestination(): Inventory
	function getHandlers(): HandlerList
	function getItem(): ItemStack
	function getSource(): Inventory
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare class CharacterSprite {
	getHeight(): int
	getWidth(): int
	get(arg0: int, arg1: int): boolean
}
declare interface Comparator extends Directional, Powerable {
	getMode(): Mode
	setMode(arg0: Mode): void
}
declare interface Chest extends Container, Lootable, Lidded {
	getBlockInventory(): Inventory
}
namespace BlockDamageEvent {
	function getPlayer(): Player
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getInstaBreak(): boolean
	function setInstaBreak(arg0: boolean): void
	function getItemInHand(): ItemStack
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
namespace EntityDamageEvent {
	function setDamage(arg0: DamageModifier, arg1: double): void
	function setDamage(arg0: double): void
	function getDamage(): double
	function getDamage(arg0: DamageModifier): double
	function isApplicable(arg0: DamageModifier): boolean
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getOriginalDamage(arg0: DamageModifier): double
	function getFinalDamage(): double
	function getCause(): DamageCause
	function getHandlers(): HandlerList
	function getEntity(): Entity
	function getEntityType(): EntityType
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Permissible extends ServerOperator {
	isPermissionSet(arg0: String): boolean
	isPermissionSet(arg0: Permission): boolean
	hasPermission(arg0: Permission): boolean
	hasPermission(arg0: String): boolean
	addAttachment(arg0: Plugin, arg1: int): PermissionAttachment
	addAttachment(arg0: Plugin, arg1: String, arg2: boolean, arg3: int): PermissionAttachment
	addAttachment(arg0: Plugin): PermissionAttachment
	addAttachment(arg0: Plugin, arg1: String, arg2: boolean): PermissionAttachment
	removeAttachment(arg0: PermissionAttachment): void
	recalculatePermissions(): void
	getEffectivePermissions(): Set
}
namespace BlockFertilizeEvent {
	function getPlayer(): Player
	function getBlocks(): List
	function setCancelled(arg0: boolean): void
	function isCancelled(): boolean
	function getHandlerList(): HandlerList
	function getHandlers(): HandlerList
	function getBlock(): Block
	function isAsynchronous(): boolean
	function getEventName(): String
	function wait(arg0: long, arg1: int): void
	function wait(): void
	function wait(arg0: long): void
	function equals(arg0: Object): boolean
	function toString(): String
	function hashCode(): int
	function getClass(): Class
	function notify(): void
	function notifyAll(): void
}
declare interface Husk extends Zombie {
	getConversionTime(): int
	setConversionTime(arg0: int): void
	isConverting(): boolean
}
declare interface Scaffolding extends Waterlogged {
	isBottom(): boolean
	setBottom(arg0: boolean): void
	getDistance(): int
	setDistance(arg0: int): void
	getMaximumDistance(): int
}
declare interface Fence extends MultipleFacing, Waterlogged {
}
declare interface TNTPrimed extends Explosive {
	setSource(arg0: Entity): void
	setFuseTicks(arg0: int): void
	getFuseTicks(): int
	getSource(): Entity
}
declare interface ThrownExpBottle extends ThrowableProjectile {
}

type ListenerFunction<Type> = (event: Type) => void
type CommandFunction = (player: Player, args: any) => void

declare namespace blaze {
    function onEvent<Type>(event: Type, listener: ListenerFunction<Type>): void
    function onCommand(commandName: string, listener: CommandFunction): void
}