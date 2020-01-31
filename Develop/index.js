const inquirer = require("inquirer");
const pdf = require("html-pdf");
const fs = require("fs");
const html = require("./generateHTML");
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
    ])
    .then(function ({ username, color }) {
        const queryUrl = `https://api.github.com/users/${username}`;
        const colorChoice = color;
        console.log(colorChoice);
        axios
            .get(queryUrl)
            .then(function (res) {
                console.log(res);
                // * Profile image
                const profImg = res.data.avatar_url;
                console.log(profImg);
                // * User name
                const name = res.data.name;
                console.log(name);
                //   * User location via Google Maps
                const location = res.data.location;
                console.log(location);
                const mapLink = `https://www.google.com/maps/search/?api=1&query=${location}`
                // // Google Maps axios call
                // const mapUrl = `https://www.google.com/maps/search/?api=1&query=${location}`;
                // axios
                //     .get(mapUrl)
                //     .then(function (mapLink) {
                //         console.log(mapLink);
                //         // const mapData = mapLink.data;
                //         // return mapData;
                //     })
                //   * User GitHub profile
                const userProfile = res.data.html_url;
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
                // axios
                //     .get(`https://api.github.com/users/${userName}/starred`)
                //     .then(function (res) {
                //         console.log(res);
                //         let stars = res.data[0].stargazers_count;
                //         console.log(stars);
                //     })
                //     .catch(error => {
                //         console.log(error)
                //     })

                // * Number of users following
                const following = res.data.following;
                console.log(following);

                fs.writeFile("user-profile.html", html.generateHTML(colorChoice, res, mapLink), function (err) {
                    if (err) {
                        throw err;
                    }
                });
            });
    });