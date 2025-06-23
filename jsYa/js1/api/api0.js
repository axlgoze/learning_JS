fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(datos => {
                let cad = '<tr><th>Nombre</th><th>Email</th><th>Télefono</th></tr>';
                for (let usuario of datos) {
                    cad += `<tr><td>${usuario.name}</td>
                                <td>${usuario.email}</td>
                                <td>${usuario.phone}</td></tr>`;
                }
                document.getElementById("tabla1").innerHTML = cad;
            });