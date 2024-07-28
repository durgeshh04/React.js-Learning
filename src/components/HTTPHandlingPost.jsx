import React from "react";
import "./HTTPHandlingPost.css";

const HTTPHandlingPost = () => {
  return (
    <div className="http-handling-post">
      <form className="post-form" action="post">
        <div className="input-group">
          <label className="label" htmlFor="userId">
            UserId:
          </label>
          <input className="input-tag" type="text" id="userId" name="userId" />
        </div>
        <div className="input-group">
          <label className="label" htmlFor="userId">
            Title:
          </label>
          <input className="input-tag" type="text" id="title" name="title" />
        </div>
        <div className="input-group">
          <label className="label" htmlFor="userId">
            Body:
          </label>
          <input className="input-tag" type="text" id="body" name="body" />
        </div>
        <div className="input-group button-group">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HTTPHandlingPost;
