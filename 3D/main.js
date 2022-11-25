function main() {
  var canvas = document.getElementById("canvas");
  var gl = canvas.getContext("webgl");

  // Warna canvas-nya

  // Koordinat titik-titik
  var verticesB = [
  ];

  var indicesB = [
  ];
  var verticesY = [
      
  ];

  var indicesY = [
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
      -4,   -1.5,  0,    0, 0, 2,   // Index:  11
      //Belakang x + 0,5 y +0,3
      -3.5, -0.7,  0,    0, 0, 2,   // Index:  12 
      -2.3, -0.7,  0,    0, 0, 2,   // Index:  13 
      -2.3,  0.3,  0,    0, 0, 2,   // Index:  14 
      -3.5,  0.3,  0,    0, 0, 2,   // Index:  15 
      -3.5,  2.3,  0,    0, 0, 2,   // Index:  16 
      -2,    2.3,  0,    0, 0, 2,   // Index:  17 
      -2,    1.8,  0,    0, 0, 2,   // Index:  18 
      -3.2,  1.8,  0,    0, 0, 2,   // Index:  19 
      -3.2,  0.8,  0,    0, 0, 2,   // Index:  20 
      -2,    0.8,  0,    0, 0, 2,   // Index:  21
      -2,   -1.2,  0,    0, 0, 2,   // Index:  21
      -3.5, -1.2,  0,    0, 0, 2,   // Index:  23
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
      //Tengah
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

  ];

  var indices6 = [

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


  var freeze = false;
  var horizontalSpeed = 0.0156;
  var canvasWidth = 9;
  var horizontalDelta = 0.0;
  var verticalDelta = 0.0;


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
  var perspective = mat4.create();
  mat4.perspective(perspective, Math.PI/3, 1.0, 0.5, 50.0);

  function draw(vertices, indices, start = 0, glType) {
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

    var translate1 = () =>{
      var model = mat4.create();
  
       if (horizontalDelta >= (canvasWidth/2+2) || horizontalDelta <= (-canvasWidth/2+2)) {
        horizontalSpeed = horizontalSpeed * -1;
       }
  
       horizontalDelta += horizontalSpeed;
  
      mat4.translate(model, model, [horizontalDelta, verticalDelta, 0.0]);
      
      var uModel = gl.getUniformLocation(shaderProgram, "uModel");
      var uView = gl.getUniformLocation(shaderProgram, "uView");
      var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
  
      gl.uniformMatrix4fv(uModel,false, model);
      gl.uniformMatrix4fv(uView, false, view);
      gl.uniformMatrix4fv(uProjection, false, perspective);
  
      draw(objects[2].vertices, objects[2].indices, 0, objects[2].type);
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
      translate1();

      requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

window.onload = main;