
const form = document.getElementById("bmiForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const weight = Number(
        document.getElementById("weight").value
    );

    const height = Number(
        document.getElementById("height").value
    );

    if (weight <= 0 || height <= 0) {
        result.textContent = "Enter valid height and weight.";
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal";
    } else {
        category = "Overweight";
    }

    result.textContent =
        `Your BMI is ${bmi.toFixed(2)} - ${category}`;
});
