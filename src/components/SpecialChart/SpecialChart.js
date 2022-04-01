import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SpecialChart = () => {
    const [phone, setPhones] = useState ([]);
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default SpecialChart;