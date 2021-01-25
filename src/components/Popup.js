import {useState} from 'react'

export default function Popup() {
    const [popup, setPopup] = useState(false)

    const togglePopup = () => {
        setPopup(!popup)
    }

    return (
        <div className='wrapper'>
            <h1 className='big-text'>Simple Popup</h1>
            <button className='btn' onClick={togglePopup}>Show Pupup</button>

            {popup ? (<div className="popup">
                <h2 className='mid-text'>Here is the #Popup</h2>
                <button className='btn' onClick={togglePopup}>Close</button>
            </div>) : null}
        </div>
    )
}
