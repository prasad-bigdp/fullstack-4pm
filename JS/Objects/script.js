var obj = {
    name: "raj",
    age: 20,
    fun:function(){console.log("hello")}
}
console.log(obj)
console.log(obj.name, obj['name'], obj.email)
obj.email = "abc@a.com"
console.log(obj.name, obj["name"], obj.email)
var obj2 = Object.create(obj)
var obj3 = Object.assign(obj)
console.log(obj2, obj2.name, obj3)
















