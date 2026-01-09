// JavaScript Document

createArray();

week[0] = "Week";
dtes[0] = "Date";
topc[0] = "Topic";
text[0] = "Readings from Bulliet"
srce[0] = "Discussion Topic"
othr[0] = "Other"

week[1] = "1";
dtes[1] = "&nbsp;<br />&nbsp;";
topc[1] = "Human Prehistory";
text[1] = "Chapter 1"
srce[1] = "TBA"
othr[1] = "&nbsp;<br />&nbsp;"

week[2] = "2";
dtes[2] = "&nbsp;<br />&nbsp;";
topc[2] = "The First River-Valley Civilizations";
text[2] = "Chapter 2"
srce[2] = "TBA"
othr[2] = "&nbsp;<br />&nbsp;"

week[3] = "3";
dtes[3] = "&nbsp;<br />&nbsp;";
topc[3] = "New Civilizations in the East and West Hemipheres";
text[3] = "Chapter 3"
srce[3] = "TBA"
othr[3] = "&nbsp;<br />&nbsp;"

week[4] = "4";
dtes[4] = "&nbsp;<br />&nbsp;";
topc[4] = "The Mediterranean and Middle East";
text[4] = "Chapter 5"
srce[4] = "TBA"
othr[4] = "Paper 1<br />Assigned"

week[5] = "5";
dtes[5] = "&nbsp;<br />&nbsp;";
topc[5] = "Greece and Iran";
text[5] = "Chapter 5"
srce[5] = "TBA"
othr[5] = "&nbsp;<br />&nbsp;"

week[6] = "6";
dtes[6] = "&nbsp;<br />&nbsp;";
topc[6] = "The Roman and Han Empires";
text[6] = "Chapter 6"
srce[6] = "TBA"
othr[6] = "Paper 1<br />Due"

week[7] = "7";
dtes[7] = "&nbsp;<br />&nbsp;";
topc[7] = "India and Southeast Asia";
text[7] = "Chapter 7"
srce[7] = "TBA"
othr[7] = "&nbsp;<br />&nbsp;"

week[8] = "8";
dtes[8] = "&nbsp;<br />&nbsp;";
topc[8] = "Catch Up and Review";
text[8] = "None"
srce[8] = "None"
othr[8] = "Exam 1<br />"

week[9] = "9";
dtes[9] = "&nbsp;<br />&nbsp;";
topc[9] = "Networks of Communication &amp; Exchange";
text[9] = "Chapter 8"
srce[9] = "TBA"
othr[9] = "&nbsp;<br />&nbsp;"

week[10] = "10";
dtes[10] = "&nbsp;<br />&nbsp;";
topc[10] = "The Sassanid and Rise of Islam";
text[10] = "Chapter 9"
srce[10] = "TBA"
othr[10] = "&nbsp;<br />&nbsp;"

week[11] = "11";
dtes[11] = "&nbsp;<br />&nbsp;";
topc[11] = "Christian Europe";
text[11] = "Chapter 10"
srce[11] = "TBA"
othr[11] = "&nbsp;<br />&nbsp;"

week[12] = "12";
dtes[12] = "&nbsp;<br />&nbsp;";
topc[12] = "Inner and East Asia";
text[12] = "Chapter 11"
srce[12] = "TBA"
othr[12] = "Paper 2<br />Assigned"

week[13] = "13";
dtes[13] = "&nbsp;<br />&nbsp;";
topc[13] = "People and Civilizations of the Americas";
text[13] = "Chapter 12"
srce[13] = "TBA"
othr[13] = "&nbsp;<br />&nbsp;"

week[14] = "14";
dtes[14] = "&nbsp;<br />&nbsp;";
topc[14] = "Mongul Eurasia and the Aftermath";
text[14] = "Chapter 13"
srce[14] = "TBA"
othr[14] = "Paper 2<br />Due"

week[15] = "15";
dtes[15] = "&nbsp;<br />&nbsp;";
topc[15] = "Tropical Africa and Asia";
text[15] = "Chapter 14"
srce[15] = "TBA"
othr[15] = "&nbsp;<br />&nbsp;"

week[16] = "16";
dtes[16] = "&nbsp;<br />&nbsp;";
topc[16] = "The Latin West";
text[16] = "Chapter 15"
srce[16] = "TBA"
othr[16] = "&nbsp;<br />&nbsp;"

week[17] = "17";
dtes[17] = "&nbsp;<br />&nbsp;";
topc[17] = "The Maritime Revolution";
text[17] = "Chapter 16"
srce[17] = "TBA"
othr[17] = "&nbsp;<br />&nbsp;"

week[18] = "18";
dtes[18] = "&nbsp;<br />&nbsp;";
topc[18] = "Finals Week";
text[18] = "None"
srce[18] = "None"
othr[18] = "Exam 2<br />Date TBA"


function createArray() {
    week = new Array();
    dtes = new Array();
    topc = new Array();
    text = new Array();
    srce = new Array();
    othr = new Array();
}

var WEEKS = week.length;

document.write('<table border="1" cellpadding="2" cellspacing="0" id="hist103O" class="schedule"><tr>');
document.write('<th class="week">' + week[0] + '</th><th class="date">' + dtes[0] + '</th><th class="topic">' + topc[0] + '</th>');
document.write('<th class="text">' + text[0] + '</th><th class="source">' + srce[0] + '</th><th class="other">' + othr[0] + '</th></tr>');

for (i = 1; i < WEEKS; i++) {
    document.write('<tr><td class="week">' + week[i] + '</td><td class="date">' + dtes[i] + '</td><td class="topic">' + topc[i] + '</td>');
    document.write('<td class="text">' + text[i] + '</td><td class="source">' + srce[i] + '</td><td class="other">' + othr[i] + '</td></tr>');
}

document.write('</table>');