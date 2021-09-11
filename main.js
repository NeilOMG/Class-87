
canvas= new fabric.Canvas("myCanvas")
 block_y=1;
 block_x=1;

block_width = 350;
block_height = 430;

var block_object= "";

function new_image(get_img)
{
	fabric.Image.fromURL(get_img, function (Img) {

        block_object = Img;
        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)
        block_object.set({
            top: 0, left: block_x
        });
        canvas.add(block_object)
    })

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		block_x=0
		new_image("rr.jpg")
		console.log("Red")
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image("gr.png")
		console.log("Green")
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image("yr.png")
		console.log("Yellow")
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image("pr.png")
		console.log("Pink")
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image("br.png")
		console.log("Blue")
	}
	
}

