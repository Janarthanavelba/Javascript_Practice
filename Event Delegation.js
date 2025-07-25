Event Delegation is a technique where you:

Attach a single event listener to a parent element

That listener watches for events from its child elements

You then use event.target to identify which child was actually clicked

//HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./video.css">
    <script defer src="./array1.js"></script>
</head>
<body>
    
        <div id="parent">
            
                <video id="vdo" width="700" height="400" src="./AQN1ncxvU52XObu8Fwbdlc8Ovrh_QdjCECunMrYmxZx8Y-ZaiVP1w9gSjFvHSHhE35Dxsl4SFuSUHubuLUorl0Hw.mp4"></video>
               <div id="control">
                 <button id="play">play</button>
                <button id="pause">pause</button>
                <button id="createNewBtn">Create New Button</button>
               </div>
        </div>
    
</body>
</html>

//CSS
#parent
{
    width: 800px;
    height: 500px;
    border: solid 2px;
    margin-left: 25%;
    margin-top: 5%;
}
video
{
    margin-left: 48px;
    margin-top: 20px;
}

//JavaScript
const parent=document.getElementById("parent");
const play=document.getElementById("play");
const pause=document.getElementById("pause");
const control=document.getElementById("control");
const creNew=document.getElementById("createNewBtn");
const vdo=document.getElementById("vdo");


parent.addEventListener('click',(event)=>
{
    if(event.target.id==='play') vdo.play();
    else if(event.target.id==='pause') vdo.pause();
    else if(event.target.id==='createNewBtn')
    {
    const mute=document.createElement('button');
    mute.innerText="Mute";
    mute.setAttribute('id','mute');
    control.appendChild(mute);
    }
    else if(event.target.id==='mute') 
        {
            if(vdo.muted === true) 
               {
                mute.innerText="mute";
                 vdo.muted = false;
               }
            else 
            {
                 mute.innerText="unmute";
                vdo.muted = true;
            }
        }
})

