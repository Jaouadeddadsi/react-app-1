import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../styles/Detail.css";

function Detail({ item }) {
  return (
    <>
      <h3 className="item-title">{item.title}</h3>
      <span className="item-url">{item.url}</span>
      <br />
      <span className="item-url">
        {moment(item.submitDate).fromNow()} by
      </span>{" "}
      <span className="item-name">{item.name}</span>
      <ul className="action-list">
        <li className="comments">
          {item.comments > 0 ? `${item.comments} comments` : "comment"}
        </li>
        <li className="action">share</li>
        <li className="action">save</li>
        <li className="action">hide</li>
        <li className="action">report</li>
        <li className="action">pocket</li>
      </ul>
    </>
  );
}

Detail.propTypes = {
  item: PropTypes.object.isRequired
};

export default Detail;
