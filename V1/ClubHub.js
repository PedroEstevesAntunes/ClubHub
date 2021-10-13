export const clubHub = { 
    nome: "ClubHub"
};

export class Partner {
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


/* Set Payment Levels */
const basic = new PartnerLevel("Basic", 15);
const advanced = new PartnerLevel("Advanced", 30);
const premium = new PartnerLevel("Premium", 80);


/* Set Partners */
let partner1 = new Partner("Pedro","Antunes","pa@gmail.com",new Date(2021, 10, 12));
let partner2 = new Partner("Rui","Patricio","rp@gmail.com",new Date(2021, 10, 10));
let partner3 = new Partner("Patricia","Duarte","pd@gmail.com",new Date(2021, 8, 5));
let partner4 = new Partner("Carolina","Rodrigues","cr@gmail.com",new Date(2021, 10, 12));

/* Set Levels */
const partnerLevel = []  
const partner = new Map(); 
const partnerPayment = new Set()

/* Set Payments */
const payment1 = new PartnerPayment(partner1.name, basic.levelPrice, new Date(2021, 9, 3)); 
const payment2 = new PartnerPayment(partner2.name, basic.levelPrice, new Date(2021, 7, 4));
const payment3 = new PartnerPayment(partner3.name, advanced.levelPrice, new Date(2021, 10, 4));
const payment4 = new PartnerPayment(partner4.name, premium.levelPrice, new Date(2021, 7, 31))


partnerLevel.push(basic);
partnerLevel.push(advanced);
partnerLevel.push(premium);

partner.set(partner1.email, partner1); 
partner.set(partner2.email, partner2);
partner.set(partner3.email, partner3);
partner.set(partner4.email, partner4);


partnerPayment.add(payment1);
partnerPayment.add(payment2);
partnerPayment.add(payment3);
partnerPayment.add(payment4);


Object.defineProperties(clubHub, { 
    partnerLevel: { value: partnerLevel, writable: false }, 
    partner: { value: partner, writable: false },
    partnerPayment: { value: partnerPayment, writable: false }
});