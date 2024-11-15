function detectOS() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    return 'Android';
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'iOS';
  }
  return 'Unknown';
}

function isARSupported() {
  return navigator.xr && navigator.xr.isSessionSupported('immersive-ar');
}

function showUnsupportedMessage() {
  const message = document.createElement('div');
  message.style.position = 'absolute';
  message.style.top = '50%';
  message.style.left = '50%';
  message.style.transform = 'translate(-50%, -50%)';
  message.style.textAlign = 'center';
  message.innerHTML = 'מכשירך אינו תומך ב-AR. אנא נסה במכשיר אחר.';
  document.body.appendChild(message);
}

function init() {
  const os = detectOS();
  
  if (os === 'Unknown' || !isARSupported()) {
    showUnsupportedMessage();
    return;
  }
<body style="margin: 0; overflow: hidden;">
    <!-- Pink border to guide trigger placement -->
    <div class="pink-border"></div>

    <!-- AR Scene -->
    <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-assets>
          
            <a-asset-item id="animated-model" src="dancing-character.glb"></a-asset-item>
        </a-assets>
 <!-- Load the images and 3D model -->
            <img id="model-image" src="model.png">
            <img id="model-image1" src="model1.png">
            <img id="model-image2" src="model2.png">
            <img id="model-image3" src="model3.png">
            <img id="model-image4" src="model4.png">
            <img id="model-image5" src="model5.png">
            <img id="model-image6" src="model6.png">
            <img id="model-image7" src="model7.png">
            <img id="model-image8" src="model8.png">
            <img id="model-image9" src="model9.png">
        <!-- Define the markers and their associated images and animations -->
        <a-marker type="pattern" url="trigger.patt">
            <a-image src="#model-image" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <a-entity gltf-model="#animated-model" 
                      position="0.7 0 1" 
                      scale="0.7 0.7 0.7" 
                      rotation="-120 0 0" 
                      animation-mixer>
            </a-entity>
 </a-marker>

        <!-- Repeat the above structure for other markers (trigger1.patt to trigger9.patt) -->
  <a-marker type="pattern" url="trigger1.patt">
            <a-image src="#model-image1" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <a-entity gltf-model="#animated-model" 
                      position="0.7 0 1" 
                      scale="0.7 0.7 0.7" 
                      rotation="-120 0 0" 
                      animation-mixer>
            </a-entity>
        </a-marker>

<a-marker type="pattern" url="trigger2.patt">
            <a-image src="#model-image2" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <a-entity gltf-model="#animated-model" 
                      position="0.7 0 1" 
                      scale="0.7 0.7 0.7" 
                      rotation="-120 0 0" 
                      animation-mixer>
            </a-entity>
        </a-marker>

<a-marker type="pattern" url="trigger3.patt">
            <a-image src="#model-image3" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <a-entity gltf-model="#animated-model" 
                      position="0.7 0 1" 
                      scale="0.7 0.7 0.7" 
                      rotation="-120 0 0" 
                      animation-mixer>
            </a-entity>
        </a-marker>

<a-marker type="pattern" url="trigger4.patt">
            <a-image src="#model-image4" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <a-entity gltf-model="#animated-model" 
                      position="0.7 0 1" 
                      scale="0.7 0.7 0.7" 
                      rotation="-120 0 0" 
                      animation-mixer>
            </a-entity>
        </a-marker>

<a-marker type="pattern" url="trigger5.patt">
            <a-image src="#model-image5" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <a-entity gltf-model="#animated-model" 
                      position="0.7 0 1" 
                      scale="0.7 0.7 0.7" 
                      rotation="-120 0 0" 
                      animation-mixer>
            </a-entity>
        </a-marker>

<a-marker type="pattern" url="trigger6.patt">
            <a-image src="#model-image6" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <a-entity gltf-model="#animated-model" 
                      position="0.7 0 1" 
                      scale="0.7 0.7 0.7" 
                      rotation="-120 0 0" 
                      animation-mixer>
            </a-entity>
        </a-marker>

<a-marker type="pattern" url="trigger7.patt">
            <a-image src="#model-image7" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <a-entity gltf-model="#animated-model" 
                      position="0.7 0 1" 
                      scale="0.7 0.7 0.7" 
                      rotation="-120 0 0" 
                      animation-mixer>
            </a-entity>
        </a-marker>

<a-marker type="pattern" url="trigger8.patt">
            <a-image src="#model-image8" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <a-entity gltf-model="#animated-model" 
                      position="0.7 0 1" 
                      scale="0.7 0.7 0.7" 
                      rotation="-120 0 0" 
                      animation-mixer>
            </a-entity>
        </a-marker>

<a-marker type="pattern" url="trigger9.patt">
            <a-image src="#model-image9" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <a-entity gltf-model="#animated-model" 
                      position="0.7 0 1" 
                      scale="0.7 0.7 0.7" 
                      rotation="-120 0 0" 
                      animation-mixer>
            </a-entity>
        </a-marker>

        <!-- Camera -->
        <a-entity camera></a-entity>
    </a-scene>

    <!-- Button linking to the website -->
    <div class="button-container">
        <button class="visit-site-button" onclick="window.open('https://irispelled.com', '_blank');">
            Visit irispelled.com
        </button>
    </div>
</body>
</html>

  // צרף קוד קיים כאן (יצירת סצנה, מצלמה, רנדרר וכו')

  var arToolkitSource = new THREEx.ArToolkitSource({
    sourceType: 'webcam',
  });

  arToolkitSource.init(function onReady() {
    onResize();
  });
  
  window.addEventListener('resize', function() {
    onResize();
  });
  
  var arToolkitContext = new THREEx.ArToolkitContext({
    cameraParametersUrl: 'data/camera_para.dat',
    detectionMode: 'mono',
  });
  
  arToolkitContext.init(function onCompleted() {
    camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
  });

  if (os === 'Android') {
    arToolkitContext.arController.orientation = 'portrait';
    arToolkitContext.arController.options.orientation = 'portrait';
  }

  // צרף קוד קיים כאן (יצירת מרקרים, הוספת אובייקטים לסצנה וכו')

  function onResize() {
    arToolkitSource.onResizeElement();
    arToolkitSource.copyElementSizeTo(renderer.domElement);
    if (arToolkitContext.arController !== null) {
      arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    if (arToolkitSource.ready !== false) {
      arToolkitContext.update(arToolkitSource.domElement);
    }
    renderer.render(scene, camera);
  }

  requestAnimationFrame(animate);
}

// קריאה לפונקציית init כאשר הדף נטען
window.addEventListener('load', init);