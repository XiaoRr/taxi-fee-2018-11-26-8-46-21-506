//distance:行驶距离 pauseTime:停车时间
module.exports = function main(distance,pauseTime) {
    //console.log("Debug Info");
    if(distance <= 2){
        return 6;
    }
    if(distance <= 8){
        return Math.round((distance-2)*0.8+6);
    }
    return Math.round((distance-8)*1.2+10.8);

};