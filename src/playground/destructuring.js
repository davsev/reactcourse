//object destructuring

const book = {
    title: 'Ego is the enemy',
    author: 'Ryen Holiday',
    publisher:{
        //name: 'Penguin'
    }
};

const { name: publisherName = 'self-published'} = book.publisher;


console.log(publisherName);


//array destructuring

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75' ];
const [product, small, medium, large] = item;

console.log(`A meduim ${product} costs ${small}`)