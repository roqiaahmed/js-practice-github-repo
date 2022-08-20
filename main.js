// main var
let theInput = document.querySelector(".get-repo input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function(){
    getRepos() 
}

function getRepos() { 
    if (theInput.value == "") {

        reposData.innerHTML = "<span>Please Write Github Username.</span>";

    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then ((response) => response.json())

        .then ((data) => { 

            // clear the container
            reposData.innerHTML = ""; 

             // looping
            data.forEach(repo => {
            
             // creat the mian div
            let MainDiv = document.createElement("div");

            // make text node
            let repoName = document.createTextNode(repo.name);

            MainDiv.appendChild(repoName);
            
            // creat a 
            let TheUrl = document.createElement('a');
            let UrlName = document.createTextNode("visit");
            TheUrl.href = `https://github.com/${theInput.value}/${repo.name}`
            TheUrl.setAttribute('target', '_blank')
            TheUrl.appendChild(UrlName);
            MainDiv.appendChild(TheUrl);
            let stars = document.createElement('span');
            let starsText = document.createTextNode(`stars ${repo.stargazers_count}`);
            stars.appendChild(starsText);
            MainDiv.appendChild(stars);
            MainDiv.className = 'repo-box';
            reposData.appendChild(MainDiv);
            });
        })
    }
}

