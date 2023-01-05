const fullScreenBtn = document.querySelector(".image-below-descriptions")
const imageContainer = document.querySelector(".image-below-descriptions")

fullScreenBtn.addEventListener("click", toggleFullScreenMode)

function toggleFullScreenMode() {
    if (document.fullscreenElement == null) {
      imageContainer.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }