# Project Plan <!-- omit in toc -->

## 1. Goal

The goal of this project is to implement a frontend webapp for the Little Sichuan family kitchen

Design file: https://www.figma.com/file/BPxWylWDO89ydAnyxL4nM9/Home-Kitchen-Website?node-id=0%3A1

## 2. Tech Stack

-   React
-   React Router
-   Sass

This project is a standard ReactJS project, it is created using the `create-react-app` script, for more information please refer to the official website - https://reactjs.org/docs/create-a-new-react-app.html

You should follow the best practices for developing a react app, some initial components are given to get your started, see below for a brief discreption of the folder structure:

-   App.js - this is the entry point of your code, you should define your router tree in here and import all page level components. For the purpose of this project only 2 routes are needed.
-   `pages` folder - includes all page level components that need to be imported with the routes
-   `components` folder - all other components are included here.
-   `utils` folder - provides all the helper functions, i.e. API helper, etc

## 3. Styling

This project uses sass as the styling solution, it allows us to use some useful features when writing stylesheet, please refer to the official site for details - https://sass-lang.com/
We also use the `BEM` naming convention when writing class names and stylesheet for the purpose of readability and reduce unnecessary errors. Some examples are given in the code, **please review this concept before writing any code - https://en.bem.info/methodology/html/**

## 4. Responsiveness

This project is designed to be mobile friendly, thus all components should follow the responsive design principle, the mobile designs are provided in the same Figma link.
https://www.w3schools.com/html/html_responsive.asp

## 5. API interaction

This project needs to fetch and post data from a backend service, you should use axios to send api calls to the backend - https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/

## 6. Layout methods

You should be using flex-box for layout instead setting static dimensions everywhere, please refer to this tutorial for more details - https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## 7. Extra reading materials

Below is a link to a TODO app tutorial, it is very similar to what we need to build here, please make sure you read and understand this first before attempting the project.
https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks
