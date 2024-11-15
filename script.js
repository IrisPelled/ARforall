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
  
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
      // המצלמה נפתחה בהצלחה
      startAR(os);
    })
    .catch(function(err) {
      console.log("שגיאה בפתיחת המצלמה: ", err);
      showUnsupportedMessage();
    });
}
function startAR(os) {
  const scene = new THREE.Scene();
  const camera = new THREE.Camera();
  scene.add(camera);
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setSize(640, 480);
  document.body.appendChild(renderer.domElement);

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

  var markerRoot = new THREE.Group();
  scene.add(markerRoot);
  var artoolkitMarker = new THREEx.ArMarkerControls(arToolkitContext, markerRoot, {
    type: 'pattern',
    patternUrl: "data/hiro.patt"
  });

  // הוסיפי כאן את האובייקטים שלך לסצנה (למשל, הקוביה והמישור)

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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AR Dancing Character</title>
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/AR-js-org/AR.js/aframe/build/aframe-ar.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js"></script> <!-- הוספת סקריפט להפעלת אנימציות -->
    <style>
        .button-container {
            position: absolute;
            bottom: 20px;
            left: 0;
            width: 100%;
            text-align: center;
            z-index: 10;
        }

        .visit-site-button, .play-videos-button {
            padding: 10px 20px;
            background-color: pink;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            color: white;
            margin: 5px;
        }

        .pink-border {
            position: absolute;
            top: 10%;
            left: 10%;
            width: 80%;
            height: 60%;
            border: 4px solid hotpink;
            box-sizing: border-box;
            z-index: 5;
        }
    </style>
<script src="ar-script.js"></script>
</head>
<body style="margin: 0; overflow: hidden;">

    <!-- Pink border to guide trigger placement -->
    <div class="pink-border"></div>

    <!-- AR Scene -->
    <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-assets>
            <!-- Load the images, videos and 3D model -->
            <img id="model-image" src="model.png">
            <img id="model-image1" src="model1.png">
            <img id="model-image2" src="model2.png">
            <img id="model-image3" src="model3.png">
            <img id="model-image4" src="model4.png">
            <img id="model-image5" src="model5.png">
            <img id="model-image6" src="model6.png">
            <img id="model-image7" src="model7.png">
            <img id="model-image8" src="model8.png">
            <a-asset-item id="animated-model" src="dancing-character.glb"></a-asset-item>

            <!-- Adding videos to assets -->
            <video id="video10" src="video10.mp4" preload="auto" playsinline loop></video>
            
        </a-assets>

  
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
  <!-- Define the markers and their associated images and animations -->
        <a-marker type="pattern" url="trigger.patt" id="marker1">
            <a-image src="#model-image" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <!-- Adding the 3D model here with animation-mixer -->
            <a-entity gltf-model="#animated-model" position="0.7 0 1" scale="0.7 0.7 0.7" rotation="-120 0 0" animation-mixer></a-entity>
        </a-marker>

        <a-marker type="pattern" url="trigger1.patt" id="marker2">
            <a-image src="#model-image1" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <!-- Adding the 3D model here with animation-mixer -->
            <a-entity gltf-model="#animated-model" position="0.7 0 1" scale="0.7 0.7 0.7" rotation="-120 0 0" animation-mixer></a-entity>
        </a-marker>

        <a-marker type="pattern" url="trigger2.patt" id="marker3">
            <a-image src="#model-image2" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <!-- Adding the 3D model here with animation-mixer -->
            <a-entity gltf-model="#animated-model" position="0.7 0 1" scale="0.7 0.7 0.7" rotation="-120 0 0" animation-mixer></a-entity>
        </a-marker>

        <a-marker type="pattern" url="trigger3.patt" id="marker4">
            <a-image src="#model-image3" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <!-- Adding the 3D model here with animation-mixer -->
            <a-entity gltf-model="#animated-model" position="0.7 0 1" scale="0.7 0.7 0.7" rotation="-120 0 0" animation-mixer></a-entity>
        </a-marker>

        <a-marker type="pattern" url="trigger4.patt" id="marker5">
            <a-image src="#model-image4" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <!-- Adding the 3D model here with animation-mixer -->
            <a-entity gltf-model="#animated-model" position="0.7 0 1" scale="0.7 0.7 0.7" rotation="-120 0 0" animation-mixer></a-entity>
        </a-marker>

        <a-marker type="pattern" url="trigger5.patt" id="marker6">
            <a-image src="#model-image5" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <!-- Adding the 3D model here with animation-mixer -->
            <a-entity gltf-model="#animated-model" position="0.7 0 1" scale="0.7 0.7 0.7" rotation="-120 0 0" animation-mixer></a-entity>
        </a-marker>

        <a-marker type="pattern" url="trigger6.patt" id="marker7">
            <a-image src="#model-image6" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <!-- Adding the 3D model here with animation-mixer -->
            <a-entity gltf-model="#animated-model" position="0.7 0 1" scale="0.7 0.7 0.7" rotation="-120 0 0" animation-mixer></a-entity>
        </a-marker>

        <a-marker type="pattern" url="trigger7.patt" id="marker8">
            <a-image src="#model-image7" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <!-- Adding the 3D model here with animation-mixer -->
            <a-entity gltf-model="#animated-model" position="0.7 0 1" scale="0.7 0.7 0.7" rotation="-120 0 0" animation-mixer></a-entity>
        </a-marker>

        <a-marker type="pattern" url="trigger8.patt" id="marker9">
            <a-image src="#model-image8" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <!-- Adding the 3D model here with animation-mixer -->
            <a-entity gltf-model="#animated-model" position="0.7 0 1" scale="0.7 0.7 0.7" rotation="-120 0 0" animation-mixer></a-entity>
        </a-marker>

     
        <a-marker type="pattern" url="trigger8.patt" id="marker9">
            <a-image src="#model-image8" position="0 0 0" scale="1 1 1" rotation="-120 0 0"></a-image>
            <!-- Adding the 3D model here with animation-mixer -->
            <a-entity gltf-model="#animated-model" position="0.7 0 1" scale="0.7 0.7 0.7" rotation="-120 0 0" animation-mixer></a-entity>
        </a-marker>



                               <!-- Camera -->
        <a-entity camera></a-entity>
    </a-scene>

    <!-- Buttons for actions -->
    <div class="button-container">
        <button id="play-pause-button" class="play-videos-button" onclick="togglePlayPause()">Play/Pause Videos</button>
        <button class="visit-site-button" onclick="window.open('https://irispelled.com', '_blank');">Visit irispelled.com</button>
    </div>

    <!-- JavaScript to handle play/pause videos and stop sound when switching markers -->
    <script>
        var isPlaying = false;
        var currentVideo = null;

        function togglePlayPause() {
            if (currentVideo) {
                if (isPlaying) {
                    currentVideo.pause();
                    document.getElementById('play-pause-button').textContent = "Play Videos";
                } else {
                    currentVideo.muted = false;
                    currentVideo.play();
                    document.getElementById('play-pause-button').textContent = "Pause Videos";
                }
                isPlaying = !isPlaying;
            }
        }

        // Function to stop all videos when a new marker is detected
        function stopAllVideos() {
            var video10 = document.getElementById('video10');
            
            video10.pause();
            
            video10.currentTime = 0;
            
            isPlaying = false; // Reset the play state
            document.getElementById('play-pause-button').textContent = "Play Videos"; // Reset button text
        }

        // Listen for marker detections and stop videos when switching markers
        var markers = document.querySelectorAll('a-marker');
        markers.forEach(function(marker) {
            marker.addEventListener('markerFound', function() {
                stopAllVideos(); // Stop all other videos
                if (marker.id === 'marker-video10') {
                    currentVideo = document.getElementById('video10');
                                }
            });
        });
    </script>
</body>
</html>

  
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
