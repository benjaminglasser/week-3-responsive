import React from 'react';
// import { useEffect, useState } from 'react'

function Dogs(props) {


    if (props.isLoading) {
        return <div>Loading pups :)</div>
    }

    return (
        <>

            {
                props.dogs[0].message.map((d, idx) =>
                    <div key={idx} className="crazyBorder shadow-md flex flex-col items-center justify-center mb-4 rounded-3xl md:block " >
                        <img className="shadow-md p-2 object-contain w-full h-full rounded-3xl " src={d} key={idx} alt={idx} />
                        {/* <div className="rounded hover:bg-auto bg-cover bg-center" style={{ backgroundImage: `url(${d})` }}></div> */}
                    </div>
                )
            }
        </>
    )
}



export default Dogs;
