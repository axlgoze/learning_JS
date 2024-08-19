const person = {
    'name': 'Axl',
    'lastName' : 'Reyes',
    'hobby' : 'sing',
    'favoriteMovies' : ['interstellar', 'batman']
}

console.log(JSON.stringify(Object.entries(person)));

//.entries returns a matrix of pair entries. each pair is a matrix.

// [
//     ['name', 'Axl'],
//     ['lastName', 'Reyes'],
//     ['hobby', 'sing'],
//     ['favoriteMovies', ['interstellar', 'batman']]
//   ]


//JSON.stringify() converts to JSON string.