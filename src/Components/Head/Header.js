import React from 'react'
import './Header.css'
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <>
        <div className='cabezal'> 
          <div className='interior'> <text style={{boxSizing:'content-box',gap:'10px',margin:'3px'}}>C19 Arduino Control </text>  </div> 
          <SearchBar/>
        </div>
        
    </>
  )
}
export default Header;