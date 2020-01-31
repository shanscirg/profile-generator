const inquirer = require("inquirer");
const pdf = require("html-pdf");
const html = require("./generateHTML");
const axios = require("axios");

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
        axios
            .get(queryUrl)
            .then(function (res) {
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
                // * Company
                const company = res.data.company;
                console.log(company);
                // * Number of users following
                const following = res.data.following;
                console.log(following);
                // * Number of GitHub stars
                axios
                    .get(`https://api.github.com/users/${username}/starred`)
                    .then(function (response) {
                        const stars = response.data[0].stargazers_count;
                        pdf.create(html.generateHTML(colorChoice, res, mapLink, stars)).toFile('./user-profile.pdf', function (err) {
                            if (err) return console.log(err);
                        })
                    })
            })
    })
    .catch(error => {
        console.log(error)
    });

