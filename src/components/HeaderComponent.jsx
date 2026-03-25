import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const HeaderComponent = () => {
  const navigate = useNavigate();
    return (
    <div>
        <header>
            <nav className='navbar navbar-dark bg-dark'>

<Link to="/employees" className='navbar-brand'>
Employee Managment System
</Link>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent