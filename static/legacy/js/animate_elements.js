function animate_logo(element) {
  var animation = anime({
    targets: element,
    rotate: ['0.1turn', "-0.1turn", "0turn"],
    duration: 500,
    easing: "easeInOutCirc",
  });
}

function animate_progress_bar(element) {
  var animation = anime({
    targets: element,
    width: `${parseInt(element.textContent) * 2}vw`,
    easing: 'easeInOutCubic',
    duration: 1000,
  });
}

//autoplay: false



/* Logo elements to be animated */

var logoWaypoints = [];

document.querySelectorAll(".logo")
  .forEach((element) => {
    logoWaypoints.push(element);
  });
document.querySelectorAll("li i.material-icons")
  .forEach((element) => {
    logoWaypoints.push(element);
  });

logoWaypoints.map((element) => {
  element.setAttribute("onmouseover", "animate_logo(this)");

  return new Waypoint.Inview({
    element: element,
    entered: function (direction) {
      // Element entered
    },
    exited: function (direction) {
      element.style.transform = "none";
      anime.remove(element);
    }
  });
});

var progressBarWaypoints = [];

document.querySelectorAll("div.ability div div")
  .forEach((element) => progressBarWaypoints.push(element));

progressBarWaypoints.map((element) => {
  return new Waypoint.Inview({
    element: element,
    entered: function (direction) {
      animate_progress_bar(element);
    },
    exited: function (direction) {
      element.style.width = "0";
      anime.remove(element);
    }
  });
});


console.log(progressBarWaypoints);
