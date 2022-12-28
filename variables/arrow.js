// Silindirin hacmi
///hacim= pi*r*r*h

const r = +prompt("r:")
const h = +prompt("h:")

const volume = (r,h) => Math.PI *r *r *h
console.log(`${r},${h} = Volume: ${volume(r,h).toFixed(4)}`);