var app = angular.module("app01", []);

app.controller("controller1", function () {
    this.ControllerName = "Login Page Controller";
});

app.controller("controller2", function () {
    this.ControllerName = "Registration Page Controller";
});;

app.controller("controller3", function () {
    this.Show = true;
    this.Hide = false;
});

app.controller("controller4", function () {
    this.name = "THIS,IS,MYNAME";

    this.Info = [{ Name: "Tiger", MobNo: 81234597 }, { Name: "Abhsihek", MobNo: 654698798 }, { Name: "Scott", MobNo: 8798797}]
});