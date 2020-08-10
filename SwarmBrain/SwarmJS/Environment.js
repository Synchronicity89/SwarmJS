class Environment {  // Create a class
    //This should always be overriden
    makeCreature() {
        return new Creature(this);
    }

    constructor(dimensions, num) {  // Class constructor
        this._dimensions = dimensions;
        this._swarm = new Array(num);
        var i = 0;
        for (; i < num; i++) {
            this._swarm[i] = this.makeCreature();
        }
    }

    render() {

    }

    get dimensions() {
        return this._dimensions;
    }
    set dimensions(Dimensions) {
        this._dimensions = Dimensions;
    }
}