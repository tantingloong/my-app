import React, {useState, createContext} from 'react';


// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

export const MyContext = createContext();

export const MyProvider = (props) => {
    const [measure, setMeasure] = useState (
        {
            id : 1,
            firstName : '',
            lastName : '',
            weight : null,
            fatPercent : null,
            viceralFat : null,
            boneMass : null,
            bmr : null,
            metabolicAge : null,
            muscleMass : null,
            physiqueRating : null,
            waterPercent : null,
            firstTime : true,
            calc_fatWeight : null,
            calc_musclePercent : null,
            calc_fetch : true,
            isFemale : true,
            gender : null
        }
    );

    console.log("got it - MyProvider", measure);

    return(
        <MyContext.Provider value={[measure, setMeasure]}>
            {props.children}
        </MyContext.Provider>
    )
}

