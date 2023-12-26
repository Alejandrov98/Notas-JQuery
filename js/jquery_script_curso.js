$(document).ready(function () {
  $("button").click(function () {
    // alert("Ancho: " + $("#cuadrado").width()); //devule la altura y el ancho
    // alert("Alto: " + $("#cuadrado").height());
    // alert("Ancho: " + $("#cuadrado").innerWidth()); //devuleve todo el ancho + padding
    // alert("Ancho: " + $("#cuadrado").outerWidth()); // todo lo anterior + bordes
    alert("Ancho: " + $("#cuadrado").outerWidth(true)); // lo lo anterior + margin
  });
});
