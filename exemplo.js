let maquinaMilkshake = {
    saldo: 0,
    fazerMilkshake: function(){
        this.saldo += 5;
        return 'MILKSHAKE!';
    }
};

let novaMaquina = {
    saldo: 0,
    fazerMilkshake: function(){
        this.saldo += 5;
        return 'MILKSHAKE!';
    }
};

let produto1 = maquinaMilkshake.fazerMilkshake();
let produto2 = novaMaquina.fazerMilkshake();
let produto3 = maquinaMilkshake.fazerMilkshake();

console.log(maquinaMilkshake.saldo);
console.log(novaMaquina.saldo);