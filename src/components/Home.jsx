import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useReactMediaRecorder } from 'react-media-recorder';

const Home = () => {
    const data = JSON.parse(localStorage.getItem("userData"))
    const navigate = useNavigate()
   
        const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({screen: true})

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
   
    return (
        <div>
            <div className="flex justify-center my-5">
                <h1 className=" text-4xl">Hello {data.name} ! </h1>
                <button type="submit" onClick={handleLogout} className="flex  justify-end rounded-md bg-primary-600 px-3 py-1.5 mx-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Logout</button>

            </div>
            <div>
                <div className="flex justify-center my-5">

                    <div>
                        <div> <p className="text-red-500 capitalize my-4 mx-3">{(status == 'idle') ? " " : status + "..."}</p>
                            <button onClick={startRecording} className="border-0 bg-green-600 text-slate-50 rounded p-2 mx-3">Start Recording</button>
                            <button onClick={stopRecording} className="border-0 bg-red-600 text-slate-50 rounded p-2 mx-3">Stop Recording</button></div>
                        <video className={`${mediaBlobUrl ? 'block' : 'hidden'} my-5`} src={mediaBlobUrl} width={500} height={500} controls autoPlay loop />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home