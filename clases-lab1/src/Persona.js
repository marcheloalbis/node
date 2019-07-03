class Persona{
    constructor(nombre,apellido)
    {
        this._nombre=nombre;
        this._apellido=apellido;
    }

    get genero() {
        return this._genero;
    }

    set genero(genero) {
        this._genero= genero;
    }

    nombreCompleto() {
        return `${this._nombre} ${this._apellido} `;
    }
}

let persona = new Persona('Marcelo', 'Albis');
persona.genero = 'masculino';

/* console.log(persona.nombreCompleto());
console.log(persona.genero); */

module.exports = Persona; 