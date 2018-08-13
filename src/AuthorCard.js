import React, { Component } from "react";
import AuthorsList from "./AuthorsList"

class AuthorCard extends Component {
  render() {
    const author= this.props.author;
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card" onClick= {()=> this.props.selectAuthor(author.id)}>
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={author.imageUrl}
              alt={author.first_name + " " + author.last_name}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{author.first_name + " " + author.last_name}</span>


            </h5>
            <small className="card-text">{author.books.length} books</small><br></br>

          </div>
        </div>
      </div>
    );
  }
}

export default AuthorCard;
