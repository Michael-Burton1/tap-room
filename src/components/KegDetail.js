import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h2>Keg Details</h2>
      <h3>{keg.name} - {keg.beerType}</h3>
      <h4><em>ABV:{keg.abv}</em> <br></br>number of Pints remaining in this keg:<em><strong>{keg.remaining}</strong></em></h4>
      <button onClick={() => onClickingDelete(keg.id)}>Delete this keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;