const core = require('@actions/core');
const crypto = require('crypto');
const { promisify } = require('util');
const { writeFile, readFile } = require('fs');

const writeFileAsync = promisify(writeFile);

async function main() {
    try {
        // Fetch the given file
        readFile(core.getInput('filePath'), function(err, data) {
            var checksum = generateChecksum(data);
            writeSum(checksum);
          });
    } catch (error) {
        core.setFailed(error.message);
    }
}

async function writeSum(sum) {
    try {
        await writeFileAsync(core.getInput('saveFile'), sum);
        return;
    } catch (error) {
        core.setFailed(error.message);
    }
}

function generateChecksum(str) {
    return crypto
        .createHash('sha256')
        .update(str, 'utf8')
        .digest('hex');
}

main();