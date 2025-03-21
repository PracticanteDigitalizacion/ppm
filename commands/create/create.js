import { program } from "commander";
import { TEMPLETE_PATH as reposUrl } from "../../const.js";
import { menu } from "./config/menu.js";
import { cloneRepo } from "./config/cloneRepo.js";
import { editPackageJson } from "./config/editPackage.js";
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import { execSync } from "child_process";
import { finalMessages } from "./config/mesages.js";
import { installPackages } from "./config/install.js";
import updateNotifier from "update-notifier";
import pkg from "../../package.json";

const {API_TOKEN : token } = process.env;

program
  .version("0.0.3")
  .description("CLI para generar proyectos")
  .action(async () => {
    const notifier = updateNotifier({ pkg });
    notifier.notify();
    const { projectType, technology, projectName, install } = await menu();

    const projectPath = path.join(process.cwd(), projectName);

    if (fs.existsSync(projectPath)) {
      return console.log(chalk.red("El proyecto ya existe"));
    }

    const repoUrl = `https://${token}@github.com${reposUrl[technology]}`;

    try {
      cloneRepo(repoUrl, projectPath);

      if (projectType === "front") {
        editPackageJson(projectPath, projectName);
      }

      if (install) {
        installPackages(projectPath, projectType, projectName);
      }

      finalMessages(projectType, install);
    } catch (error) {
      console.warn(chalk.red(error.message));
    }
  });

program.parse(process.argv);


