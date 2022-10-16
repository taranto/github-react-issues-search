# About the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Here you will find a simple page in which access the Github api to show the [Facebook/React issues](https://github.com/facebook/react/issues) featuring text suggestion and keyboard navigation.

### Steps to the installation

To start using this app, you should first install a few libraries. This project was developed under the node version 10.21.*. It was not tested in any other version. With that being said, the project was restricted to this very version.

After that please clone this project and `yarn install` it in your terminal.

To be able to access the Github api with a reasonable quantity of available requests per hour, you should have an account registered there. You will need to have an access token there too, in which can be obtained by following this link: [Creating a personal access token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) and heading to this page: [personal settings](https://github.com/settings/tokens).
Into the project, copy-paste the file named 'env.json.template' or rename it to 'env.json'. Fill up the empity string with your access token retreived from the Github page.

After setting up the access token, do: 
`yarn start`
It runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
