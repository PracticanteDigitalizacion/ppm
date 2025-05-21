import { input, select, confirm } from "@inquirer/prompts";
import chalk from "chalk";

export async function menu() {
  /*
  Genera el menu de opciones para la creacion del proyecto nuevo 
  */

  const frontTechnologies = [
    { name: chalk.gray("Next"), value: "nextjs" },
    { name: chalk.gray("Vite"), value: "vite" },
  ]

  const backTechnologies = [
    { name: chalk.gray("DJango hexagonal"), value: "hexagonal" },
    { name: chalk.gray("DJango capas"), value: "capas"},
  ]

  const projectType = await select(
    {
      message: chalk.blackBright("Que tipo de proyecto deseas crear?"),
      choices: [
        { name: chalk.grey("Front"), value: "front" },
        { name: chalk.grey("Back"), value: "back" },
      ],
    }
  );

  const technology = await select(
    {
      message: chalk.blackBright("Que tecnologia deseas usar?"),
      choices: projectType === "front" ? frontTechnologies : backTechnologies
    }
  )

  const projectName = await input({
    message: chalk.blackBright("Cual es el nombre del proyecto?"),
    default: "my-project",
    validate: (input) => input ? true : chalk.red("⚠️ El nombre del proyecto no puede estar vacío."),
  });
  
  const install = projectType === "front" ? await confirm({
    message: chalk.blackBright("Deseas instalar los paquetes del proyecto?"),
    default: true,
  }) : false

  return { projectType, technology, projectName, install };
}