
import '../stylesheet/Home.css';
import { useNavigate } from 'react-router-dom';

//TODO: LOGIN SHOULD BE HASHED 

function Home() {

  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  if (!token) {
    alert('You must dbe logged in to access this page');
    window.location.href = "/login";

     // Corrected navigation path
  }

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    alert('Logout successful');
    navigate('/'); 
  };


  return (
    <div>
      <nav className='navbar'>
          <div className='navbar-title'>
            <h1>Sivashan's Local Cloud</h1>
          </div>
          <div className='navbar-links'>
          <a href="#" onClick={handleLogout}>Logout</a>
          </div>
      </nav>
     
    <div>
      <h1>Home</h1>
    </div>
    <footer>
      <div>
        <p>Footer</p>
      </div>
    </footer>
    </div>

    
   
  );
}

export default Home;