// JavaScript Document

createArray();

week[0] = "Week";
dtes[0] = "Date";
topc[0] = "Topic";
text[0] = "Readings from Bulliet"
srce[0] = "Readings from Kishlansky"
othr[0] = "Other"

week[1] = "1";
dtes[1] = "08/14 - 08/16";
topc[1] = "Human Prehistory / First River-Valley Civilizations";
text[1] = "Chapters 1 &amp; 2"
srce[1] = "Documents<br />3, 4, 6, &amp; 7"
othr[1] = "&nbsp;<br />&nbsp;"

week[2] = "2";
dtes[2] = "08/21 - 08/23";
topc[2] = "New Civilizations in the East and West Hemipheres";
text[2] = "Chapter 3"
srce[2] = "Documents<br />19 &amp; 20"
othr[2] = "&nbsp;<br />&nbsp;"

week[3] = "3";
dtes[3] = "08/28 - 08/30";
topc[3] = "The Mediterranean and Middle East";
text[3] = "Chapter 4"
srce[3] = "Document 10"
othr[3] = "Paper 1<br />Assigned"

week[4] = "4";
dtes[4] = "09/04 - 09/06";
topc[4] = "Greece and Iran";
text[4] = "Chapter 5"
srce[4] = "Documents<br />13 &amp; 14"
othr[4] = "No class<br />09/04"

week[5] = "5";
dtes[5] = "09/11 - 09/13";
topc[5] = "The Roman and Han Empires";
text[5] = "Chapter 6"
srce[5] = "Documents<br />21, 25, &amp; 28"
othr[5] = "Paper 1<br />Due 09/13"

week[6] = "6";
dtes[6] = "09/18 - 09/20";
topc[6] = "India and Southeast Asia";
text[6] = "Chapter 7"
srce[6] = "Documents<br />17 &amp; 18"
othr[6] = "&nbsp;<br />&nbsp;"

week[7] = "7";
dtes[7] = "09/25 - 09/27";
topc[7] = "Catch Up and Review";
text[7] = "None"
srce[7] = "None"
othr[7] = "Exam 1<br />09/27"

week[8] = "8";
dtes[8] = "10/02 - 10/04";
topc[8] = "Networks of Communication &amp; Exchange";
text[8] = "Chapter 8"
srce[8] = "Handout"
othr[8] = "&nbsp;<br />&nbsp;"

week[9] = "9";
dtes[9] = "10/09 - 10/11";
topc[9] = "The Sassanid and Rise of Islam";
text[9] = "Chapter 9"
srce[9] = "Document 31"
othr[9] = "Paper 2<br />Assigned"

week[10] = "10";
dtes[10] = "10/16 - 10/18";
topc[10] = "Christian Europe";
text[10] = "Chapter 10"
srce[10] = "Documents<br />46, 47, &amp; 52"
othr[10] = "&nbsp;<br />&nbsp;"

week[11] = "11";
dtes[11] = "10/23 - 10/25";
topc[11] = "Inner and East Asia";
text[11] = "Chapter 11"
srce[11] = "Documents<br />38, 40, &amp; 41"
othr[11] = "Paper 2<br />Due 10/25"

week[12] = "12";
dtes[12] = "10/30 - 11/01";
topc[12] = "People and Civilizations of the Americas";
text[12] = "Chapter 12"
srce[12] = "Document 75"
othr[12] = "&nbsp;<br />&nbsp;"

week[13] = "13";
dtes[13] = "11/06 - 11/08";
topc[13] = "Catch Up and Review";
text[13] = "None"
srce[13] = "None"
othr[13] = "Exam 2<br />11/08"

week[14] = "14";
dtes[14] = "11/13 - 11/15";
topc[14] = "Mongul Eurasia and the Aftermath";
text[14] = "Chapter 13"
srce[14] = "Handout"
othr[14] = "&nbsp;<br />&nbsp;"

week[15] = "15";
dtes[15] = "11/20 - 11/22";
topc[15] = "Tropical Africa and Asia";
text[15] = "Chapter 14"
srce[15] = "Documents 36 &amp; 83"
othr[15] = "&nbsp;<br />&nbsp;"

week[16] = "16";
dtes[16] = "11/27 - 11/29";
topc[16] = "The Latin West";
text[16] = "Chapter 15"
srce[16] = "Documents<br />49, 54, 55, &amp; 62"
othr[16] = "&nbsp;<br />&nbsp;"

week[17] = "17";
dtes[17] = "12/04 - 12/06";
topc[17] = "The Maritime Revolution";
text[17] = "Chapter 16"
srce[17] = "Documents<br />72 - 74"
othr[17] = "&nbsp;<br />&nbsp;"

week[18] = "18";
dtes[18] = "12/11 - 12/13";
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

document.write('<table border="1" cellpadding="2" cellspacing="0" id="hist103" class="schedule"><tr>');
document.write('<th class="week">' + week[0] + '</th><th class="date">' + dtes[0] + '</th><th class="topic">' + topc[0] + '</th>');
document.write('<th class="text">' + text[0] + '</th><th class="source">' + srce[0] + '</th><th class="other">' + othr[0] + '</th></tr>');

for (i = 1; i < WEEKS; i++) {
    document.write('<tr><td class="week">' + week[i] + '</td><td class="date">' + dtes[i] + '</td><td class="topic">' + topc[i] + '</td>');
    document.write('<td class="text">' + text[i] + '</td><td class="source">' + srce[i] + '</td><td class="other">' + othr[i] + '</td></tr>');
}

document.write('</table>');