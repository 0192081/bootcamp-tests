
describe('Test my yearsAgo function' , function(){
    it('It should return how many years ago from the current year' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))

    });


it('It should return how many years ago from the current year' , function(){
    assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000))

});

it('It should return how many years ago from the current year' , function(){
    assert.equal((new Date().getFullYear() - 2005), yearsAgo(2005))

});
});