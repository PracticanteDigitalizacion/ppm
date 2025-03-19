import { program } from "commander";
import { TEMPLETE_PATH as reposUrl } from "../../const.js";
import { menu } from "./config/menu.js";
import { cloneRepo } from "./config/cloneRepo.js";
import { editPackageJson } from "./config/editPackage.js";
import path from "path";
import fs from "fs-extra";

const {API_TOKEN_GIT : token } = process.env;

program
  .version("1.0.0")
  .description("CLI para generar proyectos")
  .action(async () => {
    const { projectType, technology, projectName } = await menu();

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
    } catch (error) {
      console.warn(chalk.red(error.message));
    }

  });

program.parse(process.argv);


