import { useState } from 'react';
import { OuterContainer } from './MyStyles';

export const FormInput = () => {
    const [info, setInfo] = useState('')
    const [userData, setuserData] = useState({})

    const getInfo = async () => {
        const apiUrl = `https://api.github.com/users/${info}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setuserData(data);
    };
    // console.log(userData.name);
    // console.log(userData);

    const handleChange = (e) => {
        // console.log(e)
        setInfo(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        getInfo();
        setInfo('');
    };

    return (
        <OuterContainer>
            <h1>Welcome to Github User Database</h1>
            <h2>Input a known username to view info</h2>
            <form className="inputSection">
                <input type="text" placeholder="username" value={info} onChange={(e) => handleChange(e)}></input>
                <button onClick={handleClick}>Get User Info</button>
            </form>
            <div className="card">
                <div className="img_wrapper">
                    <img src={userData.avatar_url}></img>
                </div>
                <div className="info_wrapper">
                    <span>Name: {userData.name}</span>
                    <span>Bio: {userData.bio}</span>
                    <span>Public Repos: {userData.public_repos}</span>
                </div>
            </div>
        </OuterContainer>
    )
};