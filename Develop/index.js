const inquirer = require("inquirer");
// const pdf = require("html-pdf");
const fs = require("fs");
const generateHTML = require("./generateHTML.js");
const generatePDF = require("./generatePDF.js");
const axios = require("axios");

// const doc = new pdf();

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "list",
            message: "What's your favorite color?",
            name: "color",
            choices: ["green", "blue", "pink", "red"]
        }
    ]).then(function ({ username }) {
        const queryUrl = `https://api.github.com/users/${username}`;

        axios.get(queryUrl).then(function (res) {
            // * Profile image
            const profImg = res.data.avatar_url;
            console.log(profImg);
            // * User name
            const userName = res.data.login;
            console.log(userName);
            // * Links to the following:
            //   * User location via Google Maps
            const location = res.data.location;
            console.log(location);
            //   * User GitHub profile
            const userProfile = res.data.url;
            console.log(userProfile);
            //   * User blog
            const userBlog = res.data.blog;
            console.log(userBlog);
            // * User bio
            const userBio = res.data.bio;
            console.log(userBio);
            // * Number of public repositories
            const numRepos = res.data.public_repos;
            console.log(numRepos);
            // * Number of followers
            const followers = res.data.followers;
            console.log(followers);
            // * Number of GitHub stars
            const starredUrl = `https://api.github.com/users/shanscirg/starred/${userName}`
            console.log(starredUrl);

            axios.get(starredUrl).then(function(res){
                console.log(res);
            })
            // * Number of users following
           
            });
        });
    // });