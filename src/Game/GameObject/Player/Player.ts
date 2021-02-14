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
        this.velocity = new Vector(0, 0);
        if (InputController.isPressed("up")) this.velocity.y = -this.speed;
        if (InputController.isPressed("right")) this.velocity.x = this.speed;
        if (InputController.isPressed("down")) this.velocity.y = this.speed;
        if (InputController.isPressed("left")) this.velocity.x = -this.speed;
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
