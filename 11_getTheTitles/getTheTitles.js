const getTheTitles = function(books) {
    let titles = [];
    const extractTitle = function (book) {titles.push(book.title)};
    books.forEach(extractTitle)
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
