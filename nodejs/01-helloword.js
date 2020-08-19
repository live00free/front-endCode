let person={
	name:"小明",
	age:20
}
const getAge=user=>user.age;
let call=`Hello,${person.name},你今年是岁${getAge(person)}吗？`;
console.log(call);
console.log(call+"是不是？");

//exports.xiaoming=person;
//exports.getUserAg=getAge;
module.exports.xiaoming=person;
module.exports.getUserAg=getAge;