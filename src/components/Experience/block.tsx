import React from "react";
import './index.scss'

export interface IBlock {
    date: number
    name: string
    description: string

}

export const Block = (props: { data: IBlock }) => {
    const {data} = props
    const {date, name, description} = data
    return (
        <div className={'block-container'}>
            <p className={'font text-date'}>{date}</p>
            <div style={{width:'100%'}}>
                <span className={'font text-name'}>{name}</span>
                <p style={{textAlign:'start'}} className={'font card-desc'}>{description}</p>
            </div>
        </div>
    )
}
