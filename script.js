document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("dragStart", dragStart);
  item.addEventListener("dragEnd", dragEnd);
});

document.querySelectorAll(".area").forEach((area) => {
  area.addEventListener("dragover", dragOver);
  area.addEventListener("dragleave", dragLeave);
  area.addEventListener("drop", drop);
});

function dragStart(e) {
  e.currentTarget.classList.add("dragging");
}
function dragEnd(e) {
  e.currentTarget.classList.remove("dragging");
}

function dragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add("hover");
}
function dragLeave(e) {
  e.currentTarget.classList.remove("hover");
}

// only works when dragOver is released
function drop() {}
