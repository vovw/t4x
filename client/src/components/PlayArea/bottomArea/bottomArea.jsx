import React, { useState, useRef, useEffect } from 'react'
import styles from "./bottomArea.module.css";
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"

const AudioPlayer = () => {
    // state
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    // references
    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();   // reference our progress bar
    const animationRef = useRef();  // reference the animation

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    const togglePlay = () => {
        // const prevValue = isPlaying;
        // setIsPlaying(!prevValue);
        // if (!prevValue) {
        //     audioPlayer.current.play();
        //     animationRef.current = requestAnimationFrame(whilePlaying)
        // } else {
        //     audioPlayer.current.pause();
        //     cancelAnimationFrame(animationRef.current);
        // }
        audioPlayer.current.play()
        setIsPlaying(true);
        animationRef.current = requestAnimationFrame(whilePlaying)
    }

    const togglePause = () => {
        audioPlayer.current.pause();
        setIsPlaying(false);
        cancelAnimationFrame(animationRef.current);
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value);
    }

    const backThirty = () => {
        progressBar.current.value = Number(progressBar.current.value - 5);
        changeRange();
    }

    const forwardThirty = () => {
        progressBar.current.value = Number(progressBar.current.value + 5);
        changeRange();
    }

    return (
        <div className={styles.audioPlayer + " flex flex-row justify-center items-center mt-20"}>
            <section className="flex flex-row justify-center items-center pewww gap-8 px-4 rounded-2xl" >
                <audio ref={audioPlayer} src="https://replicate.delivery/pbxt/FPpp2FjLbnpHGV0K0S7H9owPxVjoNbfW2xcIyAQb2LkF7aBJA/out.mp3" preload="metadata"></audio>
                <div className='flex flex-row justify-center gap-3'>
                    <button className={styles.forwardBackward} onClick={backThirty}><BsArrowLeftShort /> 5</button>
                    <button onClick={() => {
                        if (isPlaying) {
                            togglePause()
                        } else {
                            togglePlay()
                        }
                    }} className={styles.playPause}>
                        {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
                    </button>
                    <button className={styles.forwardBackward} onClick={forwardThirty}>5 <BsArrowRightShort /></button>
                </div>


                {/* current time */}
                <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

                {/* progress bar */}
                <div className='flex flex-row items-center'>
                    <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange} />
                </div>

                {/* duration */}
                <div className={styles.duration}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
            </section>
        </div>
    )
}
export { AudioPlayer }