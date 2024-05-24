const RocketModalMessage = ({ isOpen }) => {
    if (!isOpen) return null;

  return (
    <div className={`modal-message ${isOpen ? 'visible' : ''}`}>
        <p className="">
            This is a counter game to demonstrate the capabilities of dynamic state in React! Adjust the speed of the rocket with - and + or take the fast track and skip to 100 💨 but brace for OVERDRIVE if you&apos;re thinking of passing 110.
        </p>
    </div>
  )
}

export default RocketModalMessage