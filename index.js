export function deleteNth(arr,x){
    let seen = {};
    return arr.filter((num) => (seen[num] = ~~seen[num] + 1) <= x);
}
