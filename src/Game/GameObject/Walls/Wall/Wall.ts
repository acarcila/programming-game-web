import Vector from "../../../Vector/Vector";
import GameObject from "../../GameObjectImpl";

export default class Wall extends GameObject {
    constructor(position: Vector, scale: Vector) {
        super(position, scale);
    }

    /**
     * function that is called at the start of the game
     */
    setUpThis(): void {}

    /**
     * function that is called at every frame
     */
    updateThis(): void {
        // this.moveTo((Math.random()*10)-5, (Math.random()*10)-5);
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
