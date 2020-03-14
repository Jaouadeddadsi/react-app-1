import React from "react";
import "../styles/Item.css";
import Vote from "./Vote";
import Detail from "./Detail";
import PropTypes from "prop-types";

function Item({ item, voteMins, voteAdd }) {
  return (
    <div className="item">
      <div className="vote">
        <Vote item={item} voteMins={voteMins} voteAdd={voteAdd} />
      </div>
      <div className="avatar">
        <img src={item.avatar_url} alt="avatar" />
      </div>
      <div className="detail">
        <Detail item={item} />
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  voteMins: PropTypes.func.isRequired,
  voteAdd: PropTypes.func.isRequired
};

export default Item;
