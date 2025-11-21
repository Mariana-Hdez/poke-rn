# poke-rn

# Poke-api

- POKE-RN POKE-RN es una aplicación móvil desarrollada con **React Native** y **TypeScript** que permite explorar datos de Pokémon consumiendo la [PokéAPI](https://pokeapi.co/).
- El proyecto está diseñado con una arquitectura modular y escalable, integrando servicios, hooks y tipado robusto.
- Características principales - Consumo de múltiples endpoints de la PokéAPI para mostrar información detallada de cada Pokémon. - Arquitectura organizada en **services**, **hooks**, **screens** y **types**.
- Configuración optimizada de Gradle y Metro para compatibilidad con React Native 0.82.
- Objetivo servir como un **browser de Pokémon** moderno y educativo, que demuestre buenas prácticas en React Native, integración de APIs y uso avanzado de TypeScript.
- Tecnologías utilizadas - React Native 0.82 - TypeScript - React Navigation - Metro & Babel configurados para alias y modularidad - Gradle 8.x para compilación en Android - PokéAPI como fuente de datos

# Estado actual El proyecto está en desarrollo PRUEBA/ERROR.

# PASO DE INSTALACIÓN

# - git clone https://github.com/tu-usuario/poke-rn.git

# -cd poke-rn

# INSTALACIÓN DE DEPENDENCIAS -

# yarn install

# EJECUTOR

# - yarn android

# - yarn ios

Notas adicionales y decisiones técnicas relevantes

Durante el desarrollo del proyecto se presentaron varios problemas relacionados con las versiones de dependencias y herramientas. Estos fueron los más relevantes:

React vs React Native

react-native@0.82.1 requiere React 19.x, pero inicialmente el proyecto tenía react@18.2.0.
Esto generó errores de tipado y advertencias de peer dependencies.
Decisión: actualizar a react@19.1.1 para alinear con la versión esperada por React Native.

Tipos de React Native
Se instaló accidentalmente @types/react-native, que está obsoleto porque React Native incluye sus propios tipos desde la versión 0.71.
Esto provocaba conflictos con versiones antiguas (react-native@0.74.0).
Decisión: eliminar @types/react-native y mantener solo @types/react y @types/react-test-renderer.

Gradle y autolinking
El proyecto mostraba errores al compilar porque autolinking.json no se generaba correctamente.
Se identificó que settings.gradle tenía referencias obsoletas a native_modules.gradle.

Versión de API incompatible
React Native 0.82 requiere al menos API 34 (Android 14).
Si tu emulador está en una API más baja, puede dar errores.

Conexión con Metro bundler
A veces el emulador no se conecta al servidor JS.
