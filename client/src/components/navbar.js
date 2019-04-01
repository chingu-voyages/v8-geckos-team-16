
import React from 'react';


class Navbar extends React.Component {
  
  render() {
    return (
      <nav>
        <ul>
          <li><a href="/"> Home </a></li>
          <li><a href="/discover"> Discover </a></li>
        </ul>
      </nav>
    )
  }
}


export default Navbar;
