noseX = 0;
noseY = 0;
function preload()
{
    eggman = loadImage('https://i.postimg.cc/0QWV4Wbj/egg-egg-man.jpg')
}
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('P O S E N E T  I S  I N I T A I L I Z E D');
}
function draw()
{
    image(video, 0, 0, 300, 300);
    image(eggman, noseX, noseY, 30, 30)
}
function take_snapshot()
{
    save('picturegobrrrrrrrrrrrrrrrrrr.png');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -15;
        noseY = results[0].pose.nose.y -15;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}