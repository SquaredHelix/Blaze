package me.kristoffer.blaze.backend.org.bukkit;

public class Warning {

	public class WarningState {

		public org.bukkit.Warning.WarningState from(String name) {
			return org.bukkit.Warning.WarningState.valueOf(name);
		}

	}

}
