import React, { Component } from "react";
import axios from "axios";

// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      loading: true,
      currentAuthor: {}
    };

    this.selectAuthor = this.selectAuthor.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://the-index-api.herokuapp.com/api/authors/")
      .then(res => res.data)
      .then(authors => this.setState({ authors, loading: false }))
      .catch(err => console.error(err));
  }

  selectAuthor(id) {
    this.setState({ loading: true });
    console.log(id);
    axios
      .get(`https://the-index-api.herokuapp.com/api/authors/${id}`)
      .then(res => res.data)
      .then(authors =>
        this.setState({ currentAuthor: authors, loading: false })
      )
      .catch(err => console.error(err));
  }

  unselectAuthor() {
    this.setState({
      currentAuthor: {}
    });
  }

  getContentView() {
    if (this.state.loading) {
      return <Loading />;
    } else if (
      this.state.currentAuthor.id &&
      this.state.currentAuthor.first_name
    ) {
      return <AuthorDetail currentAuthor={this.state.currentAuthor} />;
    } else {
      return (
        <AuthorsList
          authors={this.state.authors}
          selectAuthor={this.selectAuthor}
        />
      );
    }
  }
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar AuthorsList={this.state.AuthorsList} />
          </div>
          <div className="content col-10">{this.getContentView()}</div>
        </div>
      </div>
    );
  }
}

export default App;
