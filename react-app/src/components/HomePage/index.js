// Imports
import { getVideos } from '../../store/video'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import "./HomePage.css";

// {setResults}
function HomePage() {
    // Data being pulled from store
    const videos = useSelector(state => state.video)

    // Variables
    const dispatch = useDispatch()
    // const history = useHistory()

    useEffect(() => {
        dispatch(getVideos())
        // {console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%', videos)}
    }, [dispatch])

    return (
        <>
            <div>
                {/* <button onClick={() => {console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%', videos)}}>poop</button> */}
            </div>
        </>
    )
}


export default HomePage