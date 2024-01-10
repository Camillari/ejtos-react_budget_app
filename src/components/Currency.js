import { useState } from "react"

const Currency = () => {
    const [show, setShow] = useState(false)
    const [currency, setCurrency] = useState('$')

    const toggle = () => {
        if (show) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    return (<div className='alert alert-secondary position-relative'>
        <div className="dropdown ">
            <button
                className="btn btn-success dropdown-toggle"
                type="button"
                onClick={() => toggle()}>
                Currency $ Dollar
            </button>
            <div className={`${show ? 'd-block position-absolute bg-secondary' : 'd-none'} `} 
           style={{padding:'10px'}} >
                <p className="dropdown-item" >$ Dollar</p>
                <p className="dropdown-item bg-white" >£ Pound</p>
                <p className="dropdown-item" >€ Euro</p>
                <p className="dropdown-item" >₹ Ruppee</p>
            </div>
        </div>

    </div>)
}

export default Currency