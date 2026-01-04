class Edificio {
  constructor(nombre, direccion) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.plantas = [];
  }

  construirPlantas(plantas, puertas) {
    for (let i = 0; i < plantas; i++) {
      this.plantas.push([]);
    }

    for (let i = 0; i < this.plantas.length; i++) {
      for (let z = 0; z < puertas; z++) {
        this.plantas[i].push([z]);
      }
    }
  }
}

export { Edificio };
