import chalk from "chalk";
import { execSync } from "child_process";

const installationType = {
  npm: 'npm install',
  pip : 'pip install -r requirements.txt' 
}

export function installPackages(projectPath, typeProject, projectName) {
  /*
  Instala los paquetes del proyecto en la carpeta del proyecto
  */

  setTimeout(async () => {
    try {
      const install = typeProject === "front" ? installationType.npm : installationType.pip
    
      console.log(chalk.green("Instalando paquetes..."));

      if (typeProject === 'front') {
        execSync(`cd "${projectPath}" && ${install}`, {stdio: "inherit"})
      }

    } catch (error) {
      console.warn(chalk.red(error.message));
    }
  }, 3000);


}

async function  installBack () {

}