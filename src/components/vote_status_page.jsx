import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PollingAppSelectors } from '../polling_app_selectors';
const VoteStatus = voteStatus => (
      <div className="vote-success">
        {
          voteStatus ?
          <h1>Vote Successful</h1>
          :
          <h1>Vote Failed</h1>
        }

        <Link to={`/`}>
          <button>Go Back</button>
        </Link>
      </div>
    );

VoteStatus.propTypes = {
  voteStatus: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  voteStatus: PollingAppSelectors.getVoteStatus(state),
});
export default connect(mapStateToProps)(VoteStatus);
