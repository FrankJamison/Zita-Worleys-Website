// Favorite Links Listing Script
// Created by Frank Jamison
// August 17, 2006


createArray();

site[1] = "American Civil Liberties Union";
surl[1] = "http://www.aclu.org/";
desc[1] = "List of local chapters, extensive discussion of issues, court cases organization is involved in, and how to get legal help."

site[2] = "Ancient World History";
surl[2] = "http://ancient-world.org/";
desc[2] = "Links to associations, museums, and ancient civilizations."

site[3] = "Art Institute of Chicago: Art Access";
surl[3] = "http://www.artic.edu/artaccess/";
desc[3] = "Art Access examines objects from various areas of the Art Institute of Chicago's permanent collection to enrich visitors' understanding of their content, style, and historical context."

site[4] = "Democracy Now!";
surl[4] = "http://www.democracynow.org/";
desc[4] = "A syndicated news and opinion radio and television program that airs on over 420 radio and television stations, on cable TV, and both satellite television networks in North America."

site[5] = "Digital History";
surl[5] = "http://www.digitalhistory.uh.edu/";
desc[5] = "Enhances history teaching and research through primary sources, an online textbook, extensive reference resources, and interactive materials."

site[6] = "Global Policy Forum";
surl[6] = "http://www.globalpolicy.org/";
desc[6] = "News, information, analysis and resources from an organization that monitors UN policy making on the matter and promotes accountability of global decisions."

site[7] = "Internet History Sourcebooks Project";
surl[7] = "http://www.fordham.edu/halsall/";
desc[7] = "A collection of public domain and copy-permitted historical texts presented cleanly (without advertising or excessive layout) for educational use."

site[8] = "J. Paul Getty Museum Exhibitions";
surl[8] = "http://www.getty.edu/art/exhibitions/";
desc[8] = "Learn about exhibitions currently on view. You can also explore past exhibitions and see what will be on view in the near future."

site[9] = "Library of Congress";
surl[9] = "http://www.loc.gov/";
desc[9] = "The Library of Congress is the nation's oldest federal cultural institution, and it serves as the research arm of Congress. It is also the largest library in the world, with more than 120 million items."

site[10] = "Los Angeles County Museum of Art";
surl[10] = "http://www.lacma.org/";
desc[10] = "The L.A. County Museum of Art is the premier visual arts museum in the Western U.S. Its holdings include more than 100,000 works spanning the history of art from ancient times to the present."

site[11] = "Questia Online Library";
surl[11] = "http://www.questia.com/";
desc[11] = "Paid subscription service that provides access to a large online collection of books and journal articles in the humanities and social sciences, plus magazine and newspaper articles."

site[12] = "Smithsonian Institution History &amp; Culture";
surl[12] = "http://www.si.edu/history_and_culture/";
desc[12] = "American History, Biographies, Politics, Religion..."

site[13] = "US History";
surl[13] = "http://www.ushistory.org/";
desc[13] = "Colonial and Revolutionary war history. Includes information on historic sites and people."

function createArray() {
    site = new Array();
    surl = new Array();
    desc = new Array();
}

var LINKS = site.length;

for (i = 1; i < LINKS; i++) {
    document.write('<p class="favoriteLink"><a href="javascript:href(\'' + surl[i] + '\')">' + site[i] + '</a><br />');
    document.write(desc[i] + '</p>');
}