import Layout from '../components/Layout'
import "../styles.scss"
const R = require('ramda');

const generateMessages = (message) => (
    <p>{message}</p>
)

const About = ({ custom }) => (
    <Layout>
        <p>This is the { custom.pageName } page.</p>
    </Layout>
)

About.getInitialProps = ({pathname, query}) => ({        
    custom: {
        pageName: 'About'
    }
});
  
export default About