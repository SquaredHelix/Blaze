/// <reference path="blaze.d.ts" />

blaze.onEvent(PlayerMoveEvent, event => {
    var player = event.getPlayer()
    player.sendMessage("Hello World")
})