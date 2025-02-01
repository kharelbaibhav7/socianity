import React from 'react'

const HomePage = () => {
    return (
        <div className='pl-[2rem] min-h-screen relative'>

            {/* Socianity Big font text part */}
            <section className="middlePage">
                <div className="textContainer">
                    <h1 className="main_title font-bold text-[3rem]">Socianity</h1>
                    <h2 className="main_slogan text-[1.5rem]">Strengthening society, Uniting for Change</h2>
                    <div className="line h-[2px] w-[10vw] bg-emerald-400 mt-1"></div >
                </div>
                <button className='mt-[3rem] bg-amber-500 rounded-2xl p-2 text-2xl duration-250 hover:scale-110'>Register Now</button>
            </section>

            {/* Peoples */}
            <div className="poeplesContainer absolute right-7 top-[5vh]">
                <img src="../../images/HomePagePeople.png" alt="" className='max-h-[70vh] w-auto' />
            </div>


            {/* cards part */}
            <div className="gridContainer grid grid-cols-2 grid-rows-2 gap-7 columns-3xl w-[50vw] h-[45vh] mt-[6rem]">
                {/* Event box */}
                <div className="individualBoxContainer h-full w-full flex flex-col justify-center items-center border-2 border-white gap-[0.2rem] p-1 m-1 bg-white shadow-lg rounded-xl duration-250 hover:scale-110 scale:drop-shadow-xl">
                    <div className="imageContainer overflow-hidden">
                        <img src="../../images/EventsLogo.png" alt="" className="h-full w-auto grow" />
                    </div>
                    <p className='title font-semibold text-[1rem] text-center'>Events</p>
                    <p className="description text-[0.7rem] text-center">Join inspiring community events </p>
                </div>

                {/* Donations box  */}
                <div className="individualBoxContainer h-full w-full flex flex-col justify-center items-center border-2 border-white gap-[0.2rem] p-1 m-1 bg-white shadow-lg  rounded-xl duration-250 hover:scale-110">
                    <div className="imageContainer overflow-hidden">
                        <img src="../../images/DonationsLogo.png" alt="" className="h-full w-auto grow" />
                    </div>
                    <p className='title font-semibold text-[1rem] text-center'>Donations</p>
                    <p className="description text-[0.7rem] text-center">Make a donation to create an impact.</p>
                </div>

                {/* Contributions box  */}
                <div className="individualBoxContainer h-full w-full flex flex-col justify-center items-center border-2 border-white gap-[0.2rem] p-1 m-1 bg-white shadow-lg  rounded-xl duration-250 hover:scale-110">
                    <div className="imageContainer overflow-hidden">
                        <img src="../../images/ContributionsLogo.png" alt="" className="h-full w-auto grow" />
                    </div>
                    <p className='title font-semibold text-[1rem] sm:text-[0.8rem] text-center'>Contributions</p>
                    <p className="description text-[0.7rem] text-center">Read abbout the great social contributors.</p>
                </div>

                {/* Forum box  */}
                <div className="individualBoxContainer h-full w-full flex flex-col justify-center items-center border-2 border-white gap-[0.2rem] p-1 m-1 bg-white shadow-lg  rounded-xl duration-250 hover:scale-110">
                    <div className="imageContainer overflow-hidden">
                        <img src="../../images/ForumLogo.png" alt="" className="h-full w-auto grow" />
                    </div>
                    <p className='title font-semibold text-[1rem] text-center'>Forum</p>
                    <p className="description text-[0.7rem] text-center">Share your ideas and views for a stronger community.</p>
                </div>
            </div>

            <div className="lowerRightBigText_And_ButtonContainer absolute top-[75vh] right-0 w-[35vw] flex flex-col items-center justify-between">
                <p className="lowerRightBigText font-semibold text-[1.5rem]">
                    Earn rewards while making a dierence-Join us today!
                </p>
                <button className='mt-[1rem] bg-amber-500 rounded-2xl p-2 text-2xl duration-250 hover:scale-110'>Let's Get Started</button>
            </div>

            <div className="secondPageMainBox w-full h-[45vh] flex gap-[2rem] mt-[3rem] bg-white rounded-3xl justify-around align-center py-[1rem] px-[2rem]">
                
                    <div className="text_container flex flex-col justify-center items-left gap-[1rem]">
                        <p className='font-bold text-blue-400 text-[1.5rem]'>ABOUT US</p>
                        <p className='mainHeading text-[2.5rem] font-bold'>About socianity</p>
                        <p className='font-normal'>Socianity Is a community-driven platform that unites individuals and organizations to create positive change. Through collaboration, contribution and meaningful connections, we empower people to strengthen society and build a better future together</p>
                    </div>
               
                <img src="../../images/People.jpeg" alt="" className='rounded-sm scale-103'/>
            </div>

            <div className="BottomBigTextContainer border border-white p-2 mt-10 mx-auto flex flex-col gap-[0.85rem] justify-center items-center">
                <p className='text-[2rem] font-font-font-bold'>Ready to make a difference?</p>
                <p className='font-normal text-center w-[50%]'>Join socianity and become part of a thriving community dedicated to positive change. Whether you want to participate in meaningful events, contribute to impactful projects, donate to support causes, or engage in decisions discussions, there's a place for you here.</p>
                <button className='bg-blue-400 rounded-3xl py-3 px-9 border-none '>Join Now</button>
            </div>

        </div>
    )
}

export default HomePage