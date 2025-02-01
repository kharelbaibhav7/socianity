import axios from "axios";
import { Eye, EyeOff, Lock, Mail, MessageSquare } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalVariableContext } from "../App";
import toast from "react-hot-toast";

const Login = () => {
    const [data, setData] = useState({})
    const [showPassword, setShowPassword] = useState(false);
    let navigate = useNavigate()
    let { token, setToken } = useContext(GlobalVariableContext)

    let handleData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let result = await axios.post("http://localhost:8000/api/users/login", data);
            localStorage.setItem("token", result.data.token);
            setToken(result.data.token)
            navigate("/")
            console.log(data)
            toast.success("Login Success")
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-background p-6">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8">
                <div className="text-center mb-8">
                    <div className="flex flex-col items-center gap-2 group">
                        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <MessageSquare className="size-6 text-primary" />
                        </div>
                        <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
                        <p className="text-base-content/60">Sign in to your account</p>
                    </div>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full pl-10 p-2 border rounded-md"
                                placeholder="you@example.com"
                                required
                                onChange={handleData}
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                className="w-full pl-10 pr-12 p-2 border rounded-md"
                                placeholder="••••••••"
                                required
                                onChange={handleData}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="size-5 text-muted-foreground" />
                                ) : (
                                    <Eye className="size-5 text-muted-foreground" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-2 bg-[#8798eb] text-white rounded-md hover:bg-[#5c74ed] transition-colors"
                    >
                        Login
                    </button>
                </form>

                {/* Registration Link */}
                <div className="text-center mt-6">
                    <p className="text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <a href="/register" className="text-primary hover:underline">
                            Create account
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;



// import axios from "axios";
// import { Eye, EyeOff, Lock, Mail } from "lucide-react";
// import React, { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { GlobalVariableContext } from "../App";

// const Login = () => {
//     const [data, setData] = useState({})
//     const [showPassword, setShowPassword] = useState(false);
//     let navigate = useNavigate()
//     let { token, setToken } = useContext(GlobalVariableContext)

//     let handleData = (e) => {
//         setData({
//             ...data,
//             [e.target.name]: e.target.value
//         })
//     }

//     let handleSubmit = async (e) => {
//         e.preventDefault()
//         try {
//             let result = await axios.post("http://localhost:8000/api/users/login", data);
//             localStorage.setItem("token", result.data.token);
//             setToken(result.data.token)
//             navigate("/")
//             console.log(data)
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
//     return (
//         <div className="h-screen-grid lg:grid-cols-2">

//             <div className="flex flex-col justify-center items-center p-6 sm:p-12">
//                 <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
//                 <p className="text-base-content/60">Sign in to your account</p>

//                 <form className="space-y-6" onSubmit={handleSubmit}>
//                     <div className="form-control">

//                         <label htmlFor="email" className="label">
//                             <span className="label-text font-medium">Email</span>
//                         </label>

//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                 <Mail className="h-5 w-5 text-base-content/40" />
//                             </div>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 className={`input input-bordered w-full pl-10`}
//                                 required
//                                 placeholder="you@example.com"
//                                 onChange={handleData}
//                             />
//                         </div>
//                     </div>

//                     <div className="form-control">
//                         {/* <label htmlFor="password">Password</label>
//                     <input type="password" id="password" name="password" placeholder="Enter your password" required onChange={handleData} /> */}
//                         <label className="label" htmlFor="password">
//                             <span className="label-text font-medium">Password</span>
//                         </label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                 <Lock className="h-5 w-5 text-base-content/40" />
//                             </div>
//                             <input
//                                 type={showPassword ? "text" : "password"}
//                                 id="password"
//                                 name="password"
//                                 className={`input input-bordered w-full pl-10`}
//                                 placeholder="••••••••"
//                                 required
//                                 onChange={handleData}
//                             />
//                             <button
//                                 type="button"
//                                 className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                                 onClick={() => setShowPassword(!showPassword)}
//                             >
//                                 {showPassword ? (
//                                     <EyeOff className="h-5 w-5 text-base-content/40" />
//                                 ) : (
//                                     <Eye className="h-5 w-5 text-base-content/40" />
//                                 )}
//                             </button>
//                         </div>
//                     </div>

//                     {/* <button type="submit">Login</button> */}
//                     <button type="submit" className="btn btn-primary w-full">
//                         Login
//                     </button>
//                 </form>

//                 <div className="text-center">
//                     <p className="text-base-content/60">
//                         Don&apos;t have an account?{" "}
//                         <Link to="/register" className="link link-primary">
//                             Create account
//                         </Link>
//                     </p>
//                 </div>
//             </div>

//         </div >
//     );
// };
// export default Login;
