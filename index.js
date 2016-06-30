export function deleteNth(arr,x){
    let seen = {};
    return arr.filter((num) => {
        seen[num] = (seen[num] || 0) + 1;
        return seen[num] <= x;
    });
}
