const nome = "ClubHub"; // declara uma constante e atribui o valor "ClubHub" (um 'string', uma cadeia de carateres)

class Socio {
    constructor(nome, sobrenome, email, ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        /* test*/
            
    }

    toString() {
        return `${this.nome} (bloco ${this.bloco})`;
    }
    static contar() { return this.#quantidade }; 
}