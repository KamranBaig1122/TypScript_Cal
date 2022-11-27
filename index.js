#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 4000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('\n\n\n\t\t\t\t\t*****************************************\n\t\t\t\t\t*****************************************\n\t\t\t\t\t*********Lets Play with Numbers**********\n\t\t\t\t\t*****************************************\n\t\t\t\t\t*****************************************');
    await sleep();
    rainbowTitle.stop();
}
async function outro() {
    let rainbowTitle = chalkAnimation.rainbow('\n\n\n\t\t\t\t\t*****************************************\n\t\t\t\t\t*****************************************\n\t\t\t\t\t*******Develpoed By Kamran Mughal********\n\t\t\t\t\t*****************************************\n\t\t\t\t\t*****************************************');
    await sleep();
    rainbowTitle.stop();
}
await welcome();
async function askQuestion() {
    await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: chalk.yellow("Which operation you want to perform?\n"),
            choices: [chalk.yellow("+ Addition"), chalk.yellow("- Substaction"), chalk.yellow("* Multiplication"), chalk.yellow("/ Division"), chalk.yellow("^ Power")]
        },
        {
            type: "number",
            name: "num1",
            message: chalk.greenBright("Enter First Number : ")
        },
        {
            type: "number",
            name: "num2",
            message: chalk.greenBright("Enter Second Number : ")
        }
    ])
        .then((answers) => {
        // console.log(answers);
        if (answers.operator == chalk.yellow("+ Addition")) {
            let num1 = answers.num1;
            let num2 = answers.num2;
            let total = num1 + num2;
            console.log(chalk.redBright('Your answer of ' + num1 + ' + ' + num2 + ' is = ' + total));
        }
        else if (answers.operator == chalk.yellow("- Substaction")) {
            let num1 = answers.num1;
            let num2 = answers.num2;
            let total = num1 - num2;
            console.log(chalk.redBright('Your answer of ' + num1 + ' - ' + num2 + ' is = ' + total));
        }
        else if (answers.operator == chalk.yellow("* Multiplication")) {
            let num1 = answers.num1;
            let num2 = answers.num2;
            let total = num1 * num2;
            console.log(chalk.redBright('Your answer of ' + num1 + ' * ' + num2 + ' is = ' + total));
        }
        else if (answers.operator == chalk.yellow("/ Division")) {
            let num1 = answers.num1;
            let num2 = answers.num2;
            let total = num1 / num2;
            console.log(chalk.redBright('Your answer of ' + num1 + ' / ' + num2 + ' is = ' + total));
        }
        else if (answers.operator == chalk.yellow("^ Power")) {
            let num1 = answers.num1;
            let num2 = answers.num2;
            let total = 1;
            for (let index = 0; index < num2; index++) {
                total = total * num1;
            }
            console.log(chalk.redBright('Your answer of ' + num1 + ' ^ ' + num2 + ' is = ' + total));
        }
    });
}
;
//askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: chalk.cyanBright("Press [Y] to Continue Another process [N] to Terminate This Calculator : ")
        });
    } while (again.restart == 'y' || again.restart == 'Y');
    outro();
}
startAgain();
