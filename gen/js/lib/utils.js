
/* A "scraper safe" email url. */
function email(name, domain) {
	document.write("<a href='mailto:"+name+"@"+domain+"'>");
	document.write(name+"@"+domain);
	document.write("</a>");
};
