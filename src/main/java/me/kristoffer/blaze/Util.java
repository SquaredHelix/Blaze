package me.kristoffer.blaze;

import java.math.BigDecimal;

public class Util {

	public float doubleToFloat(double number) {
		BigDecimal decimal = new BigDecimal(number);
		return decimal.floatValue();
	}

}
