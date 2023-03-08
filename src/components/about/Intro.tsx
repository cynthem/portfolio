import React from 'react';

function Intro() {
    return (
        <div className='intro' id='about'>
            <div className='about-header'>
                <p className='number'>01.</p>
                <h2>About</h2>
            </div>
            <div className='intro-details'>
                <p className='top-details'>After leaving an unfulfilling job in late 2021, I decided I to try something that had always intrigued me: learning how to code. I started with Python and after picking up the basics, I realized the hours flew by as I was deeply absorbed in the logic and problem solving of programming. I could honestly say I was passionate about coding and web development and that this was the professional spark that had been missing in my past positions.</p>
                <p>A year later, and with the help of resources like The Odin Project (and now AI!), I'd built dozens of websites and learned several languages and frameworks. I loved the process of creating a website as much as the satisfaction that came from a completed project. And now, I look forward to bringing that excitement to a team doing interesting work. In the meantime, I'll be tackling my project wish list and tinkering with new libraries.</p>
            </div>
        </div>
    );
}

export default Intro;