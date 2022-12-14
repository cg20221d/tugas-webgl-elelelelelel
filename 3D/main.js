function main() {
    var canvas = document.getElementById("canvas");
    var gl = canvas.getContext("webgl");
  
    // Warna canvas-nya
  
    // Koordinat titik-titik
    var verticesB = [
    //Depan vertikal 4,22,37
    -1.3,-1.5,  0,      1, 1, 1,   // Index:  0 
    -1,  -1.5,  0,      1, 1, 1,   // Index:  1 
    -1,  2,  0,         1, 1, 1,   // Index:  2 
    -1.3, 2, 0,         1, 1, 1,   // Index:  3
    //Depan kotak bawah
    -1,-1.2,  0,      1, 1, 1,   // Index:  4 
    0.4,-1.2,  0,      1, 1, 1,   // Index:  5 
    0.4,-1.5,  0,      1, 1, 1,   // Index:  6
    0.2,-1.5,  0,      1, 1, 1,   // Index:  7 
    0.4, 0.5,  0,      1, 1, 1,   // Index:  8
    0.2, 0.5,  0,      1, 1, 1,   // Index:  9
    0.2, 0.2,  0,      1, 1, 1,   // Index:  10
    -1, 0.5,  0,      1, 1, 1,   // Index:  11
    -1, 0.2,  0,      1, 1, 1,   // Index:  12
    //Depan kotak atas
    0, 0.5,  0,      1, 1, 1,   // Index:  13
    0, 2,  0,      1, 1, 1,   // Index:  14
    0.2, 2,  0,      1, 1, 1,   // Index:  15
    0, 1.7,  0,      1, 1, 1,   // Index:  16
    -1, 1.7,  0,         1, 1, 1,   // Index:  17
    //Belakang
    -1.3,-1.5,  -0.5,      0.5, 0.5, 0.5,   // Index:  18 
    -1,  -1.5,  -0.5,      0.5, 0.5, 0.5,   // Index:  19 
    -1,  2,  -0.5,         0.5, 0.5, 0.5,   // Index:  20 
    -1.3, 2, -0.5,         0.5, 0.5, 0.5,   // Index:  21
    //Depan kotak bawah
    -1,-1.2,  -0.5,      0.5, 0.5, 0.5,   // Index:  22 
    0.4,-1.2,  -0.5,      0.5, 0.5, 0.5,   // Index:  23 
    0.4,-1.5,  -0.5,      0.5, 0.5, 0.5,   // Index:  24
    0.2,-1.5,  -0.5,      0.5, 0.5, 0.5,   // Index:  25
    0.4, 0.5,  -0.5,      0.5, 0.5, 0.5,   // Index:  26
    0.2, 0.5,  -0.5,      0.5, 0.5, 0.5,   // Index:  27
    0.2, 0.2,  -0.5,      0.5, 0.5, 0.5,   // Index:  28
    -1, 0.5,  -0.5,      0.5, 0.5, 0.5,   // Index:  29
    -1, 0.2,  -0.5,      0.5, 0.5, 0.5,   // Index:  30
    //Depan kotak atas
    0, 0.5,  -0.5,      0.5, 0.5, 0.5,   // Index:  31
    0, 2,  -0.5,      0.5, 0.5, 0.5,   // Index:  32
    0.2, 2,  -0.5,      0.5, 0.5, 0.5,   // Index:  33
    0, 1.7,  -0.5,      0.5, 0.5, 0.5,   // Index:  34
    -1, 1.7,  -0.5,         0.5, 0.5, 0.5,   // Index:  35

    0.2,-1.2,  0,      1, 1, 1,   // Index:  36
    0.2,-1.2,  -0.5,      0.5, 0.5, 0.5,   // Index: 37
    0, 1.7,  0,      1, 1, 1,   // Index:  38



  
    ];
  
    var indicesB = [
        //Depan vertikal
        0, 1, 2, 0,2,3,
        //Depan kotak bawah
        1,4,5, 5,1,6,
        6,7,8, 7,8,9,
        9,10,11, 10,11,12,
        //Depan kotak atas
        9,13,14, 9,14,15,
        14,16,2, 16,2,17,
        //Belakang
        18,19,20, 18,20,21,
        
        19,22,23, 23,19,24,
        24,25,26, 25,26,27,
        27,28,29, 28,29,30,
        
        27,31,32, 27,32,33,
        32,34,20, 34,20,35,
        //Tengah kiri
        0,18,3, 18,3,21,
        //bawah
        0,18,6, 18,6,24,
        //atas
        3,21,15, 21,15,33,
        //kanan atas
        15,33,9, 27,9,33,
        8,26,9, 27,26,9,
        6,24,8, 26,24,8,
        //kotak bawah
        4,22,36, 22,36,37,
        12,4,22, 30,12,22,
        11,29,17, 29,17,35,
        17,35,16, 35,34,16,
        11,29,9, 27,29,9,
        10,28,12, 30,28,12,
        7,25,10, 10,28,25,
        38,34,13, 31,13,34


    ];
    var verticesY = [
        //DEPAN
        //kiri
        -3.5,  2,    0,    1, 0, 0,  // Index:  0  kanan
        -3.9,  2,    0,    1, 0, 0,  // Index:  1  kiri
        -2.7,  0.2,  0,    1, 0, 0,  // Index:  2 
        -2.7,  0.7,  0,    1, 0, 0,  // Index:  3
        //tengah
        -3,   -1.5,  0,    1, 0, 0,  // Index:  4 bawah kiri
        -2.7, -1.5,  0,    1, 0, 0,  // Index:  5 bawah kanan
        -2.7,  0.64, 0,    1, 0, 0,  // Index:  6 atas kanan
        -3,    0.64, 0,    1, 0, 0,  // Index:  7 atas kiri
        //kanan
        -2.2,  2,    0,    1, 0, 0,  // Index:  8 kiri
        -1.8,  2,    0,    1, 0, 0,  // Index:  9 kanan
        -3,    0.2,  0,    1, 0, 0,  // Index:  10 
        -3,    0.7,  0,    1, 0, 0,  // Index:  11
        //BELAKANG
        //kiri
        -3.5,  2,    -0.5,    0, 1, 1,  // Index:  12 kanan
        -3.9,  2,    -0.5,    0, 1, 1,  // Index:  13 kiri
        -2.7,  0.2,  -0.5,    0, 1, 1,  // Index:  14 
        -2.7,  0.7,  -0.5,    0, 1, 1,  // Index:  15
        //tengah
        -3,   -1.5,  -0.5,    0, 1, 1,  // Index:  16 bawah kiri
        -2.7, -1.5,  -0.5,    0, 1, 1,  // Index:  17 bawah kanan
        -2.7,  0.64, -0.5,    0, 1, 1,  // Index:  18 atas kanan
        -3,    0.64, -0.5,    0, 1, 1,  // Index:  19 atas kiri
        //kanan
        -2.2,  2,    -0.5,    0, 1, 1,  // Index:  20 kanan
        -1.8,  2,    -0.5,    0, 1, 1,  // Index:  21 kiri
        -3,    0.2,  -0.5,    0, 1, 1,  // Index:  22 
        -3,    0.7,  -0.5,    0, 1, 1,  // Index:  23
    ];
  
    var indicesY = [

        0, 1, 2,  0, 2,3,   //kiri
        4, 5, 6, 4,6,7,     //tengah
        8,9,10, 8,10,11,    //kanan
        12,13,14, 12,14,15,
        16,17,18, 16,18,19,
        20,21,22, 20,22,23,
        0,1,12, 1,12,13,
        8,9,20, 20,21,9,
        0,12,6, 6,12,18,
        8,20,7, 20,19,7,
        1,13,7, 13,7,19,
        9,21,18, 9,18,6,
        16,19,4, 7,4,19,
        5,6,17, 18,6,17,
        4,5,16, 16,17,5
    ];
  
    var vertices5 = [
        //Depan
        -4,   -1,  0,      0, 0, 2,   // Index:  0 
        -2.8, -1,  0,      0, 0, 2,   // Index:  1 
        -2.8,  0,  0,      0, 0, 2,   // Index:  2 
        -4,    0,  0,      0, 0, 2,   // Index:  3 
        -4,    2,  0,      0, 0, 2,   // Index:  4 
        -2.5,  2,  0,      0, 0, 2,   // Index:  5 
        -2.5,  1.5,  0,    0, 0, 2,   // Index:  6 
        -3.7,  1.5,  0,    0, 0, 2,   // Index:  7 
        -3.7,  0.5,  0,    0, 0, 2,   // Index:  8 
        -2.5,  0.5,  0,    0, 0, 2,   // Index:  9 
        -2.5, -1.5,  0,    0, 0, 2,   // Index:  10
        -4, -1.5,  0,      0, 0, 2,   // Index:  11
        //Belakang x + 0,5 y +0,3
        -3.5, -0.7,  -0.5,    0, 0, 2,   // Index:  12 
        -2.3, -0.7,  -0.5,    0, 0, 2,   // Index:  13 
        -2.3,  0.3,  -0.5,    0, 0, 2,   // Index:  14 
        -3.5,  0.3,  -0.5,      0, 0, 2,   // Index:  15 
        -3.5,  2.3,  -0.5,      0, 0, 2,   // Index:  16 
        -2,    2.3,  -0.5,      0, 0, 2,   // Index:  17 
        -2,    1.8,  -0.5,    0, 0, 2,   // Index:  18 
        -3.2,  1.8,  -0.5,    0, 0, 2,   // Index:  19 
        -3.2,  0.8,  -0.5,    0, 0, 2,   // Index:  20 
        -2,  0.8,  -0.5,     0, 0, 2,   // Index:  21
        -2, -1.2,  -0.5,    0,0, 2,   // Index:  21
        -3.5, -1.2,  -0.5,  0, 0, 2,   // Index:  23
  
    ];
  
    var indices5 = [
        //Depan
        0, 1,
        1, 2,
        2, 3,
        3, 4,
        4, 5,
        5,6,
        6,7,
        7,8,
        8,9,
        9,10,
        10,11,
        11,0,
        //Belakang
        12,13,
        13,14,
        14,15,
        15,16,
        16,17,
        17,18,
        18,19,
        19,20,
        20,21,
        21,22,
        22,23,
        23,12,
        
        0,12,
        1,13,
        2,14,
        3,15,
        4,16,
        5,17,
        6,18,
        7,19,
        8,20,
        9,21,
        10,22,
        11,23
    ];
  
    var vertices6 = [
        //Depan
        2,   2,    0,      1, 0, 1,   // Index:  0 
        2,  -1.5,  0,      1, 0, 1,   // Index:  1
        3.5,-1.5,  0,      1, 0, 1,   // Index:  2
        3.5, 0.3,  0,      1, 0, 1,   // Index:  3
        2.4, 0.3,  0,      1, 0, 1,   // Index:  4
        2.4, 1.5,  0,      1, 0, 1,   // Index:  5  
        3.5, 1.5,  0,      1, 0, 1,   // Index:  6
        3.5, 2,    0,      1, 0, 1,   // Index:  7
        2,   2,    0,      1, 0, 1,   // Index:  8
        //Kotak
        2.4, -1,   0,      1, 0, 1,   // Index:  9
        3.2, -1,   0,      1, 0, 1,   // Index:  10
        3.2, -0.2, 0,      1, 0, 1,   // Index:  11
        2.4, -0.2, 0,      1, 0, 1,   // Index:  12
        //Belakang x  -0,3 +0,5
        1.7,  2.5, -0.5,      1, 0, 1,   // Index:  13 
        1.7, -1,   -0.5,      1, 0, 1,   // Index:  14
        3.2, -1,   -0.5,      1, 0, 1,   // Index:  15
        3.2,  0.8, -0.5,      1, 0, 1,   // Index:  16
        2.1,  0.8, -0.5,      1, 0, 1,   // Index:  17
        2.1,  2,   -0.5,      1, 0, 1,   // Index:  18 
        3.2,  2,   -0.5,      1, 0, 1,   // Index:  19
        3.2,  2.5, -0.5,      1, 0, 1,   // Index:  20
        1.7,  2.5, -0.5,      1, 0, 1,   // Index:  21
        //Kotak Belakang
        2.1, -0.5,  -0.5,      1, 0, 1,   // Index:  22
        2.9, -0.5,  -0.5,      1, 0, 1,   // Index:  23
        2.9,  0.3,  -0.5,      1, 0, 1,   // Index:  24
        2.1,  0.3,  -0.5,      1, 0, 1,   // Index:  25
    ];
  
    var indices6 = [
        //Depan
        0, 1,
        1, 2,
        2, 3,
        3, 4,
        4, 5,
        5, 6,
        6, 7,
        7, 8,
        //Kotak
        9,10,
        10,11,
        11,12,
        12,9,
        //Belakang
        13, 14,
        14, 15,
        15, 16,
        16, 17,
        17, 18,
        18, 19,
        19, 20,
        20, 21,
        //Kotak Belakang
        22,23,
        23,24,
        24,25,
        25,22,
        //Tengah
        0,13,
        1,14,
        2,15,
        3,16,
        4,17,
        5,18,
        6,19,
        7,20,
        8,21,
        9,22,
        10,23,
        11,24,
        12,25

    ];
  
    var objects = [
        {
            vertices: verticesB,
            indices: indicesB,
            type: gl.TRIANGLES,
        },
        {
            vertices: verticesY,
            indices: indicesY,
            type: gl.TRIANGLES,
        },
        {
            vertices: vertices5,
            indices: indices5,
            type: gl.LINES,
        },
        {
            vertices: vertices6,
            indices: indices6,
            type: gl.LINES,
        },
    ]
  
        // Vertex shader
    var vertexShaderCode = `
    attribute vec3 aPosition; // Karena 3d, kita ubah vec2 jadi vec3
    attribute vec3 aColor; // Vertex Color
    uniform mat4 uModel; // model = world
    uniform mat4 uView;
    uniform mat4 uProjection;
    varying vec3 vColor; // Fragment Color
    void main() {
        gl_Position = uProjection * uView * uModel * vec4(aPosition, 1.0);
        vColor = aColor;
    }
`;
var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShaderObject, vertexShaderCode);
gl.compileShader(vertexShaderObject);

