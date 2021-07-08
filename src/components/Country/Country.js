import React from 'react';

const Country = (props) => {
    //write a funtion to add two number

    const { name, population, region, flag } = props.country;
    const flagstyle = { height: '50px' };
    const countrystyle = { border: '1px solid darkgrey', margin: '10px', padding: '10px' };
    // console.log(props);
    const handleAddCountry = props.handleAddCountry;

    return (
        <div style={countrystyle}>
            
            <h3>`{name}`</h3>
            <img style={flagstyle} src={flag} alt="" />
            <p>population of {name} is {population}</p>
            <p><small>{name} is in {region} region</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>

        </div>
    );
};

export default Country;