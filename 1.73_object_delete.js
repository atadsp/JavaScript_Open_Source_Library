var x = new Object();
x.y = 42;

alert(x.y); // shows '42'

delete x; // no effect
alert(x.y); // still shows '42'

delete x.y; // deletes the property
alert(x.y); // shows 'undefined'