// Fragment shader
var fragmentShaderCode = `
    precision mediump float;
    varying vec3 vColor;
    void main() {
        gl_FragColor = vec4(vColor, 1.0);
    }
`;
var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
gl.compileShader(fragmentShaderObject);

// Shader program
var shaderProgram = gl.createProgram(); // Wadah dari executable (.exe)
gl.attachShader(shaderProgram, vertexShaderObject);
gl.attachShader(shaderProgram, fragmentShaderObject);
gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);



// Variabel pointer ke GLSL
var uModel = gl.getUniformLocation(shaderProgram, "uModel");

// View
var cameraX = 0.0;
var cameraZ = 7.5;
var uView = gl.getUniformLocation(shaderProgram, "uView");
var view = mat4.create();

mat4.lookAt(
    view,
    [cameraX, 0.0, cameraZ], // Lokasi the eye or the camera
    [cameraX, 0.0, -10],    // The point where the camera look at
    [0.0, 1.0, 0.0]
);

    // Projection
var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
var perspective = mat4.create();
mat4.perspective(perspective, Math.PI/3, 1.0, 0.5, 50.0);

function draw(vertices, indices, start = 0, end, glType) {
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // Kita mengajari GPU bagaimana caranya mengoleksi
    //  nilai posisi dari ARRAY_BUFFER
    //  untuk setiap verteks yang sedang diproses
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 
        6 * Float32Array.BYTES_PER_ELEMENT, 
        0);
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 
        6 * Float32Array.BYTES_PER_ELEMENT, 
        3 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);  

    gl.drawElements(glType, indices.length, gl.UNSIGNED_SHORT, 0);
}
var thetaX = 0.0;
var thetaY = 0.0;
var freeze = false;
var horizontalSpeed = 0.0156;
var canvasWidth = 9;
var DeltaX = 0.0;
var DeltaY = 0.0;
var scaleSpeed = 0.02;
var DeltaScale = 0;

