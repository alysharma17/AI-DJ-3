soundtrack_1="";
soundtrack_2="";
function preload() {
    soundtrack_1=loadSound("music.mp3");
    soundtrack_2=loadSound("music2.mp3")
}
function setup() {
    video=createCapture(VIDEO);
    video.hide();
    canvas=createCanvas(800,600);
    canvas.center();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose',getResults);
}
function draw() {
    image(video, 0,0,800,600);
}
function getResults(results) {
    if (results.length>0) {
        console.log(results);
    }
}
function modelLoaded() {
    console.log("PoseNet Initialized");
}

function draw() {
    image(video, 0,0,800,600);
}





    

