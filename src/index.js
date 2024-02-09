import './style.css';

import LinkedList from './linkedList';

const list = new LinkedList(['first', 'second', 'third']);

list.append('fourth');
list.append('sixth');
list.insertAt('fifth', list.find('sixth'));
list.prepend('zeroeth');
list.insertAt('wrong', 7);

console.log('toString: ', list.toString());
list.removeAt(list.find('wrong'));

console.log('toString: ', list.toString());
console.log('size: ', list.size());
console.log('head: ', list.head());
console.log('tail: ', list.tail());
console.log('contains true: ', list.contains('zeroeth'));

const sixth = list.at(list.find('sixth'));
console.log('sixth: ', sixth);

const fifth = list.get('fifth');
console.log('fifth: ', fifth);
