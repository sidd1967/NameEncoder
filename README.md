# NameEncoder

Download or clone the files from the GitHub into your local repository

open command prompt in the project folder and type in 
node –v

----The system should display the Currently installed Nodejs Version

If node is not installed, Please install following the instructions below
Step 1: Download Node.js Installer
1. In a web browser, navigate to https://nodejs.org/en/download/. 
2. Click the Windows Installer button to download the latest default version. 
3. The Node.js installer includes the NPM package manager.

Step 2: Install Node.js and NPM from Browser
1. Once the installer finishes downloading, launch it. Open the downloads link in your browser and click the file. Or, browse to the location where you have saved the file and double-click it to launch.

2. The system will ask if you want to run the software – click Run.

3. You will be welcomed to the Node.js Setup Wizard – click Next.

4. On the next screen, review the license agreement. Click Next if you agree to the terms and install the software.

5. The installer will prompt you for the installation location. Leave the default location, unless you have a specific need to install it somewhere else – then click Next.

6. The wizard will let you select components to include or remove from the installation. Again, unless you have a specific need, accept the defaults by clicking Next.

7. Finally, click the Install button to run the installer. When it finishes, click Finish.

Step 3: Verify Installation
Open a command prompt (or PowerShell), and enter the following:
node –v
The system should display the Node.js version installed on your system. You can do the same for NPM:

npm –v


Then in the command prompt(in project folder) please run the following to install project dependencies
npm install

Then navigate to the client folder and open command prompt and enter the following command
npm install

Then navigate back to the project folder(/NameEncoder) and run the following code to deploy the project in local host:
npm run dev

Now server will be started and the frontend server will automatically run and the default browser will open with a new tab displaying the Web Application.
To access Swagger UI for localhost please use the link: http://localhost:5000/api-docs/

Thats's it!!

The Web Application is Up and Running on localhost.
