import React, {Dispatch} from "react";
import './index.scss'
import {Links} from "./links";
import {HashLink} from "react-router-hash-link";
import {useIsSize} from "../../hooks/useIsSize";
import {MobileLinks} from "./mobileLinks";

export interface IHeader {
    isOpen : [boolean,Dispatch<boolean>]
}

export const Header = ({isOpen}:IHeader) => {

    const isSize = useIsSize()

    return (
        <div className={'container'}>
            <HashLink to={'/'} className={'initials font'}>
                RG
            </HashLink>
            {['xs', 'sm', 'md'].find((item) => item === isSize) ? <MobileLinks isOpen={isOpen}/>
                : <Links/>
            }

        </div>
    )
}
