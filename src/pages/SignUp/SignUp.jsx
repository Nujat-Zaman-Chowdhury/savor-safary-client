import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const SignUp = () => {
    const {createUser,updateUserProfile,setUser} = useAuth()

    const navigate = useNavigate()
    const handleSubmit = async e =>{
        e.preventDefault();
        const form = e.target;
        const name= form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name,email,photo,password);
       try{
        const result = await createUser(email,password)

          await  updateUserProfile(name,photo)
          setUser({...result?.user, displayName:name, photoURL:photo})
          toast.success('Sign Up Successful')
          navigate('/')
                
                
       }
       catch(err){
        console.log(err);
        toast.error(err?.message)
        
       }


    }


    return (
        <div className="flex justify-center items-center">
			<div className="bg-[url('https://i.ibb.co/thHRrHj/signin-image.jpg')] bg-no-repeat w-96 h-96">

			</div>
            <div>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-base text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold text-[#121212]">Sign Up</h1>
		<p className="text-sm text-green-400 font-medium font-poppins">Sign up to access your account</p>
	</div>
	<form onSubmit={handleSubmit} className="space-y-6">
		<div className="space-y-4">
			<div>
				<label htmlFor="name" className="block mb-2 text-[#4c8435]">Name</label>
				<input type="text" name="name" placeholder="enter your name" className="w-full px-3 py-2 border border-[#61a146] rounded-md  bg-base text-[#61a146] focus:outline-none" />
			</div>
			<div>
				<label htmlFor="email" className="block mb-2 text-[#4c8435]">Email address</label>
				<input type="email" name="email" placeholder="example@gmail.com" className="w-full px-3 py-2 border border-[#61a146] rounded-md  bg-base text-[#61a146] focus:outline-none" />
			</div>
			<div>
				<label htmlFor="photo" className="block mb-2 text-[#4c8435]">Photo URL</label>
				<input type="text" name="photo" placeholder="photo url" className="w-full px-3 py-2 border border-[#61a146] rounded-md  bg-base text-[#61a146] focus:outline-none" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-[#4c8435]">Password</label>
					
				</div>
				<input type="password" name="password" placeholder="*****" className="w-full px-3 py-2 border border-[#61a146] rounded-md  bg-base text-[#61a146] focus:outline-none" />
			</div>
		</div>
		<div className="space-y-2">
            <input type="submit" value="Sign Up" className="w-full px-8 py-3 font-semibold rounded-md bg-green-500  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400" />
			<p className="px-6 text-sm text-center text-gray-400">Already have an account yet?
				<Link to="/login" rel="noopener noreferrer" className="hover:underline text-green-400 font-medium">Login</Link>.
			</p>
		</div>
	</form>
</div>
            </div>
        </div>
    );
};

export default SignUp;