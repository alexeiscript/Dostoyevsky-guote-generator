var quotes = [
    {name: '"Above all, don\'t lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself     and for others. And having no respect he ceases to love."', book: 'The Karamazov Brothers'},
    {name: '"Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth."', book: 'Crime and Punishment'},
    {name: '"To go wrong in one\'s own way is better than to go right in someone else\'s."', book: 'Crime and Punishment'},
    {name: '"It takes something more than intelligence to act intelligently."', book: 'Crime and Punishment'},
    {name: '"The mystery of human existence lies not in just staying alive, but in finding something to live for."', book: 'The Karamazov Brothers'},
    {name: '"The awful thing is that beauty is mysterious as well as terrible. God and the devil are fighting there and the battlefield is the heart of man."', book: 'The Karamazov Brothers'},
    {name: '"Beauty will save the world."', book: 'The Idiot'},
    {name: '"If you want to overcome the whole world, overcome yourself."', book: 'The Demons'},
    {name: '"Man is tormented by no greater anxiety than to find someone quickly to whom he can hand over that great gift of freedom with which the ill-fated creature is born."', book: 'The Karamazov Brothers'},
    {name: '"How does it come about that what an intelligent man expresses is much more stupid than what remains inside him?"', book: "The Adolescent"},
    {name: '"Marriage is the moral death of every proud soul, of all independence."', book: 'The Demons'},
    {name: '"Silence is always beautiful, and a silent person is always more beautiful than one who talks."', book: 'The Adolescent'},
    {name: '"Russians alone are able to combine so many opposites in themselves at one and the same time."', book: 'The Gambler'},
    {name: '"It is necessary that every man have at least somewhere to go. For there are times when one absolutely must go at least somewhere."', book: 'Crime and Punishment'},
];

var quoteBlock = document.getElementById('blockQuote');
var bookName = document.getElementById('book');

var quoteButton = document.querySelector('.quote-button');

var populate = function() {
    var randomize = quotes[Math.floor(Math.random() * quotes.length)];
    quoteBlock.textContent = randomize.name;
    bookName.textContent = randomize.book;
}

quoteButton.addEventListener('click', populate);

populate();
