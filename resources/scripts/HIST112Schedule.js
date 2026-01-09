// JavaScript Document

createArray();

week[0] = "Week";
dtes[0] = "Date";
topc[0] = "Topic";
text[0] = "Readings from Brinkley"
srce[0] = "Primary Source Readings"
othr[0] = "Other"

week[1] = "1";
dtes[1] = "08/15 - 08/17";
topc[1] = "Reconstruction";
text[1] = "Chapter 15"
srce[1] = "Marcus 2-26"
othr[1] = "&nbsp;<br />&nbsp;"

week[2] = "2";
dtes[2] = "08/22 - 08/24";
topc[2] = "Conquest of the Far West";
text[2] = "Chapter 16"
srce[2] = "Marcus 6 &amp; pgs. 45-47"
othr[2] = "&nbsp;<br />&nbsp;"

week[3] = "3";
dtes[3] = "08/29 - 08/30";
topc[3] = "Industrial Supremacy / Rise of Cities";
text[3] = "Chapters 17 &amp; 18"
srce[3] = "Marcus 8, 9, &amp; 11"
othr[3] = "&nbsp;<br />&nbsp;"

week[4] = "4";
dtes[4] = "09/05 - 09/07";
topc[4] = "Stalemate to Crisis / The Imperial Republic";
text[4] = "Chapters 19 &amp; 20"
srce[4] = "Mark Twain Handout"
othr[4] = "&nbsp;<br />&nbsp;"

week[5] = "5";
dtes[5] = "09/12 - 09/14";
topc[5] = "The Progressive Era";
text[5] = "Chapters 21 &amp; 22"
srce[5] = "Sinclair Handout, Marcus pgs. 139-148"
othr[5] = "&nbsp;<br />&nbsp;"

week[6] = "6";
dtes[6] = "09/19 - 09/21";
topc[6] = "Catch Up and Review";
text[6] = "None"
srce[6] = "None"
othr[6] = "Exam 1 &amp; Paper Topic Due 09/21"

week[7] = "7";
dtes[7] = "09/26 - 09/28";
topc[7] = "The Great War";
text[7] = "Chapter 23"
srce[7] = "Marcus 20"
othr[7] = "&nbsp;<br />&nbsp;"

week[8] = "8";
dtes[8] = "10/03 - 10/05";
topc[8] = "The New Era";
text[8] = "Chapter 24"
srce[8] = "Marcus 21, 23, &amp; 24"
othr[8] = "&nbsp;<br />&nbsp;"

week[9] = "9";
dtes[9] = "10/10 - 10/12";
topc[9] = "The Great Depression and New Deal";
text[9] = "Chapters 25 &amp; 26"
srce[9] = "Marcus 25-26"
othr[9] = "&nbsp;<br />&nbsp;"

week[10] = "10";
dtes[10] = "10/17 - 10/19";
topc[10] = "The Global Crisis and WWII";
text[10] = "Chapters 27 &amp; 28"
srce[10] = "Marcus 27, 29, &amp; 30"
othr[10] = "&nbsp;<br />&nbsp;"

week[11] = "11";
dtes[11] = "10/24 - 10/26";
topc[11] = "Catch up and Review";
text[11] = "None"
srce[11] = "None"
othr[11] = "Exam 2<br />10/26"

week[12] = "12";
dtes[12] = "10/31 - 11/02";
topc[12] = "The Cold War";
text[12] = "Chapter 29"
srce[12] = "Marcus 32"
othr[12] = "&nbsp;<br />&nbsp;"

week[13] = "13";
dtes[13] = "11/07 - 11/09";
topc[13] = "The Affluent Society and Liberalism";
text[13] = "Chapters 30 &amp; 31"
srce[13] = "Marcus 34-35"
othr[13] = "&nbsp;<br />&nbsp;"

week[14] = "14";
dtes[14] = "11/14 - 11/16";
topc[14] = "The Crisis of Authority";
text[14] = "Chapter 32"
srce[14] = "Betty Friedan, Marcus 37"
othr[14] = "&nbsp;<br />&nbsp;"

week[15] = "15";
dtes[15] = "11/21 - 11/23";
topc[15] = "Reagan and Diminishing Expectations";
text[15] = "Chapter 33"
srce[15] = "Marcus 38-39"
othr[15] = "Paper Due 11/21<br />No Class 11/23"

week[16] = "16";
dtes[16] = "11/28 - 11/30";
topc[16] = "Globalization";
text[16] = "Chapter 34"
srce[16] = "Marcus 43-46"
othr[16] = "&nbsp;<br />&nbsp;"

week[17] = "17";
dtes[17] = "12/05 - 12/07";
topc[17] = "Select Topics from Current Events";
text[17] = "None"
srce[17] = "None"
othr[17] = "&nbsp;<br />&nbsp;"

week[18] = "18";
dtes[18] = "12/12 - 12/14";
topc[18] = "Finals Week";
text[18] = "None"
srce[18] = "None"
othr[18] = "Exam 3<br />Date TBA"


function createArray() {
    week = new Array();
    dtes = new Array();
    topc = new Array();
    text = new Array();
    srce = new Array();
    othr = new Array();
}

var WEEKS = week.length;

document.write('<table border="1" cellpadding="2" cellspacing="0" id="hist112" class="schedule"><tr>');
document.write('<th class="week">' + week[0] + '</th><th class="date">' + dtes[0] + '</th><th class="topic">' + topc[0] + '</th>');
document.write('<th class="text">' + text[0] + '</th><th class="source">' + srce[0] + '</th><th class="other">' + othr[0] + '</th></tr>');

for (i = 1; i < WEEKS; i++) {
    document.write('<tr><td class="week">' + week[i] + '</td><td class="date">' + dtes[i] + '</td><td class="topic">' + topc[i] + '</td>');
    document.write('<td class="text">' + text[i] + '</td><td class="source">' + srce[i] + '</td><td class="other">' + othr[i] + '</td></tr>');
}

document.write('</table>');