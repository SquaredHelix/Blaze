var inventory = Bukkit.createInventory(null, 3*9, "Hello World")

loader.onCommand("eval", (player, args) => {
	loader.exec(transferNativeArray(args).join(" "), new Map([
		["player", player],
		["inventory", inventory]
	]))
})

function transferNativeArray(items) {
	var array = []
	Array.prototype.forEach.call(items, item => array.push(item))
	return array
}

loader.generateModule([])