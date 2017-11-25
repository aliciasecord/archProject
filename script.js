let sun = document.getElementById('sun');
let mercury = document.getElementById('mercury');
let venus = document.getElementById('venus');
let earth = document.getElementById('earth');
let mars = document.getElementById('mars');
let jupiter = document.getElementById('jupiter');
let saturn = document.getElementById('saturn');
let neptune = document.getElementById('neptune');
let uranus = document.getElementById('uranus');
let pluto = document.getElementById('pluto');
let objects = new tracking.ObjectTracker('face');

objects.on('track', function(event) {
  if (event.data.length === 0) {
    // No objects were detected in this frame.
  } else {
    event.data.forEach(function(rect) {
      // console.log(rect.x, rect.y, rect.height, rect.width)
      console.log(rect.height);
      if (rect.height > 120){
        // mercury
        sun.style.width = "360px";
        sun.style.top = "0px";
        mercury.style.width = "200px";
        mercury.style.top = "360px";
        venus.style.width = "150px"
        venus.style.top = "2125px";
        earth.style.width = "100px";
        earth.style.top = "2275px";
        mars.style.width = "75px";
        mars.style.top = "2375px";
        jupiter.style.width = "50px";
        jupiter.style.top = "2450px";
        saturn.style.width = "40px"
        saturn.style.top = "2500px";
        uranus.style.width = "30px";
        uranus.style.top = "2540px";
        neptune.style.width = "20px";
        neptune.style.top = "2570px";
        pluto.style.width = "10px";
        pluto.style.top = "2590px";
      }
      if (rect.height >= 100 && rect.height < 120){
        // venus
        sun.style.top = "-20px";
        mercury.style.width = "150px";
        mercury.style.top = "340px";
        venus.style.width = "200px";
        venus.style.top = "490px";
        earth.style.width = "150px";
        earth.style.top = "2135px";
        mars.style.width = "100px";
        mars.style.top = "2285px";
        jupiter.style.width = "75px";
        jupiter.style.top = "2385px";
        saturn.style.width = "50px";
        saturn.style.top = "2460px";
        uranus.style.width = "40px";
        uranus.style.top = "2510px";
        neptune.style.top = "30px";
        neptune.style.top = "2550px";
        pluto.style.width = "20px";
        pluto.style.top = "2580px";

      }
      if (rect.height >= 80 && rect.height < 100){
        // earth
        sun.style.top = "-40px";
        mercury.style.width = "100px";
        mercury.style.top = "320px";
        venus.style.width = "150px";
        venus.style.top = "420px";
        earth.style.width = "200px";
        earth.style.top = "570px";
        mars.style.width = "150px";
        mars.style.top = "1955px";
        jupiter.style.width = "100px";
        jupiter.style.top = "2105px";
        saturn.style.width = "75px";
        saturn.style.top = "2205px";
        uranus.style.width = "50px";
        uranus.style.top = "2280px";
        neptune.style.width = "40px";
        neptune.style.top = "2330px";
        pluto.style.width = "30px";
        pluto.style.top = "2570px";
      }
      if (rect.height >= 70 && rect.height < 80){
        // mars
        sun.style.top = "-60px";
        mercury.style.width = "75px";
        mercury.style.top = "300px";
        venus.style.width = "100px";
        venus.style.top = "375px";
        earth.style.width = "150px";
        earth.style.top = "475px";
        mars.style.width = "200px";
        mars.style.top = "625px";
        jupiter.style.width = "150px";
        jupiter.style.top = "2185px";
        saturn.style.width = "100px";
        saturn.style.top = "2335px";
        uranus.style.width = "75px";
        uranus.style.top = "2435px";
        neptune.style.width = "50px";
        neptune.style.top = "2510px";
        pluto.style.width = "40px";
        pluto.style.top = "2560px";
      }
      if (rect.height >= 60 && rect.height < 70){
        // jupiter
        sun.style.top = "-80px";
        mercury.style.width = "50px";
        mercury.style.top = "280px";
        venus.style.width = "75px";
        venus.style.top = "355px";
        earth.style.width = "100px";
        earth.style.top = "430px";
        mars.style.width = "150px";
        mars.style.top = "530px";
        jupiter.style.width = "200px";
        jupiter.style.top = "680px";
        saturn.style.width = "150px";
        saturn.style.top = "2225px";
        uranus.style.width = "100px";
        uranus.style.top = "2375px";
        neptune.style.width = "75px";
        neptune.style.top = "2475px";
        pluto.style.width = "50px";
        pluto.style.top = "2550px";
      }
      if (rect.height >= 50 && rect.height < 60){
        // saturn
        sun.style.top = "-100px";
        mercury.style.width = "40px";
        mercury.style.top = "260px";
        venus.style.width = "50px";
        venus.style.top = "300px";
        earth.style.width = "75px";
        earth.style.top = "350px";
        mars.style.width = "100px";
        mars.style.top = "425px";
        jupiter.style.width = "150px";
        jupiter.style.top = "525px";
        saturn.style.width = "200px";
        saturn.style.top = "675px";
        uranus.style.width = "150px";
        uranus.style.top = "2275px";
        neptune.style.width = "100px";
        neptune.style.top = "2425px";
        pluto.style.width = "75px";
        pluto.style.top = "2525px";
      }
      if (rect.height >= 40 && rect.height < 50){
        // uranus
        sun.style.top = "-120px";
        mercury.style.width = "30px";
        mercury.style.top = "240px";
        venus.style.width = "40px";
        venus.style.top = "270px";
        earth.style.width = "50px";
        earth.style.top = "310px";
        mars.style.width = "75px";
        mars.style.top = "360px";
        jupiter.style.width = "100px";
        jupiter.style.top = "435px";
        saturn.style.width = "150px";
        saturn.style.top = "535px";
        uranus.style.width = "200px";
        uranus.style.top = "685px";
        neptune.style.width = "150px";
        neptune.style.top = "2350px";
        pluto.style.width = "100px";
        pluto.style.top = "2500px";
      }
      if (rect.height >= 30 && rect.height < 40){
        // neptune
        sun.style.top = "-140px";
        mercury.style.width = "20px";
        mercury.style.top = "220px";
        venus.style.width = "30px";
        venus.style.top = "240px";
        earth.style.width = "40px"
        earth.style.top = "270px";
        mars.style.width = "50px";
        mars.style.top = "310px";
        jupiter.style.width = "75px";
        jupiter.style.top = "360px";
        saturn.style.width = "100px";
        saturn.style.top = "440px";
        uranus.style.width = "150px";
        uranus.style.top = "540px";
        neptune.style.width = "200px";
        neptune.style.top = "690px";
        pluto.style.width = "150px";
        pluto.style.top = "2450px";
      }
      if (rect.height < 30){
        // pluto
        sun.style.top = "-160px";
        mercury.style.width = "10px";
        mercury.style.top = "200px";
        venus.style.width = "20px";
        venus.style.top = "210px";
        earth.style.width = "30px";
        earth.style.top = "230px";
        mars.style.width = "40px";
        mars.style.top = "260px";
        jupiter.style.width = "50px";
        jupiter.style.top = "300px";
        saturn.style.width = "75px";
        saturn.style.top = "350px";
        uranus.style.width = "100px";
        uranus.style.top = "425px";
        neptune.style.width = "150px";
        neptune.style.top = "525px";
        pluto.style.width = "200px";
        pluto.style.top = "675px";
      }
      else {
        sun.style.top = "0px";
        mercury.style.width = "23px";
        mercury.style.top = "1838px";
        venus.style.width = "53px";
        venus.style.top = "1861px";
        earth.style.width = "60px";
        earth.style.top = "1914px";
        mars.style.width = "53px";
        mars.style.top = "1974px";
        jupiter.style.width = "200px";
        jupiter.style.top = "2027px";
        saturn.style.width = "150px";
        saturn.style.top = "2227px";
        uranus.style.width = "100px";
        uranus.style.top = "2377px";
        neptune.style.width = "100px";
        neptune.style.top = "2477px";
        pluto.style.width = "23px";
        pluto.style.top = "2577px";
      }
    });
  }
});

tracking.track('#myVideo', objects, {camera: true})
