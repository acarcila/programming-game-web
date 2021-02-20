import Vector from "../Vector/Vector";

export default class GameInormation {
    private static _fps: number;
    private static _canvasScale: Vector;

    public static get fps(): number {
        return this._fps;
    }

    public static set fps(fps) {
        this._fps = fps;
    }

    public static get canvasScale(): Vector {
        return GameInormation._canvasScale;
    }

    public static set canvasScale(value: Vector) {
        GameInormation._canvasScale = value;
    }
}
