import { useState } from 'react';

export const useGlobalState = (key, defaultState) => {

    const [globalState, setGlobalState] = useState();

    useEffect(() => {

        const curState = sessionStorage.getItem(key);

        //setup state first time
        if(!curState) {
            sessionStorage.setItem(key, JSON.stringify({
                value: defaultState,
                defaultSet: !!defaultState
            }));
        }
    }, [])

    //if the session storage global state changes, update the internal state
    useEffect(() => {
       const curState = sessionStorage.getItem(key);
       setGlobalState(curState?.value);
    }, [sessionStorage[key]]);

    //provide setter method to update the global state
    const setValue = (newvalue) => {
        const curState = sessionStorage.getItem(key);

        if(curState) {
            try {
                const parsedState = JSON.parse(curState);
                parsedState.value = newvalue;
                sessionStorage.setItem(key, JSON.stringify(parsedState));
            } catch (ex) {
                console.error("ERROR setting global state using key: " + key);
            }
        }
    }

    return {
        value: globalState,
        setValue
    }
}