/**
 * Here is the codes for minisote-css.js
 * Author: Rafid Al Mahmud
 * Last Updated: 04.05.2024
 * Verson: 1.0.0 comming soon. Demo - [ // css codes ]
 * Verson: 1.1.0 [Normal]
 * Verson: 1.2.0 comming soon. Demo - [ initPref('crs', 'cursor'); ]
*/

$ = x => document.querySelectorAll(x);
$('[class]').forEach(e => {
    var valOfClassAtt = e.getAttribute("class");
    console.log(valOfClassAtt);
    // document.querySelector().classList.contains('a')
    e.classList.forEach(cl => {

        function initPref(config, exec = true) {
            var pref = config.pref;
            var prop = config.prop || 'background';
            var val = config.val || [];
            var v;
            exec = (exec !== true && typeof (exec) !== 'function') ? () => { } : exec;
            if (new RegExp('^' + config.pref + '-').test(cl)) {
                for (let i = 0; i < val.length; i++) {
                    if (new RegExp(val[i][0] + "$").test(cl)) {
                        v = val[i][1];
                        console.log('i=' + i + '\nno=1\n' + v + '\n' + (new RegExp(val[i][0]).test(cl)));
                    }
                }
                v = (typeof v === 'undefined') ? cl.replace(new RegExp("^" + config.pref + "-"), '') : v;
                console.log(v);
                // eval('e.style.' + prop + "=v");
                (exec === true) ? e.style[prop] = v : exec(v, prop, cl);
            }
            //val: [['ptr', 'pointer']]
        }

        // Padding
        initPref({ pref: 'p' }, v => e.style['padding'] = v + 'px');
        initPref({ pref: 'pt' }, v => e.style['paddingTop'] = v + 'px');
        initPref({ pref: 'pr' }, v => e.style['paddingRight'] = v + 'px');
        initPref({ pref: 'pb' }, v => e.style['paddingBottom'] = v + 'px');
        initPref({ pref: 'pl' }, v => e.style['paddingLeft'] = v + 'px');
        initPref({ pref: 'px' }, v => e.style['paddingLeft'] = v + 'px');
        initPref({ pref: 'px' }, v => e.style['paddingRight'] = v + 'px');
        initPref({ pref: 'py' }, v => e.style['paddingTop'] = v + 'px');
        initPref({ pref: 'py' }, v => e.style['paddingBottom'] = v + 'px');

        // Margin
        initPref({ pref: 'm' }, v => e.style['margin'] = v + 'px');
        initPref({ pref: 'mt' }, v => e.style['marginTop'] = v + 'px');
        initPref({ pref: 'mr' }, v => e.style['marginRight'] = v + 'px');
        initPref({ pref: 'mb' }, v => e.style['marginBottom'] = v + 'px');
        initPref({ pref: 'ml' }, v => e.style['marginLeft'] = v + 'px');
        initPref({ pref: 'mx' }, v => e.style['marginLeft'] = v + 'px');
        initPref({ pref: 'mx' }, v => e.style['marginRight'] = v + 'px');
        initPref({ pref: 'my' }, v => e.style['marginTop'] = v + 'px');
        initPref({ pref: 'my' }, v => e.style['marginBottom'] = v + 'px');

        // Border
        initPref({ pref: 'b' }, v => e.style['border'] = v + 'px');
        initPref({ pref: 'bt' }, v => e.style['borderTop'] = v + 'px');
        initPref({ pref: 'br' }, v => e.style['borderRight'] = v + 'px');
        initPref({ pref: 'bb' }, v => e.style['borderBottom'] = v + 'px');
        initPref({ pref: 'bl' }, v => e.style['borderLeft'] = v + 'px');
        initPref({ pref: 'bx' }, v => e.style['borderLeft'] = v + 'px');
        initPref({ pref: 'bx' }, v => e.style['borderRight'] = v + 'px');
        initPref({ pref: 'by' }, v => e.style['borderTop'] = v + 'px');
        initPref({ pref: 'by' }, v => e.style['borderBottom'] = v + 'px');

        // Height
        initPref({ pref: 'h' }, v => e.style['height'] = v + 'px');
        initPref({ pref: 'hmx' }, v => e.style['maxHeight'] = v + 'px');
        initPref({ pref: 'hmn' }, v => e.style['minHeight'] = v + 'px');

        // Width
        initPref({ pref: 'w' }, v => e.style['width'] = v + 'px');
        initPref({ pref: 'wmx' }, v => e.style['maxWidth'] = v + 'px');
        initPref({ pref: 'wmn' }, v => e.style['minWidth'] = v + 'px');

        // Text-Align
        initPref({ pref: 'txtAl', prop: 'textAlign' });

        // Cursor
        initPref({ pref: 'crs', prop: 'cursor' });

        // Display
        initPref({ pref: 'd', prop: 'display' });

        // color
        initPref({ pref: 'clr', prop: 'color' });

        // background-color
        initPref({ pref: 'bgClr', prop: 'backgroundColor' });


        //logging for getting on console
        // console.log("\n  m: " + m + "\n mt: " + mt + "\n mr: " + mr + "\n mb: " + mb + "\n ml: " + ml + "\n mx: " + mx + "\n my: " + my);

    });
});
