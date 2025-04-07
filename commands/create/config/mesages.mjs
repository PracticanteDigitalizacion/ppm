import chalk from "chalk";

const messages = {
  front : {
    withPackages : () => {
      console.log (`
        para iniciar el proyecto
        ${chalk.green("npm run dev")}`);
    },
    noPackages : (projectName) => {
      console.log (`
  Entra al proyecto
  ${chalk.green(`cd ${projectName}`)}
  instala los paquetes
  ${chalk.green("npm install")}
  para iniciar el proyecto
  ${chalk.green("npm run dev")}`);
    }
  },

}

export function finalMessages (type, installPackages, projectName) {
  if (installPackages) {
    messages[type].withPackages();
  } else {
    messages[type].noPackages(projectName);
  }
  console.log(chalk.green(`Proyecto creado correctamente☑️`));
}