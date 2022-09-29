import {useState} from "react";

export const useIsSize = () => {

    const [checkSize, setCheckSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>('xxl')
    const ChangeScroll = () => {
        window.innerWidth <= 320 ? setCheckSize('xs') :
            window.innerWidth <= 480 ? setCheckSize('sm') :
                window.innerWidth <= 768 ? setCheckSize('md') :
                    window.innerWidth <= 1024 ? setCheckSize('lg') :
                        window.innerWidth <= 1280 ? setCheckSize('xl') :
                            setCheckSize('xxl')
    }

    window.addEventListener('resize', ChangeScroll)

    return checkSize
}
