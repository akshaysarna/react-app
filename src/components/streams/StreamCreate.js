import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header"> {error}</div>
        </div>
      );
    }
    //return null;
  };

  renderInput = ({ input, label, meta }) => {
    /* 
    {input} is destructured from formProps 
     <input onChange={formProps.input.onChange} value={formProps.input.value}/>
    */
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" label="Enter Title" component={this.renderInput} />
        <Field
          name="description"
          label="Enter Description"
          component={this.renderInput}
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const error = {};
  if (!formValues.title) {
    error.title = "You must enter a title";
  }
  if (!formValues.description) {
    error.description = "You must enter a description";
  }
  return error;
};

/* export default reduxForm({
  form: "StreamCreate", //name of this form
  validate
})(StreamCreate); */

const formWrapped = reduxForm({
  form: "StreamCreate", //name of this form
  validate
})(StreamCreate);

export default connect(
  null,
  { createStream }
)(formWrapped);
