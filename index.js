var form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var cycle = +document.getElementById('cycle').value;
    var helmet = +document.getElementById('helmet').value;
    var gaurd = +document.getElementById('gaurd').value;
    var cycleprice = 200 * cycle;
    var helmetprice = 200 * helmet;
    var gaurdprice = 200 * gaurd;
    var totalprice = cycleprice + helmetprice + gaurdprice;
    // console.log(totalprice);

    var shipping = document.getElementById('shipping').value;
    var extracost = 0;
    switch (shipping) {
        case 'rn':
            extracost = totalprice * 0.016
            break;
        case 'sy':
            extracost = totalprice * 0.012
            break;
        default:
            extracost = 0
            break;
    }
    totalprice += extracost;
    var qurier = document.getElementById('qurier').checked;
    if (qurier) {
        totalprice += 60
    }
    var showcost = document.getElementById('totalprice');
    showcost.textContent = 'your total purchase : ' + totalprice


})
