import { useState, useEffect } from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import { useStateContext } from '../StateContext';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RocketModal = () => {
    const [count, setCount] = useState(0);
    const [animationSpeed, setAnimationSpeed] = useState('0s');

    const { showRocketModal, toggleRocketModal } = useStateContext();

    useEffect(() => {
        if (count > 0 && count >= 110) {
            setAnimationSpeed("0.5s");
        } else if (count > 0 && count >= 100) {
            setAnimationSpeed("1s");
        } else if (count > 0) {
            setAnimationSpeed("1.5s");
        } else {
            setAnimationSpeed("0s");
        }
    }, [count])


    const toTheMoon = count >= 100;

    return (
        <>
            <Modal className="rocket-modal" isOpen={showRocketModal} toggle={toggleRocketModal} centered>
                <ModalBody>
                    <div className="font-poppins mt-10">
                        <div className="to-the-moon font-montserrat">
                            <h2 className={`text-xl mb-4 text-center ${toTheMoon ? 'visible' : 'hidden'}`}>We're headed to the moon!</h2>
                            <h1 className="rocket" style={{ animationDuration: animationSpeed }}>
                                🚀
                            </h1>
                        </div>
                        <h1 className="text-2xl text-center">Your rocket's goin' {count}mph!</h1>
                        <div className="increment-btns flex justify-center space-x-8 mt-4 mb-2">
                            <button onClick={() => setCount(count - 1)}>
                                <FontAwesomeIcon icon={faMinus} className="text-lapiz-lazuli" size="2xl" />
                            </button>
                            <button onClick={() => setCount(count + 1)}>
                                <FontAwesomeIcon icon={faPlus} className="text-lapiz-lazuli" size="2xl" />
                            </button>
                        </div>
                        <div className="reset-btn flex justify-center">
                            <Button className="w-75 text-white" color="info" onClick={() => setCount(100)}>Skip to 100 🚀</Button>
                            <Button className="w-75" color="primary" onClick={() => setCount(0)}>Reset</Button>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <h1 className="text-sm m-auto text-gray-400 animate-pulse">Exceed 110mph to enter overdrive</h1>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default RocketModal;

//rocket display at all times, starts moving at 100
//'we're headed to the moon' display after 120