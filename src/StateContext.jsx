/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [showEmailModal, setShowEmailModal] = useState(false);
    // const [showToast, setShowToast] = useState(false);

    const toggleEmailModal = () => {
        console.log("Toggling email modal...")
        setShowEmailModal(!showEmailModal);
    };

    // const toggleToast = () => {
    //     console.log("toggling toast");
    //     setShowToast(!showToast);
    // }

    return (
        <StateContext.Provider value={{ showEmailModal, toggleEmailModal }}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateContext = () => {
    return useContext(StateContext)
};