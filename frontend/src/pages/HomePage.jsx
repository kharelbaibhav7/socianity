import React from 'react'

const HomePage = () => {
    return (
        <div className='pl-[2rem] min-h-screen relative'>
            <section className="middlePage">
                <div className="textContainer">
                    <h1 className="main_title bold text-[3rem]">Socianity</h1>
                    <h2 className="main_slogan text-[1.5rem]">Strengthning for society, Uniting for Change</h2>
                    <div className="line h-[2px] w-[10vw] bg-emerald-400 mt-1"></div >
                </div>
                <button className='mt-[3rem] bg-amber-500 rounded-2xl p-2 text-2xl'>Register Now</button>
            </section>

            <div className="gridContainer grid grid-cols-2 grid-rows-2 gap-3 w-[25vw] h-[35vh] mt-[7rem]">
                {/* Event box */}
                <div className="individualBoxContainer h-full w-full flex flex-col justify-center items-center border-2 border-white gap-[0.2rem] p-1 m-1 bg-white box-shadow: var(--shadow-lg) rounded-xl">
                    <div className="imageContainer overflow-hidden">
                        <img src="../../images/EventsLogo.png" alt="" className="h-full w-auto grow"/>
                    </div>
                    <p className='title bold text-[1rem] text-center'>Events</p>
                    <p className="description text-[0.6rem] text-center">Join inspiring community events </p>
                </div>

               {/* Donations box  */}
               <div className="individualBoxContainer h-full w-full flex flex-col justify-center items-center border-2 border-white gap-[0.2rem] p-1 m-1 bg-white box-shadow: var(--shadow-lg) rounded-xl">
                    <div className="imageContainer overflow-hidden">
                        <img src="../../images/DonationsLogo.png" alt="" className="h-full w-auto grow"/>
                    </div>
                    <p className='title bold text-[1rem] text-center'>Donations</p>
                    <p className="description text-[0.6rem] text-center">Make a donation to create an impact.</p>
                </div>

                {/* Contributions box  */}
               <div className="individualBoxContainer h-full w-full flex flex-col justify-center items-center border-2 border-white gap-[0.2rem] p-1 m-1 bg-white box-shadow: var(--shadow-lg) rounded-xl">
                    <div className="imageContainer overflow-hidden">
                        <img src="../../images/ContributionsLogo.png" alt="" className="h-full w-auto grow"/>
                    </div>
                    <p className='title bold text-[1rem] sm:text-[0.8rem] text-center'>Contributions</p>
                    <p className="description text-[0.6rem] text-center">Read abbout the great social contributors.</p>
                </div>

                {/* Forum box  */}
               <div className="individualBoxContainer h-full w-full flex flex-col justify-center items-center border-2 border-white gap-[0.2rem] p-1 m-1 bg-white box-shadow: var(--shadow-lg) rounded-xl">
                    <div className="imageContainer overflow-hidden">
                        <img src="../../images/ForumLogo.png" alt="" className="h-full w-auto grow"/>
                    </div>
                    <p className='title bold text-[1rem] text-center'>Forum</p>
                    <p className="description text-[0.6rem] text-center">Share your ideas and views for a stronger community.</p>
                </div>
            </div>








            {/* <button className="main_button">Get Started</button> */}
            <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-orange-500 to-white z-[-1]">
            </div>
        </div>
    )
}

export default HomePage