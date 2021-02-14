import Vector from "../../Vector/Vector";
import GameObject from "../GameObjectImpl";

export default class EmptyGameObject extends GameObject {
    constructor(position: Vector) {
        super(position, new Vector(0, 0));
    }

    /**
     * function that is called at the start of the game
     */
    setUpThis(): void {}

    /**
     * function that is called at every frame
     */
    updateThis(): void {}

    /**
     * Renders the graphics of the game object
     * @param context the context reference
     */
    renderThis(context: any): void {}
}
