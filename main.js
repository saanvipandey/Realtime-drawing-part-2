function setup()
{
    video = createCapture(VIDEO);
    video.size(530, 450);
    video.position(20, 100);

    canvas = createCanvas(550, 350);
    canvas.position(570, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function draw()
{
    background('#FFC0CB');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}