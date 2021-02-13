import InputController from "../../Input/InputController";
import GameObject from "../GameObjectImpl";
import Player from "../Player/Player";

export default class GameWorld extends GameObject {
    private _player: Player;
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height);
        this._player = new Player(0, 0, 0, 0);
    }

    get player(): Player {
        return this._player;
    }

    set player(player) {
        this._player = player;
    }

    /**
     * function that is called at the start of the game
     */
    setUpThis(): void {}

    /**
     * function that is called at every frame
     */
    updateThis(): void {
        if (InputController.isPressed("up"))
            super.moveTo(0, 1, this.player.speed);
        if (InputController.isPressed("right"))
            super.moveTo(-1, 0, this.player.speed);
        if (InputController.isPressed("down"))
            super.moveTo(0, -1, this.player.speed);
        if (InputController.isPressed("left"))
            super.moveTo(1, 0, this.player.speed);
    }

    /**
     * Renders the graphics of the game object
     * @param context the context reference
     */
    renderThis(context: any): void {}
}
