var a = 'hello';
var b = '10';
console.log(b);
// ___________*******_____________
function q(_msg) {
    return "hey " + _msg;
}
var str = q('Anuj');
var sstr = q(10);
console.log(str);
console.log(sstr);
// ___________*******_____________
var sum = function (_i, _j) {
    return "" + (_i + _j);
};
console.log(sum(9, 8));
// ___________*******_____________
var users = Array(2);
users[0] = "walter";
users[1] = "jessie";
users[2] = "anuj";
users[3] = 'ambikesh';
console.log('string[] are: ');
users.forEach(function (u) {
    console.log("name=> " + u);
});
// ___________*******_____________
var _uu = [
    "hello",
    {
        id: 1,
        name: "anuj",
        email: 'anuj60@gg.com'
    },
    145, true
];
_uu.forEach(function (u) {
    console.log("array objects are " + JSON.stringify(u));
});
var anuj = {
    id: 1,
    name: 'anuj',
    address: 'zolo acropolis'
};
console.log(anuj);
var ambi = {
    id: 2,
    name: 76,
    address: 86
};
console.log(ambi);
