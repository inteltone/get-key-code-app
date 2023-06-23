window.addEventListener("keydown", onKeyDown, false);
let key_block = document.querySelector(".key-block");

function onKeyDown(e) {
  if (document.querySelector(".key-list")) {
    document.querySelector(".key-list").remove();
  }
  let keyCodes = {
    key: e.key === " " ? "Space" : e.key,
    keyCode: e.keyCode,
    code: e.code
  };
  const ul = document.createElement("ul");
  ul.className = "key-list";
  for (let key in keyCodes) {
    const li = document.createElement("li");
    li.className = "key-item";
    const p = document.createElement("p");
    p.textContent = key;
    const small = document.createElement("small");
    small.textContent = keyCodes[key];
    li.appendChild(p);
    li.appendChild(small);
    ul.appendChild(li);
  }
  key_block.appendChild(ul);
}