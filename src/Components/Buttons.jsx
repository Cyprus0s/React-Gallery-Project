import React from 'react'

const Buttons = (props) => {
    return (
        <div className='flex justify-center items-center gap-5 mb-4'>
            <button style={{ opacity: props.index == 1 ? 0.5 : 1 }} className='text-bold bg-amber-300 text-black text-2xl px-5 py-2 rounded-xl cursor-pointer active:scale-95' onClick={() => {
                if (props.index > 1) {
                    props.setindex(props.index - 1)
                    props.setUserData([])
                }
            }}>Prev</button>

            <h3>Page {props.index}</h3>

            <button className='text-bold bg-amber-300 text-black text-2xl px-5 py-2 rounded-xl cursor-pointer active:scale-95' onClick={() => {
                if (props.index < 50) {
                    props.setindex(props.index + 1)
                    props.setUserData([])
                }

            }}>Next</button>
        </div>
    )
}

export default Buttons
