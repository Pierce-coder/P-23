var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,redBox
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;


    var package_options ={
        restitution: 1
    }


	packageSprite = createSprite (width/2,80,10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);



	redBox=createSprite(400,640,100,10);
	redBox1=createSprite(350,600,10,100);
	redBox2=createSprite(450,600,10,100);

	redBox = Bodies.rectangle(400,640,100,10,{isStatic:true});
 	World.add(world, redBox);

	redBox1 = Bodies.rectangle(350,600,10,100,{isStatic:true});
 	World.add(world, redBox1);

	redBox2 = Bodies.rectangle(450,600,10,100,{isStatic:true});
 	World.add(world, redBox2);
	
	
	 helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	helicopterBodies = Bodies.rectangle(400,640,100,10,{isStatic:true});
 	World.add(world, helicopterBodies);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {resttution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
  packageSprite.position.x = helicopterSprite.position.x;
  helicopterSprite.position.x = mouseX;


  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on

	Matter.Body.setStatic(packageBody,false);

  }
}

