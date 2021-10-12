const nome = "ClubHub"; // declara uma constante e atribui o valor "ClubHub" (um 'string', uma cadeia de carateres)

class Partner {
    #registrationDate;
    constructor(name, surname, email, nascimento) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.nascimento = nascimento;
    }    

    toString() {
        return `${this.name} ${this.surname} - ${this.email} `;
    }
    get completeName() { 
        return `${this.name} ${this.surname}`;
    }
    get idade() {
        return this.nascimento ? new Date().getYear() - this.nascimento.getYear() : undefined;
    }
    set registrationDate(data){
        if (data.indexOf("/") > 0) {
            const [dia, mês, ano] = data.split("/"); 
            this.#registrationDate = new Date(ano, mês, dia); 
        } else
            this.#registrationDate = new Date(data); 
    }
}

class PartnerLevel{
    constructor(levelName, levelPrice) {
        this.levelName = levelName;
        this.levelPrice = levelPrice;        
    }

    toString() {
        return `${this.levelName} -> Price: ${this.levelPrice}€ `;
    }
}

class PartnerPayment{
    constructor(partner, paymentPrice, paymentday) {
        this.partner = partner; 
        this.paymentPrice = paymentPrice;
        this.paymentday = paymentday;   
    }
}

PartnerPayment.prototype.imprimir = function () {
    return `Payment ${this.paymentPrice}€ by ${this.partner} -> ${this.paymentday}`;
}

const basic = new PartnerLevel("Basic", 15);
const advanced = new PartnerLevel("Advanced", 30);
const premium = new PartnerLevel("Premium", 80);