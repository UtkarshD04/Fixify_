import logo from '../assets/logo-png.png'
import axios from 'axios'
import { Link , useNavigate} from 'react-router-dom'
import { useState, useContext } from 'react';
import { UserDataContext } from '../context/UserContext';
const Usersignup = () => {
  const [Firstname, setFirstname] = useState('')
  const [Lastname, setLastname] = useState('')
  const [Password, setPassword] = useState('')
  const [Email, setMail] = useState('')
 
  const navigate = useNavigate()

  const userContext = useContext(UserDataContext);
  const setUser = userContext && userContext.setUser ? userContext.setUser : () => {};
const submitHandler = async (e) => {
  e.preventDefault()
const newUser = {
  fullname: {
    firstname: Firstname,
    lastname: Lastname
  },
  email: Email,
  password: Password
}

try {
  const response = await axios.post(
   `${import.meta.env.VITE_BASE_URL}/users/register`,
    newUser
  );
  if (response.status === 201) {
    const data = response.data;

    setUser(data.user);
    localStorage.setItem('token', data.token);
    navigate('/home');
  }
} catch (error) {
  console.error('Signup error:', error);
  alert(
    error.response && error.response.status === 404
      ? 'Signup endpoint not found. Please check your API URL and backend server.'
      : 'Signup failed. Please try again.'
  );
}
setFirstname('');
setLastname('');
setMail('');
setPassword('');
}

  
  return (
    <div className='h-screen  justify-center w-full'>
     <img className='w-20 h-15 mb-3 mb-' src={logo} alt="Logo" />  
 <div className='  '>
 <form onSubmit={(e) => {submitHandler(e)}}>
  <h3 className='text-base  font-medium m-2'>Enter your name</h3>
<div className= ' flex mb-6 gap-4'> 
  <input 
  value={Firstname}
  onChange={(e) => setFirstname(e.target.value)}
  type="text" placeholder='lastname'  className='bg-[#eeee] rounded px-4 py-2 border border-amber-50 w-1/2 
            text-lg placeholder:text-base'/>
  <input 
   value={Lastname}
  onChange={(e) => setLastname(e.target.value)}
  type="text"  placeholder='firstname'  className='bg-[#eeee]
   rounded px-4 py-2 border border-amber-50 w-1/2 
            text-lg placeholder:text-base'/>
</div>
  <h3 className='text-base font-medium m-2'>Enter your email</h3>
  <input
   value={Email}
  onChange={(e) => setMail(e.target.value)}
            required
            className='bg-[#eeee] mb-5 rounded px-4 py-2 border border-amber-50 w-full text-lg placeholder:text-base'
            type='email'
          placeholder='email@example.com' />
            <h3 className='text-base font-medium mb-2'>Enter Password</h3>
          <input

           value={Password}
  onChange={(e) => setPassword(e.target.value)}
            required
            className='bg-[#eeee] mb-5 rounded px-4 py-2 border border-amber-50 w-full text-lg placeholder:text-base'
            type='password'
          
            placeholder='password'
          />
          <button className='font-semibold mb-3 h-8 rounded px-4 w-full text-lg bg-[#111] text-white placeholder:text-base'>
          User Sign Up
          </button>
 </form>
   <p className='text-center pb-5'>
           Already have an account? <Link to='/login' className='text-blue-600'>Login</Link>
        </p>


   <p className='w-full flex mt-10 justify-center h-8 bg-green-600 rounded'> <Link to='/utility-signup' className='font-semibold mb-3 h-8 rounded px-4   text-lg bg-green-600 text-white placeholder:text-base'>Sigup as a Career</Link> </p>   
 </div>
    </div>
  )
}

export default Usersignup