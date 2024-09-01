document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('nameform');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the form from submitting the traditional way

        // Get the values from the form inputs
        const name1 = document.getElementById('name1').value;
        const name2 = document.getElementById('name2').value;
        
         // Generate a random percentage
        const lovePercentage = Math.floor(Math.random() * 101);
  
        // Display the result
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = `You and ${name2}'s love compatibility is ${lovePercentage}%`;

        const calculateButton = document.querySelector("button");
        calculateButton.disabled = true;

        // Send the names to the server to be written to the file
        fetch('/Yalla_Mama', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name1, name2 })
        })
        .then(response => {
            if (response.ok) {
                console.log('Names saved successfully');
                } else {
                    console.error('Failed to save names');
                }
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
    });

});
function reloadPage() {
    location.reload();
}

