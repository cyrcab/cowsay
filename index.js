const informations = require('./information');
const cowsay = require('cowsay');

console.log(cowsay.think({
    text: `Hello I'm ${informations.name} from ${informations.campus} campus!`
}));