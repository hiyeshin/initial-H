//if (! Detector.webgl) Detector. addGetWebGLMessage();

function setupThree(){
	//create the scene first. It's like a canvas
	window.scene = new THREE.Scene();
	window.scene.fog = new THREE.Fog(0x000000,500,-100);
	window.scene.fog.color.setHSV(0.6,0.2,1);
	
	//then let's set the camera
	var WIDTH = 960,
		HEIGHT = 540,
		VIEW_ANGLE = 45,
		ASPECT = WIDTH / HEIGHT,
		NEAR = 0.1,
		FAR = 10000;
		
	window.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
	camera.position.set(0,0,300);
	camera.lookAt(scene.position);
	scene.add(camera);
	
	//Let's render!
	//A renderer points the Scene onto an HTML% canvas from the perspective of the camera
	//<HTML canvas> only provides the space. We should fill that up by script.
	//we can have multiple canvases. how awesome!
	window.renderer = new THREE.WebGLRenderer({antialias:true});
	renderer.setSize(WIDTH,HEIGHT);
	renderer.shadowMapEnabled = true;
	renderer.shadowMapSoft = true;
	document.getElementById("three").appendChild(renderer.domElement);
}

function addLights(){
	var light = new THREE.DirectionalLight (0xFFFFFF);
	light.castShadow = true;
	scene.add(light);
	
	//these options below are for more elaborate controls
	light.position.set(100,200,300);
	light.target.position.copy(scene.position);
	light.shadowCameraTop = 600;
	light.shadowCameraRight = -600;
	light.shadowCameraLeft = -600;
	light.shadowCameraNear = 600;
	light.shadowCameraFar = -600;
	light.shadowBias = -0.0001;
	light.shadowDarkness = 0.2;
	light.shadowMapWidth = light.shadowMapHeight = 2048;
}

function addSpotLights(){
	var spotLight = new THREE.SpotLight (0xFFFFFF);
	spotLight.position.set(500,0,-200);
	
	spotLight.castShadow = true;
	
	spotLight.shadowCameraNear = 500;
	spotLight.shadowCameraFar = 500;
	spotLight.shadowCameraFov = 30;
	
	spotLight.shadowMapWidth = 1024;
	spotLight.shadowMaHeight = 1024;
	
	scene.add(spotLight);
}


function addControls(){
	
	window.controls = new THREE.TrackballControls(camera);
	
	controls.rotateSpeed = 1.2;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;
	
	controls.noZoom = false;
	controls.noPan = false;
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;
	controls.keys = [65,83,68] //this is ASCI key number!!!
	
	controls.addEventListener("change", render)
}

function addCube(dimensions){//options are positions, width and heights, depth, and color
	dimensions = dimensions || {} //what is this empty bracket for?
	var x = dimensions.x || 0,// is this '||' for declaring?
		y = dimensions.y || 0,
		z = dimensions.z || 0,
		
		size = dimensions.size || 15,
		color = dimensions.color || 0xFFFFFF,
		
		geometry = new THREE.CubeGeometry(size,size,size),
		material = new THREE.MeshLambertMaterial({color: color}),
		cube = new THREE.Mesh(geometry,material)//Mesh consists of geometry and materials
		cube.position.set(x,y,z);
		cube.rotation.x = Math.random()*2000 -1000;
		cube.rotation.y = Math.random(); 	//thanks to DI
		cube.receiveShadow = false;
		cube.castShadow = false;
	//	cube.matrixAutoUpdate = false;
	//	cube.updateMatrix();
		scene.add(cube);		
}

function loop(){
	window.requestAnimationFrame(loop);
	render();
	controls.update();
	
}

function render(){
	//cube.rotation.x = Math.sin(Date.now()*0.0007) * 0.5;
	renderer.render(scene, camera)
}

setupThree();
addLights();
addSpotLights();
//I'll add control function later with different keys
addControls();
//Let's run our animation loop
loop();






//fog();
/////////////////////////////////////
////////"H" is for Hiye//////////////
/////////////////////////////////////
/////////////////////////////////////

var z;
//var s;

for (z = -350; z <= 000; z += 20){
 
hue = 0,
saturation = 0.19,
value = 1.0,
color = new THREE.Color().setHSV(hue, saturation, value).getHex();


//left stroke
addCube({x:-60 , y: -80, z:z, color: color });
addCube({x:-60 , y: -60, z:z });
addCube({x:-60 , y: -40, z:z });
addCube({x:-60 , y: -20, z:z });
addCube({x:-60 , y: 0, z:z });
addCube({x:-60 , y: 20, z:z });
addCube({x:-60 , y: 40, z:z });
addCube({x:-60 , y: 60, z:z });
addCube({x:-60 , y: 80, z:z, color: color });
//left top serif
addCube({x:-80 , y: -80, z:z });
addCube({x:-40 , y: -80, z:z });
//left bottom serif
addCube({x:-80 , y: 80, z:z });
addCube({x:-40 , y: 80, z:z });

//right stroke
addCube({x:60 , y: -80, z:z, color: color });
addCube({x:60 , y: -60, z:z });
addCube({x:60 , y: -40, z:z });
addCube({x:60 , y: -20, z:z });
addCube({x:60 , y: 0, z:z });
addCube({x:60 , y: 20, z:z });
addCube({x:60 , y: 40, z:z });
addCube({x:60 , y: 60, z:z });
addCube({x:60 , y: 80, z:z, color: color });
//right top serif
addCube({x:80 , y: -80, z:z });
addCube({x:40 , y: -80, z:z });
//right bottom serif
addCube({x:80 , y: 80, z:z });
addCube({x:40 , y: 80, z:z });

//crossbar
addCube({x:-40 , y: 0, z:z });
addCube({x:-20 , y: 0, z:z });
addCube({x:0 , y: 0, z:z });
addCube({x:20 , y: 0, z:z });
addCube({x:40 , y: 0, z:z });

}

