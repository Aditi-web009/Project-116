lipX = 0;
lipY = 0;

function preload() { 
    lip_stick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
 function setup() { canvas = createCanvas(300, 300); canvas.center(); } 
function draw() { } 
function take_snapshot() { save('myFilterImage.png'); }


function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){

    if(results.length > 0)
    {
        console.log(results);
        console.log("lip x = " + results[0].pose.nose.x );
        console.log("lip y = " + results[0].pose.nose.y); 
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(lip_stick, lipX, lipY, 40, 40);
}