document.getElementById('left-section').innerHTML = '<button class="buttons" onclick="newSite();"> Back </button>'
document.getElementById('middle-div').innerHTML = '<h2 class="header-theteam" id="header-theteam"> The Developers </h2>'
document.getElementById('right-section').innerHTML = '<button class="buttons" onclick="newSite1();"> To Gallery </button.'

    function newSite() {
        window.location.href = 'ABOUT US.html';
    }
    function newSite1() {
        window.location.href = 'GALLERY.html';
    }

document.getElementById('image-title').innerHTML = '<p class="image-link-names"> Jeremy Josh Ygar </p>'
document.getElementById('leaders-div').innerHTML = '<h1 class="header-leaders"> Members </h1>'

const list1 = 'Trailer Editor';



function List(listTitle) {
    let list = document.createElement('li');
    list.setAttribute('class', 'list')
    list.innerText = listTitle;
    document.getElementById('ol-names-Kayla').appendChild(list);
}
List(list1);

const fullScreenBtn = document.querySelector(".thumbnail1")
const imageContainer = document.querySelector(".thumbnail1")

fullScreenBtn.addEventListener("click", toggleFullScreenMode)

function toggleFullScreenMode() {
    if (document.fullscreenElement == null) {
      imageContainer.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }