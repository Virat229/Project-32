const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var go;

var bg ;
var time;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    textSize(30)
    fill ("green");
    text ("Time : " + time + go,100,200);

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var ResponseJSON = await response.json();
    var IMG = ["sunrise1.png","sunrise2.png","sunrise3.png","sunrise4.png","sunrise5.png","sunrise6.png","sunset7.png",
"sunset8.png","sunset9.png","sunseet10.png","sunset11.png","sunset12.png"]
    var dateTime = ResponseJSON.datetime;
    var hour = dateTime.slice(11,13);
    go = dateTime.slice(13,16);
    console.log(dateTime);;
    //change the data in JSON format
    for(var i = 0;i < 10;i = i + 1){
    if(hour >=  i*3/2 + 6 && hour <=  i*3/2 + 7.5){
        bg = IMG[i]
    }
}
if(hour > 21 && hour > 22){
    bg = IMG[10]
}
if(hour < 6 && hour >= 22){
    bg = IMG[11]
}
     time = hour%12
    
    // write code slice the datetime
    backgroundImg = loadImage(bg);

    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
