const fs = require('fs');
const path = require('path');
const jsdoc2md = require('jsdoc-to-markdown');

const PACKAGES_DIR = 'packages';

// Get all package directories
const packages = fs.readdirSync(PACKAGES_DIR)
    .filter(file => fs.statSync(path.join(PACKAGES_DIR, file)).isDirectory());

// Process each package
packages.forEach(packageName => {
    const packageDir = path.join(PACKAGES_DIR, packageName);
    const srcDir = path.join(packageDir, 'src');
    const docsDir = path.join(packageDir, 'docs');
    
    // Create docs directory if it doesn't exist
    if (!fs.existsSync(docsDir)) {
        fs.mkdirSync(docsDir, { recursive: true });
    }

    // Find all JS/TS files in the package
    const sourceFiles = [];
    const walkDir = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const filePath = path.join(dir, file);
            if (fs.statSync(filePath).isDirectory()) {
                walkDir(filePath);
            } else if (file.match(/\.(js|ts|jsx|tsx)$/)) {
                sourceFiles.push(filePath);
            }
        });
    };

    // Try src directory first, if it doesn't exist, try package root
    if (fs.existsSync(srcDir)) {
        walkDir(srcDir);
    } else {
        walkDir(packageDir);
    }

    if (sourceFiles.length > 0) {
        try {
            const docs = jsdoc2md.renderSync({
                files: sourceFiles,
                configure: path.join(process.cwd(), 'jsdoc.json')
            });

            if (docs.trim()) {
                // Add a header with the package name
                const finalDocs = `# ${packageName}\n\n${docs}`;
                fs.writeFileSync(path.join(docsDir, 'API.md'), finalDocs);
                console.log(`✓ Generated documentation for ${packageName}`);
            } else {
                console.log(`ℹ No JSDoc content found in ${packageName}`);
            }
        } catch (error) {
            console.error(`✗ Error generating documentation for ${packageName}:`, error.message);
        }
    } else {
        console.log(`ℹ No source files found in ${packageName}`);
    }
});

console.log('\nDocumentation generation complete!') 