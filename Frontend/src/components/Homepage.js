import React from 'react'
import ReactPlayer from 'react-player'
import classes from './Homepage.module.css'
import video from './resources/veggies_video.mp4'
import pic1 from './resources/banana.png'

// import { Player } from 'video-react';


function Homepage(){

return (
    <body className={classes.body}>
{/* <main className={classes.main}> */}
        <h1>Welcome to our site!</h1>
{/* <ReactPlayer url='https://www.youtube.com/watch?v=9Oy0QJNPT3Y' playing loop/> */}

<video width="800"  muted   preLoad="auto" autoPlay loop reverse playsInline >
        <source  className={classes.video} src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

<section>
    <h3>Why we are the best?</h3>
    <p>When it comes to eating more produce, you can't go wrong. Long story short: Every single fruit (and vegetable!) is a great option. Research has shown eating a minimum of four to five servings per day helps to boost mood and reduce your risk of heart disease, obesity and type 2 diabetes. Yet according to the Centers for Disease Control and Prevention (CDC), only 10% of Americans eat enough fruit — about 1½ to 2 cups daily. Many of us also miss out on sufficient dietary fiber, calcium, potassium and magnesium, all of which are found in abundance in produce. Potassium, for example, helps maintain a healthy blood pressure and you'll get it easily in bananas, prunes and cantaloupe. The fiber in fruit also supports better digestion and fills you up for fewer calories, making it a smart choice for your health overall and can help if you're trying to lose weight.

Whether you choose fresh or frozen, make it your goal to get more fruit into every meal. Sprinkle mixed berries into morning oatmeal or onto toast with nut butter, carry a banana or a bunch of grapes for a mid-afternoon snack, or toss avocado into a heart-healthy salad at dinner. No matter how you slice it, eating more fruit can benefit your body and your mind — starting with these ideas.</p>
<source src={pic1} width="100"></source>
</section>


{/* </main> */}
</body>
);  

}

export default Homepage;