/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [showRocketModal, setShowRocketModal] = useState(false);

    const toggleEmailModal = () => {
        console.log("Toggling email modal...")
        setShowEmailModal(!showEmailModal);
    };

    const toggleRocketModal = () => {
        console.log("Toggling rocket modal...")
        setShowRocketModal(!showRocketModal);
    }

    return (
        <StateContext.Provider value={{
            showEmailModal,
            toggleEmailModal,
            showRocketModal,
            toggleRocketModal
        }}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateContext = () => {
    return useContext(StateContext)
};