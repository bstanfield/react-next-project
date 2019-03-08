import Layout from '../components/Layout'
import "../styles.scss"
const R = require('ramda');

const generateMessages = (message) => (
    <p>{message}</p>
)

const Home = ({ custom }) => (
    <Layout>
       {R.map(generateMessages, custom.messages)} 
    </Layout>
)

Home.getInitialProps = ({pathname, query}) => ({        
    custom: {
        messages: [
            'Test message 1',
            'Test message 2',
            'Test message 3'
        ]
    }
});
  
export default Home