const translate5 = () =>{
    var model = mat4.create();

    if (DeltaX >= (canvasWidth/2+2) || DeltaX <= (-canvasWidth/2+2)) {
      horizontalSpeed = horizontalSpeed * -1;
    }

    DeltaX += horizontalSpeed;

    mat4.translate(model, model, [DeltaX, DeltaY, 0.0]);
    
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");

    gl.uniformMatrix4fv(uModel,false, model);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, perspective);

    draw(objects[2].vertices, objects[2].indices, 0, objects[2].length, objects[2].type);
  }

  const scale6 = () =>{
    var model6 = mat4.create(); 

    if (DeltaScale >= 2 || DeltaScale <= -0.5) {
        scaleSpeed = scaleSpeed * -1;
    }
    
    DeltaScale += scaleSpeed;

    mat4.translate(model6, model6, [0, 0, DeltaScale]);

    gl.uniformMatrix4fv(uModel, false, model6);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, perspective);

    draw(objects[3].vertices, objects[3].indices, 0, objects[3].length, objects[3].type);
  }
  const rotateY = () =>{
    var modelY = mat4.create(); // Membuat matriks identitas
    mat4.rotateX(
        modelY, modelY, thetaX
    );

    gl.uniformMatrix4fv(uModel, false, modelY);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, perspective);

    draw(objects[1].vertices, objects[1].indices, 0, objects[1].length, objects[1].type);
  }
  const rotateB = () =>{
    var modelB = mat4.create(); // Membuat matriks identitas

    mat4.rotateY(
        modelB, modelB, thetaY
    );
    gl.uniformMatrix4fv(uModel, false, modelB);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, perspective);

    draw(objects[0].vertices, objects[0].indices, 0, objects[0].length, objects[0].type);
  }

function onKeydown(event) {
    if (event.keyCode == 37) { // Kiri
        thetaY += 0.1
    }
    if (event.keyCode == 39) {  // Kanan
        thetaY += -0.1;
    }

    if (event.keyCode == 38) {  // Atas
        thetaX += -0.1
    } else if (event.keyCode == 40) { // Bawah
        thetaX += 0.1
    }
}

function onKeyup(event) {
    if (event.keyCode == 32) freeze = !freeze;
    if (event.keyCode == 65 || event.keyCode == 68) horizontalSpeed = 0.0;
    if (event.keyCode == 87 || event.keyCode == 83) verticalSpeed = 0.0;
}


document.addEventListener("keydown", onKeydown);
document.addEventListener("keyup", onKeyup);

function render() {
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.125, 0.125, 0.15, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    scale6();
    translate5();
    rotateY();
    rotateB();
    requestAnimationFrame(render);
}
requestAnimationFrame(render);
}

window.onload = main;
