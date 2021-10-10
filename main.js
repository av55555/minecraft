canvas = new fabric.Canvas("myCanvas");

var block_height= 30;
var block_width= 30;
var player_x= 10;
var player_y= 10;
var player_object= "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object= Img;
        player_object.scaleToHeight(150);
        player_object.scaleToWidth(150);
        player_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_Image(get_img){
    fabric.Image.fromURL(get_img, function(Img){
        block_object= Img;
        block_object.scaleToHeight(block_height);
        block_object.scaleToWidth(block_width);
        block_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
keypressed= e.keyCode;
if(e.shiftKey==true&&keypressed=='80'){
    block_height=block_height+10;
    block_width=block_width+10;
    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
}
if(e.shiftKey==true&&keypressed=='77'){
    block_height=block_height-10;
    block_width=block_width-10;
    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
}
if(keypressed=='38'){
    up();
}
if(keypressed=='40'){
    down();
}
if(keypressed=='37'){
    left();
}
if(keypressed=='39'){
    right();
}
if(keypressed=='87'){
    new_Image('wall.jpg');
}
if(keypressed=='67'){
    new_Image('cloud.jpg');
}
if(keypressed=='68'){
    new_Image('dark_green.png');
}
if(keypressed=='71'){
    new_Image('groung.png');
}
if(keypressed=='76'){
    new_Image('light_green.png');
}
if(keypressed=='82'){
    new_Image('roof.jpg');
}
if(keypressed=='84'){
    new_Image('trunk.jpg');
}
if(keypressed=='85'){
    new_Image('unique.png');
}
if(keypressed=='89'){
    new_Image('yellow_wall.png');
}
}

function up(){
    if(player_y>=0){
    player_y=player_y-block_height;
    canvas.remove(player_object);
    player_update()
    }
}

function down(){
    if(player_y<=500){
    player_y=player_y+block_height;
    canvas.remove(player_object);
    player_update()
    }
}

function left(){
    if(player_x>=0){
    player_x=player_x-block_height;
    canvas.remove(player_object);
    player_update()
    }
}

function right(){
    if(player_x<=700){
    player_x=player_x+block_height;
    canvas.remove(player_object);
    player_update()
    }
}