export default class Vector {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public get x(): number {
        return this._x;
    }

    public set x(value) {
        this._x = value;
    }

    public get y(): number {
        return this._y;
    }

    public set y(value) {
        this._y = value;
    }

    public getMagnitude(): number {
        return Math.pow(Math.pow(this.x, 2) + Math.pow(this.y, 2), 1);
    }

    /**
     * Returns the unit vector from a given vector
     * @param vector vector to get unit
     */
    public static getUnitVector(vector: Vector): Vector {
        const magnitude = vector.getMagnitude();

        return new Vector(vector.x / magnitude, vector.y / magnitude);
    }

    /**
     * Multiplies a vector with a given magnitude
     * @param vector vector to scale
     * @param magnitude magnitude to multiply to the vector
     */
    public static scaleVector(vector: Vector, magnitude: number): Vector {
        return new Vector(vector.x * magnitude, vector.y * magnitude);
    }

    /**
     * Returns the vector result of a sum of two vectors
     * @param vectorA vector a
     * @param vectorB vector b
     */
    public static addVectors(vectorA: Vector, vectorB: Vector): Vector {
        return new Vector(vectorA.x + vectorB.x, vectorA.y + vectorB.y);
    }

    /**
     * Returns the vector result of a substraction of two vectors
     * @param vectorA vector a
     * @param vectorB vector b
     */
    public static substractVectors(vectorA: Vector, vectorB: Vector): Vector {
        return new Vector(vectorA.x - vectorB.x, vectorA.y - vectorB.y);
    }
}
