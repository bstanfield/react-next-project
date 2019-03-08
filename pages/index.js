import Link from "next/link";
import Layout from '../components/Layout'
import "../styles.scss"

class Home extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        welcome: 'Welcome to the show!'
    };
    }

    render() {
        return( 
            <Layout>
                <p>{ this.state.welcome }</p>
            </Layout>
        ) 
    }
  }
  
  export default Home