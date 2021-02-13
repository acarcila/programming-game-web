/**
 * Game object interface
 */
export default interface IGameObject {
    /**
     * function that is called at the start of the game and setUps this and children
     */
    setUp(): void;

    /**
     * setup just for this element
     */
    setUpThis(): void;

    /**
     * function that is called at every frame and updates this and the children
     */
    update(): void;

    /**
     * updates just this element
     */
    updateThis(): void;

    /**
     * Renders the graphics of the game object and it's children
     * @param context the context reference
     */
    render(context: any): void;

    /**
     * Renders the graphics of the game object
     * @param context the context reference
     */
    renderThis(context: any): void;

    /**
     * Add a child to the game object
     * @param child Game object to add as a child
     */
    addChild(child: IGameObject): void;

    /**
     * Move deltaX pixels in the X axis and deltaY in the Y axis
     * @param deltaX number of pixels to move in the X axis
     * @param deltaY number of pixels to move in the Y axis
     */
    moveTo(deltaX: number, deltaY: number, velocity: number): void;

    /**
     * Sets the position of the game object
     * @param x position in the X axis
     * @param y position in the Y axis
     */
    setPosition(x: number, y: number): void;
}
