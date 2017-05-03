var obj = {
   name: "Fred"
};

Object.defineProperty(obj, "age", {
    enumerable: false,
    writable: true
});

obj.age = 75;

/* The following will only alert "name=>Fred" */
for (var i in obj) {
   window.alert(i + "=>" + obj[i]);
}
/*
Exception: SyntaxError: missing ; before statement
@Scratchpad/1:1
*/