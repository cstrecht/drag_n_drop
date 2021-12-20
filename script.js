document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

document.querySelectorAll(".area").forEach((area) => {
  area.addEventListener("dragover", dragOver);
  area.addEventListener("dragleave", dragLeave);
  area.addEventListener("drop", drop);
});

document.querySelector(".zone1").addEventListener("dragover", dragOverZoneOne);
document
  .querySelector(".zone1")
  .addEventListener("dragleave", dragLeaveZoneOne);
document.querySelector(".zone1").addEventListener("drop", dropZoneOne);

// Functions for my items:
function dragStart(e) {
  e.currentTarget.classList.add("dragging");
}
function dragEnd(e) {
  e.currentTarget.classList.remove("dragging");
}

//Functions Drag&Drop:
function dragOver(e) {
  if (e.currentTarget.querySelector(".item") === null) {
    e.preventDefault(); //prevent default so I can drop the item
    e.currentTarget.classList.add("hover");
  }
}
function dragLeave(e) {
  e.currentTarget.classList.remove("hover");
}
function drop(e) {
  e.currentTarget.classList.remove("hover");

  if (e.currentTarget.querySelector(".item") === null) {
    let dragItem = document.querySelector(".item.dragging");
    e.currentTarget.appendChild(dragItem);
  }
}

// Functions Zone 1
function dragOverZoneOne(e) {
  e.preventDefault();
  e.currentTarget.classList.add("hover");
}
function dragLeaveZoneOne(e) {
  e.currentTarget.classList.remove("hover");
}
function dropZoneOne(e) {
  e.currentTarget.classList.remove("hover");
  let dragItem = document.querySelector(".item.dragging");
  e.currentTarget.appendChild(dragItem);
}
