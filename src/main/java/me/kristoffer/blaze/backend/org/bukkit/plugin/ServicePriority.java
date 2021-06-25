package me.kristoffer.blaze.backend.org.bukkit.plugin;

public class ServicePriority {

	public org.bukkit.plugin.ServicePriority from(String name) {
		return org.bukkit.plugin.ServicePriority.valueOf(name);
	}

}
