class AntScape extends Environment {

    makeCreature() {
        var creature = new Ant(this);
        //make ants originate in nest, but at first just create offsets
        creature.X = Math.random() * 2.0;
        creature.Y = Math.random() * 2.0;
        return creature;
    }

    //AntScape is 2D, whereas Environment supports more than 2 dimensions 
    //e.g.to simulate swarms of neurons in brains
    constructor(width, height, num) {
        super([width, height], num);

        this._scent = new Array(dim, dim);
        //TODO: perhaps lay scent down as soon as creatures created.
        this._nest = {}; this._nest.X = 10; this._nest.Y = 10;
        this._food = {}; this._food.X = 190; this._food.Y = 190;

        var i = 0;
        for (; i < num; i++) {
            //use the offsets to prime the initial direction of the ant
            this._swarm[i].vX = this._swarm[i].X;
            this._swarm[i].vY = this._swarm[i].Y;
            //apply the offsets off of the nest location
            this._swarm[i].X += this._nest.X;
            this._swarm[i].Y += this._nest.Y;
        }
    }

    get swarm() {
        return this._swarm;
    }
    set swarm(Swarm) {
        this._swarm = Swarm;
    }
    get scent() {
        return this._scent;
    }
    set scent(Scent) {
        this._scent = Scent;
    }
    get nest() {
        return this._nest;
    }
    set nest(Nest) {
        this._nest = Nest;
    }
    get food() {
        return this._food;
    }
    set food(Food) {
        this._food = Food;
    }
}