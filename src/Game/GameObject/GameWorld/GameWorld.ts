import InputController from "../../Input/InputController";
import Vector from "../../Vector/Vector";
import GameObject from "../GameObjectImpl";
import Player from "../Player/Player";

export default class GameWorld extends GameObject {
    private _player: Player;
    constructor(position: Vector, scale: Vector) {
        super(position, scale);
        this._player = new Player(new Vector(0, 0), new Vector(0, 0));
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
    setUpThis(): void {
        // this.velocity.x = this.player.speed;
    }

    /**
     * function that is called at every frame
     */
    updateThis(): void {
        // if (this.position.x > 500) this.velocity.x = -this.player.speed;
        // else if (this.position.x < -500) this.velocity.x = this.player.speed;

        this.velocity = new Vector(0, 0);
        if (InputController.isPressed("up"))
            this.velocity.y = this.player.speed;
        if (InputController.isPressed("right"))
            this.velocity.x = -this.player.speed;
        if (InputController.isPressed("down"))
            this.velocity.y = -this.player.speed;
        if (InputController.isPressed("left"))
            this.velocity.x = this.player.speed;
    }

    /**
     * Renders the graphics of the game object
     * @param context the context reference
     */
    renderThis(context: any): void {}
}
