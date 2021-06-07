const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'Name your site',
        name: 'file',
    },
    {
        type: 'input',
        message: 'Name your header',
        name: 'header',
    },
    {
        type: 'input',
        message: 'What will go in your bio?',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'Project #1?',
        name: 'p1',
    },
    {
        type: 'input',
        message: 'Github Link?',
        name: 'ghl1',
    },
    {
        type: 'input',
        message: 'Website Link?',
        name: 'url1',
    },
    {
        type: 'input',
        message: 'Project #2?',
        name: 'p2',
    },
    {
        type: 'input',
        message: 'Github Link?',
        name: 'ghl2',
    },
    {
        type: 'input',
        message: 'Website Link?',
        name: 'url2',
    },
    {
        type: 'input',
        message: 'Project #3?',
        name: 'p3',
    },
    {
        type: 'input',
        message: 'Github Link?',
        name: 'ghl3',
    },
    {
        type: 'input',
        message: 'Website Link?',
        name: 'url3',
    },
    {
        type: 'input',
        message: 'LinkdIn Profile Link?',
        name: 'link',
    },
    {
        type: 'input',
        message: 'Phone Number?',
        name: 'teleNum',
    },
    {
        type: 'input',
        message: 'Email?',
        name: 'email',
    }
]).then((response) => {
    const names = [response.file, response.header, response.bio, response.p1];
    console.log([...names]);
    writeToFile('index.html', [...names]);
});

const writeToFile = (fileName, [...names]) => {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${names[0]}</title>
    </head>
    <body>
        <header>
            <h1>${names[1]}</h1>
        </header>
        <section>
            <h2>Bio</h2>
            <p>${names[2]}</p>
        </section>
        <section>
            <h2>Projects</h2>
            <ul><h3>${names[3]}</h3>
                <li>GitHub: <a href="${names[4]}"></a></li>
                <li>WebsiteURL: <a href="${names[5]}"></a></li>
            </ul>
            <ul><h3>${names[6]}</h3>
                <li>GitHub: <a href="${names[7]}"></a></li>
               <li>WebsiteURL: <a href="${names[8]}"></a></li>
            </ul>
            <ul><h3>${names[9]}</h3>
                <li>GitHub: <a href="${names[10]}"></a></li>
                <li>WebsiteURL: <a href="${names[11]}"></a></li>
            </ul>
        </section>
        <section>
            <h2>Contact</h2>
            <ul>
                <li>Linkdin: <a href="${names[12]}"></a></li>
                <li>GitHub Page: <a href="${names[13]}"></a></li>
                <li>Phone Number: ${names[14]}</li>
                <li>Email: <a href="${names[15]}"></a></li>
            </ul>
        </section>
    </body>
    </html>;`

    fs.writeFile(fileName, html, (err) =>
        err ? console.error(err) : console.log('Commit logged!'));
}

