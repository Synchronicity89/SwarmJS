class Ant extends Creature {
    constructor(environment) {
        super(environment);

    }

    get X() {
        return this._location[0];
    }
    set X(x) {
        this._location[0] = x;
    }

    get Y() {
        return this._location[1];
    }
    set Y(y) {
        this._location[1] = y;
    }

    get vX() {
        return this._direction[0];
    }
    set vX(vx) {
        this._direction[0] = vx;
    }

    get vY() {
        return this._direction[1];
    }
    set vY(vy) {
        this._direction[1] = vy;
    }

    move() {
        /************   This function is unfinished.  It needs a lot of work *************/

        //detect environment and decide which way to move.
        //if no food wander randomly avoiding own trail until hungry or tired
        //then come back following own trail
        if (this.hasFood === false) {
            //this.X += 2.0 * (Math.random() - 0.5);
            //this.Y += 2.0 * (Math.random() - 0.5);

            //if sufficient energy, keep going straight unless running into fresh scent.
            this.X += this.vX;
            this.Y += this.vY;
            //if fresh scent in the way, detect trail direction
            //if trail direction is orthagonal, simply keep going and cross the trail.

            environment.setScent(this.X, this.Y, 1.0);
        } else if (this.X > 0 && this.Y > 0 & this.X < 199 && this.Y < 199) {
            var mostScent = {}; mostScent.X = 2; mostScent.Y = 2; mostScent.val = -1.0;
            for (var x = -1; x < 2; x++) {
                for (var y = -1; y < 2; y++) {
                    if (x === 0 && y === 0) continue;
                    if (environment.scent[x + Math.floor(this.X), y + Math.floor(this.Y)] === undefined) environment.scent[x + Math.floor(this.X), y + Math.floor(this.Y)] = 0.0;
                    if (environment.scent[x + Math.floor(this.X), y + Math.floor(this.Y)] > mostScent.val) {
                        mostScent.val = environment.scent[x + Math.floor(this.X), y + Math.floor(this.Y)];
                        mostScent.X = x + Math.floor(this.X); mostScent.Y = y + Math.floor(this.Y);
                    }
                }
                if (mostScent.val > -1.0) {
                    this.X = mostScent.X; this.Y = mostScent.Y;
                }
            }
        }

        //check to see if food is found
        if (Math.abs(this.X - environment.food.X) < 15.0 &&
            Math.abs(this.Y - environment.food.Y) < 15.0) {
            this.hasFood = true;
        } else if (Math.abs(this.X - environment.nest.X) < 15.0 &&
            Math.abs(this.Y - environment.nest.Y) < 15.0) {
            this.hasFood = false;
        }

    }
}

