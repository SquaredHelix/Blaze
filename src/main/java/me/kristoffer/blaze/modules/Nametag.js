var rainbow = ["&9", "&a", "&b", "&c", "&d", "&e"]
var afkPlayers = []
let allowedDye = new Map()
allowedDye.set(Material.from("BLACK_DYE"), "&0")
allowedDye.set(Material.from("BLUE_DYE"), "&1")
allowedDye.set(Material.from("GREEN_DYE"), "&2")
allowedDye.set(Material.from("CYAN_DYE"), "&3")
allowedDye.set(Material.from("RED_DYE"), "&4")
allowedDye.set(Material.from("PURPLE_DYE"), "&5")
allowedDye.set(Material.from("ORANGE_DYE"), "&6")
allowedDye.set(Material.from("LIGHT_GRAY_DYE"), "&7")
allowedDye.set(Material.from("GRAY_DYE"), "&8")
allowedDye.set(Material.from("LIGHT_BLUE_DYE"), "&9")
allowedDye.set(Material.from("LIME_DYE"), "&a")
allowedDye.set(Material.from("PINK_DYE"), "&d")
allowedDye.set(Material.from("YELLOW_DYE"), "&e")
allowedDye.set(Material.from("WHITE_DYE"), "&f")
allowedDye.set(Material.from("NAME_TAG"), "rainbow")

allowedDye.forEach((code, material) => {
	var sb = Bukkit.getScoreboardManager().getMainScoreboard()
	var teamName = code.replace('&', 'c')
	var exist = false
	sb.getTeams().forEach(scoreboardTeam => {
		if (scoreboardTeam.getName() == teamName) {
			exist = true
		}
	})
	if (!exist) {
		sb.registerNewTeam(teamName)
	}
	var team = sb.getTeam(teamName)
	if (team.getName() == "rainbow") {
		team.setColor(ChatColor.from("WHITE"))
	} else {
		team.setColor(ChatColor.getByChar(code.replace("&", "")))
	}
	team.setAllowFriendlyFire(true)
	team.setCanSeeFriendlyInvisibles(false)
})

function updateName(player, chatEvent) {
	var sb = Bukkit.getScoreboardManager().getMainScoreboard()
	if (sb.getEntryTeam(player.getName()) == null) {
		sb.getTeam("cf").addEntry(player.getName())
	}
	var team = sb.getEntryTeam(player.getName())
	player.setPlayerListName(team.getPrefix() + player.getName())
	if (team.getName() == "rainbow") {
		if (chatEvent != null) {
			chatEvent.setFormat(
					team.getColor() + rainbowUtil(player.getName()) + ChatColor.from("RESET") + ": " + chatEvent.getMessage())
		}
		player.setPlayerListName(rainbowUtil(player.getName()))
		if (afkPlayers.includes(player.getName())) {
			player.setPlayerListName(ChatColor.from("YELLOW") + "[AFK] " + rainbowUtil(player.getName()))
		}
	} else {
		if (chatEvent != null) {
			chatEvent.setFormat(
					team.getColor() + player.getDisplayName() + ChatColor.from("RESET") + ": " + chatEvent.getMessage())
		}
		if (afkPlayers.includes(player.getName())) {
			player.setPlayerListName(
					ChatColor.from("YELLOW") + "[AFK] " + team.getColor() + team.getPrefix() + player.getName())
		}
	}
}

function rainbowUtil(str) {
	var spot = 0
	var fancyText = ""
	Array.from(str).forEach(letter => {
		var t1 = fancyText
		if (letter != " ") {
		fancyText = t1 + ChatColor.translateAlternateColorCodes('&', rainbow[spot]) + letter
			if (spot == rainbow.length - 1) {
				spot = 0
			} else {
				spot++
			}
		} else {
			fancyText = t1 + letter
		}
	})
	return fancyText
}

loader.onCommand("afk", player => {
	if (afkPlayers.includes(player.getName())) {
		afkPlayers = afkPlayers.filter(pl => pl !== player.getName())
		updateName(player, null)
		player.sendMessage("You are no longer AFK")
	} else {
		afkPlayers.push(player.getName())
		updateName(player, null)
		player.sendMessage("You are now AFK")
	}
})

loader.onCommand("namecolor", player => {
	var sb = Bukkit.getScoreboardManager().getMainScoreboard()
	if (allowedDye.has(player.getInventory().getItemInMainHand().getType())) {
		var teamName = (allowedDye.get(player.getInventory().getItemInMainHand().getType())).replace('&', 'c')
		sb.getTeam(teamName).addEntry(player.getName())
		updateName(player, null)
	} else {
		player.sendMessage("Use one of the following dyes to set your name color: ")
		allowedDye.forEach((code, material) => {
			if (material == Material.from("NAME_TAG")) {
				player.sendMessage(ChatColor.translateAlternateColorCodes('&', "&r" + rainbowUtil(material.name())))
			} else {
				player.sendMessage(ChatColor.translateAlternateColorCodes('&', allowedDye.get(material)) + material.name())
			}
		})
	}
})

function AsyncPlayerChatEvent (event) {
	var player = event.getPlayer()
	var sb = Bukkit.getServer().getScoreboardManager().getMainScoreboard()
	if (sb.getEntryTeam(event.getPlayer().getName()) != null) {
		updateName(event.getPlayer(), event)
		return
	}
	event.setFormat(player.getDisplayName() + ChatColor.from("RESET") + ": " + event.getMessage())
}

function PlayerJoinEvent (event) {
	updateName(event.getPlayer(), null)
}

Bukkit.getOnlinePlayers().forEach(player => {
	updateName(player, null)
})

loader.generateModule(["AsyncPlayerChatEvent", "PlayerJoinEvent"])