//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;


//Create variables here
var dog,happyDog,dogImg;
var database;
var food,foodObject;
//var engine,world,matter;
var milk,foodStock;
var feed,addFood;
var feedTime,lastFed;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");

  happyDog = loadImage("images/dogImg1.png");

  
  
}

function setup() 
{
  createCanvas(1000,500 );

  //engine = Engine.create();
	//world = engine.world;

  //feedTime=database.ref('FeedTime');
  //feedTime.on("value",function(data){
    //lastFed=data.val();
  //});
  
 foodObject = new Food();
  

    

   
  feed = createButton("feed the dog");
  feed.position(700,85);
  feed.mousePressed(foodFed);

  addFood = createButton("Add Food");
  addFood.position(800,85);
  addFood.mousePressed(addFoods);

  database = firebase.database();

  foodStock = database.ref('food');
  foodStock.on("value",readStock);

  dog = createSprite(600,350,5,5);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  
  //Engine.run(engine);
}


function draw() 
{
  background(46,139,87);

  fill(255,255,254);
  textSize(15);
  text("last fed : 10:45",220,50);
 
  foodObject.display();
 
  drawSprites();
  //add styles here
  textSize(20);
  fill("black");
  stroke("black");
  text("Food Remaining : "+food,100,200);
  text("Note : press UP_ARROW to feed the puppy!",50,20);

}
function addFoods()
{
  food=food+1;
  database.ref('/').update({
    Food:foodS
  })
}
function foodFed()
{
  dog.addImage(happyDog);
  food=food-1;
  milk.updateFoodStock(milk,getFoodStock()-1);
  database.ref('/').update({
    food:milk.getFoodStock()-1,
    //feedTime:hour()
  })
}
function readStock(data)
{
  food = data.val();
}
function writeStock(x)
{
   if(x<=0)
   {
     x=0;
   }
   else{
     x=x-1;
   }

   database.ref('/').update({
     food:x
   })

}


