package me.kristoffer.blaze.backend.org.bukkit.attribute;

public class AttributeModifier {

	public class Operation {

		public org.bukkit.attribute.AttributeModifier.Operation from(String name) {
			return org.bukkit.attribute.AttributeModifier.Operation.valueOf(name);
		}

	}

}
