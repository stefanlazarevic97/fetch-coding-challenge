function calculatePoints(receipt) {
    let points = 0;

    // One point for every alphanumeric character in the retailer name
    points += receipt.retailer.replace(/[^a-zA-Z0-9]/g, '').length;

    // 50 points if the total is a round dollar amount with no cents
    if (parseFloat(receipt.total) % 1 === 0) {
        points += 50;
    }

    // 25 points if the total is a multiple of 0.25
    if (parseFloat(receipt.total) % 0.25 === 0) {
        points += 25;
    }

    // 5 points for every two items on the receipt
    points += Math.floor(receipt.items.length / 2) * 5;

    // If the trimmed length of the item description is a multiple of 3, multiply the price by 0.2 and round up to the nearest integer
    // The result is the number of points earned
    for (const item of receipt.items) {
        if (item.shortDescription.trim().length % 3 === 0) {
            points += Math.ceil(parseFloat(item.price) * 0.2);
        }
    }

    // 6 points if the day in the purchase date is odd
    const day = new Date(receipt.purchaseDate).getUTCDate();

    if (day % 2 === 1) {
        points += 6;
    }

    // 10 points if the time of purchase is after 2:00pm and before 4:00pm
    const hour = parseInt(receipt.purchaseTime.split(':')[0]);

    if (hour >= 14 && hour < 16) {
        points += 10;
    }

    return points;
}

module.exports = calculatePoints;