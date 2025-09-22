const precios = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const iva = 1.21;
let precioConIVA = 0;

const preciosConIVA = precios.map(precio => precio * iva);
preciosConIVA.forEach(precio => {
  console.log(`El precio es: ${precio.toFixed(2)}.- IVA incluido.`);
});