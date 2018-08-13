import React, { Component } from "react";
//components
import BookData from "./BookData";

class AuthorDetail extends Component {
  render() {
    const author = this.props.currentAuthor;
    const books = author.books.map(book => (
      <BookData key={book.title} book={book} />
    ));

    return (
      <div className="author">
        <div>
          <h3>{author.first_name + " " + author.last_name}</h3>
          <img
            src={author.imageUrl}
            className="img-thumbnail img-fluid"
            alt={author.first_name + " " + author.last_name}
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{books}</tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
