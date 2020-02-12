// var a = 10;
// var b = 20;
// var c = a+b;
// console.log(c);

// var name = 'luka';
// var age = '10';
// var location = 'bokkos';

// console.log(`my name is ${name} and I am ${age} old, my location i ${location}`);

// var a = 1;
// var b = -5;
// var c = 6;



// var e = -b + Math.sqrt((b*b)- 4*a*c)/2*a;
// var f = -b - Math.sqrt((b*b)- 4*a*c)/2*a;


// console.log(e);
// console.log(f);


// var a = 12;
// var d = 4;
// var b = 'books';
// var c = a + d + b;
// var e = b + a + d;
// console.log(c);
// console.log(e);


// var projector ={
//     color: 'orange',
//     sound: 'voomvoom',
//     price: 120000
// }

// var person ={
//     name: 'John',
//     age: 16,
//     height: '1.4',
//     location: 'jos'
// }

// var car ={
//     color: 'blue car',
//     model: '2020',
//     price: 2000
// }

//  var johnProps = `my name is ${person.name} and I am ${person.age} years old`;
//  var john_car = ` I also have a ${car.color} and it is model ${car.model} which costs ${car.price}`;
//  var join = johnProps + john_car;
//  console.log(join)

//  var x = [391, 392, 120, 70, 492];
//  console.log(x);
//  console.log(x[0]);
//  console.log(x.length);
//  var y = x.pop();
//  console.log(x)
//  var z = x.push('push');
//  console.log(x)
//  console.log(z)
//  var e = x.slice(0,2);
//  console.log(x)



// console.log(projector);
// console.log(projector.price)



// ---------------typeof-----------------

// var a = typeof 'my name' + '...' + typeof 4 +'..' + typeof false + '...';
// console.log(a)

// -----------functions-------



// function funName(one, two){
//     var sum =one + two;
//     return sum; 
// }
// var result = funName(13, 2);
// console.log(result);

document.getElementById('output').style.visibility = 'hidden'
document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible'
    // console.log(12345);
    var lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
    document.getElementById('kgsOutput').innerHTML = lbs/2.2046;
    document.getElementById('ozOutput').innerHTML = lbs*16;
})