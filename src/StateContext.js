/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [showEmailModal, setShowEmailModal] = useState(false);

    const toggleEmailModal = () => {
        setShowEmailModal(!showEmailModal);
    };

    return (
        <StateContext.Provider value={{ showEmailModal, toggleEmailModal }}>
            {children}
        </StateContext.Provider>
    )
}

export default StateContext;