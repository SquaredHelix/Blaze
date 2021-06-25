package me.kristoffer.blaze.backend.org.bukkit.conversations;

public class Conversation {

	public class ConversationState {

		public org.bukkit.conversations.Conversation.ConversationState from(String name) {
			return org.bukkit.conversations.Conversation.ConversationState.valueOf(name);
		}

	}

}
