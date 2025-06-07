import React from 'react';
const Navbar = () => {
  return (
    <nav className="navbar">
        <div>
            <h1>Portfolio</h1>
        </div>
        <div className='navButton'>
            <button id='signIn'>
                <i class="bi bi-lightbulb"></i>
            </button>
            <button id='getStarted'>
                <i className="bi bi-person-circle"></i>
            </button>
        </div>
      
    </nav>
  );
}
export default Navbar;