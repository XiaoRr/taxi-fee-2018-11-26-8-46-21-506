const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it("起步价测试",function(){
        let result = main(0.1,0);
        expect(result).toBe(6);
    })

    it("起步价测试2",function(){
        let result = main(2,0);
        expect(result).toBe(6);
    })
});
