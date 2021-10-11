const nome = "ClubHub"; // declara uma constante e atribui o valor "ClubHub" (um 'string', uma cadeia de carateres)

class Partner {
    #registrationDate;
    constructor(name, surname, email, nascimento) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.nascimento = dataNascimento;
    }    

    toString() {
        return `${this.nome} ${this.surname} - ${this.email} `;
    }
    get completeName() { 
        return `${this.nome} ${this.surname}`;
    }
    get idade() {
        // To implement
    }
    set registrationDate (){
        // To implement
    }
}


class PartnerPayment{
    constructor(partner, paymentDay, ) {
        this.partner = partner;
        this.paymentDay = paymentDay;        
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


}