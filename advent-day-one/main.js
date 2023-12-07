const fs = require('fs');

let sum = 0;

const filePath = 'advent-day-one/input.txt';

// read input.txt file 
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // divide line
    const lines = data.split('\n');

    lines.forEach(line => {
        // control if line doesnt'have white spaces
        if (line.trim() !== '') {

            let i = 0;

            //stop the first number from left
            while (i < line.length && isNaN(parseInt(line[i], 10))) {
                i++;
            }
            //take the first number from left
            if (i < line.length) {
                firstDigit = parseInt(line[i], 10);
            }

            //stop to the first number from right
            i = line.length - 1;
            while (i >= 0 && isNaN(parseInt(line[i], 10))) {
                i--;
            }
            //take the first number from right
            if (i >= 0) {
                lastDigit = parseInt(line[i], 10);
            }

            if (!isNaN(firstDigit) && !isNaN(lastDigit)) {
                const calibration = (firstDigit * 10) + lastDigit;
                sum += calibration;
            }
        }
    });
    console.log(sum);
});

// output 54708