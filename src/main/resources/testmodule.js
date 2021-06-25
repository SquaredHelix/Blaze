var players = []

function PlayerChatEvent(event) {
	var item = new ItemStack(Material.getMaterial("DIAMOND"))
	event.getPlayer().getInventory().addItem(item)
}

function BlockBreakEvent(event) {
	if (players.includes(event.getPlayer())) {
		if (event.getBlock().getType() == Material.getMaterial("DIAMOND_ORE")) {
			event.setCancelled(true)
			event.getBlock().setType(Material.getMaterial("AIR"))
			event.getPlayer().sendMessage("Hah, get trolled!")
			var location = event.getBlock().getLocation()
			var item = new ItemStack(Material.getMaterial("DIRT"))
			location.getWorld().dropItem(location, item)
		}
	}
}

loader.onCommand("troll", player => {
	if (players.includes(player)) {
		players = players.filter(pl => pl !== player)
		player.sendMessage("Trolling disabled")
	} else {
		players.push(player)
		player.sendMessage("Trolling enabled")
	}
})

loader.generateModule(["PlayerChatEvent", "BlockBreakEvent"])