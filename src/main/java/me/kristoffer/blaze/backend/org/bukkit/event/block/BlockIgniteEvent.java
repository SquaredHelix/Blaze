package me.kristoffer.blaze.backend.org.bukkit.event.block;

public class BlockIgniteEvent {

	public class IgniteCause {
		
		public org.bukkit.event.block.BlockIgniteEvent.IgniteCause from(String name) {
			return org.bukkit.event.block.BlockIgniteEvent.IgniteCause.valueOf(name);
		}
		
	}

}
