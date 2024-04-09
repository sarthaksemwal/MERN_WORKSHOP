const arr = [
    'Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Pune',
    'India', 'russia', 'Usa'
];


//filter the name that has i
const ans = arr.filter((s) => {
    //converting string to the loweer case to check the function
    const ns=s.toLowerCase();
    if (ns.includes('i')) {
        return true;
    }
    return false;
});


console.log(ans);
