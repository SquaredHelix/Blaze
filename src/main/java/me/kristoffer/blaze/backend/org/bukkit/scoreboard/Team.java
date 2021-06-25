package me.kristoffer.blaze.backend.org.bukkit.scoreboard;

public class Team {

	public class Option {

		public org.bukkit.scoreboard.Team.Option from(String name) {
			return org.bukkit.scoreboard.Team.Option.valueOf(name);
		}

	}

	public class OptionStatus {

		public org.bukkit.scoreboard.Team.OptionStatus from(String name) {
			return org.bukkit.scoreboard.Team.OptionStatus.valueOf(name);
		}

	}

}
