
let pano1= new PANOLENS.ImagePanorama( 'images/new/1.jpg' );
let pano2 = new PANOLENS.ImagePanorama('images/new/2.jpg');
let pano3 = new PANOLENS.ImagePanorama('images/new/3.jpg');
let pano4 = new PANOLENS.ImagePanorama('images/new/4.jpg');
let pano5 = new PANOLENS.ImagePanorama('images/new/5.jpg');
let pano6 = new PANOLENS.ImagePanorama('images/new/6.jpg');
let pano7 = new PANOLENS.ImagePanorama('images/new/7.jpg');
let pano8 = new PANOLENS.ImagePanorama('images/new/8.jpg');
let pano9 = new PANOLENS.ImagePanorama('images/new/9.jpg');

let imageContainer = document.querySelector('.pan1')


var positions = [
    new THREE.Vector3(2883.24, -666.84, -4024.20),
    new THREE.Vector3(-345.51, -1435.83, 4767.99),
    new THREE.Vector3(1024.25, -148.09, -4887.28),
    new THREE.Vector3(2311.97, -4081.47, -1722.15),
    new THREE.Vector3(4429.06, 357.04, 2274.98),
    new THREE.Vector3(4082.79, -604.03, -2806.66),
    new THREE.Vector3(1680.97, -833.67, 4626.32),
    new THREE.Vector3(-713.34, -706.08, 4889.27),
    new THREE.Vector3(-4965.86, -406.49, 325.23),
    new THREE.Vector3(-4565.69, -199.93, -2017.10),
    new THREE.Vector3(4290.50, 600.09, -2487.66),
    new THREE.Vector3(-1997.01, -1476.76, -4333.73),
    new THREE.Vector3(-3732.64, -739.90, -3235.02),
    new THREE.Vector3(-4839.93, -566.69, 1090.07),
    new THREE.Vector3(-2749.64, 202.73, 4158.52),
    new THREE.Vector3(-2738.34, -1919.28, 3714.97),
    new THREE.Vector3(4718.77, -1213.06, 1098.45),
    new THREE.Vector3(4717.75, -538.40, 1551.72),
   
    
  ];
// pano1.setLinkingImage("./download.png", 400)
// pano2.setLinkingImage("./download.png", 400)
// pano3.setLinkingImage("./download.png", 400)
// pano4.setLinkingImage("./download.png", 400)
const viewer = new PANOLENS.Viewer({

  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 1,
  controlBar: true,

   controlButtons: ['fullscreen','setting','video'],            // Buttons array in the control bar. Default to ['fullscreen', 'setting', 'video']
   //autoHideControlBar: false,        // Auto hide control bar
  // autoHideInfospot: true,            // Auto hide infospots
   //horizontalView: true,            // Allow only horizontal camera control
   cameraFov: 90,                // Camera field of view in degree
  // reverseDragging: false,            // Reverse orbit control direction
  // enableReticle: false,            // Enable reticle for mouseless interaction
  // dwellTime: 1500,            // Dwell time for reticle selection in millisecond
  // autoReticleSelect: true,        // Auto select a clickable target after dwellTime
  // viewIndicator: false,            // Adds an angle view indicator in upper left corner
  // indicatorSize: 30,            // Size of View Indicator
  // output: 'console'  
});



pano1.link( pano2, positions[0]);
pano2.link( pano1, positions[1]);
pano2.link(pano3,positions[2]);
pano3.link(pano2,positions[3]);
pano3.link(pano4,positions[4]);
pano4.link(pano6,positions[5]);
pano6.link(pano4,positions[6]);
pano4.link(pano5,positions[7]);
pano5.link(pano4,positions[8]);
pano5.link(pano3,positions[9]);
pano3.link(pano7,positions[10]);
pano7.link(pano8,positions[11]);
pano8.link(pano7,positions[12]);
pano8.link(pano9,positions[13]);
pano9.link(pano8,positions[14]);
pano7.link(pano3,positions[15]);
pano4.link(pano3,positions[16]);
pano6.link(pano7,positions[17]);



viewer.add( pano1,pano2,pano3,pano4,pano5,pano6,pano7,pano8,pano9);


