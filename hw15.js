const balance = [3 , 7 , 11];
const totalBalance = balance.reduce((acc, number) => acc + number, 0);
console.log(totalBalance);




const users = [
    { name: "Alice", friends: ["Bob", "Charlie"] },
    { name: "Bob", friends: ["Alice", "David"] },
    { name: "Charlie", friends: ["Alice"] },
    { name: "David", friends: ["Eve"] },
];
function getUsersWithFriend(users, friendName) {
    return users
        .filter(user => user.friends.includes(friendName))
        .map(user => user.name);
}
const friendName = "Alice";
const result = getUsersWithFriend(users, friendName);
console.log(result); 



const users2 = [
    { name2: "Alice", friends2: ["Bob", "Charlie"] },
    { name2: "Bob", friends2: ["Alice", "David", "Eve"] },
    { name2: "Charlie", friends2: ["Alice"] },
    { name2: "David", friends2: ["Eve"] },
];

function getUsersSortedByFriendsCount(users2) {
    return users2
        .sort((a, b) => a.friends2.length - b.friends2.length) 
}
const result2 = getUsersSortedByFriendsCount(users2);
console.log(result);





