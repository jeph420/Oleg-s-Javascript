//var name = "Jack";
//var age = 23;
//
//var message = "Hi, my name is " + name + " and I am " + age + " years old!";

//var firstName = "John";
//var lastName = "JacobJingleHeimerSmith";
//var dateOfBirth = "10-09-02";
//var age = 23;
//var profileImgUrl = 'http://coolpicks.com/johnjacob.jpg';
//
//var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!";
//
//console.log(loginWelcomeMessage);


//var sum = 10 + 15;
//var sub = 15 - 10;
//var mul = 10 * 3;
//var div = 9 / 3;
//var mod = 10 % 3;
//
//var msg = "10 / 3 = 3 with a remainder of " + mod;
//
//var result = 10 * ((5 + 3) - 4);
//
//console.log(result);

//var student1 = "Timmy";
//var student2 = "Janessa";
//var student3 = "Arun";

//var students = ["Timmy", "Janessa", "Arun"];
//
//var naughtyList = [];
//naughtyList.push(students[0]);
//
//var index = naughtyList.indexOf("Timmy");
//console.log(naughtyList);
//if (index > -1) {
//    naughtyList.splice(index, 1);
//}
//
//console.log(naughtyList);


//var myAccountBalance = 300;
//var nikeSBShoes = 799.23;
//var coupon = 500;

// == equal to
// === ??
// <= less than or equal to
// >= greater than or equal to

//var val1 = 23;
//var val2 = "23";
//
//if (val1 === val2) {
//    console.log("These are the same!");
//} else {
//    console.log("One of these is not like the other!");
//}



//if (nikeSBShoes <= myAccountBalance) {
//    myAccountBalance -= nikeSBShoes;
//    console.log("We just bought some dope shoes!");
//    console.log("Account Balance: " + myAccountBalance);
//} else if (nikeSBShoes - coupon <= myAccountBalance) {
//    console.log("We just bought some dope shoes with this coupon!");
//    myAccountBalance -= nikeSBShoes - coupon;
//    console.log("Account Balance: " + myAccountBalance);
//} else {
//    console.log("You too broke for shoes bra!");
//}



//var total = 10;
//for (var x = 0; x < total; x++) {
//    //Iterate until told not to
//    console.log(x);
//}

//var students = ["John", "Jacob", "Jingle", "Heimer", "Smith"];
//
//for (var index = 0; index < students.length; index++) {
//    console.log(students[index]);
//}



//function area(length, width) {
//    return length * width;
//}
//
//var rectanglesAreas = []
//rectanglesAreas.push(area(10, 15));
//rectanglesAreas.push(area(14, 2));
//rectanglesAreas.push(area(4, 5));
//rectanglesAreas.push(area(6, 18));
//
//
//console.log(rectanglesAreas);
//
//
//var bankBalance = 500;
//
//function makeTransaction(priceOfCell) {
//    if (priceOfCell <= bankBalance) {
//        bankBalance -= priceOfCell;
//        console.log("Purchase Successful")
//    } else {
//        console.log("Insufficient Funds");
//    }
//}
//
//console.log(bankBalance);
//makeTransaction(79.00);
//
//console.log(bankBalance);
//makeTransaction(2.32);
//
//console.log(bankBalance);
//makeTransaction(10.45);
//
//console.log(bankBalance);
//makeTransaction(450.00);
//
//
//var transaction = function(priceOfCell) {
//    if (priceOfCell <= bankBalance) {
//        bankBalance -= priceOfCell;
//        console.log("Purchase Successful")
//    } else {
//        console.log("Insufficient Funds");
//    }
//}
//
//var printCustomerName = function(first, last) {
//    console.log("First Name: " + first + "Last Name: " + last);
//}
//
//var applyForCreditCard = function(creditScore, soul) {
//    //calls some functions to process application
//}
//
//var bankOperatons = [];
//bankOperatons.push(transaction);
//bankOperatons.push(printCustomerName);
//bankOperatons.push(applyForCreditCard);




//var student0 = {
//    firstName: "Jayne",
//    lastName: "Looo",
//    age: 8,
//    greeting: 
//};
//
//console.log(student0.greeting());

//Creates a new empty object
//var student1 = new Object();
//student1.firstName = "John";
//student1.lastName = "Parker";
//student1.age = 7;
//
//var student2 = {};
//student2.firstName = "Zack";
//student2.lastName = "Bobo";
//student2.age = 5;

//var students = [];
//
//function Student(first, last, age) {
//    this.firstName = first;
//    this.lastName = last;
//    this.age = age;
//    this.greeting = function() {
//        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
//    }
//}
//
//students.push(new Student("Jenny", "Laga", 5));
//students.push(new Student("Timmy", "Turner", 8));
//students.push(new Student("Carl", "Jr", 4));
//
//var student = students[0];
//
////for in loop
//for (var key in student) {
//    console.log(student[key]);
//}

//var s1 = new Student("Jenny", "Laga", 5);
//console.log(s1);
//console.log(s1.greeting());

//students.push(student0);
//students.push(student1);
//students.push(student2);

//for (var index = 0; index < students.length; index++) {
//    var student = students[index];
//    console.log(student.greeting());
//}

//console.log(student.firstName);
//console.log(student.lastName);
//console.log(student["firstName"])
//console.log(student["lastName"])



////Alex Brown's
//this.car = "Honda Civic w/ Ugly Spoiler"
//
//var marksGarage = {
//    car: "Aston Martin",
//    getCar: function() {
//        return this.car;
//    }
//}
//
//console.log(marksGarage.getCar());
//
//var storeGetCarForLater = marksGarage.getCar;
//
////Now works is over and Mark wants his car
//console.log(storeGetCarForLater());//WTF
//
//var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage);
//
//console.log(theRealGetCarFunction());



