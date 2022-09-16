import React, {Dispatch, ReactComponentElement} from "react";
import './index.scss'
import {ReactComponent as Telegram} from '../../icons/telegram.svg'
import {ReactComponent as Github} from '../../icons/github.svg'
import {HashLink} from "react-router-hash-link";
import {useIsSize} from "../../hooks/useIsSize";


type Link = {
    name?: string,
    icon?: ReactComponentElement<any>
    link: string
}

interface ILink {
    setOpen?: Dispatch<boolean>
}

export const Links = ({setOpen}: ILink) => {

    const isSize = useIsSize()

    const link: Link[] = [
        {
            name: 'О себе',
            link: '/#AboutMe',
        },
        {
            name: 'Навыки',
            link: '/#Skills',
        },
        {
            name: 'Проекты',
            link: '/#Projects',
        },
        {
            name: 'Опыт',
            link: '/#Experience',
        },
        {
            icon: <Telegram style={{marginRight: 3}} className={'img'}/>,
            link: 'https://t.me/Roman_Guzaev',
        },
        {
            icon: <Github className={'img'}/>,
            link: 'https://github.com/domino1198',
        },
    ]


    return (
        <ul className={'container-links'}>
            {!['xs', 'sm', 'md'].find((item) => item === isSize) ? link.map((item, index) => (
                    <li key={index} className={'link-text font'}>
                        {item.icon ? <a className={'font radius'} href={item.link}>{item.icon}</a> :
                            <HashLink smooth className={'link-text font'} to={item.link}>{item.name}</HashLink>}
                    </li>
                )) :
                <>
                    {link.map((item, index) => (
                        <li key={index} className={'link-text font'}>
                            {!item.icon &&
                                <HashLink onClick={() => setOpen && setOpen(false)} smooth className={'link-text font'}
                                          to={item.link}>{item.name}</HashLink>}
                        </li>
                    ))}
                    <div className={'link-icon'}>
                        {link.map((item, index) => (
                            item.icon && <li key={index} className={'link-text font'}>
                                <a className={'font radius'} href={item.link}>{item.icon}</a>
                            </li>
                        ))}
                    </div>
                </>
            }
        </ul>
    )
}
