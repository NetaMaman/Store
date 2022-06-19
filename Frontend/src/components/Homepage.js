import React from 'react'
import ReactPlayer from 'react-player'
import classes from './Homepage.module.css'


function Homepage(){
return (
//     <div>
//     <video loop autoPlay>
//       <source
//         src={video}
//         type="video/mp4"
//       />
//       Your browser does not support the video tag.
//     </video>
//   </div>

// Render a YouTube video player
<div className={classes.video}>
<ReactPlayer url='https://www.youtube.com/watch?v=9Oy0QJNPT3Y' playing loop/>
</div>

);  

}

export default Homepage;