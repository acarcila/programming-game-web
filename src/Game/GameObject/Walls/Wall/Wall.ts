import GameObject from "../../GameObjectImpl";

export default class Wall extends GameObject {
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
    updateThis(): void {
        // this.moveTo((Math.random()*10)-5, (Math.random()*10)-5);
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
