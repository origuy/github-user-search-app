
const toggleGrabber = document.getElementById("toggleImg");
const linkStyleSheetGrabber = document.getElementById("linkStyleSheet");
const darkLightModeTextGrabber = document.getElementById("darkLightMode");
const inputGrabber = document.getElementById("input");
const searchBtnGrabber = document.getElementById("searchBtn");
const profileImgGrabber = document.getElementById("profileImg");
const notFoundGrabber = document.getElementById("notFound");
const firstGrabber = document.getElementsByClassName('first')[0];
console.log(firstGrabber)
const secondGrabber = document.getElementsByClassName('second')[0];
const thirdImgGrabber = document.getElementsByClassName('third')[0];
const UserBioGrabber = document.getElementById('UserBio');
const reposGrabber = document.getElementsByClassName("titlesDataInfo")[0];
const followersGrabber = document.getElementsByClassName("titlesDataInfo")[1];
const followingGrabber = document.getElementsByClassName("titlesDataInfo")[2];
const locationGrabber = document.getElementsByClassName('links')[0];
const websiteGrabber = document.getElementsByClassName('links')[1];
const twitterGrabber = document.getElementsByClassName('links')[2];
const githubGrabber = document.getElementsByClassName('links')[3];
let isDarkFlag = true; 
let searchValue =``;
localStorage.setItem("serverSearch",searchValue);

toggleGrabber.addEventListener("click",() => {
    if(isDarkFlag === true){
        console.log("switched to Light");
        linkStyleSheetGrabber.setAttribute('href','style/styleLight.css' );
        toggleGrabber.setAttribute('src','images/svg/icon-moon.svg');
        darkLightModeTextGrabber.innerHTML = 'Dark';
        isDarkFlag = false;
    }else{
        console.log("switched to Dark");
        linkStyleSheetGrabber.setAttribute('href','style/style.css' );
        toggleGrabber.setAttribute('src','images/svg/icon-sun.svg');
        darkLightModeTextGrabber.innerHTML = 'Light';
        isDarkFlag = true;
    }
});
inputGrabber.addEventListener('keyup', () => {
    searchValue = inputGrabber.value;
})
searchBtnGrabber.addEventListener('click',() => {
    let url =  `https://api.github.com/users/${searchValue}`; 
    getData(url);

})
inputGrabber.addEventListener('focusin',() => {
    notFoundGrabber.style.display = 'none';
    inputGrabber.value = '';
})


async function getData(url){
    const res = await fetch(url);
    const data = await res.json();
    console.log(inputGrabber.value);
    if(inputGrabber.value === ''){

        inputGrabber.style.fontSize = "1.5rem"
        inputGrabber.setAttribute("placeholder","Please enter a userName");
        alert("Please enter a userName like: Octocat");
        inputGrabber.focus()
    }else if(data.message === 'Not Found'){
        notFoundGrabber.style.display = 'inline';
    }else{
        notFoundGrabber.style.display = 'none';
        profileImgGrabber.setAttribute('src',data.avatar_url);
        firstGrabber.innerHTML =  data.name; 
        firstGrabber.innerHTML = (data.name) === null || (data.name) === '' ? 'Not Available' : data.name; 
        secondGrabber.innerHTML = 
         `@${data.login}` 
        secondGrabber.innerHTML =  (data.login) === null || (data.login) === '' ? 'Not Available' : `@${data.login}` 
        thirdImgGrabber.innerHTML = `Joined ${data.created_at.slice(0,10)}` ; 
        UserBioGrabber.innerHTML = data.bio; 
        UserBioGrabber.innerHTML = (data.bio) === null || (data.bio) === '' ? 'Not Available' : data.bio;
        reposGrabber.innerHTML =  data.public_repos ;
        followersGrabber.innerHTML = data.followers ;
        followingGrabber.innerHTML = data.following ;
        locationGrabber.innerHTML = (data.location) === null || (data.location) === '' ? 'Not Available' : data.location;
        if(locationGrabber.innerHTML === 'Not Available'){
            locationGrabber.style.opacity = 0.5;
        }
        websiteGrabber.innerHTML = (data.blog) === null || (data.blog) === '' ? 'Not Available' : data.blog ;
        if(websiteGrabber.innerHTML === 'Not Available'){
            websiteGrabber.style.opacity = 0.5;
        }
        twitterGrabber.innerHTML = (data.twitter_username) === null || (data.twitter_username) === '' ? 'Not Available' : data.twitter_username ; 
        if(twitterGrabber.innerHTML === 'Not Available'){
            twitterGrabber.style.opacity = 0.5;
        }
        githubGrabber.innerHTML = (data.company) === null || (data.company) === '' ? 'Not Available' : data.company;
        if(githubGrabber.innerHTML === 'Not Available'){
            githubGrabber.style.opacity = 0.5;
        }
        
    }

}

