import React, { Component, Fragment } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

import styles from "./Posts.module.css";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };
  }

  randomDate = () => {
    return new Date(
      "2019",
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10)
    ).toDateString();
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const from = Math.floor(Math.random() * 10);
        const to = from + 10;
        const fetchedPosts = res.data.slice(from, to).map((post) => ({
          ...post,
          createdAt: this.randomDate(),
        }));

        this.setState({
          posts: fetchedPosts,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
        console.log("Something wrong happened", error);
      });
  }

  render() {
    let posts = (
      <Card>
        <Spinner />
      </Card>
    );

    if (!this.state.loading) {
      if (this.state.posts.length) {
        posts = this.state.posts.map((post, index) => (
          <Link
            key={index}
            to={"/posts/" + post.id}
            className={styles.CardLink}
          >
            <Post
              title={post.title}
              content={post.body}
              author={post.author}
              createdAt={post.createdAt}
            />
          </Link>
        ));
      } else {
        posts = (
          <Card>
            <p>No posts available</p>
          </Card>
        );
      }
    }

    return <Fragment>{posts}</Fragment>;
  }
}

export default Posts;
