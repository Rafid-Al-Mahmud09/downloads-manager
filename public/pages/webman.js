function send(text, Q) {
    console.log(text);
    // text.html(text.html() + `
    text.html(``);
    text.typed({
        strings: [`${Q}`],
        typeSpeed: -100000000,
        contentType: 'html'
    });
    $('.typed-cursor').css('display', 'none');
    // i++;
}
  /*setInterval(
  ()=>document.querySelector("#msgs").scrollTo(0, document.querySelector("#msg").scrollHeight)
  ,500
  );*/




function gensel(elmnt, method=2) {
    if (method===1) {
        var generateQuerySelector = function (el) {
            if (el.tagName.toLowerCase() == "html")
                return "HTML";
            var str = el.tagName;
            str += (el.id != "") ? "#" + el.id : "";
            if (el.className) {
                var classes = el.className.split(/\s/);
                for (var i = 0; i < classes.length; i++) {
                    str += "." + classes[i]
                }
            }
            return generateQuerySelector(el.parentNode) + " > " + str;
        }

        var qStr = generateQuerySelector(elmnt);
        return qStr;
    }

    else if (method===2) {
        function elemToSelector(elem) {
            const {
                tagName,
                id,
                className,
                parentNode
            } = elem;
            if (tagName === 'HTML') return 'HTML';
            let str = tagName;
            str += (id !== '') ? `#${id}` : '';
            if (className) {
                const classes = className.split(/\s/);
                for (let i = 0; i < classes.length; i++) {
                    str += `.${classes[i]}`;
                }
            }
            let childIndex = 1;
            for (let e = elem; e.previousElementSibling; e = e.previousElementSibling) {
                childIndex += 1;
            }
            str += `:nth-child(${childIndex})`;
            return `${elemToSelector(parentNode)} > ${str}`;
        }
        
        var qStr = elemToSelector(elmnt);
        return qStr;
    }
    else if (method===3) {
        function getSelector(elm) {
            if (elm.tagName === "BODY") return "BODY";
            const names = [];
            while (elm.parentElement && elm.tagName !== "BODY") {
                if (elm.id) {
                    names.unshift("#" + elm.getAttribute("id")); // getAttribute, because `elm.id` could also return a child element with name "id"
                    break; // Because ID should be unique, no more is needed. Remove the break, if you always want a full path.
                } else {
                    let c = 1, e = elm;
                    for (; e.previousElementSibling; e = e.previousElementSibling, c++);
                    names.unshift(elm.tagName + ":nth-child(" + c + ")");
                }
                elm = elm.parentElement;
            }
            return names.join(">");
        }
        
        var qStr = getSelector(elmnt);
        return qStr;
    }

}




(function () {
    const CORS_supported_protocol_schemes = ["http", "data", "isolated-app", "chrome-extension", "chrome", "https", "chrome-untrusted"]
    var x = CORS_supported_protocol_schemes;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var d = JSON.parse(this.responseText);
        var ii=1;
        d.forEach(data => {
            document.querySelector("#softwares").innerHTML +=
                `
                <div id="no-${ii}-site">
                    <div>
                        <img src="${data.imgLink}" alt="__${String('data.name').toUpperCase().replace(/ /g, '-')}__">
                        <span>${data.name}</span>
                    </div>
                    <div onclick="window.open('${data.webpage}', '_self')">View</div>
                    <div class="description" style="width: 200px">
                        <button class="collapsible">Description</button>
                        <div class="content">
                                <p><span style="font-weight:bolder;">Group Name:</span> <span style="color:red; text-decoration:underline;">${data.groupName}</span></p>
                                <p><span style="font-weight:bolder;">Comment:</span> <span style="color:green; font-weight:bold;">${data.comment}</span></p>
                                <p><span style="font-weight:bolder;">URL:</span> <span style="color:blue; font-style: oblique;">${data.webpage}</span></p>
                        </div>
                    </div>
                </div>
                `;
                ii++;
        });
    }
    xhttp.open("GET", "sites.json");
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
    xhttp.onloadend = ()=> {
        var coll = $(".collapsible");
        var i;
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function(e) {
                this.classList.toggle("active");
                
                // var content = this.nextElementSibling;
                var content = this.parentElement.querySelector('.content');
                if (content.style.maxHeight){
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                } 
                // console.log(e.target);
                if (this.classList.contains("active")) send($('#'+e.target.parentElement.parentElement.id+' > DIV:nth-child(3) > DIV.content:nth-child(2)'),$('#'+e.target.parentElement.parentElement.id+' > DIV:nth-child(3) > DIV.content:nth-child(2)').html());
                // if (this.classList.contains("active")) send($(gensel(content, 2)),$(gensel(content, 2)).html());
            });
        }
    };
    
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













/**
$('.btn').on('click',(e)=>{
//console.log(e.target);
send($('#Q'+e.target.innerText)[0].outerHTML,e.target.innerText);
});

var i=0;
function send(text,Q){
  $('#msgs').html($('#msgs').html()+`
  <div class="msg" id="msg-${i}">
  <div class="msg-head">QUESTION: ${Q}</div>
  <div class="msg-body"></div>
  </div>
  `);
      $(`#msg-${i}>div.msg-body`).typed({
        strings: [`<span style='color:gray'>RES00${i} (${new Date()})</span><br>${text}`],
        typeSpeed: -100000000,
        contentType: 'html'
      });
      $('.typed-cursor').css('display','none');
  i++;
}*/