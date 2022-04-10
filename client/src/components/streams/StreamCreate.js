import React from 'react'
// import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { createStream } from '../../actions/index.js'
import StreamForm from './StreamForm.js'

class StreamCreate extends React.Component {
   
   
   onSubmit = (formValues) => {
        this.props.createStream(formValues) 
   }
   
   render() {
       
       return (
         <div>
             <h3>Create A Stream</h3>
             <StreamForm onSubmit={this.onSubmit} />
         </div>
       )

   }
}



export default connect(null, { createStream: createStream})(StreamCreate)