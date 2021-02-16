var fixedrect,movingrect;

function setup()
{
  createCanvas(1200,800)
  fixedrect=createSprite(200,200,50,50);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;

  movingrect=createSprite(200,400,80,50);
  movingrect.shapeColor="green";
  movingrect.debug=true;
}

function draw()
{
  background(0);

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2)
    {
      movingrect.shapeColor="red";
      fixedrect.shapeColor="red";
    }
    else{
      movingrect.shapeColor="green";
      fixedrect.shapeColor="green";

    }
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  drawSprites();


}
