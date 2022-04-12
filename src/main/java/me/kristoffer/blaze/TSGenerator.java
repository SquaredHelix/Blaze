package me.kristoffer.blaze;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.Parameter;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import org.reflections.Reflections;
import org.reflections.scanners.ResourcesScanner;
import org.reflections.scanners.SubTypesScanner;
import org.reflections.util.ClasspathHelper;
import org.reflections.util.ConfigurationBuilder;
import org.reflections.util.FilterBuilder;

public class TSGenerator {

	private PrintWriter writer;
	// private PrintWriter eventWriter;

	public TSGenerator(File file) {
		try {
			writer = new PrintWriter(file, "UTF-8");
			// eventWriter = new PrintWriter("bindings.txt", "UTF-8");
		} catch (FileNotFoundException | UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		List<ClassLoader> classLoadersList = new LinkedList<ClassLoader>();
		classLoadersList.add(ClasspathHelper.contextClassLoader());
		classLoadersList.add(ClasspathHelper.staticClassLoader());

		Reflections reflections = new Reflections(new ConfigurationBuilder()
				.setScanners(new SubTypesScanner(false /* don't exclude Object.class */), new ResourcesScanner())
				.addUrls(ClasspathHelper.forJavaClassPath())
				.filterInputsBy(new FilterBuilder().include(FilterBuilder.prefix("org.bukkit"))));

		Set<Class<? extends Object>> classes = reflections.getSubTypesOf(Object.class);
		Set<Class<? extends Enum>> enums = reflections.getSubTypesOf(Enum.class);
		enums.forEach(enumx -> {
			if (enumx.getSimpleName().length() == 0) {
				return;
			}
			String header = "declare enum " + enumx.getSimpleName();
			header += " {";
			writer.println(header);
			Arrays.stream(enumx.getDeclaredFields()).forEach(field -> {
				if (!field.isEnumConstant()) {
					return;
				}

				// System.out.println(method.toString());
				/*
				 * Arrays.stream(method.getParameterTypes()).forEach(paramClazz -> { String
				 * simpleName = paramClazz.getSimpleName(); String longName =
				 * paramClazz.getTypeName(); if (loadedClasses.containsKey(simpleName)) { if
				 * (!loadedClasses.get(simpleName).equals(longName)) {
				 * System.out.println("Found potential conflict " + simpleName); } }
				 * loadedClasses.put(simpleName, longName); });
				 */
				String out = "	" + field.getName() + ",";
				writer.println(out);
			});
			writer.println("}");
			writer.println("namespace " + enumx.getSimpleName() + " {");
			// eventWriter.println(
			// "bindings.putMember(\"" + enumx.getSimpleName() + "\", \"" +
			// enumx.getSimpleName() + "\");");
			Arrays.stream(enumx.getMethods()).forEach(method -> {
				// System.out.println(method.toString());
				/*
				 * Arrays.stream(method.getParameterTypes()).forEach(paramClazz -> { String
				 * simpleName = paramClazz.getSimpleName(); String longName =
				 * paramClazz.getTypeName(); if (loadedClasses.containsKey(simpleName)) { if
				 * (!loadedClasses.get(simpleName).equals(longName)) {
				 * System.out.println("Found potential conflict " + simpleName); } }
				 * loadedClasses.put(simpleName, longName); });
				 */
				String parameters = "";
				int i = 0;
				for (Parameter param : method.getParameters()) {
					parameters += param.getName() + ": ";
					parameters += param.getType().getSimpleName();
					if (!(method.getParameters().length - 1 == i)) {
						parameters += ", ";
					}
					i++;
				}
				writer.println("	function " + method.getName() + "(" + parameters + "): "
						+ method.getReturnType().getSimpleName());
			});
			writer.println("}");
		});
		// System.out.println(classes.size());
		classes.forEach(clazz -> {
			if (clazz.getSimpleName().equals("package-info")) {
				return;
			}
			if (clazz.getSimpleName().equals("")) {
				return;
			}
			String superclass = "";
			if (clazz.getSuperclass() != null) {
				superclass = clazz.getSuperclass().getSimpleName();
			}
			if (superclass.endsWith("Event")) {
				writer.println("namespace " + clazz.getSimpleName() + " {");
				// eventWriter.println(
				// "bindings.putMember(\"" + clazz.getSimpleName() + "\", \"" +
				// clazz.getSimpleName() + "\");");
				Arrays.stream(clazz.getMethods()).forEach(method -> {
					// System.out.println(method.toString());
					/*
					 * Arrays.stream(method.getParameterTypes()).forEach(paramClazz -> { String
					 * simpleName = paramClazz.getSimpleName(); String longName =
					 * paramClazz.getTypeName(); if (loadedClasses.containsKey(simpleName)) { if
					 * (!loadedClasses.get(simpleName).equals(longName)) {
					 * System.out.println("Found potential conflict " + simpleName); } }
					 * loadedClasses.put(simpleName, longName); });
					 */
					String parameters = "";
					int i = 0;
					for (Parameter param : method.getParameters()) {
						parameters += param.getName() + ": ";
						parameters += param.getType().getSimpleName();
						if (!(method.getParameters().length - 1 == i)) {
							parameters += ", ";
						}
						i++;
					}
					writer.println("	function " + method.getName() + "(" + parameters + "): "
							+ method.getReturnType().getSimpleName());
				});
				writer.println("}");
			} else {
				if (clazz.isInterface()) {
					String header = "declare interface " + clazz.getSimpleName();
					if (clazz.getInterfaces().length > 0) {
						int i = 0;
						header += " extends ";
						for (Class<?> interfaze : clazz.getInterfaces()) {
							header += interfaze.getSimpleName();
							if (i != clazz.getInterfaces().length - 1) {
								header += ", ";
							}
							i++;
						}
					}
					header += " {";
					writer.println(header);
					Arrays.stream(clazz.getDeclaredMethods()).forEach(method -> {
						// System.out.println(method.toString());
						/*
						 * Arrays.stream(method.getParameterTypes()).forEach(paramClazz -> { String
						 * simpleName = paramClazz.getSimpleName(); String longName =
						 * paramClazz.getTypeName(); if (loadedClasses.containsKey(simpleName)) { if
						 * (!loadedClasses.get(simpleName).equals(longName)) {
						 * System.out.println("Found potential conflict " + simpleName); } }
						 * loadedClasses.put(simpleName, longName); });
						 */
						String parameters = "";
						int i = 0;
						for (Parameter param : method.getParameters()) {
							parameters += param.getName() + ": ";
							parameters += param.getType().getSimpleName();
							if (!(method.getParameters().length - 1 == i)) {
								parameters += ", ";
							}
							i++;
						}
						writer.println("	" + method.getName() + "(" + parameters + "): "
								+ method.getReturnType().getSimpleName());
					});
					writer.println("}");
				} else {
					String header = "declare class " + clazz.getSimpleName();
					if (clazz.getSuperclass() != null) {
						if (!clazz.getSuperclass().equals(Object.class)) {
							header += " extends " + clazz.getSuperclass().getSimpleName();
						}
					}
					if (clazz.getInterfaces().length > 0) {
						int i = 0;
						header += " implements ";
						for (Class<?> interfaze : clazz.getInterfaces()) {
							header += interfaze.getSimpleName();
							if (i != clazz.getInterfaces().length - 1) {
								header += ", ";
							}
							i++;
						}
					}
					header += " {";
					writer.println(header);
					Arrays.stream(clazz.getDeclaredMethods()).forEach(method -> {
						try {
							// System.out.println(method.toString());
							/*
							 * Arrays.stream(method.getParameterTypes()).forEach(paramClazz -> { String
							 * simpleName = paramClazz.getSimpleName(); String longName =
							 * paramClazz.getTypeName(); if (loadedClasses.containsKey(simpleName)) { if
							 * (!loadedClasses.get(simpleName).equals(longName)) {
							 * System.out.println("Found potential conflict " + simpleName); } }
							 * loadedClasses.put(simpleName, longName); });
							 */
							String parameters = "";
							int i = 0;
							for (Parameter param : method.getParameters()) {
								parameters += param.getName() + ": ";
								parameters += param.getType().getSimpleName();
								if (!(method.getParameters().length - 1 == i)) {
									parameters += ", ";
								}
								i++;
							}
							writer.println("	" + method.getName() + "(" + parameters + "): "
									+ method.getReturnType().getSimpleName());
						} catch (NoClassDefFoundError ex) {
							ex.printStackTrace();
						}
					});
					writer.println("}");
				}
			}
		});
		writer.close();
		// eventWriter.close();
	}

}
