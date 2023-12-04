import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar.jsx'
import App from './App.jsx'
import emailjs from '@emailjs/browser'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

export const EmailLogic = () => {
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const toggleEmailModal = () => {
        console.log('toggling email modal');
        setShowEmailModal(!showEmailModal);
    };

    const toggleToast = () => {
        setShowToast(!showToast);
    }

    const form = useRef();

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                toggleToast();
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [showToast])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_4s88vzf',
            'template_8ojz16j',
            form.current,
            'PKTpMx9_Hrr5oH_Ct'
        )
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
            }, (error) => {
                console.log(error.text);
            });

        toggleToast();
        toggleEmailModal();
    };

    return {
        showEmailModal,
        toggleEmailModal,
        showToast,
        toggleToast,
        form,
        sendEmail
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar emailLogic={EmailLogic} />
    <App emailLogic={EmailLogic} />
  </React.StrictMode>,
)
