// funcion iife
const capturador = (() => {
  // function recibe(id, url) {
  //   let myId = document.getElementById(id);
  //   myId.setAttribute("src", url);
  //   return myId;
  // }
  function embed(id, url, tiempoSegundos = 0) {
    let idVideo = url.split("?v=")[1];
    let comienzaEn = "?start=" + tiempoSegundos;
    let embedlink = "https://www.youtube.com/embed/" + idVideo + comienzaEn;
    document.getElementById(id).src = embedlink;
  }
  return {
    dataToHtml: (id, url, tiempoSegundos) => {
      embed(id, url, tiempoSegundos);
    },
  };
})();

export default capturador;

console.log(capturador);
