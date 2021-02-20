import GameInormation from "../GameInformation/GameInformation";
import Vector from "../Vector/Vector";
import IGameObject from "./IGameObject";

/**
 * Game object abstract class
 */
export default abstract class GameObject implements IGameObject {
    private _position: Vector;
    private _scale: Vector;
    private _velocity: Vector;
    private _children: GameObject[];
    constructor(position: Vector, scale: Vector) {
        this._position = position;
        this._scale = scale;
        this._velocity = new Vector(0, 0);
        this._children = [];
    }

    public get position(): Vector {
        return this._position;
    }

    public set position(value: Vector) {
        const deltaVector: Vector = Vector.substractVectors(
            value,
            this.position
        );

        this._position = value;
        this.children.forEach((child: GameObject) => {
            child.position = Vector.addVectors(child.position, deltaVector);
        });
    }

    public get scale(): Vector {
        return this._scale;
    }

    public set scale(value: Vector) {
        this._scale = value;
    }

    public get velocity(): Vector {
        return this._velocity;
    }

    public set velocity(value: Vector) {
        this._velocity = value;
    }

    public get children(): GameObject[] {
        return this._children;
    }

    public set children(value: GameObject[]) {
        this._children = value;
    }

    /**
     * function that is called at the start of the game and setUps this and children
     */
    public setUp(): void {
        this.setUpThis();
        this.children.forEach((child) => {
            child.setUp();
        });

        console.log(this);
    }

    /**
     * setup just for this element
     */
    public abstract setUpThis(): void;

    /**
     * function that is called at every frame and updates this and the children
     */
    public update(): void {
        if (GameInormation.fps >= 1) {
            this.moveTo(
                this.velocity,
                this.velocity.getMagnitude() / GameInormation.fps
            );
        }

        this.children.forEach((child) => {
            child.update();
        });
        this.updateThis();
    }

    /**
     * updates just this element
     */
    public abstract updateThis(): void;

    /**
     * Renders the graphics of the game object
     * @param context the context reference
     */
    public render(context: any): void {
        this.children.forEach((child) => {
            child.render(context);
        });
        this.renderThis(context);
    }

    /**
     * Renders the graphics of the game object
     * @param context the context reference
     */
    public abstract renderThis(context: any): void;

    /**
     * Add a child to the game object
     * @param child Game object to add as a child
     */
    public addChild(child: GameObject): void {
        this.children.push(child);
    }

    /**
     * Moves the object in a vector direction with a given speed
     * @param deltaVector vector of the direction to move the object
     * @param speed number of pixels to move in each direction
     */
    moveTo(
        deltaVector: Vector,
        speed: number = deltaVector.getMagnitude()
    ): void {
        if (speed === 0 || deltaVector.getMagnitude() === 0) {
            return;
        }

        const toMoveVector = Vector.scaleVector(
            Vector.getUnitVector(deltaVector),
            speed
        );
        this.position = Vector.addVectors(this.position, toMoveVector);
    }
}
