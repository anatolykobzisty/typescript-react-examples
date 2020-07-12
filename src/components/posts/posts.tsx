import React, { Component } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';


interface IPost {
  title?: string,
  id?: number,
}

type PostState = {
  data: IPost[],
};

interface IPosts extends RouteComponentProps {
  test?: number,
}

class Posts extends Component<IPosts, PostState> {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json() as Promise<IPost[]>)
      .then((data) => { this.setState({ data }); })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { data } = this.state;
    const { match } = this.props;
    console.log(match.params);

    return (
      <div>
        <h1>Posts:</h1>
        <ul className="posts">
          {data.map(({ id, title }: IPost) => <li key={id}><Link to={`/posts/${id || 'zero'}`}>{title}</Link></li>)}
        </ul>
      </div>
    );
  }
}

export default Posts;
