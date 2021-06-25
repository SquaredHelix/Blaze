package me.kristoffer.blaze.backend.org.bukkit;

public class Note {

	public class Tone {

		public org.bukkit.Note.Tone from(String name) {
			return org.bukkit.Note.Tone.valueOf(name);
		}

	}

}
