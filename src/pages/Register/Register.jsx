import React, { useContext } from 'react';
import cartImage from '../../assets/images/registerCartImg.png'
import { AuthContext } from '../../components/Provider/AuthContext';


const Register = () => {
const {createUser, setUser} = useContext(AuthContext)

const handleRegister = (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log(email, password);
  createUser(email, password)
    .then(res =>{
      const user = res.user;
      setUser(user)
    })
    .catch(err => console.log(err));
}

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <img src={cartImage} alt="Shopping and Mobile" className="max-w-md w-full" />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-2xl font-semibold mb-6">Create an account</h2>
        <p className="mb-4 text-sm">Enter your details below</p>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            name='name'
          />
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full"
            name='email'
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            name='password'
          />
          <button className="btn btn-error w-full text-white">
            Create Account
          </button>
          <button type='submit' className="btn btn-outline w-full">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Already have account?{" "}
          <a href="#" className="text-blue-500 font-semibold">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
