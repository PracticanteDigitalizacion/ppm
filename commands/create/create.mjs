import { program } from "commander";
import { TEMPLETE_PATH as reposUrl } from "../../const.mjs";
import { menu } from "./config/menu.mjs";
import { cloneRepo } from "./config/cloneRepo.mjs";
import { editPackageJson } from "./config/editPackage.mjs";
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import { finalMessages } from "./config/mesages.mjs";
import { installPackages } from "./config/install.mjs";
import updateNotifier from "update-notifier";
const {API_TOKEN : token } = process.env;

program
  .version("0.1.0")
  .description("CLI para generar proyectos")
  .action(async () => {
    const notifier = updateNotifier({ pkg: { name: "ppm-create", version: "0.1.0" } });
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

      finalMessages(projectType, install, projectName);
    } catch (error) {
      console.warn(chalk.red(error.message));
    }
  });

program.parse(process.argv);


