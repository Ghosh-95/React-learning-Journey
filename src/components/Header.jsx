import viteImage from '../../public/vite.svg';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <img src={viteImage} alt="" />
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/profile">Profile</Link>
                </ul>
            </nav>
        </header>
    )
}