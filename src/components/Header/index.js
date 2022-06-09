
import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className='logo' to="/"><b>Movies House</b></Link>
            <Link className='favorites' to="/favorites">Meus favoritos</Link>
        </header>
    )
}

export default Header;