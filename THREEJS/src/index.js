import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';

function main() {
    //canvas
    const canvas = document.querySelector('#three');
    const renderer = new THREE.WebGLRenderer({ canvas });
    //camera
    const fov = 75;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;
    //scene
    const scene = new THREE.Scene();
    //cube
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const material = new THREE.MeshPhongMaterial({ color: "#ca2929" });
    const cube = new THREE.Mesh(geometry, material);
    //add cube to the scene
    scene.add(cube);
    //render scene + camera
    renderer.render(scene, camera);
    //light
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    //add light to sceaneS
    scene.add(light);

    function render(time) {
        time *= 0.001;  // convertis le temps en secondes

        cube.rotation.x = time;
        cube.rotation.y = time;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

main();