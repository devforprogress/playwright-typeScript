// Function to find an app entry by name

import * as path from 'path';
import * as fs from 'fs';
// Construct the path to the JSON file
export function findEntryByAppName(searchString: string): any | undefined {
    const jsonFilePath = path.join(__dirname, 'data.json');
    const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
    const data = JSON.parse(jsonData);

    for (const entry of data) {
        if (entry.app.includes(searchString)) {
            console.log(`Found an entry with 'app': ${entry.app}`);
            return entry;
        }
    }

    console.log(`No entry found with 'app' containing "${searchString}".`);
    return undefined;
}

const result = findEntryByAppName("odo");
if (result) {
    console.log(result.firstname);
}