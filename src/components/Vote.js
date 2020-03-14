import React from "react";
import PropTypes from "prop-types";
import "../styles/Vote.css";

function Vote({ item, voteAdd, voteMins }) {
  return (
    <div className="vote">
      <div className="arrow-up" onClick={voteAdd}>
        <i className="fa fa-arrow-up fa-10x" aria-hidden="true"></i>
      </div>
      <div className="vote-num">{item.vote}</div>
      <div className="arrow-down" onClick={voteMins}>
        <i className="fa fa-arrow-down" aria-hidden="true"></i>
      </div>
    </div>
  );
}

Vote.propTypes = {
  item: PropTypes.object.isRequired,
  voteAdd: PropTypes.func.isRequired,
  voteMins: PropTypes.func.isRequired
};

export default Vote;
