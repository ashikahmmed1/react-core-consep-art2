import React from 'react';

const SimpleFrom = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.name.value)
        console.log(event.target.email.value)
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Your Name' />
                <br />
                <input type="email" placeholder='Your Email' name="email"  />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleFrom;