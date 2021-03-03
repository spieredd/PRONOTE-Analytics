require('dotenv').config();

const chalk = require('chalk');

const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

puppeteer.use(require('puppeteer-extra-plugin-anonymize-ua')());

const login = async(page, username, password) => {
    await page.type('input[type=text]', username);
    await page.type('input[type=password]', password);

    await page.click('#id_39');

    console.log(chalk.greenBright(`Logged in with ${username} account...`));
}

module.exports = login;