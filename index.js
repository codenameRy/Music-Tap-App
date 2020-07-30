window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "rgb(109, 255, 109)",
        "rgb(255, 128, 128)",
        "rgb(0, 255, 221)",
        "rgb(85, 85, 255)",
        "rgb(246, 147, 255)",
        "rgb(252, 255, 66)"
    ]

    console.log(sounds[0])

    //Sound Event Listeners
    pads.forEach ((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            
            createBubbles(index);
        });
    });

    //Function that adds bubble effects

    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this)
        })
    }
});