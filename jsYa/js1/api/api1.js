// fetch("https://api.ipbase.com/v1/json/")
//     .then(response => response.json())
//     .then(data => {
//         let cad = '<tr><th>country</th><th>city</th><th>ZC</th><th>IP</th></tr>';
//         for ( let country of data){
//             cad += `<tr><td>${country.country_name}</td>
//                     <td>${country.city}</td>
//                     <td>${country.zip_code}</td></tr>
//                     <td>${country.ip}</td></tr>
//                     `
//         }
//     });

let sp = document.createElement('span');


let btn = document.getElementById('btn').addEventListener("click",show);

function show(){
    fetch('https:sonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(user => {
        console.log(user)
        sp.innerHTML = `title :  ${user.title}
                        <br>
                        id :  ${user.id}
                        <br>
                        status :  ${user.completed}`
        document.getElementById('apis').appendChild(sp);
        });
}

