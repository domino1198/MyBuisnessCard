import React from "react";
import './index.scss'
import {Block, IBlock} from "./block";

export const Experience = () => {

    const expirience : IBlock[] = [
        {
            date: 2020,
            name:"First project",
            description:"Первый мой коммерческий проект для НИ ТГУ.",
        },
        {
            date: 2021,
            name:"IPST",
            description:"Первая официальная работа по профилю.",
        },
        {
            date: 2022,
            name:"TSU",
            description:"Закончил университет со степенью бакалавра по направлению прикладная информатика.",
        },
    ]

    return(
        <div className={'container-section margin-absolute'}>
            <h2 className={'font text-black'}>Опыт и достижения</h2>
            <div className={'grid-container'}>
                {expirience.map((item,index) => <Block data={item} key={index}/>)}
            </div>
        </div>
    )
}
