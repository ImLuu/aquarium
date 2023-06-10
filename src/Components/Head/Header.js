import React from 'react'
import './Header.css'
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <>
        <div className='cabezal'> 
          <div className='interior' >C19 Arduino Control</div> 
          <SearchBar/>
        </div>
        
    </>
  )
}
export default Header;