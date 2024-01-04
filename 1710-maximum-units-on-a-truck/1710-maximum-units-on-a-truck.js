/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b)=>b[1]-a[1])
    let answer = 0
    for (let i = 0; i < boxTypes.length; i++) {
        let [amount,weight] = boxTypes[i]
        if(truckSize === 0) return answer
        if(truckSize >= amount){
            truckSize -= amount
            answer += (amount*weight)
        }else{
            answer += (truckSize*weight)
            truckSize -= truckSize
        }
    }
    return answer
    
};