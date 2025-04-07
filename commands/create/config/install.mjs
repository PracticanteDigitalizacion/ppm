
const installationType = {
  npm: 'npm install',
  pip : 'pip install -r requirements.txt' 
}

export function installPackages(projectPath, typeProject) {
  /*
  Instala los paquetes del proyecto en la carpeta del proyecto
  */

  const install = typeProject === "front" ? installationType.npm : installationType.pip

  console.log(chalk.green("Instalando paquetes..."));
  execSync(`cd ${projectPath} && ${install}`, {
    stdio: "inherit",
  });
}