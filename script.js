document.querySelectorAll(".item").forEach((item) => {
  // when I start dragging
  item.addEventListener("dragStart", dragStart);
  // when I leave the item
  item.addEventListener("dragEnd", dragEnd);
});
// the 'draggind' class will change the opacity
//not working :)
function dragStart(e) {
  e.currentTarget.classList.add("dragging");
}
function dragEnd(e) {
  e.currentTarget.classList.remove("dragging");
}
console.log(dragStart);
