import { Box } from './fp/box';
import { fromNullable, Either } from './fp/either';

const nextCharForNumberString = (str: string): string => {
    return new Box(str)
        .map(s => s.trim())
        .map(s => parseInt(s))
        .map(i => i + 1)
        .fold(i => String.fromCharCode(i));
};

// console.log(nextCharForNumberString(' 64'));

const findColor = (name: string): Either => {
    return fromNullable({ red: '#ff0000', blue: '#00ff00', green: '#0000ff' }[name]);
};

findColor('rsadd')
    .map(c => c.slice(1))
    .map(c => c.toUpperCase())
    .fold(c => console.log('error'),
          c => console.log(c))