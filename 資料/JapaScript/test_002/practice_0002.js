function func1() {
    alert("func1 begin");
    func2();
    alert("func1 end");
}

function func2() {
    alert("func2 begin");
    func3();
    alert("func2 end");
}

function func3() {
    alert("func3 begin");
    throw "dummy error";
    alert("func3 end");
}

try {
    func1();
} catch (err) {
    alert(err);
}
