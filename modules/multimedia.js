// superclase
class Multimedia {
  // url atr source que necesitara el iframe del html para el video
  constructor(url) {
    let _url = url;

    // get and set
    this.getUrl = () => _url;
    this.setUrl = (nueva_url) => (_url = nueva_url);
  }
  // metodo
  setInicio() {
    const msg = "Este método es para realizar un cambio en la URL del video";
    return msg;
  }
}

export default Multimedia;
