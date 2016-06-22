'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
};

	 Thermostat.prototype.getCurrentTemperature = function() {
	  return this.temperature;
	};

	Thermostat.prototype.increaseTemperature = function() {
	  this.temperature += 1;
	}

	Thermostat.prototype.decreaseTemperature = function() {
	  this.temperature -= 1;
	}

	Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

	Thermostat.prototype.decreaseTemperature = function() {
	  if (this.isMinimumTemperature()) {
	    return;
	  }
	  this.temperature -= 1;
	}

	Thermostat.prototype.isPowerSavingModeOn = function () {
		return this.powerSavingMode === true
	}

	Thermostat.prototype.switchPowerSavingModeOff = function() {
	  this.powerSavingMode = false;
	}

	Thermostat.prototype.switchPowerSavingModeOn = function() {
  	this.powerSavingMode = true;
	}