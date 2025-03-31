 import { Link } from "react-router-dom"
 function Login(){
    
    return(
    <>
    
    <div className=" bg-blue-500 flex items-center justify-center min-h-screen p-6 md:">
        <div className="bg-white p-6 rounded-lg shadow-xl w-96 ">
     <form action="" className="space-y-3">
         <h1 className="font-extrabold text-3xl text-center text-gray-900 ">Login Page</h1>
         <p className="text-center text-gray-600 mb-4 font-light">Dive into Your Account...</p>
    
        <div className="flex flex-col ">
            <label htmlFor="user"
            className="text-xl mb-1 text-gray-900">Username </label>
            <input type="text"  name="user" id="user"
            placeholder="enter the username" 
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"  />
    
         </div>
    
         <div className="flex flex-col mb-4">
    
            <label htmlFor="password"
            className="text-xl mb-1">Password</label>
            <input type="password" name="pass" id="pass" 
            placeholder="enter the password"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
    
         </div>
             
         <div className=" flex flex-col gap-3">
           <button type="submit"
           className="bg-blue-500 text-white px-4 py-3 rounded-lg transition-all mb-2.5  text-lg border-2 border-white hover:bg-blue-600">
            Login
           </button>
            <button type="submit"
            className=" border-2border-white px-4 py-3 rounded-lg bg-gray-200 hover:bg-gray-300  justify-center gap-2 text-lg transition-all">
                continue with Google <span><i class="fa-brands fa-google text-xl ml-1.5"></i></span>
            </button>

            <div className="flex flex-col">
             <p className="text-center  ">Don't Have an Account ? </p>
            <Link to='/Signup'> <p className="text-center font-semibold text-red-700 ">Register Now</p></Link>
             </div>
             
         </div>
    
        </form>
     </div>
    </div>
    
    
    </>)
    }
    export default Login