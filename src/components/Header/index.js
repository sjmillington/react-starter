import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

  const links = props.routes.map(route => {
    return (
      <li key={route.link}>
        <Link  to={route.link}>{route.label}</Link>
      </li>  
    )
  })

  return(
    <nav>
      <ul>
        {links}
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </nav>
  );
  
}

export default Header;