import React from "react";
import './index.scss'
import {BigCard, IBigCard} from "./bigCard";
import Teacher from '../../icons/teacher.svg'
import Mam from '../../icons/mam.svg'
import Hands from '../../icons/Hands.svg'
import Humans from '../../icons/Humans.svg'

export const Projects = () => {

    const data: IBigCard[] = [
        {
            image: Mam,
            name: 'Solagift',
            backgroundColor: 'linear-gradient(180deg, #86EABE 0%, #52C8DA 100%)',
            color:'#52C8DA',
            description: `Интернет-магазин медикаментов. \n
            Разрабатывал всю логику и верстку связанную с товаром и покупкой товара.  Из интересно добавлял виджеты доставки от Почты России, Boxberry, CDEK и рассчитывал цену доставки через ApiShip.\n
                Стек разработки: React + Next.js + Redux ToolKit + Axios + styled-components. + TypeScript`,
            link: 'https://prod.solagift.ipst-dev.com/'
        },
        {
            image: Hands,
            name: 'MobileNavigator',
            backgroundColor: 'linear-gradient(180deg, #F81976 0%, #CC3F9A 100%)',
            color:'#CC3F9A',
            description: `Навигатор в телефоне. \n
            Написал навигатор на телефон, используя ReactNative и библиотеку react-native-yamap.`,
            link: 'https://github.com/domino1198/YaMapsTest'
        },
        {
            image: Teacher,
            name: 'New Platform',
            backgroundColor: 'linear-gradient(180deg, #481679 0%, #5E0090 100%)',
            color:'#5E0090',
            description: `Универсальная образовательная платформа. \n
            Приложение состоит из занятий с заданиями, онлайн-уроком, отображение успеваемости и профиля с авторизацией пользователя. 
            Написал всю логику и верстку мобильного приложения кроме онлайн-урока. \n
             Стек разработки: ReactNative + TypeScript + Redux+Thunk + Axios`,
            link: 'https://expo.dev/@domino1198/english-patient'
        },
        {
            image: Humans,
            name: 'IntelBuilding',
            backgroundColor: 'black',
            color:'black',
            description: `Визитка для системы умного дома. \n
            Работа состояла из верстки на styled-components и AntDesign \n
            Стек разработки: React + Gatsby + Strapy + styled-components + AntDesign`,
            link: 'https://www.intelbuilding.ru/'
        },
    ]

    return (
        <div className={'container-section margin-absolute'}>
            <h2 className={'font text-black'}>Проекты</h2>
            <p style={{marginBottom: 40}} className={'font card-desc'}>Ниже представлены последние проекты, в которых я
                принимал участие:</p>
            {data.map((item, index) => <BigCard data={item} key={index}/>)}
        </div>
    )
}
