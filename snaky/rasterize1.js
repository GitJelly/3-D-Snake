var scene;
var camera;
var renderer;
var cubeGeometry;
var foodObj;
var snakeArr = [];

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer();

    cubeGeometry = new THREE.BoxGeometry( 1.0, 1.0, 1.0 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//var snakeMat = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cubeSnake = new THREE.Mesh( cubeGeometry, material );
//var cuboidFrame = new THREE.Mesh( geometry, material );
    snakeArr.push(cubeSnake);
    console.log(snakeArr.length);
    scene.add( cubeSnake );
    cubeSnake.position.set(0.0, 0.0, 0.0);




    camera.lookAt(0,0,0);
    camera.position.set(0,0,50);

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );


// camera.lookAt(0,0,0);
// camera.position.set(0,0,50);
//
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

//camera.position.set(30,0,0);
//camera.up = new THREE.Vector3(0,0,1);

//75, window.innerWidth/window.innerHeight, 0.1, 1000
//45, w/h, 1, 1000
//var snakeTail = snakeArr[snakeArr.length-1];
console.log(snakeArr.length);




// var snakeArr = [];
// var snakeBody = new THREE.Mesh( geometry, material );
//
// snakeBody.position.set(0.5, 0.0, 0.0);
// scene.add(snakeBody);
//

function addSnake(){
    var geometry = new THREE.BoxGeometry( 1.0, 1.0, 1.0 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//var snakeMat = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // var bod = snakeTail.positionX;
    var snakeTail = snakeArr[snakeArr.length-1];
    var tailObjArr = snakeTail.position;
    console.log(tailObjArr);
    tailObjArr[0] = tailObjArr[0] + 0.5;
    console.log(tailObjArr);
    var snakeBod = new THREE.Mesh( geometry, material );

    snakeBod.position.x = snakeTail.position.x+0.5;
//var cuboidFrame = new THREE.Mesh( geometry, material );
    scene.add( snakeBod );

    snakeArr.push(snakeBod);

}



// var gridSize = 750;
// var unitSize = 50;
// var gridGeometry = new THREE.Geometry();
// for ( var i = -gridSize; i <= gridSize; i += unitSize ) {
//     gridGeometry.vertices.push(new THREE.Vector3(-gridSize, 0, i));
//     gridGeometry.vertices.push(new THREE.Vector3(gridSize, 0, i));
//     gridGeometry.vertices.push(new THREE.Vector3(i, 0, -gridSize));
//     gridGeometry.vertices.push(new THREE.Vector3(i, 0, gridSize));
// }
// var gridMaterial = new THREE.LineBasicMaterial({ color: 0x000000, opacity: 0.2, transparent: true });
// var line = new THREE.Line( gridGeometry, gridMaterial, THREE.LineSegments );
// scene.add(line);


function createFood(){
    var geometry = new THREE.BoxGeometry( 1.0, 1.0, 1.0 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//var snakeMat = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cubeFood = new THREE.Mesh( geometry, material );
    cubeFood.position.set(10,10,0);

    foodObj = cubeFood;
    scene.add(foodObj);
}

createFood();

function removeFood(){
    console.log("touch");
    scene.remove(foodObj);
}


function collisionSense(){

    if(cubeSnake.position.x == foodObj.position.x && cubeSnake.position.y == foodObj.position.y){

        removeFood();// removeFood();
        addSnake();
    }
}
//setInterval(addSnake, 3000);



//camera.position.z = 5;

// cubeSnake.position.z = -5;
// cubeSnake.rotation.x = 10;
// cubeSnake.rotation.y = 5;



// var size = 10;
// var divisions = 10;
//
// var gridHelper = new THREE.GridHelper( size, divisions );
// scene.add( gridHelper );

// setInterval('cubeSnake.translateX(1)', 500);
// cubeSnake.translateX(20);


function doForAll(){
    forEach(snakeArr){

    }
}


var currentDir = 'a';
var dirCheck = 'a';

function keepMoving(){
    if(currentDir == 'a'){

        doForAll
        cubeSnake.position.x -= 0.5;
    }

    if(currentDir == 'd'){
        cubeSnake.position.x += 0.5;
    }

    if(currentDir == 'w'){
        cubeSnake.position.y += 0.5;
    }

    if(currentDir == 's'){
        cubeSnake.position.y -= 0.5;
    }

}


function keyStroke(event) {

    var selection = event.key;


    if(selection == 'a')// && dirCheck != 'd')
    {
        //   keyPressed(1);
        dirCheck = 'a';
        currentDir = 'a';
    }

    if(selection == 'd' )//&& dirCheck != 'a')
    {
        //     keyPressed(0);
        dirCheck = 'd';
        currentDir = 'd';
    }

    if(selection == 'w' )//&& dirCheck != 's')
    {
        //     keyPressed(2);
        dirCheck = 'w';
        currentDir = 'w';
    }

    if(selection == 's')// && dirCheck != 'w')
    {
        //    keyPressed(3);
        dirCheck = 's';
        currentDir = 's';
    }
    // if(selection=='x')
    // {
    // removeFood();
    // }

}


var animate = function () {
    requestAnimationFrame( animate );

    //senseChange();              //setTimeout(changeToX, 3000 );
    keepMoving();
    collisionSense();
    renderer.render( scene, camera );
};





document.onkeydown = keyStroke;
animate();
