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
    constructor(width, height, num, context) {
        super([width, height], num, context);

        this._scent = new Array(width, height);
        //TODO: perhaps lay scent down as soon as creatures created.
        this._nest = {}; this._nest.X = 10; this._nest.Y = 10;
        this._food = {}; this._food.X = 190; this._food.Y = 190;
        this._num = num;
        this._context = context;
        this._width = width;
        this._height = height;

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

    render() {
        //When CDN for canvasjs works
        //$("#canvasy").clearCanvas();
        this._context.clearRect(0, 0, canvas.width, canvas.height);

        for (i = 0; i < this._num; i++) {
            var ant = environment.swarm[i];

            this._context.fillStyle = ant.hasFood === false ? "#6c3" : "#ccc2b3";
            this._context.beginPath();
            this._context.fillRect(ant.X - 2, ant.Y - 2, 4, 4);
            this._context.rect(ant.X - 2, ant.Y - 2, 4, 4);
            this._context.stroke();
        }
    }

    setScent(X, Y, Amount) {
        if (X > this._width || Y > this._height) return;
        this._scent[X, Y] += Amount;
        this._context.fillStyle = "#333333";
        this._context.beginPath();
        this._context.fillRect(X - 1, Y - 1, 2, 2);
        this._context.stroke();
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