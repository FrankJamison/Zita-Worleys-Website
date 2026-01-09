// Jam Express Drop-Down Menu Script 1.0
// Created by Frank Jamison
// August 17, 2006
// All Rights Reserved
// Used with Permission

jamExpressMenu();

/* Begin Menu Items */

tmenu[1] = '&nbsp;';
tlink[1] = "index.html";
ttype[1] = "static";

tmenu[2] = new Array(4);
tlink[2] = "#";
ttype[2] = "dropdown";
tmenu[2][0] = 'Course Information'
tmenu[2][1] = '<a href="hist103.html">History 103</a>'
tmenu[2][2] = '<a href="hist104.html">History 104</a>'
tmenu[2][3] = '<a href="hist111.html">History 111</a>'
tmenu[2][4] = '<a href="hist112.html">History 112</a>'

tmenu[3] = new Array(3);
tlink[3] = "#";
ttype[3] = "dropdown";
tmenu[3][0] = 'Course Syllabi'
tmenu[3][1] = '<a href="hist103syllabus.html">History 103</a>'
tmenu[3][2] = '<a href="hist103Osyllabus.html">History 103 Online</a>'
tmenu[3][3] = '<a href="hist104syllabus.html">History 104</a>'
tmenu[3][4] = '<a href="hist111syllabus.html">History 111</a>'
tmenu[3][5] = '<a href="hist112syllabus.html">History 112</a>'

tmenu[4] = 'Philosophy';
tlink[4] = "philosophy.html";
ttype[4] = "static";
tmenu[5] = 'Favorite Sites';
tlink[5] = "favsites.html";
ttype[5] = "static";
tmenu[6] = '&nbsp;';
tlink[6] = "mailto:zworley@msjc.edu";
ttype[6] = "static";


function jamExpressMenu() {
    tmenu = new Array();
    tlink = new Array();
    ttype = new Array();
}

function showMe(i) {
    var id = 'subMenu' + i + '';
    var sm = document.getElementById(id);
    sm.style.display = 'block';
}

function hideMe(i) {
    var id = 'subMenu' + i + '';
    var sm = document.getElementById(id);
    sm.style.display = 'none';
}


//	var menuAlign = getStyle();
var MENU = tmenu.length;



document.write('<div id="jamExpressMenu"><ul id="topMenu"><li class="endSpace">&nbsp;</li>');

for (i = 1; i < MENU; i++) {
    if (ttype[i] == "dropdown") {
        document.write('<li class="topMenuLink" id="topMenu' + i + '"><a href="' + tlink[i] + '" class="' + ttype[i] + '" onmouseover="showMe(' + i + ');" onmouseout="hide=setTimeout(\'hideMe(' + i + ')\',250)">' + tmenu[i][0] + '</a>');
        document.write('<ul class="subMenu" id="subMenu' + i + '">');
        for (j = 1; j < tmenu[i].length; j++) {
            document.write('<li class="subMenuLink" onmouseover="clearTimeout(hide);" onmouseout="hide=setTimeout(\'hideMe(' + i + ')\',250)">' + tmenu[i][j] + '</li>');
        }
        document.write('</ul></li>');
    } else {
        document.write('<li class="topMenuLink" id="topMenu' + i + '"><a href="' + tlink[i] + '" class="' + ttype[i] + '">' + tmenu[i] + '</a></li>');
    }
}

document.write('<li class="endSpace">&nbsp;</li></ul><br class="clearit" /></div>');

function href(URL) {
    window.open(URL);
}

function getStyle() {

    var sheets = document.styleSheets;
    if (navigator.appVersion.indexOf("MSIE") != -1) {
        var ie = true;
    }

    for (var i = 0; i < sheets.length; i++) {

        if (ie) {
            var rules = sheets[i].rules;
        } else {
            var rules = sheets[i].cssRules;
        }

        for (var j = 0; j < rules.length; j++) {
            if (ie) {
                var selector = document.styleSheets[i].rules[j].selectorText;
                if (selector == ".topMenuLink") {
                    return document.styleSheets[i].rules[j].style.styleFloat;
                }
            } else {
                var selector = document.styleSheets[i].cssRules[j].selectorText;
                if (selector == ".topMenuLink") {
                    return document.styleSheets[i].cssRules[j].style.getPropertyValue('float');
                }
            }
        }
    }
}