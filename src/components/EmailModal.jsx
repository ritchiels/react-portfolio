import { useRef } from 'react'
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Toast,
    ToastBody
} from 'reactstrap'
import { EmailLogic } from '../main'

const EmailModal = ({ EmailLogic }) => {
    const { showEmailModal, toggleEmailModal, showToast, toggleToast, form, sendEmail } = EmailLogic;

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
            <div className={`toast-overlay ${showToast ? "show" : ""}`}>
                <Toast isOpen={showToast} toggle={toggleToast} className="email-toast" id="custom-toast">
                    <ToastBody className="text-center bg-success" toggle={toggleToast}>
                        Email Sent Successfully <span className="ml-1">✔</span> <br />Thanks for reaching out
                    </ToastBody>
                </Toast>
            </div>
        </>
    )
}

export default EmailModal