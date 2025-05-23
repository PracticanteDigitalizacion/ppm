# ppm-create

**ppm-create** es una herramienta CLI que permite generar proyectos en diferentes tecnologias **con un templete basico** a partir de un repositorio privado de GitHub. Este CLI simplifica la configuración inicial del proyecto para Prebel.

---

## 📌 **Características**

✅ Clona un repositorio privado desde GitHub. ✅ Asigna el nombre del proyecto.

---

## 📦 **Instalación**

```sh
npm install -g ppm-cli-prebel
```

Esto creará un comando global llamado `ppm-create`.

---

## **Uso**

Para crear un nuevo proyecto, simplemente ejecuta:

```sh
ppm-create
```

El CLI te hará algunas preguntas:
1️.**¿Qué tipo de proyecto quieres crear?** (Next.js, RPA, entre otros)
2️.**Nombre del proyecto** (El nombre del directorio)

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

### **Configuración en Windows (PowerShell)**

Para que `API_TOKEN` esté siempre disponible, agrégalo al archivo `$PROFILE`:

1️.**Abrir el archivo de perfil de PowerShell**:

```powershell
notepad $PROFILE
```

2️.**Agregar la siguiente línea al final del archivo:**

```powershell
$env:API_TOKEN = "tu-token-github"
```

3️.**Guardar y cerrar el archivo, luego ejecutar:**

```powershell
. $PROFILE
```

**Verifica que la variable esté configurada correctamente:**

```powershell
echo $env:API_TOKEN
```

Si devuelve tu token, está todo listo. ✅

**📖 Para más detalles sobre cómo configurar $PROFILE en PowerShell, consulta la siguiente documentación oficial:**
🔗 [Configurar $PROFILE en PowerShell](https://learn.microsoft.com/es-es/powershell/scripting/learn/shell/creating-profiles?view=powershell-7.4)

---

## 🛠 **Requisitos**

- **Node.js** `>=14.x`
- **Git instalado**
- Un **Una variable de entorno** para el correcto funcionamineto de la aplicación

---

## 📌 **Solución de Problemas**

``

- Asegúrate de haber configurado la variable en PowerShell.
- Reinicia la terminal después de modificar `$PROFILE`.
- Prueba definir la variable temporalmente con:
  ```powershell
  $env:API_TOKEN="tu-token"
  ```

``

- Verifica que el proyecto no se clona en un subdirectorio inesperado.

---

## 📌 **Desinstalación**

Para desinstalar puedes utilizar

```sh
npm uninstall -g ppm-create
```

---

## 📜 **Licencia**

MIT License 📄

---

¡Ahora puedes crear proyectos en segundos con `ppm-create`!
