import React, { Component } from "react";
import axios from "axios";

import Card from "../../../components/Card/Card";
import Spinner from "../../../components/Spinner/Spinner";

class FullPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      loading: true,
    };
  }

  componentDidMount() {
    const postId = this.props.match.params.id;
    // console.log("post id", postId);
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then((res) => {
        let modifiedPostBody = "";
        for (let i = 0; i < 20; i++) {
          modifiedPostBody = modifiedPostBody + res.data.body;
        }
        const fetchedPost = {
          ...res.data,
          body: modifiedPostBody,
          createdAt: new Date(2019, 5, 17).toDateString(),
          author: "Lorem Ipsum",
        };

        this.setState({ post: fetchedPost, loading: false });
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
        console.log("Something wrong happened", error);
      });
  }

  render() {
    let content = <Spinner />;

    if (!this.state.loading) {
      if (this.state.post) {
        content = (
          <div>
            <h1>{this.state.post.title}</h1>
            <h3 style={{ textAlign: "left", color: "grey" }}>
              Created: {this.state.post.createdAt} | Author:{" "}
              {this.state.post.author}
            </h3>
            <p style={{ textAlign: "left" }}>{this.state.post.body}</p>
          </div>
        );
      } else {
        content = <p style={{ color: "red" }}>Something went wrong</p>;
      }
    }

    return <Card>{content}</Card>;
  }
}

export default FullPost;
