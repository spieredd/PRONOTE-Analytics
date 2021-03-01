const chalk = require('chalk');

const login = async(page, username, password) => {
    await page.type('input[type=text]', username);
    await page.type('input[type=password]', password);

    await page.click('#id_39');

    console.log(chalk.greenBright(`Logged in with ${username} account...`));
}

module.exports = login;