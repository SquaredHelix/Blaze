package me.kristoffer.blaze.backend.org.bukkit.block.banner;

public class PatternType {
    
    public org.bukkit.block.banner.PatternType from(String name) {
    	return org.bukkit.block.banner.PatternType.valueOf(name);
    }
    
    public org.bukkit.block.banner.PatternType getByIdentifier(String identifier) {
    	return org.bukkit.block.banner.PatternType.getByIdentifier(identifier);
    }
    
}
