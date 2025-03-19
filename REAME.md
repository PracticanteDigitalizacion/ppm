# 🚀 ppm-create

**ppm-create** es una herramienta CLI que permite generar proyectos en diferentes tecnologias **con un templete basico** a partir de un repositorio privado de GitHub. Este CLI simplifica la configuración inicial del proyecto.

---

## 📌 **Características**

✅ Clona un repositorio privado desde GitHub. ✅ Asigna el nombre del proyecto.

---

## 📦 **Instalación**

📌 **Nota:** Aún no está publicado en npm, pero cuando lo esté, la instalación se hará con:

```sh
npm install -g ppm
```

Por ahora, puedes probarlo localmente usando `npm link`:

```sh
cd ruta/del/proyecto
npm link
```

Esto creará un comando global llamado `ppm-create`.

---

## 🚀 **Uso**

Para crear un nuevo proyecto, simplemente ejecuta:

```sh
ppm-create
```

El CLI te hará algunas preguntas: 1️⃣ **¿Qué tipo de proyecto quieres crear?** (Next.js, RPA, entre otros) 2️⃣ **Nombre del proyecto** (El nombre del directorio)

Ejemplo:

```sh
ppm-create
```

📌 Respondiendo:

- Tipo de proyecto: **Next.js**
- Nombre del proyecto: **mi-app-next**

El CLI creará un directorio `mi-app-next` con toda la configuración lista. 🎉

---

## ⚙️ **Configuración de la Variable de Entorno **``

Dado que el CLI clona un repositorio privado, necesitas configurar un **Personal Access Token (PAT)** en GitHub con acceso a `repo`.

### **🔹 Configuración en Windows (PowerShell)**

Para que `API_TOKEN_GIT` esté siempre disponible, agrégalo al archivo `$PROFILE`:

1️⃣ **Abrir el archivo de perfil de PowerShell**:

```powershell
notepad $PROFILE
```

2️⃣ **Agregar la siguiente línea al final del archivo:**

```powershell
$env:API_TOKEN_GIT = "tu-token-github"
```

3️⃣ **Guardar y cerrar el archivo, luego ejecutar:**

```powershell
. $PROFILE
```

🔹 **Verifica que la variable esté configurada correctamente:**

```powershell
echo $env:API_TOKEN_GIT
```

Si devuelve tu token, está todo listo. ✅

**📖 Para más detalles sobre cómo configurar $PROFILE en PowerShell, consulta la siguiente documentación oficial:**
🔗 [Configurar $PROFILE en PowerShell](https://learn.microsoft.com/es-es/powershell/scripting/learn/shell/creating-profiles?view=powershell-7.4)

---

## 🛠 **Requisitos**

- **Node.js** `>=14.x`
- **Git instalado**
- Un **Personal Access Token (PAT)** de GitHub con permisos `repo`

---

## 📌 **Solución de Problemas**

🔹 ``

- Asegúrate de haber configurado la variable en PowerShell.
- Reinicia la terminal después de modificar `$PROFILE`.
- Prueba definir la variable temporalmente con:
  ```powershell
  $env:API_TOKEN_GIT="tu-token-github"
  ```

🔹 ``

- Verifica que el proyecto no se clona en un subdirectorio inesperado.

---

## 📌 **Desinstalación**

Si usaste `npm link`, puedes desinstalarlo con:

```sh
npm unlink -g ppm-create
```

Si en el futuro lo instalas desde npm, usa:

```sh
npm uninstall -g ppm-create
```

---

## 📜 **Licencia**

MIT License 📄

---

¡Ahora puedes crear proyectos en segundos con `ppm-create`! 🚀🔥
