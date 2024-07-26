    # Backend Project

    ## Deskripsi
    This is a backend project using Elysia, Firebase Admin, and Mongoose. The project also uses TypeScript as the programming language.

    ## Directory Structure
    Legal-Plus-FCM-Auth/

    ├── dist/

    │ └── index.js

    ├── node_modules

    ├── src/

    | ├── config

    |  ├── corsConfig.ts

    |  └── firebaseAdmin.ts

    │ ├── models

    |  └── Notification.ts

    │ ├── routes

    |  └── notification.ts

    │ └── index.js

    ├── package.json

    └── other files


    ## Requirements
    - Bun
    - Elysia
    - TypeScript

    ## Installation
    1. Clone this repository:
        ```sh
        git clone <repository-url>
        cd backend
        ```

    2. Install dependencies:
        ```sh
        bun install
        ```

    ## NPM Commands
    - `build': Build the project using Bun.
        ```sh
        bun build src/index.ts --outdir dist --target bun
        ```
    - `start`: Run the project from the build output.
        ```sh
        bun run dist/index.js
        ```
    - `dev`: Run the project in development mode.
        ```sh
        bun run src/index.ts
        ```
    - `clean`: Remove the 'dist' directory.
        ```sh
        rm -rf dist
        ```
