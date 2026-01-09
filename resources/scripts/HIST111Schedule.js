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
topc[1] = "The Meeting of Cultures";
text[1] = "Chapter 1"
srce[1] = "Handout 1"
othr[1] = "&nbsp;<br />&nbsp;"

week[2] = "2";
dtes[2] = "08/22 - 08/24";
topc[2] = "Transplantations and Borderlands";
text[2] = "Chapter 2"
srce[2] = "Handout 2"
othr[2] = "&nbsp;<br />&nbsp;"

week[3] = "3";
dtes[3] = "08/29 - 08/30";
topc[3] = "Provincial Society and Culture";
text[3] = "Chapter 3"
srce[3] = "Marcus 9-11"
othr[3] = "&nbsp;<br />&nbsp;"

week[4] = "4";
dtes[4] = "09/05 - 09/07";
topc[4] = "Empire in Transition";
text[4] = "Chapter 4"
srce[4] = "The Gazette,<br />Marcus 13-14"
othr[4] = "&nbsp;<br />&nbsp;"

week[5] = "5";
dtes[5] = "09/12 - 09/14";
topc[5] = "The Revolution";
text[5] = "Chapter 5"
srce[5] = "B. Arnold,<br />Marcus 16, 17, &amp; 20"
othr[5] = "&nbsp;<br />&nbsp;"

week[6] = "6";
dtes[6] = "09/19 - 09/21";
topc[6] = "Catch Up and Review";
text[6] = "None"
srce[6] = "None"
othr[6] = "Exam 1 &amp; Paper Topic Due 09/21"

week[7] = "7";
dtes[7] = "09/26 - 09/28";
topc[7] = "Constitution and Republic";
text[7] = "Chapter 6"
srce[7] = "Handout 3"
othr[7] = "&nbsp;<br />&nbsp;"

week[8] = "8";
dtes[8] = "10/03 - 10/05";
topc[8] = "The Jeffersonian Era";
text[8] = "Chapter 7"
srce[8] = "Marcus 21 &amp; 24"
othr[8] = "&nbsp;<br />&nbsp;"

week[9] = "9";
dtes[9] = "10/10 - 10/12";
topc[9] = "Varieties of Nationalism";
text[9] = "Chapter 8"
srce[9] = "Handout 4"
othr[9] = "&nbsp;<br />&nbsp;"

week[10] = "10";
dtes[10] = "10/17 - 10/19";
topc[10] = "Jacksonian America";
text[10] = "Chapter 9"
srce[10] = "Handout 5,<br />Marcus 26"
othr[10] = "&nbsp;<br />&nbsp;"

week[11] = "11";
dtes[11] = "10/24 - 10/26";
topc[11] = "The Economic Revolution";
text[11] = "Chapter 10"
srce[11] = "Handout 6"
othr[11] = "&nbsp;<br />&nbsp;"

week[12] = "12";
dtes[12] = "10/31 - 11/02";
topc[12] = "Catch up and Review";
text[12] = "None"
srce[12] = "None"
othr[12] = "Exam 2<br />11/02"

week[13] = "13";
dtes[13] = "11/07 - 11/09";
topc[13] = "Cotton, Slavery and the Old South";
text[13] = "Chapter 11"
srce[13] = "Henry Brown,<br />Marcus 30"
othr[13] = "&nbsp;<br />&nbsp;"

week[14] = "14";
dtes[14] = "11/14 - 11/16";
topc[14] = "Antebellum Culture and Reform";
text[14] = "Chapter 12"
srce[14] = "Handout 7,<br />Marcus 27"
othr[14] = "&nbsp;<br />&nbsp;"

week[15] = "15";
dtes[15] = "11/21 - 11/23";
topc[15] = "The Crisis of the Union";
text[15] = "Chapter 13"
srce[15] = "Handout 8b"
othr[15] = "Paper Due 11/21<br />No Class 11/23"

week[16] = "16";
dtes[16] = "11/28 - 11/30";
topc[16] = "The Civil War";
text[16] = "Chapter 14"
srce[16] = "Handout 9"
othr[16] = "&nbsp;<br />&nbsp;"

week[17] = "17";
dtes[17] = "12/05 - 12/07";
topc[17] = "Reconstruction";
text[17] = "Chapter 15"
srce[17] = "Marcus 42-44"
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

document.write('<table border="1" cellpadding="2" cellspacing="0" id="hist111" class="schedule"><tr>');
document.write('<th class="week">' + week[0] + '</th><th class="date">' + dtes[0] + '</th><th class="topic">' + topc[0] + '</th>');
document.write('<th class="text">' + text[0] + '</th><th class="source">' + srce[0] + '</th><th class="other">' + othr[0] + '</th></tr>');

for (i = 1; i < WEEKS; i++) {
    document.write('<tr><td class="week">' + week[i] + '</td><td class="date">' + dtes[i] + '</td><td class="topic">' + topc[i] + '</td>');
    document.write('<td class="text">' + text[i] + '</td><td class="source">' + srce[i] + '</td><td class="other">' + othr[i] + '</td></tr>');
}

document.write('</table>');