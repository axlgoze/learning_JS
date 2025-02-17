// literal objects

let client1 = {
    name: 'Axel',
    deposit: 0,
    printing: function(){
        document.write(this.name + '<br>');
        document.write(this.deposit + '<br>');
    },
    deposit2: function(amount){
        this.deposit = this.deposit = amount;
    },
    extract: function(amount){
        this.deposit = this.deposit - amount;
    }
};


client1.printing();
client1.deposit2(100);
document.write("State after depositing 100 dollars: <br>");
client1.printing();
client1.extract(200);
document.write("State after extracting 200 dollars: <br>");
client1.printing();