/* Problem-01 */
function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) return "Invalid";
    const surcharge = fare * 0.2;
    const serviceCharge = 30;
    return fare + surcharge + serviceCharge;
}

/* Problem-02 */
function onlyCharacter(str) {
    if (typeof str !== "string") return "Invalid";
    return str.replace(/\s/g, "").toUpperCase();
}

/* Problem-03 */
function bestTeam(player1, player2) {
    if (typeof player1 !== "object" || typeof player2 !== "object") return "Invalid";
    
    const score = p => (p.foul || 0) + (p.cardY || 0) + (p.cardR || 0);

    const score1 = score(player1);
    const score2 = score(player2);

    if (score1 < score2) return player1.name;
    if (score2 < score1) return player2.name;
    return "Tie";
}

/* Problem-04 */
function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Invalid";
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

/* Problem-05 */
function resultReport(marks) {
    if (!Array.isArray(marks)) return "Invalid";
    let total = 0, pass = 0, fail = 0;

    for (let mark of marks) {
        total += mark;
        mark >= 40 ? pass++ : fail++;
    }

    const finalScore = marks.length ? Math.round(total / marks.length) : 0;

    return { finalScore, pass, fail };
}
