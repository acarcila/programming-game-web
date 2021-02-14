export default class GameInormation {
    private static _fps: number;

    public static get fps(): number {
        return this._fps;
    }
    
    public static set fps(fps) {
        this._fps = fps;
    }
}
