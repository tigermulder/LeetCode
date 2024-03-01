// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(n) {
    let binary = n.toString(2);
    let maxGapLength = 0;
    let currentGapLength = 0;
    let inGap = false;
    
    for (let bit of binary) {
        if (bit === '1') {
            if (inGap) {
                maxGapLength = Math.max(maxGapLength, currentGapLength);
                currentGapLength = 0;
            } else {
                inGap = true;
            }
        } else if (inGap) {
            currentGapLength++;
        }
    }
    
    return maxGapLength;
}