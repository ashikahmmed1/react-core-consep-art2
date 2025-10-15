import React from 'react';

const FormAction = () => {

    const handleFormAction = (formData) =>{
        console.log(formData.gat('name'));
        console.log(formData.gat('email'));
    }

    return (
        <div>
            <form action={handleFormAction}>
                <input type="text" name='name' placeholder='Name' />
                <br />
                <input type="text" name='email' placeholder='Email' /> 
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;                          