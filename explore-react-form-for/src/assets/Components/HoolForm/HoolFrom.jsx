import React from 'react';
import useInputFild from '../Hools/useImputfield';

const HoolFrom = () => {
    const [name, nameOnChange] = useInputFild('');
    const [email, emailOnChange] = useInputFild('');
    const [password, passwordOnChange] = useInputFild('');

    const handleSubmit = e =>{
        e.preventDefault();
        console.log('submit', name, email, password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} type="text" onChange={nameOnChange} />
                <br />
                <input type="email" onChange={emailOnChange} name="Email"  />
                <br />
                <input type="password" onChange={passwordOnChange} name="Password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HoolFrom;