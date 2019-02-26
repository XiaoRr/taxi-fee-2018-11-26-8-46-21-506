const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it("起步价测试",function(){
        let result = main(0.1,0);
        expect(result).toBe(6);
    })

    it("起步价测试Ⅱ",function(){
        let result = main(2,0);
        expect(result).toBe(6);
    })

    it("8公里前的行驶",function(){
        let result = main(3,0);
        expect(result).toBe(7);
    })

    it("8公里前的行驶Ⅱ",function(){
        let result = main(8,0);
        expect(result).toBe(11);
    })

    it("8公里后的行驶",function(){
        let result = main(14,0);
        expect(result).toBe(18);
    })

    it("8公里后的行驶Ⅱ",function(){
        let result = main(100,0);
        expect(result).toBe(121);
    })

    it("停车费",function(){
        let result = main(2,3);
        expect(result).toBe(7);
    })

    it("停车费Ⅱ",function(){
        let result = main(100,10);
        expect(result).toBe(124);
    })
});
