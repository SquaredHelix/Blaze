declare class Player {
    breakBlock(block: Block): boolean
    sendMessage(message: string): void
    canSee(player: Player): Boolean
    chat(msg: string): void
    getAddress(): InetSocketAddress
    getAdvancementProgress(advancement: Advancement): AdvancementProgress
    getAllowFlight(): Boolean
    getBedSpawnLocation(): Location
    getClientViewDistance(): Int
    getCompassTarget(): Location
    getDisplayName(): String
    getExp(): Float
    getFlySpeed(): Float
    getHealthScale(): Double
    getLevel(): Int
    getLocale(): String
    getPing(): Int
    getPlayerListFooter(): String
    getPlayerListHeader(): String
    getPlayerListName(): String
    getPlayerTime(): Long
    getPlayerTimeOffset(): Long
    getPlayerWeather(): WeatherType
    getScoreboard(): Scoreboard
    getSpectatorTarget(): Entity
    getTotalExperience(): Int
    getWalkSpeed(): Float
    giveExp(amount: Int): void
    giveExpLevels(amnmount: Int)
    hidePlayer(player: Player)
}