function HyperLink(direction,title){
    this.direction = direction;
    this.title = title;
    this.returnHyperLink = function(){
        let chain;
        chain = '<a href='+this.direction+'>'+this.title+'</a>';
        return chain;
    }
}

    let vector = new Array(3);
    vector[0] = new HyperLink('https://www.google.com','google');
    vector[1] = new HyperLink('https://www.msn.com','msn');
    vector[2] = new HyperLink('https://www.yahoo.com','yahoo');

    for(let f = 0; f<vector.length;f++){
        document.write(vector[f].returnHyperLink());
        document.write('<br>');
    }