import './navbar.css'

const Navbar = () => {
  return (
    <header>
        <div className="left">
            <i className='bx bx-menu'></i>
            <h3>Uber <strong>Eats</strong></h3>
        </div>
        <div className="right">
            <button className='login'><i className='bx bxs-user'></i> Log in</button>
            <button className='signup'>Sign up</button>
        </div>
    </header>
  )
}

export default Navbar