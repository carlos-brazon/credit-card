
import React from 'react'
import { ButtonsCreated } from "./Button.jsx";



const ButtonList = ({ number }) => {
    const ciclo = () => {
        const buttons = [];
        for (let i = 0; i <= number; i++) {
            buttons.push(i);
        }
        return buttons
    }
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='font-bold text-5xl'>30 Days of React</h1>
            <p className='text-2xl'>Number Generator</p>
        <div className='flex gap-px flex-wrap flex-row w-[800px]'>
            {
                ciclo().map((numero, i) => <ButtonsCreated numero={numero} key={i} /> )
            }
        </div>
        </div>
    )
}
export default ButtonList;
