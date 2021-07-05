package me.kristoffer.blaze.module;

import java.util.ArrayList;

public class ModuleManager implements Closable {

	private ArrayList<ModuleObject> objects = new ArrayList<ModuleObject>();
	
	public ModuleManager() {
		
	}

	protected void registerObject(ModuleObject moduleObject) {
		objects.add(moduleObject);
		moduleObject.init();
	}

	protected void deregisterObject(ModuleObject moduleObject) {
		moduleObject.close();
		objects.remove(moduleObject);
	}
	
	@Override
	public void close() {
		objects.forEach(ModuleObject::close);
		objects.clear();
	}

}
