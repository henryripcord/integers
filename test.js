const nth_most_rare_signature = (list =[], n) => {
    const hash = {}

    if (n <= 0) throw new Error ("No negative number allowed or zero allowed");

    list.forEach(item => {
        let keys = Object.keys(hash)
        keys.includes(item.toString()) ? hash[item] += 1 : hash[item] = 1
    })
    const sortedHash = Object.entries(hash).sort((a, b) => a[1] - b[1])

    if(sortedHash.length < n) throw new Error('Invalid rare position')
    return sortedHash[n - 1][0]
}

const list = [5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 1, 5]

console.log(nth_most_rare_signature(list, 2))