import viteImage from '../../public/vite.svg';
import { Link } from 'react-router-dom';
import { userContext } from '../utils/utilities';
import { useContext } from 'react';

export default function Header() {
    const user = useContext(userContext);
    return (
        <header>
            <nav>
                <img src={viteImage} alt="vite logo" />
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/profile">Profile</Link>
                </ul>
                <ul>
                    <li>{user && user}</li>
                </ul>
            </nav>
        </header>
    )
}