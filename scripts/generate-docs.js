const { execSync } = require('child_process');
const { mkdirSync, writeFileSync } = require('fs');

try {
    // Create docs directory if it doesn't exist
    mkdirSync('xdd', { recursive: true });
    
    // Run jsdoc2md and capture output
    const output = execSync('pnpm jsdoc2md --configure jsdoc.json', { encoding: 'utf8' });
    
    // Write output to file
    writeFileSync('xdd/api.md', output);
    
    console.log('Documentation generated successfully in xdd/api.md');
} catch (error) {
    console.error('Error generating documentation:', error.message);
    process.exit(1);
} 