import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GlobalVariableContext } from "../App";
import { Eye, EyeOff, Lock, Mail, MessageSquare, User } from "lucide-react";


const Signup = () => {

    const [showPassword, setShowPassword] = useState(false)
    let [data, setData] = useState({})
    let { token, setToken } = useContext(GlobalVariableContext)
    let navigate = useNavigate()


    const handleData = (e) => {
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-background p-6">
            <div className="w-full max-w-md shadow-2xl rounded-lg bg-white p-8">
                <div className="text-center">
                    <div className="flex justify-center mb-4">
                        <div className="size-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <MessageSquare className="size-8 text-primary" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-2">Create Account</h2>
                    <p className="text-muted-foreground mb-6">
                        Get started with your free account
                    </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Full Name Input */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                            <input
                                type="text"
                                id="name"
                                name="fullName"
                                placeholder="Elon Musk"
                                className="w-full pl-10 p-2 border rounded-md"
                                required
                                onChange={handleData}
                            />
                        </div>
                    </div>

                    {/* Phone Input */}
                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                            <input
                                type="tel"
                                id="phone"
                                name="phoneNumber"
                                placeholder="Enter your phone number"
                                className="w-full pl-10 p-2 border rounded-md"
                                required
                                onChange={handleData}
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@example.com"
                                className="w-full pl-10 p-2 border rounded-md"
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
                                placeholder="••••••••"
                                className="w-full pl-10 pr-12 p-2 border rounded-md"
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
                        className="w-full p-2 bg-[#eba06b] text-white rounded-md hover:bg-[#ee7f30] transition-colors"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Login Link */}
                <div className="text-center mt-6">
                    <p className="text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <a href="/login" className="text-primary hover:underline">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;