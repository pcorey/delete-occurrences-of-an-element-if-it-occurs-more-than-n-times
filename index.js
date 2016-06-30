export function deleteNth(arr,x){
    if (x == 0) {
        return [];
    }
    let seen = {};
    return arr.filter((num) => {
        seen[num] = (seen[num] || 0) + 1;
        return seen[num] <= x;
    });
}
