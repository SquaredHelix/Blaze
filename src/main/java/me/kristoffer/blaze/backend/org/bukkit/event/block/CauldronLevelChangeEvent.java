package me.kristoffer.blaze.backend.org.bukkit.event.block;

public class CauldronLevelChangeEvent {

	public class ChangeReason {

		public org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason from(String name) {
			return org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason.valueOf(name);
		}

	}

}
