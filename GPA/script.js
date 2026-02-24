function getGP(total) {
    if (total >= 90) return 4.0;
    if (total >= 80) return 3.6;
    if (total >= 70) return 3.2;
    if (total >= 60) return 2.8;
    if (total >= 50) return 2.4;
    if (total >= 40) return 2.0;
    if (total >= 35) return 1.6;
    return 0.0;
}

function calculateGPA() {
    const rows = document.querySelectorAll('.subject-row');
    let totalPoints = 0;

    rows.forEach(row => {
        const t = parseFloat(row.querySelector('.t').value) || 0;
        const p = parseFloat(row.querySelector('.p').value) || 0;
        totalPoints += getGP(t + p);
    });

    const finalGPA = totalPoints / rows.length;
    
    const resultArea = document.getElementById('result-area');
    const gpaDisplay = document.getElementById('gpa-value');
    
    resultArea.classList.remove('hidden');
    gpaDisplay.innerText = finalGPA.toFixed(2);
    
    // Add a quick feedback message
    const msg = document.getElementById('grade-text');
    if (finalGPA >= 3.6) msg.innerText = "Excellent Work! 🚀";
    else if (finalGPA >= 2.8) msg.innerText = "Good Job! Keep it up.";
    else msg.innerText = "Results calculated successfully.";
}