const names = ["Alexandre", "Gabriel", "Marcelo", "Rafael", "Natal", 10, false]

const gabriel = names[1];
console.log(gabriel);

// Adiciona ao final da lista
names.push('josué')
console.log(names)

// Remove o elemento no primeiro index
names.shift()
console.log(names)

// Adiciona no primeiro index
names.unshift('guigui')
console.log(names)

// Remove o último valor da lista
names.pop()
console.log(names)

// Altera diretamente um elemento
names[5] = "gustavo"
console.log(names)

// Posicao de um elemento na lista
console.log(names.indexOf("Rafael"))
names.push('Alexandre')
const indexOfRafael = names.indexOf("Rafael")

// Sorting
const sortedNames = names.sort()
console.log(sortedNames)

// isArray
console.log(Array.isArray(names))
console.log(Array.isArray(indexOfRafael))