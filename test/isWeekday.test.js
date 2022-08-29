describe ('Test my is it a Weekday function', function() {
    it ('is it a Weekday', function () {

        assert.equal(false, isWeekday('Saturday'));
        assert.equal(false, isWeekday('Sunday'));
    

    });

    

    it ('is it a Weekday', function () {

        assert.equal(true, isWeekday('Monday'));
        assert.equal(true, isWeekday('Wednesday'));
        
    });

    });