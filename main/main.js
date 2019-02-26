//distance:行驶距离 pauseTime:停车时间
module.exports = function main(distance,pauseTime) {
    //console.log("Debug Info");
    let price = 0;
    if(distance <= 2){
        price = 6;
    }
    else if(distance <= 8){
        price = (distance-2)*0.8+6;
    }
    else{
        price = (distance-8)*1.2+10.8;
    }
    price += pauseTime*0.25;
    return Math.round(price);

};