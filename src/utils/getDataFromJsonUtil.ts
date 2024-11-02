//This ffunction help to get the data from json by passing app name as argument

// Function to find an app entry by name

import * as path from 'path';
import * as fs from 'fs';
// Construct the path to the JSON file
export function getDataByAppName(searchString: string) {
    const jsonFilePath = path.join(__dirname, '..', '/data/data.json');
    console.log(jsonFilePath + "__________________");

    const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
    const data = JSON.parse(jsonData);

    for (const entry of data) {
        if (entry.app.includes(searchString)) {
            console.log(`Found an entry with 'app': ${entry.app}`);
            return entry.json();
        }
    }

    console.log(`No entry found with 'app' containing "${searchString}".`);
    return undefined;
}

export async function getAppData() {
    try {
        const jsonFilePath = path.join(__dirname, '..', '/data/data.json');
        const data = fs.readFileSync(jsonFilePath, 'utf-8');
        const jsonData = JSON.parse(data);

        // Find the app data
        const appData = jsonData.find((item: any) => item.app === "odoo");

        return appData || null; // Return the found data or null if not found
    } catch (error) {
        console.error('Error reading JSON file:', error);
        return null;
    }
}
