function PrepareAnvilEvent (event) {
	var inputItem = event.getInventory().getItem(0)
	if (inputItem != null) {
		var inputItemMeta = inputItem.getItemMeta()
		inputItemMeta.setDisplayName(ChatColor.translateAlternateColorCodes('&', inputItemMeta.getDisplayName()))
		inputItem.setItemMeta(inputItemMeta)
	}

	var outputItem = event.getResult()
	if (outputItem == null) {
		return
	}
	if (!outputItem.hasItemMeta()) {
		return
	}
	var outputItemMeta = outputItem.getItemMeta()
	if (outputItemMeta != null) {
		outputItemMeta.setDisplayName(ChatColor.translateAlternateColorCodes('&', outputItemMeta.getDisplayName()))
		outputItem.setItemMeta(outputItemMeta)
	}
	event.setResult(outputItem)
}

function InventoryClickEvent (event) {
	var clickedInventory = event.getClickedInventory()
	if (clickedInventory == null) { return }
	if (clickedInventory.getType() == InventoryType.fromANVIL) {
		var inventory = event.getInventory()
		if (!(event.getSlot() == 0)) { return }
		loader.scheduleDelayed(1, () => {
			if (inventory.getItem(0) == null) {
				var cursorItem = event.getCursor()
				if (cursorItem != null) {
					var cursorItemMeta = cursorItem.getItemMeta()
					if (!(cursorItemMeta == null)) {
						if (cursorItemMeta.hasDisplayName()) {
							cursorItemMeta.setDisplayName(ChatColor.translateAlternateColorCodes('&',
									cursorItemMeta.getDisplayName()))
						}
					}
					cursorItem.setItemMeta(cursorItemMeta)
					event.getWhoClicked().setItemOnCursor(cursorItem)
				}
			}
		})
	}
}

loader.generateModule(["PrepareAnvilEvent", "InventoryClickEvent"])