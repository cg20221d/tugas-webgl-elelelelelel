function main() {
    kanvas = document.getElementById("kanvas");
    gl = kanvas.getContext("webgl");

    var vertices = [
        //verticesY
        //DEPAN
        //kiri
        -3.5,  2,    0,    1, 0, 0,  0, 0, 1,// Index:  0  kanan
        -3.9,  2,    0,    1, 0, 0,  0, 0, 1,// Index:  1  kiri
        -2.7,  0.2,  0,    1, 0, 0,  0, 0, 1,// Index:  2 
        -2.7,  0.7,  0,    1, 0, 0,  0, 0, 1,// Index:  3
        //tengah
        -3,   -1.5,  0,    1, 0, 0,  0, 0, 1,// Index:  4 bawah kiri
        -2.7, -1.5,  0,    1, 0, 0,  0, 0, 1,// Index:  5 bawah kanan
        -2.7,  0.64, 0,    1, 0, 0,  0, 0, 1,// Index:  6 atas kanan
        -3,    0.64, 0,    1, 0, 0,  0, 0, 1,// Index:  7 atas kiri
        //kanan
        -2.2,  2,    0,    1, 0, 0,  0, 0, 1,// Index:  8 kiri
        -1.8,  2,    0,    1, 0, 0,  0, 0, 1,// Index:  9 kanan
        -3,    0.2,  0,    1, 0, 0,  0, 0, 1,// Index:  10 
        -3,    0.7,  0,    1, 0, 0,  0, 0, 1,// Index:  11
        //BELAKANG
        //kiri
        -3.5,  2,    -0.5,    0, 1, 1,  0, 0, -1,// Index:  12 kanan
        -3.9,  2,    -0.5,    0, 1, 1,  0, 0, -1,// Index:  13 kiri
        -2.7,  0.2,  -0.5,    0, 1, 1,  0, 0, -1,// Index:  14 
        -2.7,  0.7,  -0.5,    0, 1, 1,  0, 0, -1,// Index:  15
        //tengah
        -3,   -1.5,  -0.5,    0, 1, 1,  0, 0, -1,// Index:  16 bawah kiri
        -2.7, -1.5,  -0.5,    0, 1, 1,  0, 0, -1,// Index:  17 bawah kanan
        -2.7,  0.64, -0.5,    0, 1, 1,  0, 0, -1,// Index:  18 atas kanan
        -3,    0.64, -0.5,    0, 1, 1,  0, 0, -1,// Index:  19 atas kiri
        //kanan
        -2.2,  2,    -0.5,    0, 1, 1,  0, 0, -1,// Index:  20 kanan
        -1.8,  2,    -0.5,    0, 1, 1,  0, 0, -1,// Index:  21 kiri
        -3,    0.2,  -0.5,    0, 1, 1,  0, 0, -1,// Index:  22 
        -3,    0.7,  -0.5,    0, 1, 1,  0, 0, -1,// Index:  23
        -4,   -1,  0,      0, 0, 2,   0, 0, -1,// Index:  0 
        -2.8, -1,  0,      0, 0, 2,  0, 0, -1, // Index:  1 
        -2.8,  0,  0,      0, 0, 2,  0, 0, -1, // Index:  2 
        -4,    0,  0,      0, 0, 2,  0, 0, -1, // Index:  3 
        -4,    2,  0,      0, 0, 2,  0, 0, -1, // Index:  4 
        -2.5,  2,  0,      0, 0, 2,  0, 0, -1, // Index:  5 
        -2.5,  1.5,  0,    0, 0, 2,  0, 0, -1, // Index:  6 
        -3.7,  1.5,  0,    0, 0, 2,  0, 0, -1, // Index:  7 
        -3.7,  0.5,  0,    0, 0, 2,  0, 0, -1, // Index:  8 
        -2.5,  0.5,  0,    0, 0, 2,  0, 0, -1, // Index:  9 
        -2.5, -1.5,  0,    0, 0, 2,  0, 0, -1, // Index:  10
        -4, -1.5,  0,      0, 0, 2,  0, 0, -1, // Index:  11
        //Belakang x + 0,5 y +0,3
        -3.5, -0.7,  -0.5,    0, 0, 2,  0, 0, -1, // Index:  12 
        -2.3, -0.7,  -0.5,    0, 0, 2,  0, 0, -1, // Index:  13 
        -2.3,  0.3,  -0.5,    0, 0, 2,  0, 0, -1, // Index:  14 
        -3.5,  0.3,  -0.5,      0, 0, 2, 0, 0, -1,  // Index:  15 
        -3.5,  2.3,  -0.5,      0, 0, 2, 0, 0, -1,  // Index:  16 
        -2,    2.3,  -0.5,      0, 0, 2, 0, 0, -1,  // Index:  17 
        -2,    1.8,  -0.5,    0, 0, 2,   0, 0, -1,// Index:  18 
        -3.2,  1.8,  -0.5,    0, 0, 2,   0, 0, -1,// Index:  19 
        -3.2,  0.8,  -0.5,    0, 0, 2,  0, 0, -1, // Index:  20 
        -2,  0.8,  -0.5,     0, 0, 2,   0, 0, -1,// Index:  21
        -2, -1.2,  -0.5,    0,0, 2,   0, 0, -1,// Index:  21
        -3.5, -1.2,  -0.5,  0, 0, 2,  0, 0, -1, // Index:  23
        // Face A
        -0.4, 0, 0.4,      1, 1, 1,   0, 0, 1,// Index:  0    
        0.3, 0, 0.4,         1, 1, 1,   0, 0, 1,// Index:  1
        0.3,  1, 0.4,        1, 1, 1,   0, 0, 1,// Index:  2
        -0.4,  1, 0.4,     1, 1, 1,   0, 0, 1,// Index:  3
        // Face B       
        -0.4, 0,  1,        1, 1, 1,   0, 0, -1,// Index:  4
        0.3, 0,  1,           1, 1, 1,   0, 0, -1, // Index:  5
        0.3,  1,  1,          1, 1, 1,   0, 0, -1,// Index:  6
        -0.4,  1,  1,       1, 1, 1,   0, 0, -1,// Index:  7
        // Face C      
        -0.4, 0, 0.4,      1, 1, 1,     -1, 0, 0,// Index:  8
        -0.4,  1, 0.4,     1, 1, 1,     -1, 0, 0,// Index:  9
        -0.4,  1,  1,       1, 1, 1,    -1, 0, 0,// Index: 10
        -0.4, 0,  1,        1, 1, 1,    -1, 0, 0,// Index: 11
        // Face D      
        0.3, 0, 0.4,         1, 1, 1,    1, 0, 0,// Index: 12
        0.3,  1, 0.4,        1, 1, 1,    1, 0, 0,// Index: 13
        0.3,  1,  1,         1, 1, 1,    1, 0, 0,// Index: 14
        0.3, 0,  1,          1, 1, 1,    1, 0, 0,// Index: 15
        // Face E      
        -0.4, 0, 0.4,      1, 1, 1,     0, -1, 0,// Index: 16
        -0.4, 0,  1,         1, 1, 1,    0, -1, 0,// Index: 17
        0.4, 0,  1,           1, 1, 1,    0, -1, 0,// Index: 18
        0.4, 0, 0.4,         1, 1, 1,     0, -1, 0,// Index: 19
        // Face F     
        -0.4,  1, 0.4,     1, 1, 1,     0, 1, 0,// Index: 20
        -0.4,  1,  1,       1, 1, 1,    0, 1, 0,// Index: 21
        0.3,  1,  1,          1, 1, 1,    0, 1, 0,// Index: 22
        0.3,  1, 0.4,        1, 1, 1,     0, 1, 0// Index: 23
];

    // Vertex shader
    var vertexShaderCode = `
    attribute vec3 aPosition;   // Sebelumnya vec2, makanya tidak tergambar kubus :D
    attribute vec3 aColor;
    attribute vec3 aNormal;
    uniform mat4 uModel;
    uniform mat4 uView;
    uniform mat4 uProjection;
    varying vec3 vPosition;
    varying vec3 vColor;
    varying vec3 vNormal;
    void main() {
        gl_Position = uProjection * uView * uModel * vec4(aPosition, 1.0);
        vColor = aColor;
        vNormal = aNormal;
        vPosition = (uModel * vec4(aPosition, 1.0)).xyz;
    }
    `;
    var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject, vertexShaderCode);
    gl.compileShader(vertexShaderObject);   // sampai sini sudah jadi .o

    // Fragment shader
    var fragmentShaderCode = `
    precision mediump float;
    varying vec3 vColor;
    uniform vec3 uLightConstant;
    uniform float uAmbientIntensity;
    uniform vec3 uLightPosition;
    uniform vec3 uViewerPosition;
    uniform mat3 uNormalModel;
    varying vec3 vPosition;
    varying vec3 vNormal;
    void main() {
        vec3 ambient = uLightConstant * uAmbientIntensity;
        vec3 lightRay = vPosition - uLightPosition;
        vec3 normalizedLight = normalize(-lightRay);
        vec3 normalizedNormal = normalize(uNormalModel * vNormal);
        float cosTheta = dot(normalizedNormal, normalizedLight);
        vec3 diffuse = vec3(0.0, 0.0, 0.0);
        if (cosTheta > 0.0) {
            float diffuseIntensity = cosTheta;
            diffuse = uLightConstant * diffuseIntensity;
        }
        vec3 normalizedReflector = normalize(reflect(lightRay, normalizedNormal));
        vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
        float cosPhi = dot(normalizedReflector, normalizedViewer);
        vec3 specular = vec3(0.0, 0.0, 0.0);
        if (cosPhi > 0.0) {
            float shininessConstant = 100.0;    // batas minimum spesifikasi spekular untuk materi logam
            float specularIntensity = pow(cosPhi, shininessConstant);
            specular = uLightConstant * specularIntensity;
        }
        vec3 phong = ambient + diffuse + specular;
        gl_FragColor = vec4(phong * vColor, 1.0);
    }
    `;
    var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
    gl.compileShader(fragmentShaderObject);   // sampai sini sudah jadi .o

    shaderProgram = gl.createProgram(); // wadah dari executable (.exe)
    gl.attachShader(shaderProgram, vertexShaderObject);
    gl.attachShader(shaderProgram, fragmentShaderObject);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    var gl, kanvas, shaderProgram;
    var uModel, uView, uProjection, view, model;
    var thetaXSpeed = 0.0;
    var thetaX = 0.0;
    var thetaZ = 0.0;
    var DeltaZ = 0.0;
    var horizontalkubus = 0.0;
    var horizontalkubusDelta = 0.0;
    var Deltax = 0.0;
    var horizontalSpeed = 0.0156;
    // Model
    uModel = gl.getUniformLocation(shaderProgram, "uModel");

    // View
    var cameraX = 0.0;
    var cameraZ = 7.5;
    uView = gl.getUniformLocation(shaderProgram, "uView");
    view = glMatrix.mat4.create();
    glMatrix.mat4.lookAt(
        view,
        [cameraX, 0.0, cameraZ],
        [cameraX, 0.0, -10],
        [0.0, 1.0, 0.0]
    );

    // Atur perspektif kamera dengan area pandang 75 derajat, rasio aspek persegi, titik potong dekat 0.5, titik potong jauh 50.0
    uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    perspective = glMatrix.mat4.create();
    glMatrix.mat4.perspective(perspective, glMatrix.glMatrix.toRadian(75), 1.0, 0.5, 50.0);

    function onKeydown(event) {
        if (event.keyCode == 37){
            thetaYSpeed = -0.01;
        }
        if (event.keyCode == 39){
            thetaYSpeed = 0.01;
        } 
        if (event.keyCode == 38){
            thetaXSpeed = -0.01;
        } 
        if (event.keyCode == 40){
            thetaXSpeed = 0.01;
        } 
        if (event.keyCode == 73){
            thetaZ = 0.01; 
        }   // I, maju
        if (event.keyCode == 75){
            thetaZ = -0.01;
        }    // K, mundur
        if (event.keyCode == 74){
            horizontalkubus = -0.01; 
        }  // J, kiri
        if (event.keyCode == 76){
            horizontalkubus = 0.01; 
        }   // L, kanan
    }
    function onKeyup(event) {
        if (event.keyCode == 37 || event.keyCode == 39){
            thetaYSpeed = 0.0;
        }
        if (event.keyCode == 38 || event.keyCode == 40){
            thetaXSpeed = 0.0;
        }
        if (event.keyCode == 74 || event.keyCode == 76){
            horizontalkubus = 0.0;
        }
        if (event.keyCode == 73 || event.keyCode == 75){
            thetaZ = 0.0;
        }
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);



    function translate5() {
        var indices = [
            24,25,
            25,26,
            26,27,
            27,28,
            28,29,
            29,30,
            30,31,
            31,32,
            32,33,
            33,34,
            34,35,
            35,24,
            36,37,
            37,38,
            38,39,
            39,40,
            40,41,
            41,42,
            42,43,
            43,44,
            44,45,
            45,46,
            46,47,
            47,36,
            24,36,
            25,37,
            26,38,
            27,39,
            28,40,
            29,41,
            30,42,
            31,43,
            32,44,
            33,45,
            34,46,
            35,47,
        ];

        var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
        gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false,
            9 * Float32Array.BYTES_PER_ELEMENT,
            0);
        gl.enableVertexAttribArray(aPosition);
    
        var aColor = gl.getAttribLocation(shaderProgram, "aColor");
        gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false,
            9 * Float32Array.BYTES_PER_ELEMENT,
            3 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aColor);

        var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
        gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        6 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aNormal);

        var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
        var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
        gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]);   // warna sumber cahaya: oranye
        gl.uniform1f(uAmbientIntensity, 0.456);               // intensitas cahaya: 40%
        var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
        gl.uniform3fv(uLightPosition, [horizontalkubusDelta, 0.0, DeltaZ]);
        var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");

        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        var indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

        Deltax += horizontalSpeed;
        if (Deltax > 1.6 || Deltax < -2.8) {
            horizontalSpeed *= -1; // Pantul
        }
        model = glMatrix.mat4.create();
        glMatrix.mat4.translate(
            model, model, [Deltax, 0.0, 0.0]
        );
        gl.uniformMatrix4fv(uModel, false, model);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);
        var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);
        gl.drawElements(gl.LINES, indices.length, gl.UNSIGNED_SHORT, 0);
    }

    function rotateY() {
        var indices = [
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

        var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
        gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false,
            9 * Float32Array.BYTES_PER_ELEMENT,
            0);
        gl.enableVertexAttribArray(aPosition);
    
        var aColor = gl.getAttribLocation(shaderProgram, "aColor");
        gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false,
            9 * Float32Array.BYTES_PER_ELEMENT,
            3 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aColor);

        var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
        gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        6 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aNormal);

        var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
        var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
        gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]);   // warna sumber cahaya: oranye
        gl.uniform1f(uAmbientIntensity, 0.456);               // intensitas cahaya: 40%
        var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
        gl.uniform3fv(uLightPosition, [horizontalkubusDelta, 0.0, DeltaZ]);
        var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
        

        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        var indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

        thetaX += thetaXSpeed;
        model = glMatrix.mat4.create();
        glMatrix.mat4.rotateX(
            model, model, thetaX
        );
        gl.uniformMatrix4fv(uModel, false, model);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);
        var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    }
    function kubus() {
        var indices = [
            48,49,
            50,48,
            50,51,
            52,53,
            54,52,
            54,55,
            56,57,
            58,56,
            58,59,
            60,61,
            62,60,
            62,63,
            64,65,
            66,64,
            66,67,
            68,69,
            70,68,
            70,71,
            
        ];

        var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
        gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false,
            9 * Float32Array.BYTES_PER_ELEMENT,
            0);
        gl.enableVertexAttribArray(aPosition);
    
        var aColor = gl.getAttribLocation(shaderProgram, "aColor");
        gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false,
            9 * Float32Array.BYTES_PER_ELEMENT,
            3 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aColor);

        var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
        gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        6 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aNormal);
        var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
        gl.uniform3fv(uLightPosition, [horizontalkubusDelta, 0.0, DeltaZ]);
        var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
        

        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        var indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
        
        horizontalkubusDelta += horizontalkubus;
        DeltaZ += thetaZ;
        model = glMatrix.mat4.create();
        glMatrix.mat4.translate(
            model, model, [horizontalkubusDelta, 0.0, DeltaZ]
        );

        gl.uniformMatrix4fv(uModel, false, model);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);
        var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    }

    function render() {
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.3, 0.3, 0.3, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        rotateY();
        translate5();
        kubus();

    requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
