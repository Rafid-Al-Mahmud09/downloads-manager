(function () {
    const CORS_supported_protocol_schemes = ["http", "data", "isolated-app", "chrome-extension", "chrome", "https", "chrome-untrusted"]
    var x = CORS_supported_protocol_schemes;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var d = JSON.parse(this.responseText);
        d.forEach(data => {
            document.querySelector("#softwares").innerHTML +=
                `
                <div>
                    <div>
                        <img src="${data.imgLink}" alt="__${String(data.name).toUpperCase().replace(/ /g, '-')}__">
                        <span>${data.name}</span>
                    </div>
                    <div onclick="window.open('${data.dLink}', '_self')">Download</div>
                </div>
                `;
        });
    }
    xhttp.open("GET", "softs.json");
    if (
        location.protocol === x[0] + ':' ||
        location.protocol === x[1] + ':' ||
        location.protocol === x[2] + ':' ||
        location.protocol === x[3] + ':' ||
        location.protocol === x[4] + ':' ||
        location.protocol === x[5] + ':' ||
        location.protocol === x[6] + ':'
    ) xhttp.send();
    else {
        document.querySelector("#softwares").innerHTML +=
            `
                <div>
                    <h3>Can't Load data of list of softwires because protocol of the page you're currently browsing is not any CORS supported protocol schemes; such as: ${JSON.stringify(x)}.</h3>
                </div>
            `;
    }

    /**
     * 1. var x, y; x = y = 'foo';
     * 2. var y; var x = y = 'foo';
     * 3. var x = 'foo'; var y = x;
     * 4. var x = 'foo', y = x;
    */
})()
// 520-1903-1920
// function changeSrc(src) {
//     var $=t=>document.querySelector(t);
//     $('#RWD-CSS-Elmnt').href='stylesheets/'+src+'.css';
// }

setInterval(function(){
    var $=t=>document.querySelector(t);
    var x = $('html').clientWidth+17;
    var link = d => 'stylesheets/'+d+'.css';
    var txt = $('#RWD-CSS-Elmnt').href;
    if (x>=50   && x<151 ) {
        // console.log(1);
        ($('h1').innerHTML !== 'SW')? $('h1').innerHTML='SW' : false;
        // (new RegExp(link('sw')).test(txt) === false) ? changeSrc('sw') : false;
    }
    else if (x>=151  && x<320 ) {
        // console.log(2);
        ($('h1').innerHTML !== 'XXS')? $('h1').innerHTML='XXS' : false;
        // (new RegExp(link('xxs')).test(txt) === false) ? changeSrc('xxs') : false;
    }
    else if (x>=320  && x<450 ) {
        // console.log(3);
        ($('h1').innerHTML !== 'XS')? $('h1').innerHTML='XS' : false;
        // (new RegExp(link('xs')).test(txt) === false) ? changeSrc('xs') : false;
    }
    else if (x>=450  && x<768 ) {
        // console.log(4);
        ($('h1').innerHTML !== 'SM')? $('h1').innerHTML='SM' : false;
        // (new RegExp(link('sm')).test(txt) === false) ? changeSrc('sm') : false;
    }
    else if (x>=768  && x<992 ) {
        // console.log(5);
        ($('h1').innerHTML !== 'MD')? $('h1').innerHTML='MD' : false;
        // (new RegExp(link('md')).test(txt) === false) ? changeSrc('md') : false;
    }
    else if (x>=992  && x<1200) {
        // console.log(6);
        ($('h1').innerHTML !== 'LG')? $('h1').innerHTML='LG' : false;
        // (new RegExp(link('lg')).test(txt) === false) ? changeSrc('lg') : false;
    }
    else if (x>=1200 && x<3840) {
        // console.log(7);
        ($('h1').innerHTML !== 'XL')? $('h1').innerHTML='XL' : false;
        // (new RegExp(link('xl')).test(txt) === false) ? changeSrc('xl') : false;
    }
    else if (x>=3840          ) {
        // console.log(8);
        ($('h1').innerHTML !== 'XXL')? $('h1').innerHTML='XXL' : false;
        // (new RegExp(link('xxl')).test(txt) === false) ? changeSrc('xxl') : false;
    }
}, 0)

var SearchNo=0;
function search(n) {
    SearchNo+=1;
    console.log(String(SearchNo));
    for (let i = 0; i < document.querySelectorAll('#softwares > div').length; i++) {
        const e = document.querySelectorAll('#softwares > div')[i];
        const txt = e.querySelector('div:nth-child(1)').innerText;
        e.style.display='flex';
        if(new RegExp(n.value, 'i').test(txt) === false) e.style.display='none';
    }
}

document.querySelector("#search > input[type=search]").focus();