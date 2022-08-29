describe ('Test my regCheck function', function() {
    it ('should check if a registration number is for GP, L, EC, MP registration plates ', function () {

assert.equal(true, regCheck('5566 L', 'L'));
assert.equal(false, regCheck('5566 L', 'M'));


    });
    

it ('check if a registration number is for GP, L, EC, MP registration plates ', function () {

    assert.equal(false, regCheck('DC 55 YU GP', 'EC'));
    assert.equal(true, regCheck('5566 L', 'L'));

    
        });
});
