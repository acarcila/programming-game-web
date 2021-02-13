import GameObject from "../GameObjectImpl";

export default class EmptyGameObject extends GameObject {
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height);
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
