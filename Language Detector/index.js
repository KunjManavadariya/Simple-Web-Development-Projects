import { franc, francAll } from 'franc';
import langs from 'langs';
import colors from 'colors';

const ISO = franc('Welcome to this application');
if (ISO === 'und') {
    console.log('Undetermined language, pass a larger string!'.red);
} else {
    const language = langs.where("3", ISO);
    console.log(`It's ${language.name}, isn't it?`.green);
}