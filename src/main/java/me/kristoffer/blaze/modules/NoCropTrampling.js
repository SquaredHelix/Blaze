function PlayerInteractEvent(event) {
	if (event.getAction().equals(Action.from("PHYSICAL"))) {
		if (event.getClickedBlock().getType().equals(Material.from("FARMLAND"))) {
			event.setCancelled(true)
		}
	}
}

loader.generateModule(["PlayerInteractEvent"])