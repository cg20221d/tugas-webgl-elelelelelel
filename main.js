function main() {
  var kanvas = document.getElementById("kanvas");
  // var gl = kanvas.getContext("2d");
  var gl = kanvas.getContext("webgl");
  // kalo kita mau gambar di 3d, alat gambarnya webgl
  // gl = grafics library
  //   gl = glUtils.checkWebGL(kanvas);

  //   mendifinisikan shaders
  // shaders itu ada macem2.
  // shaders -> sebuah source code yg akan di-run oleh gpu

  //   initGLSize();
  //   window.addEventListener("resize", resizer);

  // var vertices = [x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6];
  var vertices1 = [ 
    -0.8,  -0.5, 
    -0.75, -0.5,
    -0.8,   0.5,

    -0.75,  0.5,
    -0.8,   0.5,
    -0.75, -0.5, 

    -0.8,  -0.5, 
    -0.8,  -0.43,
    -0.35, -0.5,

    -0.35, -0.43,
    -0.8,  -0.43,
    -0.35, -0.5,

    -0.8,  0.08, 
    -0.8,  0.01,
    -0.35, 0.08,

    -0.35, 0.01,
    -0.8,  0.01,
    -0.35, 0.08,
    
    -0.35, 0.08,
    -0.4, 0.08,
    -0.4,-0.5,

    -0.35, 0.08,
    -0.35, -0.5,
    -0.4,-0.5,

    -0.47, 0.08,
    -0.47, 0.5,
    -0.42,0.08,

    -0.47, 0.5,
    -0.42, 0.5,
    -0.42,0.08,

    -0.42, 0.5,
    -0.8, 0.43,
    -0.8, 0.5,

    -0.42, 0.5,
    -0.8, 0.43,
    -0.42, 0.43,

    0,     -0.5, 
    -0.05, -0.5,
     0,     0.13,

    -0.05,  0.13,
     0,     0.13,
    -0.05, -0.5, 
    
    -0.3,    0.5,
    -0.23,   0.5, 
    -0,      0.1,

    -0.3,    0.5,
    -0,      0.1,
    -0,      0,

    0.25,    0.5,
    0.18,   0.5, 
    -0.05,      0.1,

     0.25,    0.5,
    -0.05,      0.1,
    -0.05,      0,

     0.3,  -0.5, 
     0.6, -0.5,

     0.6, -0.5,
     0.6, 0.05,

     0.6, 0.05,
     0.35, 0.05,

     0.35, 0.05,
     0.35, 0.4,

     0.35, 0.4,
     0.6, 0.4,

     0.6, 0.4,
     0.6, 0.5,

     0.6, 0.5,
     0.3, 0.5,

     0.3, 0.5,
     0.3, -0.05,

     0.3, -0.05,
     0.55, -0.05,

     0.55, -0.05,
     0.55, -0.4,

     0.55, -0.4,
     0.3, -0.4,

     0.3, -0.4,
     0.3, -0.5,

     0.65, -0.5,
     0.65, 0.5,

     0.65, 0.5,
     0.95, 0.5,

     0.95, 0.5,
     0.95, 0.4,
   
     0.95, 0.4,
     0.70, 0.4,

     0.70, 0.4,
     0.70, 0.05,

     0.70, 0.05,
     0.95, 0.05,

     0.95, 0.05,
     0.95, -0.5,

     0.95, -0.5,
     0.65, -0.5,

     0.7, -0.05,
     0.9, -0.05,

     0.9, -0.05,
     0.9, -0.4,

     0.9, -0.4,
     0.7, -0.4,

     0.7, -0.4,
     0.7, -0.05,

  ];
  // buffer itu kayak pointernya. lokasi yg di gpu nya disimpan di buffer (?, cmiiw)
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices1), gl.STATIC_DRAW);
  // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices2), gl.STATIC_DRAW);
  // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices3), gl.STATIC_DRAW);

  // vertex shader
  var vertexShaderCode = `
    attribute vec2 aPosition;
    void main(){ 
      float x = aPosition.x;
      float y = aPosition.y;
      gl_PointSize = 10.0;
      //kita pake vec4 karena 4 dimensi (?)
      gl_Position = vec4(x, y, 0.0, 1.0);
      // gl_Position = vec4(aPosition.x, aPosition.y, 0.0, 1.0); //variasi
      // gl_Position = vec4(aPosition.xy, 0.0, 1.0); //variasi
    }`;

  // create shader
  var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject, vertexShaderCode);
  gl.compileShader(vertexShaderObject); //sampai sini udah jadi .o

  // fragment shader
  var fragmentShaderCode = `
    precision mediump float;
    //klo kita mau make float, kita harus pake precision
      void main(){ 
        float r = 0.0;
        float g = 1.0;
        float b = 1.0;
        gl_FragColor = vec4(r, g, b, 1.0);
      }
      `;
  var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
  gl.compileShader(fragmentShaderObject); //sampai sini jadi .o

  var shaderProgram = gl.createProgram(); // wadah dari excecutable (.exe)
  gl.attachShader(shaderProgram, vertexShaderObject);
  gl.attachShader(shaderProgram, fragmentShaderObject);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram); //kita siap untuk menggambar (scr analogi)

  // kita ngajarin GPU gimana caranya mengoleksi
  // nilai posisi dari ARRAY_BUFFERuntuk setiap verteks yang sedang diproses
  gl.clearColor(1.0, 0.5, 1.0, 1.0); //(merah, hijau, biru, transparansi)
  var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
  //parameter stride (1 strade tu bisa mencakup banyak elemen. skrg datanya cuman 1, jd kita pake 0. g ngerti y? gpp)
  gl.enableVertexAttribArray(aPosition);

  gl.clear(gl.COLOR_BUFFER_BIT);

  // gl.drawArrays(gl.POINTS, 0, 3); //(first -> dari index brp kita mau nulis datanya. count -> kita mau gambar/render brp kali)
  // gl.drawArrays(gl.LINES, 0, 2);
  // klo pake LINES itu 1 garis dari A ke B. trus 1 garis baru dari C ke D
  // gl.drawArrays(gl.LINES_LOOP, 0, 3);
  // klo LINES_LOOP, 1 garis dari A ke B, 1 Garis lagi dari B ke C, 1 garis lagi dari C ke A, dia nge loop
  // gl.drawArrays(gl.TRIANGLES, 0, 4);
  gl.drawArrays(gl.TRIANGLES, 0, 54);
  gl.drawArrays(gl.LINES, 54, 54);
}
