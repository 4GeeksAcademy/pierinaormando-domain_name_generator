let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "puedes", "lastofus"];
let extensions = [".com", "net", ".us", ".io"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      //  los elementos (i) de cada array para formar un nombre de dominio
      for (let z = 0; z < extensions.length; z++) {
        let domainName = pronoun[i] + adj[j] + noun[k] + extensions[z];
        console.log(domainName);
      }
    }
  }
}
console.log("Hola")
