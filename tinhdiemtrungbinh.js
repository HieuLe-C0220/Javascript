function ketQua() {
    let physical = document.getElementById("physical").value;
    let chemistry = document.getElementById("chemistry").value;
    let biological = document.getElementById("biological").value;
    if (physical > 0 && chemistry > 0 && biological > 0) {
        let total = Number(physical) + Number(chemistry) + Number(biological);
        document.getElementById("total").innerHTML = total.toFixed(2);
    }
    if (physical > 0 && chemistry > 0 && biological > 0) {
        let average = (Number(physical)+Number(chemistry)+Number(biological))/3;
        document.getElementById("average").innerHTML = average.toFixed(2);
    }
}