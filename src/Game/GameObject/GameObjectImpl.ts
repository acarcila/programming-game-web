import IGameObject from "./IGameObject";

/**
 * Game object abstract class
 */
export default abstract class GameObject implements IGameObject {
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;
    private children: GameObject[];
    constructor(x: number, y: number, width: number, height: number) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this.children = [];
    }

    get x(): number {
        return this._x;
    }

    set x(x: number) {
        this._y = x;
    }

    get y(): number {
        return this._y;
    }

    set y(y: number) {
        this._y = y;
    }

    get width(): number {
        return this._width;
    }

    set width(width) {
        this._width = width;
    }

    get height(): number {
        return this._height;
    }

    set height(height) {
        this._height = height;
    }

    /**
     * function that is called at the start of the game and setUps this and children
     */
    public setUp(): void {
        this.setUpThis();
        this.children.forEach((child) => {
            child.setUp();
        });
    }

    /**
     * setup just for this element
     */
    public abstract setUpThis(): void;

    /**
     * function that is called at every frame and updates this and the children
     */
    public update(): void {
        this.updateThis();
        this.children.forEach((child) => {
            child.update();
        });
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
        this.renderThis(context);
        this.children.forEach((child) => {
            child.render(context);
        });
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
     * Move deltaX pixels in the X axis and deltaY in the Y axis
     * @param deltaX number of pixels to move in the X axis
     * @param deltaY number of pixels to move in the Y axis
     */
    public moveTo(deltaX: number, deltaY: number, velocity: number=1): void {
        this._x += deltaX * velocity;
        this._y += deltaY * velocity;
        this.children.forEach((child: GameObject) => {
            child.moveTo(deltaX, deltaY, velocity);
        });
    }

    /**
     * Sets the position of the game object
     * @param x position in the X axis
     * @param y position in the Y axis
     */
    public setPosition(x: number, y: number): void {
        const deltaX = x - this._x;
        const deltaY = y - this._y;

        this._x = x;
        this._y = y;

        this.children.forEach((child: GameObject) => {
            child.moveTo(deltaX, deltaY);
        });
    }
}
