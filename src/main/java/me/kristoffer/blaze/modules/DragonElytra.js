var rewardPlayers = []

function EntityDamageByEntityEvent (event) {
	if (!event.getEntityType().equals(EntityType.from("ENDER_DRAGON"))) {
		return
	}
	if (event.getDamager().getType().equals(EntityType.from("PLAYER"))) {
		var damager = event.getDamager()
		if (!rewardPlayers.includes(damager))
			rewardPlayers.push(damager)
	}
}

function EntityDeathEvent (event) {
	if (!event.getEntityType().equals(EntityType.from("ENDER_DRAGON"))) {
		return
	}
	var elytra = new ItemStack(Material.from("ELYTRA"));
	rewardPlayers.forEach(player => {
		player.getInventory().addItem(elytra)
	})
	rewardPlayers = []
}

loader.generateModule(["EntityDamageByEntityEvent", "EntityDeathEvent"])