import { useRef } from 'react'
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap'
import { useStateContext } from '../StateContext'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'

const EmailModal = () => {

    const { showEmailModal, toggleEmailModal } = useStateContext();

    const form = useRef();

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
                toast.info('Email sent successfully')
            }, (error) => {
                console.log(error.text);
                toast.error('Error sending email.  Please try again.')
            });

        toggleEmailModal();
    };

    return (
        <>
            <Modal isOpen={showEmailModal} toggle={toggleEmailModal} centered>
                <ModalHeader className="modal-header text-lapiz-lazuli font-poppins">
                    Send me an email 📩
                </ModalHeader>
                <ModalBody>
                    <form ref={form} className="modal-form font-poppins" onSubmit={sendEmail}>
                        <label>Name: </label>
                        <input type="text" name="from_name" />
                        <label>Email Address: </label>
                        <input type="email" name="email" />
                        <label>Subject: </label>
                        <input type="subject" name="subject" />
                        <label>Message: </label>
                        <textarea name="message" />
                    </form>
                </ModalBody>
                <ModalFooter className="flex justify-between">
                    <Button color="" onClick={toggleEmailModal} className="text-lapiz-lazuli">
                        Close
                    </Button>
                    <Button color="primary" type="submit" onClick={sendEmail}>Send</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default EmailModal

//value={{ showEmailModal, toggleEmailModal }}: The value prop of the Provider is where you specify the
//values that you want to make available to the components within the wrapped tree. In this case, it's an
//object with two properties