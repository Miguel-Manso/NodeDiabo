export class Product{
    constructor(name, price, qtd){
        this.name = name;
        this.price = price;
        this.qtd = qtd;
    }

    getName(){
        return this.name;
    }

    getPrice(){
        return this.price;
    }

    getQtd(){
        return this.qtd;
    }
}
