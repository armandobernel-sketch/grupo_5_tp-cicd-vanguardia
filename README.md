# TP – Introducción a CI/CD con GitHub Actions
**Materia:** Programación de Vanguardia  
**Carrera:** Licenciatura en Tecnologías Digitales  
**Institución:** UNICABA

---

## Descripción

Este repositorio contiene el trabajo práctico de introducción a CI/CD (Integración y Entrega Continua) utilizando GitHub Actions. El objetivo es implementar un pipeline básico que se ejecute automáticamente ante cada push al repositorio, validando el proyecto de forma automática.

## Tecnologías utilizadas

- Git / GitHub
- Visual Studio Code
- GitHub Actions
- Node.js 20

## Estructura del repositorio
/
├── .github/
│   └── workflows/
│       └── test.yml       # Workflow de CI/CD
├── README.md
└── [archivos del proyecto]
## Pipeline de CI/CD

El workflow configurado en `.github/workflows/test.yml` se activa automáticamente con cada push a la rama `main` y realiza los siguientes pasos:

1. Descarga el repositorio (`actions/checkout`)
2. Instala Node.js v20 (`actions/setup-node`)
3. Instala las dependencias del proyecto (`npm install`)
4. Ejecuta los tests (`npm test`)

## Cómo ejecutar el proyecto localmente

```bash
# Clonar el repositorio
git clone https://github.com/armandobernel-sketch/grupo_5_tp-cicd-vanguardia.git

# Instalar dependencias
npm install

# Ejecutar tests
npm test
```

## Integrantes del grupo

- [Nombre Apellido]
- Ivan Paolillo
- [Nombre Apellido]