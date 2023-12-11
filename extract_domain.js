/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. */

function domainName(url) {
  let urlWithoutPrefix = url.replace(/(http:\/\/|https:\/\/|www\.)/g, "");
  return urlWithoutPrefix.split(".")[0];
}

console.log(domainName("http://github.com/carbonfive/raygun")); // github
console.log(domainName("https://www.cnet.com")); // cnet
console.log(domainName("www.world.ua")); // world
console.log(domainName("")); // ""