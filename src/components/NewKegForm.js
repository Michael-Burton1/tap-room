import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReuseableForm";

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      beerType: event.target.beerType.value,
      abv: event.target.abv.value,
      remaining: 124,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <h3>Please fill out form to add new keg:</h3>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add this keg" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;