
describe ('Test my greet function', function() {
    it ('It should be able able to greet Thoko', function () {
        assert.equal('Hello, Thoko', greet('Thoko')); 
       


    });
    

    it ('It should be able to greet Thabiso', function () {
        assert.equal('Hello, Thabiso', greet('Thabiso'));


    });
});