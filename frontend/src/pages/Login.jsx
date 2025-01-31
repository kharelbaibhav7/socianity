import axios from "axios";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalVariableContext } from "../App";

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
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className="h-screen-grid lg:grid-cols-2">

            <div className="flex flex-col justify-center items-center p-6 sm:p-12">
                <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
                <p className="text-base-content/60">Sign in to your account</p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="form-control">

                        <label htmlFor="email" className="label">
                            <span className="label-text font-medium">Email</span>
                        </label>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-base-content/40" />
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`input input-bordered w-full pl-10`}
                                required
                                placeholder="you@example.com"
                                onChange={handleData}
                            />
                        </div>
                    </div>

                    <div className="form-control">
                        {/* <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required onChange={handleData} /> */}
                        <label className="label" htmlFor="password">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-base-content/40" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                className={`input input-bordered w-full pl-10`}
                                placeholder="••••••••"
                                required
                                onChange={handleData}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5 text-base-content/40" />
                                ) : (
                                    <Eye className="h-5 w-5 text-base-content/40" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* <button type="submit">Login</button> */}
                    <button type="submit" className="btn btn-primary w-full">
                        Login
                    </button>
                </form>

                <div className="text-center">
                    <p className="text-base-content/60">
                        Don&apos;t have an account?{" "}
                        <Link to="/register" className="link link-primary">
                            Create account
                        </Link>
                    </p>
                </div>
            </div>

        </div >
    );
};
export default Login;
