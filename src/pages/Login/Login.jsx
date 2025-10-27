import React, { useContext, useState } from 'react';
import cartImage from '../../assets/images/registerCartImg.png'
import { AuthContext } from '../../components/Provider/AuthContext';
import Swal from 'sweetalert2';
import { FaEye } from 'react-icons/fa6';
import { IoEyeOff } from 'react-icons/io5';
import { Link } from 'react-router';

const Login = () => {
  const { logIn, setUser, googleSignIn } = useContext(AuthContext)
  const [show, setShow] = useState(false)
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    logIn(email, password)
      .then(res => {
        const user = res.user;
        setUser(user)
        Swal.fire({
          icon: 'success',
          title: 'Log in successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset()
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Registration failed',
          text: err.message,
        });
      });
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(res => {
        setUser(res.user)
        Swal.fire({
          icon: 'success',
          title: 'Google sign-in successful!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
      )
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Google sign-in failed',
          text: err.message,
        });
      })
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <img src={cartImage} alt="Shopping and Mobile" className="max-w-md w-full" />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-2xl font-semibold mb-6">Log in your account</h2>
        <p className="mb-4 text-sm">Enter your details below</p>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="input input-bordered w-full" name='name' />
          <input type="text" placeholder="Email" className="input input-bordered w-full" name='email'
          />
          <div className='relative' >
            <input type={`${show ? 'text' : 'password'}`} placeholder="Password" className="input input-bordered w-full " name='password' />
            <span onClick={()=> setShow(!show)} className='absolute top-2.5 right-3 text-black cursor-pointer z-50'>{show? <FaEye></FaEye> : <IoEyeOff></IoEyeOff>}</span>
          </div>

          <button className="btn btn-error w-full text-white">
            Log In
          </button>
          <button onClick={handleGoogleSignIn} type='submit' className="btn btn-outline w-full">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          You don't have an account?{" "}
          <Link to={'/register'} className="text-blue-500 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
