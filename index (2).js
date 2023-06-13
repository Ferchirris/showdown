class EntrenadorDePokemon {
  constructor(nombre, regionDeOrigen, noMedallas, equipoPokemon) {
    this.nombre = nombre;
    this.regionDeOrigen = regionDeOrigen;
    this.noMedallas = noMedallas;
    this.equipoPokemon = equipoPokemon;
  }

  info() {
    console.log(
      `Soy ${this.nombre} de ${this.regionDeOrigen}. Tengo ${this.noMedallas} medallas y mi equipo Pokémon es:`
    );
    this.equipoPokemon.forEach((pokemon) => console.log(pokemon.infoPokemon()));
  }

  batalla(otroEntrenador) {
    console.log(`${this.nombre} está retando a ${otroEntrenador.nombre}`);

    let pokemonElegido1 = this.equipoPokemon[0];
    let pokemonElegido2 = otroEntrenador.equipoPokemon[0];

    console.log(`${this.nombre} elige a ${pokemonElegido1.nombre}`);
    console.log(`${otroEntrenador.nombre} elige a ${pokemonElegido2.nombre}`);

    let ganador;
    let perdedor;

    if (pokemonElegido1.velocidad > pokemonElegido2.velocidad) {
      ganador = this;
      perdedor = otroEntrenador;
    } else if (pokemonElegido1.velocidad < pokemonElegido2.velocidad) {
      ganador = otroEntrenador;
      perdedor = this;
    } else {
      const ganadores = [this, otroEntrenador];
      const indiceGanador = Math.floor(Math.random() * 2);
      ganador = ganadores[indiceGanador];
      perdedor = ganadores[1 - indiceGanador];
    }

    console.log(
      `¡${ganador.nombre} ha ganado la batalla! ${perdedor.nombre} ha sido derrotado.`
    );
    perdedor.equipoPokemon.shift();
  }
}

class Pokemon {
  constructor(
    nombre,
    nivel,
    tipoPrincipal,
    tipoSecundario,
    estadisticas,
    movimientos
  ) {
    this.nombre = nombre;
    this.nivel = nivel;
    this.tipoPrincipal = tipoPrincipal;
    this.tipoSecundario = tipoSecundario;
    this.estadisticas = estadisticas;
    this.movimientos = movimientos;
  }

  infoPokemon() {
    return `${this.nombre} (Nivel ${this.nivel}) - Tipo: ${this.tipoPrincipal}${
      this.tipoSecundario ? `/${this.tipoSecundario}` : ""
    }`;
  }
}

class MovimientoPokemon {
  constructor(nombre, potencia, probabilidad, tipoElemental) {
    this.nombre = nombre;
    this.potencia = potencia;
    this.probabilidad = probabilidad;
    this.tipoElemental = tipoElemental;
  }

  infoPokemon() {
    return `${this.nombre} - Potencia: ${this.potencia} - Probabilidad: ${this.probabilidad} - Tipo Elemental: ${this.tipoElemental}`;
  }
}

const entrenador1 = new EntrenadorDePokemon("Ash", "Kanto", 8, [
  new Pokemon(
    "Pikachu",
    80,
    "Eléctrico",
    null,
    {
      vida: 100,
      ataque: 80,
      ataqueEspecial: 90,
      defensa: 70,
      defensaEspecial: 80,
      velocidad: 100,
    },
    [
      new MovimientoPokemon("Impactrueno", 75, 0.9, "Eléctrico"),
      new MovimientoPokemon("Rayo", 90, 0.8, "Eléctrico"),
      new MovimientoPokemon("Cola Férrea", 100, 0.7, "Acero"),
      new MovimientoPokemon("Gruñido", 0, 1.0, "Normal"),
    ]
  ),
  new Pokemon(
    "Charizard",
    85,
    "Fuego",
    "Volador",
    {
      vida: 120,
      ataque: 90,
      ataqueEspecial: 100,
      defensa: 80,
      defensaEspecial: 85,
      velocidad: 95,
    },
    [
      new MovimientoPokemon("Lanza Llamas", 95, 0.8, "Fuego"),
      new MovimientoPokemon("Ataque Aéreo", 85, 0.9, "Volador"),
      new MovimientoPokemon("Garra Dragón", 100, 0.7, "Dragón"),
      new MovimientoPokemon("Rugido", 0, 1.0, "Normal"),
    ]
  ),
]);

const entrenador2 = new EntrenadorDePokemon("Gary", "Kanto", 6, [
  new Pokemon(
    "Blastoise",
    82,
    "Agua",
    null,
    {
      vida: 110,
      ataque: 85,
      ataqueEspecial: 90,
      defensa: 100,
      defensaEspecial: 95,
      velocidad: 78,
    },
    [
      new MovimientoPokemon("Hidrobomba", 110, 0.8, "Agua"),
      new MovimientoPokemon("Cascada", 85, 0.9, "Agua"),
      new MovimientoPokemon("Ventisca", 95, 0.8, "Hielo"),
      new MovimientoPokemon("Rugido", 0, 1.0, "Normal"),
    ]
  ),
  new Pokemon(
    "Rhydon",
    76,
    "Tierra",
    "Roca",
    {
      vida: 115,
      ataque: 130,
      ataqueEspecial: 45,
      defensa: 120,
      defensaEspecial: 45,
      velocidad: 40,
    },
    [
      new MovimientoPokemon("Terremoto", 100, 0.9, "Tierra"),
      new MovimientoPokemon("Mega Cuerno", 120, 0.8, "Bicho"),
      new MovimientoPokemon("Avalancha", 90, 0.9, "Roca"),
      new MovimientoPokemon("Rugido", 0, 1.0, "Normal"),
    ]
  ),
]);

entrenador1.info();
console.log("----------------------------------------");
entrenador2.info();
console.log("----------------------------------------");

entrenador1.batalla(entrenador2);
