// Test function addBook(title, author, ID)
describe("addBook", function(){
    it('Add book "Driven to Distraction"', function(){
        assert.deepEqual(addBook("Driven to Distraction","Edward M",3231),{ title: 'Driven to Distraction', author: 'Edward M', libraryID: 3231 });
    });
    it('Add book "Just Because"', function(){
        assert.deepEqual(addBook("Just Because","Matthew McConaughey",3426),{ title: 'Just Because', author: 'Matthew McConaughey', libraryID: 3426 });
    });
});

// Test function getTitles()
describe("getTitles", function(){
    it("Get title should return all the book titles in libraryBooks in an alphabetically ordered array", function(){
        assert.deepEqual(getTitles(),['Driven to Distraction','Just Because' ,'Mockingjay: The Final Book of The Hunger Games', 'The Road Ahead', 'The Road Ahead', 'Walter Isaacson']);
    });
});

//test function findBooks(keyword)
describe("findBooks", function(){
    it('find book contains letter "a" should return books alphabetically ordered by the author', function(){
        assert.deepEqual(findBooks("a"),[{ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1235 },
            { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 4268 },
            { title: 'Driven to Distraction', author: 'Edward M', libraryID: 3231 },
            { title: 'Just Because', author: 'Matthew McConaughey', libraryID: 3426 },
            { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4268 },
            { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3257 }]);
    });
    it('find book contains letter "the" should return books alphabetically ordered by the author', function(){
        assert.deepEqual(findBooks("the"),[{ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1235 },
            { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 4268 },
            { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3257 }]);
    });
    it('find book contains letter "al" should return books alphabetically ordered by the author', function(){
        assert.deepEqual(findBooks("al"),[{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4268 },
            { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3257 }]);
    });
});