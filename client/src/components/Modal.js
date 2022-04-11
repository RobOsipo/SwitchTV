import React from 'react'
import ReactDOM from 'react-dom'



const Modal = (props) => {
    return ReactDOM.createPortal(

        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>, //! <--- Notice the comma, the JSX is only the first argument, just like ReactDOM.Render

        document.getElementById('modal')
    )
}

export default Modal