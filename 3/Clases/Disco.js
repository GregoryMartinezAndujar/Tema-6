class Disco {
  constructor(nombre, autor, año, tipo, localizacion, prestado) {
    this.nombre = nombre;
    this.autor = autor;
    this.año = año;
    this.tipo = tipo;
    this.localizacion = localizacion;
    this.prestado = prestado;
  }

  consultar() {
    return `${this.nombre};${this.autor};${this.año};${this.tipo};${this.localizacion};${this.prestado};`;
  }
}

export { Disco };
