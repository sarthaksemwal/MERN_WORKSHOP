const arr = [
    'Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Pune',
    'India', 'Russia', 'USA'
];

const filteredArray = arr.filter(city => city.charAt(city.length - 1) === 'i');

console.log(filteredArray); // Output: ['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Pune', 'India']
