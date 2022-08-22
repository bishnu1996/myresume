import Typography from '../Typography';
import { Link } from 'react-router-dom';
import './style.css';

const MobileNavbar = () => {
  return (
    <nav className='app-mobile-nav'>
      <ul>
        <li>
          <Typography type='H5' className='menu-font text-black'>
           <Link to='/'> Home</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            <Link to='about-us'>About Us</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
          <Link to='our-work'> Our Work</Link> 
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
           <Link to='clients'> Clients</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            <Link to='our-blogs'>Our Blog</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
          <Link to='contact-us'>Contact Us</Link> 
          </Typography>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
