import { execSync } from "child_process";
import path from "path";
import chalk from "chalk";
import fs from "fs-extra";
import os from "os";

export async function cloneRepo(repoUrl, projectPath) {
  /*
  clona el repositorio en la carpeta temporal y lo devuelve a la ruta de destino
  */
  const tempPath = path.join(os.tmpdir(), `temp-clone-${Date.now()}`);

  execSync(`git clone ${repoUrl} "${tempPath}"`);
  await fs.remove(path.join(tempPath, ".git"));
  await fs.move(tempPath, projectPath, { overwrite: true });
}