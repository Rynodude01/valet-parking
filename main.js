canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

gwidth = 75;
gheight = 130;
gx = 75;
gy = 300;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag,gx,gy,gwidth,gheight);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(gy >= 0){
		gy = gy-10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(gy <= 350){
		gy = gy+10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(gx >= 0){
		gx = gx-10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(gx <= 700){
		gx = gx+10;
		uploadBackground();
		uploadgreencar();
	}
}
