#!/Users/myano/.local/share/mise/installs/node/20/bin/node
// Dependency: This script requires Nodejs.
// Install Node: https://nodejs.org/en/download/

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Search Google
// @raycast.mode silent

// Optional parameters:
// @raycast.icon images/google.png
// @raycast.argument1 { "type": "text", "placeholder": "url"}
// @raycast.argument2 { "type": "dropdown", "placeholder": "ja", "data": [{"title": "en", "value": "en"}, "optional": true}
// @raycast.packageName google-search

// Documentation:
// @raycast.description search google
// @raycast.author myano
// @raycast.authorURL https://github.com/nagauta
import { exec } from 'child_process';
const [url, lang] = process.argv.slice(2);
function isUrl(input) {
    const urlPattern =
      /^(https?:\/\/)?(([\w\-]+\.)+[\w\-]+|localhost)(:[0-9]+)?(\/[\w\-._~:/?#[\]@!$&'()*+,;=%]*)?$/i;
    if (urlPattern.test(input)) {
      return true;
    } else {
      return false;
    }
  }

if (isUrl(url)) {
    const normalizedUrl = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
    exec(`osascript -e 'tell application "Google Chrome" to open location "${normalizedUrl}"'`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Stdout: ${stdout}`);
    });
} else {
    exec(`osascript -e 'tell application "Google Chrome" to open location "https://www.google.com/search?q=${encodeURIComponent(url)}${lang === "en" ? "&gl=us&hl=en&gws_rd=cr&pws=0" :""}"'`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Stdout: ${stdout}`);
    });
}