var container, stats;
var camera, scene, raycaster, renderer;

var mouse = new THREE.Vector2(), INTERSECTED;
var radius = 100, theta = 0;
var object;

var objects = [];

init();
animate();

function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 10000 );

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf0f0f0 );

  var light = new THREE.HemisphereLight(0xffffff, 0x000000,2.5);
  light.position.set( 0, 100, 0 ).normalize();
  scene.add( light );

  var geometry = new THREE.BoxBufferGeometry( 20, 20, 20 );

  for (var i=0; i<10; i++){

  // Model/material loading!
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.load("xianrenzhang_grass.mtl", function(materials){
	materials.preload();

    var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials);

  		objLoader.load("xianrenzhang.obj", function(mesh){
  			mesh.traverse(function(node){
  				if( node instanceof THREE.Mesh ){
  					node.castShadow = true;
  					node.receiveShadow = true;
  				}
  			});

        var sizeRand = 5;
        mesh.scale.set(sizeRand,sizeRand,sizeRand);
        mesh.position.set(8,-2,-50);
        mesh.rotation.y = Math.PI*2;

        scene.add(mesh);
        objects.push(mesh); //Add to the array so that we can access for raycasting
  		});
  	});
  }

  raycaster = new THREE.Raycaster();

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );

  //stats = new Stats();
  //container.appendChild( stats.dom );


  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  document.addEventListener( 'mousedown', onDocumentMouseDown, false );
  window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
  event.preventDefault();
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function onDocumentMouseDown( event,pattern ) {
  var intersects = raycaster.intersectObjects( objects, true);
  if(intersects.length > 0){
    //intersects[0].object.material.color.set(Math.random()*0xffffff);
    var mtlLoader = new THREE.MTLLoader();

    var i = Math.floor(Math.random()*80);
    var pattern;
    if (i<20){
      pattern = "xianrenzhang_gold.mtl";
    }
    if (i>=20 && i<40) {
      pattern = "xianrenzhang_grass.mtl";
    }
    if (i>=40 && i<60){
      pattern = "xianrenzhang_wood.mtl";
    }
    if (i>=60){
      pattern = "xianrenzhang_fire.mtl";
    }
  	mtlLoader.load(pattern, function(materials){
  	materials.preload();

      var objLoader = new THREE.OBJLoader();
  		objLoader.setMaterials(materials);

    		objLoader.load("xianrenzhang.obj", function(mesh){
    			mesh.traverse(function(node){
    				if( node instanceof THREE.Mesh ){
    					node.castShadow = true;
    					node.receiveShadow = true;
    				}
    			});

          var sizeRand = 5;
          mesh.scale.set(sizeRand,sizeRand,sizeRand);
          mesh.position.set(8,-2,-50);
          mesh.rotation.y = Math.PI*2;

          scene.add(mesh);
          objects.push(mesh); //Add to the array so that we can access for raycasting
    		});
    	});
  }
}

//
function animate() {
  requestAnimationFrame( animate );

  render();
  //stats.update();
}

function render() {
  //Auto rotate camera

  /*
  theta += 0.1;
  camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
  camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
  camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
  camera.lookAt( scene.position );
  camera.updateMatrixWorld();
*/
  //Find intersections
  raycaster.setFromCamera( mouse, camera );
  //var intersects = raycaster.intersectObjects( scene.children );
/*
  var intersects = raycaster.intersectObjects( objects, true );

  if ( intersects.length > 0 ) {
    if ( INTERSECTED != intersects[ 0 ].object ) {
      if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
      INTERSECTED = intersects[ 0 ].object;
      INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
      INTERSECTED.material.emissive.setHex( 0xff0000 );
    }
  } else {
    if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
    INTERSECTED = null;
  }
  */
  renderer.render( scene, camera );
}
