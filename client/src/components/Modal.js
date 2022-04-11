import React from 'react'
import ReactDOM from 'react-dom'


const Modal = (props) => {
    return ReactDOM.createPortal(

        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                blah blah blah blah 
            </div>
        </div>, //! <--- Notice the comma, the JSX is only the first argument, just like ReactDOM.Render

        document.getElementById('modal')
    )
}

export default Modal