//https://i.ibb.co/SND554L/login-img.jpg

import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

//https://i.ibb.co/thHRrHj/signin-image.jpg
const Login = () => {
    const {signIn,signInWithGoogle} = useAuth();
    const navigate = useNavigate();

    const handleSubmit =async e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        try{
            const result = await signIn(email,password)
            toast.success('Login Successful')
            navigate('/')
            console.log(result.user);
        
            }
            
            catch(err){
              console.log(err);
              toast.err(err?.message)
            }
    }

    const handleGoogleSignIn = async()=>{
        try{
          const result = await signInWithGoogle()
          toast.success('Login Successful')
          
        }
        catch(err){
          console.log(err);
          toast.err(err?.message)
        }
      }
    return (
        <div className="flex justify-center items-center">
            
            <div>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-base text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold text-[#121212]">Login In</h1>
		<p className="text-sm text-green-400 font-medium font-poppins">Login to access your account</p>
	</div>
	<form className="space-y-6" onSubmit={handleSubmit}>
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-[#4c8435]">Email address</label>
				<input type="email" name="email" placeholder="example@gmail.com" className="w-full px-3 py-2 border border-[#61a146] rounded-md  bg-base text-[#61a146] focus:outline-none" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-[#4c8435]">Password</label>
				</div>
				<input type="password" name="password" placeholder="*****" className="w-full px-3 py-2 border border-[#61a146] rounded-md  bg-base text-[#61a146] focus:outline-none" />
			</div>
		</div>
		<div className="space-y-2">
            <input type="submit" value="Login" className="w-full px-8 py-3 font-semibold rounded-md bg-green-500  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400" />
			<p className="px-6 text-sm text-center text-gray-400">Don't have an account yet?
				<Link to="/sign-up" rel="noopener noreferrer" className="hover:underline text-green-400 font-medium">Sign up</Link>.
			</p>
		</div>

        <div onClick={handleGoogleSignIn} className='flex cursor-pointer items-center justify-center mt-4 hover:underline text-green-400 font-medium border border-[#61a146] rounded-md'>
              <div className='px-4 py-2 '>
                <svg className='w-6 h-6' viewBox='0 0 40 40'>
                  <path
                    d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                    fill='#FFC107'
                  />
                  <path
                    d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                    fill='#FF3D00'
                  />
                  <path
                    d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                    fill='#4CAF50'
                  />
                  <path
                    d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                    fill='#1976D2'
                  />
                </svg>
              </div>
  
              <span className=' py-3 font-bold text-center'>
                Sign in with Google
              </span>
            </div>
	</form>
</div>
            </div>

            <div className="bg-[url('https://i.ibb.co/SND554L/login-img.jpg')] bg-no-repeat w-96 h-96">

            </div>
        </div>
    );
};

export default Login;