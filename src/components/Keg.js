
import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - {props.beerType}</h3>
        <p><em>{props.abv}</em></p>
        <h4>Number of pints remaining in this keg:{props.remaining}</h4>
      </div>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  beerType: PropTypes.string.isRequired,
  remaining: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  onClickSellBeer: PropTypes.func
};

export default Keg;