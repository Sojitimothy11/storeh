import React from 'react'
import '../Navbar/navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <img
          src={
            "https://res.cloudinary.com/dxrxekidt/image/upload/v1693551879/36037093_348025832391235_3726168602143883264_n_m21yfe.jpg"
          }
          alt="logo"
          className="logo"
        />
        <Link to="Home" href="/Home/">
          Home
        </Link>
        <Link to="Services" href="/Services/">
          Services
        </Link>
        <Link to="Partner" href="/Partner/">
          Partnership
        </Link>
        <Link to="Updates" href="/Updates/">
          Updates
        </Link>
      </nav>
    </div>
  );
}

export default Navbar





