const nightstart = 12541
const nightstop = 23458

var sleeping = []
var cooldown = []

var sleepTask
	
function PlayerBedEnterEvent(event) {
	if (cooldown.includes(event.getPlayer())) {
		event.setCancelled(true)
		return
	}
	if (sleepTask != null) {
		if (!sleepTask.isCancelled()) {
			event.setCancelled(true)
			return
		}
	}
	var neededPlayers = Math.static.ceil(loader.getPlugin().getServer().getOnlinePlayers().size() / 5.0)
	if (event.getBedEnterResult().equals(BedEnterResult.from("OK"))) {
		sleeping.push(event.getPlayer())
		Bukkit.broadcastMessage(event.getPlayer().getName() + " is now sleeping " + ChatColor.from("YELLOW") + "("
				+ sleeping.length + "/" + neededPlayers + ")")
	}
	if (neededPlayers <= sleeping.length) {
		if (isNight() || getMainworld().isThundering()) {
			sleepTask = loader.scheduleDelayed(101, () => {
				event.getPlayer().getWorld().setFullTime(24000)
				if (getMainworld().isThundering()) {
					getMainworld().setWeatherDuration(1)
				}
				sleeping = []
				sleepTask = null
			})
		}
	}
}

function PlayerBedLeaveEvent (event) {
	sleeping = sleeping.filter(player => player !== event.getPlayer())
	if (isNight() || getMainworld().isThundering()) {
		Bukkit.broadcastMessage(event.getPlayer().getName() + " has stopped sleeping")
		cooldown.add(event.getPlayer())
		loader.scheduleDelayed(20*5, () => {
			cooldown = cooldown.filter(player => player !== event.getPlayer())
		})
	}
	if (sleepTask != null) {
		sleepTask.cancel()
	}
}
	
function getMainworld() {
	return Bukkit.getWorlds().get(0)
}

function getTime() {
	return getMainworld().getTime()
}

function isNight() {
	var time = getTime()
	if (time >= nightstart && time <= nightstop) {
		return true
	}
	return false
}

loader.generateModule(["PlayerBedEnterEvent", "PlayerBedLeaveEvent"])