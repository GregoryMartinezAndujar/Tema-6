class Tarea {
  constructor(nombre) {
    this.nombre = nombre;
    this.completada = false;
  }

  isCompletada() {
    if (!this.completada) {
      this.completada = true;
    } else {
      this.completada = false;
    }
  }

  consultar() {
    let acabada = this.completada ? "acabada" : "en proceso";
    return `Tarea:${this.nombre} Completada: ${acabada}`;
  }
}

export { Tarea };
