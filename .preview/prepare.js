const fs = require('fs');
const path = require('path');
const TEMPLATE_FILE = '.preview/template-index.html';
const STATEMENT_FILE = 'problem_statement.html';
const OUTPUT_FILE = '.preview/index.html';

const readFile = (FILE_PATH) => fs.readFileSync(path.resolve(FILE_PATH), {encoding: 'utf8'});

const writeFile = (FILE_PATH, contents) => fs.writeFileSync(FILE_PATH, contents, {encoding: 'utf8'});

const prepare = () => {
    let templateContent = readFile(TEMPLATE_FILE);
    const statementContent = readFile(STATEMENT_FILE);
    templateContent = templateContent.replace('##CONTENT##', statementContent);
    writeFile(OUTPUT_FILE, templateContent);
}

prepare();

