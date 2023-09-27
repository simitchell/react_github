import {useState} from 'react';

export const FormInput = () => {
    const [info, setInfo] = useState('')
    const [userData, setuserData] = useState({})

    const getInfo = async () => {
        const apiUrl = `https://api.github.com/users/${info}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setuserData(data);
    };
    console.log(userData);

    const handleChange = (e) => {
        // console.log(e)
        setInfo(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        getInfo();
        
    };

    return (
        <>
            <h1>Welcome to Github User Info</h1>
            <input placeholder="username" value={info} onChange={(e) => handleChange(e)}></input>
            <button onClick={handleClick}>Get User Info</button>
        </>
    )
};