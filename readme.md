# WPI AIAA Website
Worcester Polytechnic Institute's AIAA website.


## About
Built using [react](http://reactjs.org) and [react-router-dom](http://reacttraining.com/react-router/)

### Setup for Development
1. Ensure [nodejs](http://nodejs.org) is installed.
2. Upgrade NPM to version 6.x.x using:
    ```bash
    npm install -g npm
    hash -r
    npm -version
    ```
3. Clone the repository
    ```bash
    git clone https://github.com/WPI-AIAA/web-client.git  
    ```
4. Change directories into the repository
    ```bash
    cd web-client
    ```
5. Install NPM dependencies
    ```bash
    npm install
    ```
6. Run the development server
    ```bash
    npm start
    ```
    
### Setup for Production
1. SSH into [aiaa.wpi.edu](http://aiaa.wpi.edu)
    ```bash
    ssh user@aiaa.wpi.edu
    ```
2. Change directory into the repository
    ```bash
    cd ../aiaa-website/web-client
    ```
3. Pull most recent version from git
    ```bash
    git pull
    ```
4. Build production version
    ```bash
    npm run build
    ```
5. Host the production build
    ```bash
    nohup sudo serve -s -p 80 </dev/null &
    ```