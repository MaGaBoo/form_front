import React, { createContext, useState } from 'react';

const PinkModeContext = createContext();

function PinkModeProvider(props) {

    const [pinkMode, setPinkMode] = useState(false);
    const togglePinkMode = () => {
        setPinkMode(!pinkMode)
    };
    return (
        <div>
            <PinkModeContext.Provider value={{pinkMode, togglePinkMode}}>
                {props.children}
            </PinkModeContext.Provider>
        </div>
    )
};

export { PinkModeContext, PinkModeProvider }