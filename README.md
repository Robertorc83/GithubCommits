# GithubCommits
React.js &amp; Nest.js App to check for the commits of this repository with Github API

## What is inside?

This project uses many tools like:

- [Vite](https://vitejs.dev)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwindcss](https://tailwindcss.com)
- [Prettier](https://prettier.io)
- [NestJS](https://nestjs.com/)

## Getting Started

1.- Clone this project

2.- Access backend folder

```bash
cd backend
```
3.- Install Dependencies

```bash
npm install
```
4.-Create a .env file and use your github Token.(In order to use github api in this app you have to go to settings > developer settings > tokes > create tokens, assign permisssion and copy the token to the  .env file)

-After creating your token, create .env file inside backend folder and add the next code(replace your token with the generated toke) :

```bash
TOKEN_AUTH=your token
```

5.-Run backend App

```bash
npm run start:dev
```

Now the backend is up and running you could test it with postman, curl or other tool.

6.- Go back to ui directory

```bash
cd ..
cd ui
```

7.- Install ui dependencies

```bash
npm install
```

8.-Run app
```bash
npm run dev
```

9.-Visit app in browser

got to http://127.0.0.1:5173/

## Development

The goal of this project is to fetch and render the commit history of this repository.

I started by creating a setup of a Nestjs app with the Nest cli and a React app with vite. For the API, I used Nest.js. First create the controller and service to fetch the commits from the GitHub API, I used the HttpService from the @nestjs/axios to make the fetch call. Furthermore, I used the @nestjs/config package to use a .env file and store my token for security. After that, I created a dto interceptor to have more control of the response and return relevant data to the client.

For the frontend, I have used Tailwind for the styles and UI design, creating some custom values for the fonts, colors, and animations. Then, create a gradient header that changes colors and a simple footer. After this I started developing the cardCommits to show individual commits and the listCommit components to iterate through each commit. Finally, I created a query and use the useQuery hook to improve this query whit caching.

## Licence

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author
- [Roberto Espinoza](https://github.com/Robertorc83)
