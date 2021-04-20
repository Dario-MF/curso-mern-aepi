import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ListHeroe = () => {
    const [listheroe, setListheroe] = useState([])

    useEffect(() => {
        (async() => {
            const resp = await axios.get('https://swapi.dev/api/people/?format=json')
            setListheroe(resp.data.results)
            console.log(resp)
        })()
    }, []);

    return (
        <div>
            <h1>Lista de heroes</h1>
            <hr/>
            <div className="list-heroe">
                {
                    listheroe.map(heroe => (
                        <div className="heroe" key={heroe.name}>
                            <p>NOMBRE: {heroe.name}</p>
                            <p>FECHA NACIMIENTO: {heroe.birth_year}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
