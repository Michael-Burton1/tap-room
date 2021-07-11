import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm(props) {
  const { ticket } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({ name: event.target.name.value, type: event.target.type.value, abv: event.target.abv.value, remaining: event.target.remaining.value, id: keg.id });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update keg info" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditkeg: PropTypes.func
};

export default EditKegForm;