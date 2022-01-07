import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <div className="navbar">
        <Link to='/' className='navbar-brand'>Bunny Likes Mustard</Link>
        <Link to='/feeding' className='navbar-link'>Feeding</Link>
      </div>
    );
  }
  
  export default Navigation;