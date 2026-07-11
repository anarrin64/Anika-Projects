const inputString = "ab12cd34ef567";

// '\d+' matches one or more consecutive digits, 'g' is the global flag
const numbers = inputString.match(/\d+/g);

if (numbers) {
    const totalSum = numbers.reduce((sum, num) => sum + parseInt(num, 10), 0);
    console.log(`Extracted numbers: ${numbers.join(' + ')} = ${totalSum}`);
} else {
    console.log("No numbers found in the string.");
}