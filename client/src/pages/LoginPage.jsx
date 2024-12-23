import { useState } from "react";
import { Link } from "react-router-dom";
// import useLogin from "../hooks/useLogin";

const Login = () => {
	const [input, setInput] = useState({
		username: "",
		password: ""
	})
    let loading = false;
	// const {loading, login} = useLogin()

	const handleSubmitForm = (e) =>{
		e.preventDefault()
		// login(input)
	}

	return (
		<div className='w-1/2 mt-6 flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center'>
					Login for Doctors
					{/* <span className='text-blue-500'> </span> */}
				</h1>

				<form onSubmit={handleSubmitForm}>
					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10 pl-4'
						value={input.username} 
						onChange={(e) => setInput({...input, username: e.target.value})} />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10 pl-4'
							value={input.password} 
							onChange={(e) => setInput({...input, password: e.target.value})} 
						/>
					</div>
					<Link
						to='/signup'
						className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'
					>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 bg-blue-500 p-2 rounded-md font-semibold' disabled={loading}>{loading  ? "Loading...":"Login"}</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
