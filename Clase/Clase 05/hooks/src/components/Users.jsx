import React, { useEffect, useState } from 'react'

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const resp = await fetch('https://reqres.in/api/users');
            const json = await resp.json();
            setUsers(json.data);
        })();
    }, []);

    let content = <h3>No hay usuarios</h3>;
    if( users.length > 0) {
        content= <div className='users'>
            {
                users.map(user => (
                    <div className="user" key={ user.id }>
                        <img src={ user.avatar } alt="avatar" />
                        <p>{ user.first_name}</p>
                        <p>{ user.email }</p>
                    </div>
                ))
            }
        </div>
    };

    return (
        <div>
            <h1>USUARIOS</h1>
            <hr/>
            {content}
        </div>
    );
};

export default Users;
