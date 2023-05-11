const times = [];
let fps;

function refreshLoop() {
  window.requestAnimationFrame(() => {
    // FPS number update
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;
    if (fps <= 10) {
      // For FPS between 0 and 10
      document.getElementById('count').style.color = '#ff0000';
    } else if (fps <= 30 && fps > 10) {
      // For FPS between 11 and 30
      document.getElementById('count').style.color = '#FFA500';
    } else {
      // For FPS 31 or above
      if (document.getElementById("toggleSwitch").checked == true) {
        // If dark mode is on
        document.getElementById('count').style.color = '#00ff00';
      } else {
        // If light mode is on
        document.getElementById('count').style.color = '#00c800';
      }
    }
    document.getElementById("count").innerHTML = fps;
    
    // FPS speedometer update
    var angle = fps * 0.6
    document.getElementById("pointer").style.transform = "rotate(" + angle + "deg)";

    // Dark/Light mode toggle update
    var mode = document.getElementById("toggleSwitch").checked
    if (mode == true) {
      document.body.style.background = "#000000";
      var list = document.getElementsByTagName('h4');
      for (var i = 0; i < list.length; i++) {
        list[i].style.color = "#ffffff";
      }
      var list = document.getElementsByTagName('h3');
      for (var i = 0; i < list.length; i++) {
        list[i].style.color = "#ffffff";
      }
      var list = document.getElementsByTagName('h1');
      for (var i = 0; i < list.length; i++) {
        list[i].style.color = "#6600ff";
      }
    } else if (mode == false) {
      document.body.style.background = "#e6e6e6";
      var list = document.getElementsByTagName('h4');
      for (var i = 0; i < list.length; i++) {
        list[i].style.color = "#000000";
      }
      var list = document.getElementsByTagName('h3');
      for (var i = 0; i < list.length; i++) {
        list[i].style.color = "#000000";
      }
      var list = document.getElementsByTagName('h1');
      for (var i = 0; i < list.length; i++) {
        list[i].style.color = "#ff8300";
      }
    }
    refreshLoop();
  });
}

refreshLoop()