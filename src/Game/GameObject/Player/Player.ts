import GameInormation from "../../GameInformation/GameInformation";
import InputController from "../../Input/InputController";
import Vector from "../../Vector/Vector";
import GameObject from "../GameObjectImpl";

export default class Player extends GameObject {
    private _speed: number;
    constructor(position: Vector, scale: Vector, speed: number = 0.5) {
        super(position, scale);
        this._speed = speed;
    }
    get speed(): number {
        return this._speed;
    }

    set speed(speed) {
        this._speed = speed;
    }

    /**
     * function that is called at the start of the game
     */
    setUpThis(): void {}

    /**
     * function that is called at every frame
     */
    updateThis(): void {
        // movement with velocity
        let xSpeed = 0;
        xSpeed += InputController.isPressed("right")
            ? this.speed / GameInormation.fps
            : 0;
        xSpeed += InputController.isPressed("left")
            ? -this.speed / GameInormation.fps
            : 0;
        let ySpeed = 0;
        ySpeed += InputController.isPressed("up")
            ? -this.speed / GameInormation.fps
            : 0;
        ySpeed += InputController.isPressed("down")
            ? this.speed / GameInormation.fps
            : 0;
        this.velocity = new Vector(xSpeed, ySpeed);

        // movement with position
        // if (InputController.isPressed("up"))
        //     this.moveTo(new Vector(0, -1), this.speed / GameInormation.fps);
        // if (InputController.isPressed("right"))
        //     this.moveTo(new Vector(1, 0), this.speed / GameInormation.fps);
        // if (InputController.isPressed("down"))
        //     this.moveTo(new Vector(0, 1), this.speed / GameInormation.fps);
        // if (InputController.isPressed("left"))
        //     this.moveTo(new Vector(-1, 0), this.speed / GameInormation.fps);
    }

    /**
     * Renders the graphics of the game object
     * @param context the context reference
     */
    renderThis(context: any): void {
        context.fillRect(
            this.position.x - this.scale.x / 2,
            this.position.y - this.scale.y / 2,
            this.scale.x,
            this.scale.y
        );
    }
}
