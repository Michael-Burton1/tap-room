
import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - {props.type}</h3>
        <p><em>{props.abv}</em></p>
        <h4>Number of pints remaining in this keg:{props.remaining}</h4>
      </div>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  abv: PropTypes.string,
  type: PropTypes.string,
  remaining: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;