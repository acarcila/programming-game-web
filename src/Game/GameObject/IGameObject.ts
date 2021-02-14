import Vector from "../Vector/Vector";

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
     * Moves the object in a vector direction with a given speed
     * @param deltaVector vector of the direction to move the object
     * @param speed number of pixels to move in each direction
     */
    moveTo(deltaVector: Vector, speed: number): void;

    /**
     * Moves the object in a vector direction
     * @param toMoveVector vector to move to
     */
    moveTo(toMoveVector: Vector): void;
}
