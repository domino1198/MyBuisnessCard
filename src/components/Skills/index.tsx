import React from "react";
import './index.scss'
import {Card, ICard} from "./card";
import {ReactComponent as Front} from '../../icons/front.svg'
import {ReactComponent as Mobile} from '../../icons/mobile.svg'

export const Skills = () => {

    const card: ICard[] = [
        {
            icon: <Front fill={'#3c65ff'} height={70} width={70}/>,
            name: "Frontend Developer",
            description: `Умею как верстать макеты, так и прописывать логику веб-приложения на React. Также есть опыт работы с SSR.
            Опты работы 2 года`,
            stack: {name: 'Языки:', arr: ['JavaScript', "TypeScript"]},
            tools: ['React', 'Next.js', 'Redux', 'Axios', 'Redux ToolKit', 'redux-thunk']
        },
        {
            icon: <Mobile fill={'#3c65ff'} height={70} width={70}/>,
            name: "Mobile Developer",
            description: `Разрабатываю кроссплатфорные мобильные приложения под ReactNative. 
            Преимещественно работаю с Expo, но могу работаю и на чистом RN. Опыт работы чуть больше года`,
            stack: {name: 'Языки:', arr: ['JavaScript', "TypeScript"]},
            tools: ['ReactNative', 'Expo+ многие либы от этой команды как аудио-видео и тд.',
                'Redux', 'Axios', 'Redux ToolKit', 'redux-thunk', "react navigation"]
        },
    ]

    return (
        <div className={'container-section margin-absolute'}>

            <div className={'background-container'}>
            </div>
            <div className={'container-content'}>
                <h2 className={'font text-white'}>Умения</h2>
                <div className={'container-card'}>
                    {card.map((item, index) => <Card key={index} cardProps={item}/>)}
                </div>
            </div>

        </div>
    )
}
