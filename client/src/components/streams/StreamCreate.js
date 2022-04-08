import React from 'react'
import { Field, reduxForm } from 'redux-form';


class StreamCreate extends React.Component {
   
   renderInput = ({ input, label, meta }) => {

       const errorStyling = `field ${ meta.error && meta.touched ? 'error' : '' }`
       
        return (
            <div className={errorStyling}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}

            </div>
        )
   }

   renderError = ({ error, touched }) => {
      if (touched && error) {
          return (
              <div className="ui error message">
                  <div className="header">{error}</div>
              </div>
          )
      }
   }
   
   
   onSubmit(formValues) {
        console.log(formValues)
   }
   
   render() {
       
       return (
           <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">

               <Field name="title" component={this.renderInput} label="Enter Title" />
               <Field name="description" component={this.renderInput} label="Enter Description" />

               <button className="ui button primary">Submit</button>
           </form>
       )

   }
}


const validate = (formValues) => {
    const errors = {}

    if (!formValues.title) { errors.title = 'woops, you forgot a title!' }
    if (!formValues.description) { errors.description = 'please add a description too (: ' }

    return errors

}

export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate)