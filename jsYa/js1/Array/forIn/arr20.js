// for in does not access to undefined values
let vec = [23,54,"hola",5,,];

for (let index in vec) {
    document.write(vec[index]);
    document.write("<br>");
    document.write("<br>");
}

for (let index = 0; index < vec.length; index++) {
    // const element = vec[index];
    document.write(vec[index]);
    document.write("<br>");
}
document.write("<br>");
// FOR EACH

vec.forEach((ele,indx) => {
    // document.write(indx);
    document.write(ele);
});