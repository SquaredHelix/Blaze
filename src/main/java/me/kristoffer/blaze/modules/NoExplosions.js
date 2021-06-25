function EntityExplodeEvent (event) {
	if (event.getEntityType().equals(EntityType.from("PRIMED_TNT"))) {
		return
	}
	event.setYield(0.0)
	event.setCancelled(true)
}

loader.generateModule(["EntityExplodeEvent"])