import { Link } from "react-router-dom"
 
 function Signup(){
    
    return(
    <>
    
    <div className=" bg-gradient-to-br from-violet-500 to-blue-300 flex items-center justify-center min-h-screen p-6 md:">
        <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
     <form action="" className="space-y-3">
         <h1 className="font-extrabold text-3xl text-center text-gray-900 ">SignUp Page</h1>
         <p className="text-center text-gray-600 mb-4 font-light">Create an Account Real quick...</p>
    
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
             
         <div className="flex flex-col mb-4">
    
            <label htmlFor="re-password"
            className="text-xl mb-1">confirm Password</label>
            <input type="password" name="pass" id="pass" 
            placeholder="confirm the password"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
    
         </div>
      
         <div className=" flex flex-col gap-3">
           <button type="submit"
           className="bg-gradient-to-r from-blue-500 to-blue-600 text-white  font-bold px-4 py-3 rounded-lg transition-all mb-2.5  text-lg border-2 border-white hover:hover:from-blue-700 hover:to-blue-800">
            Register Now
           </button>
            <button type="submit"
            className=" border-2border-white px-4 py-3 rounded-lg bg-gray-200 hover:bg-gray-300  justify-center gap-2 text-lg transition-all">
                continue with Google <span><i class="fa-brands fa-google text-xl ml-1.5 "></i></span>
            </button>

            <div className="flex flex-col">
             <p className="text-center  ">Already Have an Account ? </p>
             <Link to="/login" className="text-center font-extrabold text-blue-600 ">Login Now</Link>
             </div>

         </div>
    
        </form>
     </div>
    </div>
    
    
    </>)
    }
    export default Signup