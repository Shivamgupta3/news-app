import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
    props;

  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0,
          }}
        >
          <span className="badge rounded-pill bg-danger">
            {source}
            <span className="visually-hidden">Unread messages</span>
          </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://www.hindustantimes.com/ht-img/img/2024/04/19/1600x900/India_Flag_1713518778477_1713518820010.jpeg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />

        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              {" "}
              By {!author ? "Unknown" : author} on{" "}
              {new Date(publishedAt).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-dark"
          >
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
