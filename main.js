song1="";
song2=""
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
song1_status=0;
song2_status=0;

function preload(){
    song1=loadSound("Theme_song.mp3");
    song2=loadSound("Lalisa.mp3");
}
function setup(){
    canvas=createCanvas(500,400);
    canvas.center()

   video=createCapture(VIDEO);
   video.hide();

   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results)
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        scoreRightWrist=results[0].pose.keypoints[10].score;

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    }
}
function modelLoaded(){
    console.log('PoseNet is Intialized')
}
function draw()
 { image(video, 0, 0, 600, 500); 

  song1_status = song1.isPlaying();

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX,leftWristY,20);
        song_2.stop();
        if(song1=false)
        {
            play.song1;
            document.getElementById("song_name").innerHTML="Lalisa";
        }
    }
    song1_status = song1.isPlaying();
    if(scoreRightWrist > 0.2)
    {
        circle(rightWristX,rightWristY,20);
        song_1.stop();
        if(song2=false)
        {
            play.song2;
            document.getElementById("song_name").innerHTML="Harry Potter Theme Song";
        }
    }
}
