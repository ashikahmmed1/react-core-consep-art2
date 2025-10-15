import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('submitted')
        if(password.length < 6) {
            setError('6characters or longer password needed.')
        }
        else{
            setError('');
        }

    }

    const handlePasswordOnChang = event =>{
        console.log(event.target.value);
        setPassword(event.target.value);

        // if(password.length < 6){
        //     setError('Password must be 6 characters or longer.')
        // }
        // else{
        //     setError('');
        // }
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input type="email" name="email" 
                placeholder='Email' required />
                <br />
                <input type="password" name="password" 
                placeholder='Password' onChange={handlePasswordOnChang} 
                defaultValue={password} required />
                <br />
                <input type="submit" value="submit" />
             </form>
             <p style={{color: 'red'}}>
                <small>{error}</small>
             </p>
        </div>
    );
};

export default ControlledField;