const person = {
  FirstName: "Mark",
  LastName: "Phill",
};

let func_expression = function (p) {
  console.log("Expression:" + JSON.stringify(p));
};
function func_declaration(p) {
  console.log("Declation:" + JSON.stringify(p));
}
let func_lambda = (p) => console.log("Lambda:" + JSON.stringify(p));

func_expression(person);
func_declaration(person);
func_lambda(person);
