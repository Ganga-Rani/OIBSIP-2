document.getElementById('convertButton').addEventListener('click', function () {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const unitSelect = document.getElementById('unitSelect').value;

    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    let convertedTemperature, resultText;

    if (unitSelect === 'celsius') {
        convertedTemperature = (temperatureInput - 32) * (5/9);
        resultText = `${temperatureInput}°F is equal to ${convertedTemperature.toFixed(2)}°C`;
    } else if (unitSelect === 'fahrenheit') {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        resultText = `${temperatureInput}°C is equal to ${convertedTemperature.toFixed(2)}°F`;
    } else if (unitSelect === 'kelvin') {
        convertedTemperature = temperatureInput + 273.15;
        resultText = `${temperatureInput}°C is equal to ${convertedTemperature.toFixed(2)}K`;
    }

    document.getElementById('result').textContent = resultText;
});
