let pronouns = ["the", "our"];
let adjetives = ["great", "big"];
let nouns = ["jogger", "racoon", "puedes", "lastofus"];
let extensions = [".com", "net", ".us", ".io"];

function generateDomainNames() { // Toma un elemento de cada arreglo, crea variaciones de posibles dominios y almacena cada uno en el nuevo arreglo creado
  let domainNames = [];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjetives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let z = 0; z < extensions.length; z++) {
          let domainName = pronouns[i] + adjetives[j] + nouns[k] + extensions[z];
        domainNames.push(domainName); 
        }
      }
    }
  }

  return domainNames;
}

const generatedDomains = generateDomainNames();

console.log(generatedDomains);
