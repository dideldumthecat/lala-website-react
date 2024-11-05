import { promises as fs } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import process from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const indexPath = resolve(__dirname, './dist/index.html');
const version = process.env.VERSION || 'unknown';

async function injectVersion() {
    try {
        let data = await fs.readFile(indexPath, 'utf8');
        data = data.replace(
            '</body>',
            `<footer>Version: ${version}</footer></body>`
        );
        await fs.writeFile(indexPath, data, 'utf8');
        console.log('Version information injected successfully.');
    } catch (err) {
        console.error('Error processing index.html:', err);
        process.exit(1);
    }
}

injectVersion();
