import styles from "./styles.module.css"
import React, { useState, useEffect, useRef } from "react";

const SRC = "https://v16-webapp.tiktok.com/cd0c38888696ac3f09866cbf75617f4d/6377f5b8/video/tos/useast2a/tos-useast2a-ve-0068c002/okLxsQz3IgAhCJDktCAoUDCfGAgw8zLNw9lIkB/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1338&bt=669&cs=0&ds=3&ft=nFApP0.N12NvjfpgVmnRf-N4HcEbIxVvYTIi9tU&mime_type=video_mp4&qs=0&rc=OTo0OTo0OWc4ZjZoOTk5NkBpamV1bDY6ZnIzZzMzNzczM0BiXjE0Nl9eNjIxMTAtYmMtYSNtYmxmcjRfYWRgLS1kMTZzcw%3D%3D&l=2022111815140601019205416104B53BC7&btag=80000"

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
 
  const handlePlay = () => {
    if (playing) {
      video.current.stop()
    } else {
      video.current.play()
    }

    setPlaying(!playing)
  }

  useEffect(() => {
    
  }, [])
  
  return (
    <div>
      <video
        // autoPlay
        // muted
        className={styles.video}
        src={SRC}
        controls={false}
        ref={video}>
      
        </video>
        <button
          // classNames={styles.player}
          className={styles.player}
          onClick={handlePlay}
          >
         </button>
    </div>
  
    );
}