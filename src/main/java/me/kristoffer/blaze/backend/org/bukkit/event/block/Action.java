package me.kristoffer.blaze.backend.org.bukkit.event.block;

public class Action {

	public org.bukkit.event.block.Action from(String name) {
		return org.bukkit.event.block.Action.valueOf(name);
	}

}
