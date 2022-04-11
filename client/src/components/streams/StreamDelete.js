import React from 'react'
import Modal from '../Modal.js'
import history from '../../history.js'


const StreamDelete = () => {

const actions = (
    <>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
    </>
)

    return (
        <div className="">
            <Modal 
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actions={actions}
                onDismiss={() => history.push('/')}
             />
        </div>
    )
}

export default StreamDelete