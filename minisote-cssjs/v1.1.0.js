/**
 * Here is the codes for minisote-css.js
 * Author: Rafid Al Mahmud
 * Last Updated: 04.04.2024
 * Verson: 1.0.0 comming soon. Demo - [ // css codes ]
 * Verson: 1.1.0 current.
 */

$=x=>document.querySelectorAll(x);
$('[class]').forEach(element => {
    var valOfClassAtt = element.getAttribute("class");
    console.log(valOfClassAtt);
    // document.querySelector().classList.contains('a')
    element.classList.forEach(cl => {
        /**
         * Padding
         */
        //code for "p"
        var p = /^p-/.test(cl)===true?cl.replace(/^p-/,''):false;
        element.style.padding=p+'px';
        //code for "pt"
        var pt = /^pt-/.test(cl)===true?cl.replace(/^pt-/,''):false;
        element.style.paddingTop=pt+'px';
        //code for "pr"
        var pr = /^pr-/.test(cl)===true?cl.replace(/^pr-/,''):false;
        element.style.paddingRight=pr+'px';
        //code for "pb"
        var pb = /^pb-/.test(cl)===true?cl.replace(/^pb-/,''):false;
        element.style.paddingBottom=pb+'px';
        //code for "pl"
        var pl = /^pl-/.test(cl)===true?cl.replace(/^pl-/,''):false;
        element.style.paddingLeft=pl+'px';
        //code for "px"
        var px = /^px-/.test(cl)===true?cl.replace(/^px-/,''):false;
        element.style.paddingLeft=px+'px';
        element.style.paddingRight=px+'px';
        //code for "py"
        var py = /^py-/.test(cl)===true?cl.replace(/^py-/,''):false;
        element.style.paddingTop=py+'px';
        element.style.paddingBottom=py+'px';

        /**
         * Margin
         */
        //code for "m"
        var m = /^m-/.test(cl)===true?cl.replace(/^m-/,''):false;
        element.style.margin=m+'px';
        //code for "mt"
        var mt = /^mt-/.test(cl)===true?cl.replace(/^mt-/,''):false;
        element.style.marginTop=mt+'px';
        //code for "mr"
        var mr = /^mr-/.test(cl)===true?cl.replace(/^mr-/,''):false;
        element.style.marginRight=mr+'px';
        //code for "mb"
        var mb = /^mb-/.test(cl)===true?cl.replace(/^mb-/,''):false;
        element.style.marginBottom=mb+'px';
        //code for "ml"
        var ml = /^ml-/.test(cl)===true?cl.replace(/^ml-/,''):false;
        element.style.marginLeft=ml+'px';
        //code for "mx"
        var mx = /^mx-/.test(cl)===true?cl.replace(/^mx-/,''):false;
        element.style.marginLeft=mx+'px';
        element.style.marginRight=mx+'px';
        //code for "my"
        var my = /^my-/.test(cl)===true?cl.replace(/^my-/,''):false;
        element.style.marginTop=my+'px';
        element.style.marginBottom=my+'px';

        /**
         * Border
         */
        //code for "b"
        var b = /^b-/.test(cl)===true?cl.replace(/^b-/,''):false;
        element.style.border=b+'px';
        //code for "bt"
        var bt = /^bt-/.test(cl)===true?cl.replace(/^bt-/,''):false;
        element.style.borderTop=bt+'px';
        //code for "br"
        var br = /^br-/.test(cl)===true?cl.replace(/^br-/,''):false;
        element.style.borderRight=br+'px';
        //code for "bb"
        var bb = /^bb-/.test(cl)===true?cl.replace(/^bb-/,''):false;
        element.style.borderBottom=bb+'px';
        //code for "bl"
        var bl = /^bl-/.test(cl)===true?cl.replace(/^bl-/,''):false;
        element.style.borderLeft=bl+'px';
        //code for "bx"
        var bx = /^mx-/.test(cl)===true?cl.replace(/^bx-/,''):false;
        element.style.borderLeft=bx+'px';
        element.style.borderRight=bx+'px';
        //code for "by"
        var by = /^by-/.test(cl)===true?cl.replace(/^by-/,''):false;
        element.style.borderTop=by+'px';
        element.style.borderBottom=by+'px';

        /**
         * Height
         */
        //code for "h"
        var h = /^h-/.test(cl)===true?cl.replace(/^h-/,''):false;
        element.style.height=h+'px';
        //code for "hmx"
        var hmx = /^hmx-/.test(cl)===true?cl.replace(/^hmx-/,''):false;
        element.style.maxHeight=hmx+'px';
        //code for "hmn"
        var hmn = /^hmn-/.test(cl)===true?cl.replace(/^hmn-/,''):false;
        element.style.minHeight=hmn+'px';

        /**
         * Width
         */
        //code for "w"
        // console.log(w);
        var wmx = /^w-/.test(cl)===true?cl.replace(/^w-/,''):false;
        element.style.width=w+'px'
        //code for "wmx"
        var wmx = /^wmx-/.test(cl)===true?cl.replace(/^wmx-/,''):false;
        element.style.maxWidth=wmx+'px';
        //code for "wmn"
        var wmn = /^wmn-/.test(cl)===true?cl.replace(/^wmn-/,''):false;
        element.style.minWidth=wmn+'px';

        /**
         * Text-Align
         */
        //code for "txtAl"
        var txtAl = /^txtAl-/.test(cl)===true?cl.replace(/^txtAl-/,''):false;
        element.style.textAlign=txtAl;

        /**
         * Cursor
         */
        //code for "crs"
        var crs = /^crs-/.test(cl)===true?cl.replace(/^crs-/,''):false;
        element.style.cursor=crs;

        /**
         * Display
         */
        //code for "d"
        var d = /^d-/.test(cl)===true?cl.replace(/^d-/,''):false;
        element.style.display=d;

        /**
         * color
         */
        //code for "clr"
        var clr = /^clr-/.test(cl)===true?cl.replace(/^clr-/,''):false;
        element.style.color=clr;

        /**
         * background-color
         */
        //code for "bgClr"
        var bgClr = /^bgClr-/.test(cl)===true?cl.replace(/^bgClr-/,''):false;
        element.style.backgroundColor=bgClr;

        
        //logging for getting on console
        console.log("\n  m: "+m+"\n mt: "+mt+"\n mr: "+mr+"\n mb: "+mb+"\n ml: "+ml+"\n mx: "+mx+"\n my: "+my);
    });
});

