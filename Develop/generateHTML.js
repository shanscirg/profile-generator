const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

const generateHTML = function (color, stuff, map, stars) {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Document</title>
    </head>
      <body>
      <div class="wrapper">
        <div class="photo-header">
          <p><img id="prof-img" src="${stuff.data.avatar_url}"></img></p>
          <h1>Hello World!</h1>
          <h1>My name is ${stuff.data.name}!</h1>
          <div>
            <h4><img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_location_on_48px-512.png" width="30" height="30"><a href="${map}">${stuff.data.location}</a></h4>
            <h4><img src="https://image.flaticon.com/icons/png/512/25/25231.png" width="30" height="30"><a href="${stuff.data.html_url}">GitHub</a></h4>
            <h4><img src="https://www.freeiconspng.com/uploads/blogger-logo-icon-png-28.png" width="30" height="30"><a href="${stuff.data.blog}">Blog</a></h4>
          </div>
        </div>
      </div>
      <h2 id="bio">${stuff.data.bio}</h2>
      <div class="container">
        <div class='row'>
          <div class='col'>
            <div class="card">
            <h3>Public Repositories:</h3>${stuff.data.public_repos}
            </div>
            <div class="card">
            <h3>GitHub Stars</h3>${stars}
            </div>
          </div>
          <div class='col'>
            <div class="card">
            <h3>Followers</h3>${stuff.data.followers}
            </div>
            <div class="card">
            <h3>Following</h3>${stuff.data.following}
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper"></div>

      </body>

      <style>
          @page {
            margin: 0;
          }
         *,
         *::after,
         *::before {
         box-sizing: border-box;
         }
         html, body {
         padding: 0;
         margin: 0;
         }
         html, body, .wrapper {
         height: 85%;
         }
         .wrapper {
         background-color: ${colors[color].wrapperBackground};
         padding-top: 100px;
         text-align:center;
         }
         body {
         background-color: white;
         -webkit-print-color-adjust: exact !important;
         font-family: 'Cabin', sans-serif;
         }
         main {
         background-color: #E9EDEE;
         height: auto;
         padding-top: 30px;
         }
         h1, h2, h3, h4, h5, h6 {
         font-family: 'BioRhyme', serif;
         margin: 0;
         }
         h1 {
         font-size: 3em;
         }
         h2 {
         font-size: 2.5em;
         }
         h3 {
         font-size: 2em;
         }
         h4 {
         font-size: 1.5em;
         }
         h5 {
         font-size: 1.3em;
         }
         h6 {
         font-size: 1.2em;
         }
         .photo-header {
         position: relative;
         margin: 0 auto;
         margin-bottom: -50px;
         display: flex;
         justify-content: center;
         flex-wrap: wrap;
         background-color: ${colors[color].headerBackground};
         color: ${colors[color].headerColor};
         padding: 10px;
         width: 95%;
         border-radius: 6px;
         }
         #prof-img {
         width: 300px;
         height: 300px;
         border-radius: 50%;
         object-fit: cover;
         margin-top: -75px;
         border: 6px solid ${colors[color].photoBorderColor};
         box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
         }
         .photo-header h1, .photo-header h2 {
         width: 100%;
         text-align: center;
         }
         .photo-header h1 {
         margin-top: 10px;
         }
         .container {
         padding: 50px;
         padding-left: 100px;
         padding-right: 100px;
         text-align:center;
         }
         .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 20px;
          margin-bottom: 20px;
        }
         .card {
           padding: 20px;
           border-radius: 6px;
           background-color: ${colors[color].headerBackground};
           color: ${colors[color].headerColor};
           margin: 20px;
         }
      
         .col {
         flex: 1;
         text-align: center;
         }
        
         #bio {
          margin-top: 5%;
          text-align: center;
          padding-top: 5%;
         }

         a, a:hover {
         text-decoration: none;
         color: inherit;
         font-weight: bold;
         }

         @media print { 
          body { 
            zoom: .75; 
          } 
         }
      </style>
      </html>`
}

module.exports = {
  generateHTML: generateHTML
}