import path from "path";
import chalk from "chalk";
import fs from "fs-extra";

export async function editPackageJson(projectPath, projectName) {
  /*
  edita el package.json para que tenga el nombre del proyecto
  */
  setTimeout(async ()  => {
    try {
      const packageJsonPath = await path.join(projectPath, "package.json");
      console.log(packageJsonPath);
      console.log(fs.pathExists(packageJsonPath));
    
      if (await fs.pathExists(packageJsonPath)) {
        const packageJson = await fs.readJson(packageJsonPath);
        packageJson.name = projectName;
        await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
      } else {
        console.warn(chalk.yellow("⚠️ No se encontró package.json, omitiendo cambio de nombre."));
      }
    } catch (error) {
      console.warn(chalk.red( error.message));
    }
  }, 3000);
}