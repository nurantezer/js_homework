// Silindirin hacmi
///hacim= pi*r*r*h

const r = +prompt("r:")
const h = +prompt("h:")

const volume = (r,h) => Math.PI *r *r *h
console.log(`${r},${h} = Volume: ${volume(r,h).toFixed(4)}`);

//!Alternatif olarak
const volumeLong = (r,h) => {
    const result = Math.PI * r * r * h
    console.log(result);
    return result
}
console.log(`${r},${h} = Volume: ${volume(r,h).toFixed(4)}`);