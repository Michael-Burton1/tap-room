import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Beer Name' />
        <input
          type='text'
          name='beerType'
          placeholder='Type of beer' />
        <input
          type='text'
          name='abv'
          placeholder='Beer ABV' />
        <hr></hr>
        <br></br>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;