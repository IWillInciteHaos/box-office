import {Link} from 'react-router-dom';

const Home = () => {
    return <div>
        <div>Hello from Home</div>
        <Link to="/starred">Starred</Link>
    </div>
}

export default Home;