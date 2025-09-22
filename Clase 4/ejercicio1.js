const cars = [
    { mark: 'Toyota', model: 'Corolla', year: 2020, color: 'White' },
    { mark: 'Honda', model: 'Civic', year: 2019, color: 'Black' },
    { mark: 'Ford', model: 'Mustang', year: 2021, color: 'Red' },
    { mark: 'Chevrolet', model: 'Camaro', year: 2018, color: 'Yellow' },
    { mark: 'BMW', model: 'X5', year: 2022, color: 'Blue' },
    { mark: 'Audi', model: 'A4', year: 2020, color: 'Silver' },
    { mark: 'Mercedes', model: 'C-Class', year: 2017, color: 'Gray' },
    { mark: 'Volkswagen', model: 'Golf', year: 2019, color: 'Green' },
    { mark: 'Hyundai', model: 'Elantra', year: 2021, color: 'Orange' },
    { mark: 'Kia', model: 'Sportage', year: 2018, color: 'Brown' }
];

// a) Obtener un array con los modelos de todos los coches cuyo ano sea mayor a 2018.
function modelFilter(askYear) {
    let count = 0;
    cars.forEach(({year}) => {
        if (year > askYear) {
            count++;
        }
    });
    console.log(`Hay ${count} autos del año ${askYear}`);
}
function colorFilter(askColor) {
    let count = 0;
    cars.forEach(({color}) => {
        if (color.toLowerCase() == askColor.toLowerCase()) {
            count++;
        }
    });
    console.log(`Hay ${count} autos de color ${askColor}`);
}
modelFilter(2018);
colorFilter('Red');