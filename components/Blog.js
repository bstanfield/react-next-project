import "../styles.scss"
import React from 'react'
import * as contentful from 'contentful'

class Blog extends React.Component {
  state = {
    posts: []
  }

  client = contentful.createClient({
    space: 'v2in5shq8fym',
    accessToken: '8662779ef9ee85da958deb67a4adad67a6868da968ff3e38ac88ee2ffaca9f77' })

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries()

  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

  render() {
    return (
      <div>
        <h1>This is the Blog Page</h1>
        <br/>
        { this.state.posts.map(({fields}, i) =>
          <pre key={i}><code>{JSON.stringify(fields, null, 2)}</code></pre>
        )}
      </div>
    )
  }
};

export default Blog