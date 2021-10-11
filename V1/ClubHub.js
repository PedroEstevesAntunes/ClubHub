const nome = "ClubHub"; // declara uma constante e atribui o valor "ClubHub" (um 'string', uma cadeia de carateres)

class Partner {
    #dataInscrição;
    constructor(name, surname, email, ) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    toString() {
        return `${this.nome} ${this.surname} - ${this.nome} `;
    }

}


class PartnerLevel{
    constructor(levelName, levelPrice) {
        this.levelName = levelName;
        this.levelPrice = levelPrice;        
    }

    toString() {
        return `${this.levelName} -  ${this.nome} `;
    }

    /*test*/
}