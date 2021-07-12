import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingEdit, onClickingSell } = props;

  return (
    <React.Fragment>
      <h2>Keg Details</h2>
      <h3>{keg.name} - {keg.beerType}</h3>
      <h4><em>ABV:{keg.abv}</em> <br></br>number of Pints remaining in this keg:<em><strong>{keg.remaining}</strong></em></h4>
      <button onClick={() => onClickingDelete(keg.id)}>Delete this keg</button>
      <button onClick={onClickingEdit}>Edit Keg info</button>
      {/* <button onClick={() => onClickingSell(keg.id)}>Take one down, pass it around</button> */}
      <button onClick={() => onClickingSell(keg.id)}>
        {" "}
        Take one down, Pass it around
      </button>
      {/* <button onClick={onClickingSell}>Just Fucking WORK!!!</button> */}
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func,
};

export default KegDetail;