import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { merch, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name} -{keg.type}</h3>
      <h4><em>{keg.type}</em> number of Pints remaining in this keg:<em><strong>{keg.remaining}</strong></em></h4>
      <button onClick={() => onClickingDelete(keg.id)}>Delete this keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
  // onClickingEdit: PropTypes.func
};

export default KegDetail;