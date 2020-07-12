import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

type RouteParams = {
  id: string,
};

interface IPost {
  title?: string,
  body?: string,
}

type PostState = {
  post: IPost,
};

class Post extends Component<RouteComponentProps<RouteParams>, PostState> {
  state = {
    post: {
      title: '',
      body: '',
    },
  };

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id || '';

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((post) => { this.setState({ post }); })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { post } = this.state;
    const { title, body } = post;

    return (
      <section>
        <h1>Post</h1>
        <article>
          <h2>{title}</h2>
          <p>{body}</p>
        </article>
      </section>
    );
  }
}

export default Post;
