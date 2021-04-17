import React, { useState } from 'react'

const StyleComponent = () => {


    const [styles, setStyles] = useState({
        backgroundColor: 'green',
        color: 'white'
    })

    const cambiarColor = (bgColor) => {
        setStyles({
            ...styles,
            backgroundColor: bgColor
        })
    }
    const cambiarColorTexto = (e) => {
        setStyles({
            ...styles,
            color: e.target.value
        })
    }

   
    return (
        <div>
            <div className='text-center mb-2'>
                <button className='btn btn-info mr-2' onClick={ () => cambiarColor('red')}>Rojo</button>
                <button className='btn btn-info mr-2' onClick={ () => cambiarColor('indigo')}>Indigo</button>
                <button className='btn btn-info mr-2' onClick={ () => cambiarColor('goldenrod')}>Goldenrod</button>
            </div>
            <div className='text-center mb-2'>
                <input type="text" value={styles.color} onChange={ cambiarColorTexto }/>
            </div>
            <div className='text-center mb-2'>
                <input 
                    type="range"
                    min='16'
                    max='120' 
                    step='1' 
                    onChange={ (e) => setStyles({...styles, fontSize: e.target.value + 'px'})}/>
            </div>
            <p style={styles}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi </p>
            
        </div>
    )
}

export default StyleComponent
