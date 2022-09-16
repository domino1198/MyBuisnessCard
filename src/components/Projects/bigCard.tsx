import React from "react";

export interface IBigCard {
    image: string,
    name: string,
    backgroundColor: string
    color:string
    description: string,
    link?: string
}

export const BigCard = (props: { data: IBigCard }) => {
    const {data} = props
    const {image, name, color, description, link,backgroundColor} = data
    return (
        <div className={'container-big-card'}>
            <div style={{background: backgroundColor}} className={'container-element-big-card'}>
                {<img className={'image-card'} alt={'project'} src={image}/>}
            </div>
            <div style={{borderBottomWidth:4,borderBottomColor:color,borderBottomStyle:'inset'}} className={'container-element-big-card'}>
                <h3 style={{color: color}}>{name}</h3>
                <p style={{whiteSpace:'pre-line'}} className={'font card-desc'}>{description}</p>
                <a className={'font link-project'} href={link}>View project</a>
            </div>
        </div>
    )
}
