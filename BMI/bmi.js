document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bmi-form');
    const clearBtn = document.getElementById('clear-btn');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateBMI();
    });

    clearBtn.addEventListener('click', function() {
        form.reset();
        resultDiv.textContent = '';
    });

    function calculateBMI() {
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const age = parseInt(document.getElementById('age').value);
        const gender = document.querySelector('input[name="gender"]:checked').value;

        if (height && weight && age && gender) {
            const bmi = weight / ((height / 100) ** 2);
            const bmiCategory = getBMICategory(bmi);
            const result = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory})`;
            resultDiv.textContent = result;
        } else {
            resultDiv.textContent = 'Please fill in all required fields.';
        }
    }

    function getBMICategory(bmi) {
        if (bmi < 18.5) return 'Underweight';
        if (bmi < 25) return 'Normal weight';
        if (bmi < 30) return 'Overweight';
        return 'Obese';
    }
});
