document.onmousemove = (event) => {
  let body = document.querySelector("body");
  // body.style.background = "red";
  let snow = document.createElement("span");
  let x = event.pageX;
  let y = event.pageY;
  let size = Math.random() * 50;

  // snow.style.stroke = "red";
  // snow.style.background = "blue";

  snow.style.left = x + "px";
  snow.style.top = y + "px";
  snow.style.width = size + "px";
  snow.style.height = size + "px";

  body.appendChild(snow);

  setTimeout(() => {
    snow.remove();
  }, 2000);
};
