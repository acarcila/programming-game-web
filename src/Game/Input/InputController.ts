import KEY_INPUTS from "../../Constants/KeyInputs.json";

export default class InputController {
    private static _activeInputs: Set<string> = new Set([]);

    private constructor() {
    }

    public static get activeInputs(): Set<string> {
        return this._activeInputs;
    }

    public static set activeInputs(activeInputs: Set<string>) {
        this._activeInputs = activeInputs;
    }

    public static addActiveInput(key: keyof typeof KEY_INPUTS) {
        const input = KEY_INPUTS[key];
        this._activeInputs.add(input);
    }

    public static removeActiveInput(key: keyof typeof KEY_INPUTS) {
        const input = KEY_INPUTS[key];
        this._activeInputs.delete(input);
    }

    public static removeAllInputs() {
        this._activeInputs = new Set([]);
    }

    public static isPressed(input: string): boolean {
        return this._activeInputs.has(input);
    }
}
