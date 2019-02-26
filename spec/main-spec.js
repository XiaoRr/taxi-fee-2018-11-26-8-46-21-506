const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it("Test",function(){
        let result = main(1);
        expect(result).toBe(6);
    })

    it("Test2",function(){
        let result = main(1);
        expect(result).toBe(6);
    })

    it("Test3",function(){
        let result = main(1);
        expect(result).toBe(6);
    })
});
