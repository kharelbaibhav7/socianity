import React from 'react'

const HomePage = () => {
    return (
        <div className='pl-[2rem]'>
            <section className="middlePage">
                <div className="textContainer">
                    <h1 className="main_title bold text-[3rem]">Socianity</h1>
                    <h2 className="main_slogan text-[1.5rem]">Strengthning for society, Uniting for Change</h2>
                    <div className="line h-[2px] w-[10vw] bg-emerald-400 mt-1"></div >
                </div>
                <button className='mt-[3rem] bg-amber-500 rounded-2xl p-2 text-2xl'>Register Now</button>
            </section>

            <div className="gridContainer">
                <div className="individualBoxContainer h-[20vh] w-[25vw] flex flex-col justify-center items-center border-2 border-white gap-[0.2rem] p-1 m-1">
                    <div className="imageContainer overflow-hidden">
                        <img src="../../images/logo.jpeg" alt="" className="h-full w-auto rounded-[100%] grow"/>
                    </div>
                    <p className='title bold text-[1rem] text-center'>Events</p>
                    <p className="description text-[0.7rem] text-center">Join inspiring events and connect with the community in meaningful ways.</p>
                </div>
            </div>


            {/* <button className="main_button">Get Started</button> */}

        </div>
    )
}

export default HomePage