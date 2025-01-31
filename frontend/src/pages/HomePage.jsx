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
                <div className="individualBoxContainer">
                    
                </div>
            </div>


            {/* <button className="main_button">Get Started</button> */}

        </div>
    )
}

export default HomePage