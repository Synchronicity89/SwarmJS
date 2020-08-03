class Creature {  // Create a class
    constructor(environment) {  // Class constructor
        this._location = new Array(environment.dimensions.length);
        this._direction = new Array(environment.dimensions.length);
        this._y = 0.0;
        this._hasFood = false;
        this._environment = environment;
        this._energy = 1.0;
    }

    get hasFood() {
        return this._hasFood;
    }
    set hasFood(HasFood) {
        this._hasFood = HasFood;
    }

    get energy() {
        return this._energy;
    }
    set energy(Energy) {
        this._energy = Energy;
    }

    move() {
        //default creature can't move, so usually overridden
        return [0.0, 0.0];
    }
}
