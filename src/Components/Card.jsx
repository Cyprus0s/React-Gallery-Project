import React from 'react'

const Card = (props) => {
    return (
        <div>
            <a href={props.elem.url} target='_blank'>
                <div className='flex justify-center flex-col h-45 w-55 overflow-hidden rounded-xl'>
                    <img className='h-full  object-cover' src={props.elem.download_url} alt="image" loading='lazy' />
                </div>
                <h2 className='font-bold text-xl'>{props.elem.author}</h2>
            </a>
        </div>
    )
}

export default Card
