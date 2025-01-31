import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GlobalVariableContext } from "../App";
import { Eye, EyeOff, Lock, Mail, MessageSquare, User } from "lucide-react";
import AuthImagePattern from "../components/AuthImagePattern";


const Signup = () => {

    const [showPassword, setShowPassword] = useState(false)
    let [data, setData] = useState({})
    let { token, setToken } = useContext(GlobalVariableContext)
    let navigate = useNavigate()


    let handleData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let result = await axios.post("http://localhost:8000/api/users/", data);
            localStorage.setItem("token", result.data.token);
            setToken(result.data.token)
            console.log(result)
            navigate("/")

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            <div className="flex flex-col justify-center items-center p-6 sm:p-12">
                <div className='w-full max-w-md space-y-8'>


                    <div className="text-center mb-8">
                        <div className="flex flex-col items-center gap-2 group">
                            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center froup-hover:bg-primary/20 transition colors">
                                <MessageSquare className="size-6 text-primary" />
                            </div>

                            <h1 className="text-2xl font-bold mt-2">Create Account</h1>
                            <p className="text-base-content/60">Get started with your free account</p>
                        </div>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>

                        {/* Full Name section */}
                        <div className="form-control">
                            <label htmlFor="name" className="label">
                                <span className='label-text font-medium'>Full Name</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="size-5 text-base-content/40" />
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    name="fullName"
                                    className={`input input-bordered w-full pl-10`}
                                    placeholder='Elon Musk'
                                    onChange={handleData} />
                            </div>
                        </div>


                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="phoneNumber" placeholder="Enter your phone number" required onChange={handleData} />

                        {/*Phone section*/}


                        {/* Email section */}
                        <div className="form-control">
                            <label className="label" htmlFor="email">
                                <span className='label-text font-medium'>Email</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="size-5 text-base-content/40" />
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={`input input-bordered w-full pl-10`}
                                    placeholder='exaple@example.com'
                                    required
                                    onChange={handleData} />
                            </div>
                        </div>

                        {/* Password section */}
                        <div className="form-control">
                            <label className="label" htmlFor="[asswprd">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="size-5 text-base-content/40" />
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
                                        <EyeOff className="size-5 text-base-content/40" />
                                    ) : (
                                        <Eye className="size-5 text-base-content/40" />
                                    )}
                                </button>
                            </div>
                        </div>


                        <button type="submit">Sign Up</button>
                    </form>


                    <div className="text-center">
                        <p className="text-base-content/60">
                            Already have an account?{" "}
                            <Link to="/login" className="link link-primary">
                                Sign in
                            </Link>
                        </p>
                    </div>


                </div>
            </div>

            <AuthImagePattern
                title="Join our community"
                subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
            />
        </div>
    );
};
export default Signup;
