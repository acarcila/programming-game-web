import React, { useEffect, useRef } from 'react';
import Styles from './GameComponent.module.sass';
import KEY_INPUTS from '../../Constants/KeyInputs.json';
import Wall from '../../Game/GameObject/Walls/Wall/Wall';
import GameObjectImpl from '../../Game/GameObject/GameObjectImpl';
import EmptyGameObject from '../../Game/GameObject/EmptyGameObject/EmptyGameObject';
import InputController from '../../Game/Input/InputController';
import GameWorld from '../../Game/GameObject/GameWorld/GameWorld';
import Player from '../../Game/GameObject/Player/Player';

function GameComponent(): JSX.Element {
    const canvasRef = useRef(null);

    let gameScreen: GameObjectImpl = new EmptyGameObject(0, 0, 0, 0);
    let gameWorld: GameWorld = new GameWorld(0, 0, 0, 0);

    const player: Player = new Player(0, 0, 30, 30, 5);
    const walls: GameObjectImpl = new EmptyGameObject(0, 0, 0, 0);

    const wall: GameObjectImpl = new Wall(20, 200, 500, 500);

    useEffect(() => {
        const canvas: any = canvasRef.current;
        const context = canvas.getContext('2d');

        setUpCanvas(canvas);
        setUp(canvas, context);
        animate();
    }, []);

    const animate = () => {
        const canvas: any = canvasRef.current;
        const context = canvas.getContext('2d');

        setUpCanvas(canvas);

        update(canvas, context);
        render(canvas, context);

        requestAnimationFrame(animate);
    }

    const setUp = (canvas: any, context: any) => {
        gameScreen.setPosition(canvas.width / 2, canvas.height / 2);
        gameScreen.addChild(gameWorld);

        gameWorld.addChild(walls);
        gameWorld.player = player;
        gameWorld.addChild(player);

        walls.addChild(new Wall(20, 200, 500, 500));
        walls.addChild(new Wall(1000, 200, 50, 500));

        gameWorld.setUp();

        //player setup
        player.setPosition(canvas.width / 2, canvas.height / 2);
    }

    const update = (canvas: any, context: any) => {
        gameWorld.update();

        gameScreen.setPosition(canvas.width / 2, canvas.height / 2);
    }

    const render = (canvas: any, context: any) => {
        gameWorld.render(context);
    }

    const setUpCanvas = (canvas: any) => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    const handleKeyDown = (event: any): void => {
        const pressedKey: keyof typeof KEY_INPUTS = event.key;
        InputController.addActiveInput(pressedKey);
    }

    const handleKeyUp = (event: any): void => {
        const releasedKey: keyof typeof KEY_INPUTS = event.key;
        InputController.removeActiveInput(releasedKey);
    }

    const handleBlur = (event: any): void => {
        InputController.removeAllInputs();
    }

    return (
        <canvas
            className={Styles['game-canvas']}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            ref={canvasRef}
            tabIndex={1}
        />
    );
}

export default GameComponent;