import React from "react";
import {Links} from "./links";
import {IHeader} from "./index";


export const MobileLinks = ({isOpen: [open, setOpen]}: IHeader) => {


    return (
        <>
            <button onClick={() => setOpen(!open)} className={'btn'}>
                {!open ? <>
                    <div className={'line'}></div>
                    <div className={'line'}></div>
                    <div className={'line'}></div>
                </> : <div className={'cross'}>
                </div>
                }
            </button>
            {open &&
                <div className={'nav-mobile'}>
                    <Links setOpen={setOpen}/>
                </div>
            }
        </>
    )
}
