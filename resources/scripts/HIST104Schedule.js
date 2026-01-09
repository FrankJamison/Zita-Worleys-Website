// JavaScript Document

createArray();

week[0] = "Week";
dtes[0] = "Date";
topc[0] = "Topic";
text[0] = "Readings from Bulliet"
srce[0] = "Readings from Reilly"
othr[0] = "Other"

week[1] = "1";
dtes[1] = "01/23 - 01/25";
topc[1] = "The Maritime Revolution";
text[1] = "Chapter 16"
srce[1] = "Pages 1-4 &amp; 28-47"
othr[1] = "&nbsp;<br />&nbsp;"

week[2] = "2";
dtes[2] = "01/30 - 02/02";
topc[2] = "The Transformation of Europe";
text[2] = "Chapter 17"
srce[2] = "Pages 171-178 &amp; 185-187"
othr[2] = "&nbsp;<br />&nbsp;"

week[3] = "3";
dtes[3] = "02/06 - 02/08";
topc[3] = "The Americas, Atlantic, and Africa";
text[3] = "Chapters 18 &amp; 19"
srce[3] = "Pages 76-89"
othr[3] = "&nbsp;<br />&nbsp;"

week[4] = "4";
dtes[4] = "02/13 - 02/15";
topc[4] = "Southwest Asia &amp; Indian Ocean / Northern Eurasia";
text[4] = "Chapters 20 &amp; 21"
srce[4] = "Pages 97-114, Peter the Great Handout"
othr[4] = "&nbsp;<br />&nbsp;"

week[5] = "5";
dtes[5] = "02/20 - 02/22";
topc[5] = "Catch up and Review";
text[5] = "None"
srce[5] = "None"
othr[5] = "Exam 1<br />02/22"

week[6] = "6";
dtes[6] = "02/27 - 03/01";
topc[6] = "Revolutionary Changes in the Atlantic";
text[6] = "Chapter 22"
srce[6] = "Pages 204-216"
othr[6] = "&nbsp;<br />&nbsp;"

week[7] = "7";
dtes[7] = "03/06 - 03/08";
topc[7] = "Industrial Revolution/ Nation Building";
text[7] = "Chapters 23 &amp; 24"
srce[7] = "Pages 236-237 &amp; 243-255"
othr[7] = "Paper 1<br />Assigned"

week[8] = "8";
dtes[8] = "03/13 - 03/15";
topc[8] = "Africa, India, and China / Land Empires�";
text[8] = "Chapters 25 &amp; 26"
srce[8] = "Handout: The Opium Trade"
othr[8] = "&nbsp;<br />&nbsp;"

week[9] = "9";
dtes[9] = "03/20 - 03/22";
topc[9] = "The New Power Balance";
text[9] = "Chapter 27"
srce[9] = "Pages 255-264, Handout: Stearns"
othr[9] = "Paper 1<br />Due 03/22"

week[10] = "10";
dtes[10] = "03/27 - 03/29";
topc[10] = "New Imperialism";
text[10] = "Chapter 28"
srce[10] = "Pages 278-283 &amp; 298-299"
othr[10] = "&nbsp;<br />&nbsp;"

week[11] = "11";
dtes[11] = "04/04 - 04/06";
topc[11] = "SPRING BREAK";
text[11] = "None"
srce[11] = "None"
othr[11] = "&nbsp;<br />&nbsp;"

week[12] = "12";
dtes[12] = "04/10 - 04/12";
topc[12] = "Catch up and Review";
text[12] = "None"
srce[12] = "None"
othr[12] = "Exam 2<br />04/12"

week[13] = "13";
dtes[13] = "04/17 - 04/19";
topc[13] = "The Crisis of the Imperial Order";
text[13] = "Chapter 29"
srce[13] = "Pages 354-356, 370-377, &amp; 374-382"
othr[13] = "Paper 2<br />Assigned"

week[14] = "14";
dtes[14] = "04/24 - 04/26";
topc[14] = "The Collapse of the Old Order";
text[14] = "Chapter 30"
srce[14] = "Pages 396-409 &amp; 419-423"
othr[14] = "&nbsp;<br />&nbsp;"

week[15] = "15";
dtes[15] = "05/01 - 05/03";
topc[15] = "Striving for Independence";
text[15] = "Chapter 31"
srce[15] = "Pages 313-314, 333-334, &amp; 339-344"
othr[15] = "Paper 2<br />Due 05/03"

week[16] = "16";
dtes[16] = "05/08 - 05/10";
topc[16] = "The Cold War and Decolonization";
text[16] = "Chapter 32"
srce[16] = "Pages 434-448 &amp; 466-469"
othr[16] = "&nbsp;<br />&nbsp;"

week[17] = "17";
dtes[17] = "05/15 - 05/17";
topc[17] = "The Post-Cold War World and Globalization";
text[17] = "Chapters 33 &amp; 34"
srce[17] = "Pages 516-524, 528-538, &amp; 542-545"
othr[17] = "&nbsp;<br />&nbsp;"

week[18] = "18";
dtes[18] = "05/22 - 05/24";
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

document.write('<table border="1" cellpadding="2" cellspacing="0" id="hist104" class="schedule"><tr>');
document.write('<th class="week">' + week[0] + '</th><th class="date">' + dtes[0] + '</th><th class="topic">' + topc[0] + '</th>');
document.write('<th class="text">' + text[0] + '</th><th class="source">' + srce[0] + '</th><th class="other">' + othr[0] + '</th></tr>');

for (i = 1; i < WEEKS; i++) {
    document.write('<tr><td class="week">' + week[i] + '</td><td class="date">' + dtes[i] + '</td><td class="topic">' + topc[i] + '</td>');
    document.write('<td class="text">' + text[i] + '</td><td class="source">' + srce[i] + '</td><td class="other">' + othr[i] + '</td></tr>');
}

document.write('</table>');