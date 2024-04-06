import viteImage from '../../public/vite.svg';
import { Link } from 'react-router-dom';
import { userContext } from '../utils/utilities';
import { useContext } from 'react';

export default function Header() {
    const { userName, setUserName } = useContext(userContext);
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

                    <li>
                        <label htmlFor="change-context"></label>
                        <input
                            onKeyDown={(e) => e.key === "Enter" && setUserName(e.target.value)}
                            style={{ padding: '0.4rem', border: 'none' }}
                            type="text"
                            placeholder='insert a name to display'
                            id="change-context" />
                    </li>
                    <li>{userName && userName}</li>
                </ul>
            </nav>
        </header>
    )
}