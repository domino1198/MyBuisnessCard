import React, {useEffect, useState} from "react";
import './index.scss'
import '../../global.scss'
import {Header} from "../Header";
import {AboutMe} from "../AboutMe";
import {Skills} from "../Skills";
import {Experience} from "../Experience";
import {HashLink} from "react-router-hash-link";
import {ReactComponent as Arrow} from "../../icons/upArrow.svg";
import {Projects} from "../Projects";
import Lottie from "lottie-react";
import Loader from '../../icons/loading.json'
import {CSSTransition} from 'react-transition-group';
import {useIsSize} from "../../hooks/useIsSize";

export const App = () => {

    const [show, setShow] = useState(false)
    const [load, setLoad] = useState(true)
    const [linear, setLinear] = useState(false)
    const [open, setOpen] = useState(false)
    const isSize = useIsSize()

    const handleScroll = () => {
        ((window.scrollY >= 120 && !['xs', 'sm', 'md'].find((item) => item === isSize)) ||
            (window.scrollY >= 60 && ['xs', 'sm', 'md'].find((item) => item === isSize))) ? setShow(true) :
            setShow(false)
    };


    window.addEventListener('scroll', handleScroll)

    useEffect(() => {
        Loading().then(() => {
        })
        !load && setLinear(true)
    }, [load])

    const Loading = async () => {
        await setTimeout(() => {
            setLoad(false)
        }, 2000)
    }

    return load ? <Lottie style={{width: '100%', height: 550, marginTop: '8%'}} animationData={Loader}/> : (
        <CSSTransition in={linear} unmountOnExit timeout={1000} classNames="my-node">
            <div className={'my-node'}>
                <header id={"Header"} className={"header"}>
                    <Header isOpen={[open, setOpen]}/>
                </header>
                <div style={{display: open ? 'none' : 'inherit'}}>
                    <section id='AboutMe' className={'section'}>
                        <AboutMe/>
                    </section>
                    <section id='Skills' className={'section absolute'}>
                        <Skills/>
                    </section>
                    <section style={{marginTop: -100}} id='Projects' className={'section'}>
                        <Projects/>
                    </section>
                    <section id='Experience' className={'section margin-end'}>
                        <Experience/>
                    </section>
                    {show && <HashLink className={'link-absolute'} to={'#Header'} smooth>
                        <Arrow className={'img'} height={40} width={40}/>
                    </HashLink>}
                </div>
            </div>
        </CSSTransition>

    )
}
