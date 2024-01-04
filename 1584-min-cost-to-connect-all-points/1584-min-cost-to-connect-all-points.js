/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    let graph = []
    for (let i = 0; i < points.length; i++) {
        let [x1,y1] = points[i]
        for (let j = i+1; j < points.length; j++) {
            let [x2,y2] = points[j]
            let cost = Math.abs(x2-x1)+Math.abs(y2-y1)
            graph.push([i,j,cost])
        }
    }
    graph.sort((a,b)=>a[2]-b[2])
    let parent = new Array(points.length)
    for (let i = 0; i < points.length; i++) {
        parent[i] = i
    }
    function find(x){
        if(parent[x] === x){
            return x
        }else{
            return parent[x] = find(parent[x])
        }
    }
    function union(x,y){
        x = find(x)
        y = find(y)
        if(x < y){
            parent[y] = x
        }else{
            parent[x] = y
        }
    }
    let answer = 0
    for (const [a,b,w] of graph) {
        if(find(a) !== find(b)){
            union(a,b)
            answer += w
        }
    }
    return answer
    
};