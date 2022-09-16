import React from "react";
import './index.scss'

export const AboutMe = () => {

    return(
        <div className={'container-section'}>
            <h1 className={'font'}>Роман Гузаев</h1>
            <span className={'font content'}>
                Я frontend и mobile developer с хоршоим уровнем знания и скромным опытом работы в области IT.
                Люблю писать код и учавствовать в больших проектах в команде с такими же энтузиастами как я.
                Очень быстро изучаю и выполняю любую задачу во что бы то не стало. Отлично и без конфликтов общаюсь с коллегами.
            </span>
                <img alt={'avatar'} className={'avatar-block'} src={'https://avatars.githubusercontent.com/u/51702295?v=4'}/>
        </div>
    )
}
