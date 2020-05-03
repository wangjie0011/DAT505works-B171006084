var container, stats;
var camera, scene, raycaster, renderer;

// var mouse = new THREE.Vector2(), INTERSECTED;
// var radius = 100, theta = 0;
// var object;

// var objects = [];

init();
render();

function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 10000 );

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf0f0f0 );

  var light = new THREE.HemisphereLight(0xffffff, 0x000000,2.5);
  light.position.set( 0, 100, 0 ).normalize();
  scene.add( light );

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth/2, window.innerHeight/2);
  container.appendChild( renderer.domElement );


}

function xianrenzhang_fire(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("xianrenzhang_fire.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("xianrenzhang.obj", function(mesh){
  var sizeRand = 10;
  mesh.scale.set(sizeRand,sizeRand,sizeRand);
  mesh.position.set(10,-20,-50);
  mesh.rotation.y = Math.PI*2;
  scene.add(mesh);
  });
});
}

function xianrenzhang_gold(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("xianrenzhang_gold.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("xianrenzhang.obj", function(mesh){
  var sizeRand = 10;
  mesh.scale.set(sizeRand,sizeRand,sizeRand);
  mesh.position.set(10,-20,-50);
  mesh.rotation.y = Math.PI*2;
  scene.add(mesh);
  });
});
}

function xianrenzhang_grass(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("xianrenzhang_grass.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("xianrenzhang.obj", function(mesh){
  var sizeRand = 10;
  mesh.scale.set(sizeRand,sizeRand,sizeRand);
  mesh.position.set(10,-20,-50);
  mesh.rotation.y = Math.PI*2;
  scene.add(mesh);
  });
});
}

function xianrenzhang_wood(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("xianrenzhang_wood.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("xianrenzhang.obj", function(mesh){
  var sizeRand = 10;
  mesh.scale.set(sizeRand,sizeRand,sizeRand);
  mesh.position.set(10,-20,-50);
  mesh.rotation.y = Math.PI*2;
  scene.add(mesh);
  });
});
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
  //raycaster.setFromCamera( mouse, camera );
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
  requestAnimationFrame(render);
  renderer.render( scene, camera );
  document.getElementById("fire").addEventListener("click",xianrenzhang_fire);
  document.getElementById("gold").addEventListener("click",xianrenzhang_gold);
  document.getElementById("wood").addEventListener("click",xianrenzhang_wood);
  document.getElementById("grass").addEventListener("click",xianrenzhang_grass);

}
