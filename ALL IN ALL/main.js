function welcome() {
  let person = prompt("Hello,what is Your name");
  if (person != null) {
    document.getElementById("demo").innerHTML =
      "Hello " + person + " ! How are you today?";
  } else eindow.alert("canceued");
}
