function findChildren(dancingBrigade){
  let alpha = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
  return dancingBrigade.split("").sort((a,b) => alpha.indexOf(a) - alpha.indexOf(b)).join("")
}
