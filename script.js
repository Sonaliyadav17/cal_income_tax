document.getElementById("tax-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission
    
    const income = parseFloat(document.getElementById("income").value);
    
    if (isNaN(income) || income < 0) {
        document.getElementById("result").innerHTML = "<p>Please enter a valid income amount.</p>";
        return;
    }
    
    let tax = 0;

    // Slab 1: Income up to ₹4,00,000 (No tax)
    if (income <= 400000) {
        tax = 0;
    }
    
    // Slab 2: ₹4,00,001 to ₹8,00,000 (5% tax)
    else if (income > 400000 && income <= 800000) {
        tax = (income - 400000) * 0.05;
    }

    // Slab 3: ₹8,00,001 to ₹12,00,000 (10% tax)
    else if (income > 800000 && income <= 1200000) {
        tax = (income - 800000) * 0.10 + 400000 * 0.05;
    }

    // Slab 4: ₹12,00,001 to ₹16,00,000 (15% tax)
    else if (income > 1200000 && income <= 1600000) {
        tax = (income - 1200000) * 0.15 + 400000 * 0.10 + 400000 * 0.05;
    }

    // Slab 5: ₹16,00,001 to ₹20,00,000 (20% tax)
    else if (income > 1600000 && income <= 2000000) {
        tax = (income - 1600000) * 0.20 + 400000 * 0.15 + 400000 * 0.10 + 400000 * 0.05;
    }

    // Slab 6: ₹20,00,001 to ₹24,00,000 (25% tax)
    else if (income > 2000000 && income <= 2400000) {
        tax = (income - 2000000) * 0.25 + 400000 * 0.20 + 400000 * 0.15 + 400000 * 0.10 + 400000 * 0.05;
    }

    // Slab 7: Above ₹24,00,000 (30% tax)
    else if (income > 2400000) {
        tax = (income - 2400000) * 0.30 + 400000 * 0.25 + 400000 * 0.20 + 400000 * 0.15 + 400000 * 0.10 + 400000 * 0.05;
    }

    if(income <= 1200000){
        tax = 0 ;
    }

    // Display the result
    document.getElementById("result").innerHTML = `
        <h3>Income: ₹${income.toLocaleString()}</h3>
        <p>The tax payable is: ₹${tax.toFixed(2).toLocaleString()}</p>
    `;
});
