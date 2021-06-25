package me.kristoffer.blaze.backend.org.bukkit.event.server;

public class ServerLoadEvent {

	public class LoadType {

		public org.bukkit.event.server.ServerLoadEvent.LoadType from(String name) {
			return org.bukkit.event.server.ServerLoadEvent.LoadType.valueOf(name);
		}

	}

}
