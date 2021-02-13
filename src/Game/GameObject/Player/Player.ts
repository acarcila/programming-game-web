import InputController from "../../Input/InputController";
import GameObject from "../GameObjectImpl";

export default class Player extends GameObject {
    private _speed: number;
    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        speed: number = 0.5
    ) {
        super(x, y, width, height);
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
        if (InputController.isPressed("up")) super.moveTo(0, -1, this.speed);
        if (InputController.isPressed("right")) super.moveTo(1, 0, this.speed);
        if (InputController.isPressed("down")) super.moveTo(0, 1, this.speed);
        if (InputController.isPressed("left")) super.moveTo(-1, 0, this.speed);
    }

    /**
     * Renders the graphics of the game object
     * @param context the context reference
     */
    renderThis(context: any): void {
        context.fillRect(
            this.x - this.width / 2,
            this.y - this.height / 2,
            this.width,
            this.height
        );
    }
}
