export function addOffset(map) {
  const offsetY = map.getSize().y * 0.12;
  console.log(offsetY);

  map.panBy([0, -offsetY], { animate: false });
}
