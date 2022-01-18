import Multimedia from "./multimedia.js";
import capturador from "../assets/js/script.js";

// suclase
class Reproductor extends Multimedia {
  // id: sera el id del dom acorde a la categoria de video a mostrar
  constructor(id, url) {
    super(url);
    let _id = id;
    this.getId = () => _id;
    this.setId = (nueva_url) => (_id = nueva_id);
  }

  // get id(){
  //   return
  // }
  // metodo
  // captura elementos de la funcion publica en IIFE url e id enviados mediante return
  playMultimedia() {
    capturador.dataToHtml(this.getId(), this.getUrl());
  }
  setInicio(tiempo) {
    capturador.dataToHtml(this.getId(), this.getUrl(), tiempo);
  }
}

export default Reproductor;
