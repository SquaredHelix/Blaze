package me.kristoffer.blaze;

import java.util.ArrayList;
import java.util.HashMap;

import org.bukkit.event.Event;
import org.graalvm.polyglot.Context;

public class EventFunction {

	public HashMap<Context, ArrayList<Runnable<Event>>> runnableMap = new HashMap<Context, ArrayList<Runnable<Event>>>();

	public EventFunction() {

	}

	public void addFunction(Context context, Runnable<Event> function) {
		if (runnableMap.containsKey(context)) {
			runnableMap.get(context).add(function);
		} else {
			ArrayList<Runnable<Event>> runnables = new ArrayList<Runnable<Event>>();
			runnables.add(function);
			runnableMap.put(context, runnables);
		}
	}

	public void removeFunctions(Context context) {
		if (runnableMap.containsKey(context)) {
			runnableMap.remove(context);
		}
	}

}
