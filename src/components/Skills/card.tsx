import React, {ReactComponentElement} from "react";
import './index.scss'

export interface ICard {
    icon: ReactComponentElement<any>
    name: string
    description: string
    stack: { name: string, arr: string[] }
    tools: string[]
}

export const Card = (props: { cardProps: ICard }) => {

    const {cardProps} = props

    const {icon, name, description, stack, tools} = cardProps

    return (
        <div className={'card'}>
            {icon}
            <p className={'font card-name'}>
                {name}
            </p>
            <p className={'font card-desc'}>
                {description}
            </p>
            <p className={'card-zagolovok font'}>
                {stack.name}
            </p>
            <div className={'container-stack'}>
                {stack.arr.map((item, index) => (
                    <p key={index} className={'font card-desc'}>
                        {index === stack.arr.length - 1 ? item : `${item},`}&nbsp;
                    </p>
                ))}
            </div>
            <p className={'font card-zagolovok'}>
                Мои инструменты и технологии:
            </p>
            {tools.map((item, index) => (
                <p key={index} className={'font card-desc'}>
                    {item}
                </p>
            ))}
        </div>
    )
}
