import config from "../config";

export const loadStateFromLocalStorage = () => {
        const serializedState = localStorage.getItem(config.stateKeyName);
        if (serializedState === null) {
            return undefined;
        }
        try{
            return JSON.parse(serializedState);
        }
        catch(err) {
            return undefined;
        }
};

export const saveStateToLocalStorage = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem(config.stateKeyName, serializedState);
    }
    catch(err) {
        // ignore errors
    }
};