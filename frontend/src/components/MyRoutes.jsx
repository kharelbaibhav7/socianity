import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import EventsPage from "../pages/Event/EventsPage";
import SpecificEventPage from "../pages/Event/SpecificEventPage";
import Fundraisings from "../pages/Fundraising/Fundraisings";
import SpecificFundraisings from "../pages/Fundraising/SpecificFundraisings";
import HomePage from "../pages/HomePage";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { GlobalVariableContext } from "../App";
import Logout from "../pages/Logout";
import PostPage from "../pages/PostPage";
import AddEventForm from "../pages/Event/AddEventForm";


// import SpecificEventPage from "../pages/SpecificEventPage";
// import Fundraisings from "../pages/Fundraisings";
// import SpecificFundraisings from "../pages/SpecificFundraisings";
// import Signup from "./Signup";
// import Login from "./Login";


const MyRoutes = () => {

    //   let { token, setToken } = useContext(GlobalVariableContext)
    let { token, setToken } = useContext(GlobalVariableContext)


    return (
        <div>
            <Routes>
                {
                    token ?
                        <>
                            <Route index element={<HomePage></HomePage>}></Route>
                            <Route
                                path="events"
                                element={<EventsPage></EventsPage>}
                            ></Route>
                            <Route
                                path="events/:id"
                                element={<SpecificEventPage></SpecificEventPage>}
                            ></Route>
                            <Route
                                path="fundraisings"
                                element={<Fundraisings></Fundraisings>}
                            ></Route>
                            <Route
                                path="fundraisings/:id"
                                element={<SpecificFundraisings></SpecificFundraisings>}
                            ></Route>
                            <Route
                                path="post"
                                element={<PostPage></PostPage>}
                            ></Route>

                            <Route path="logout" element={<Logout></Logout>}>

                            </Route>

                            <Route path="post/event" element={<AddEventForm></AddEventForm>}>
                            </Route>

                            <Route path="post/fundraisings" element={<AddEventForm></AddEventForm>}>
                            </Route>


                            <Route path="*" element={<div>404 PAGE</div>}></Route>

                        </>
                        :
                        <>
                            <Route index element={<HomePage></HomePage>}></Route>
                            <Route
                                path="register"
                                element={<Signup></Signup>}
                            ></Route>
                            <Route
                                path="login"
                                element={<Login></Login>}
                            ></Route>


                            <Route path="*" element={<div>404 PAGE</div>}></Route>
                        </>
                }

            </Routes>
        </div>
    );
};

export default MyRoutes;
