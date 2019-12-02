let values = {
    km: 1000,
    metr:100000,
    milm:1000000
}

document.getElementById('output').style.visibility = 'hidden';
document.getElementById('kmInput').addEventListener('input', function (e) {
    let km = e.target.value;
    document.getElementById('output').style.visibility = 'visible';
    document.getElementById('mettersOutput').innerHTML = km * values.km;
    document.getElementById('smOutput').innerHTML = km * values.metr;
    document.getElementById('mlOutput').innerHTML = km * values.milm;
    console.log(km);
});