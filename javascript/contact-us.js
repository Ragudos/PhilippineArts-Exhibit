document.getElementById('left-section').innerHTML = '<button class="buttons" onclick="newSite();"> Back </button>'
document.getElementById('middle-div').innerHTML = '<h2 class="header-theteam" id="header-theteam"> Contact Us </h2>'
document.getElementById('right-section').innerHTML = '<button class="buttons" onclick="newSite1();"> To Gallery </button.'

    function newSite() {
        window.location.href = 'index.html';
    }
    function newSite1() {
        window.location.href = 'GALLERY.html';
    }

document.getElementById('image-title').innerHTML = '<p class="image-link-names"> Technological Institute of the Philippines </p>'

const list1 = '(02) 8733 9117';
const list2 = 'https://www.tip.edu.ph/';
const list3 = 'https://www.facebook.com/TIP1962official';

function List(listTitle) {
    let list = document.createElement('li');
    list.setAttribute('class', 'list')
    list.innerText = listTitle;
    document.getElementById('ol-names-Kayla').appendChild(list);
}

List(list1);
List(list2);
List(list3);

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


