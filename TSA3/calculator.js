let output = document.getElementById("txt");

function display(num) {
    output.value += num;
}

function calculate() {
        output.value = eval(output.value); 
}

function del() {
    output.value = output.value.slice(0, -1);
}

function clr() {
    output.value = "";
}
