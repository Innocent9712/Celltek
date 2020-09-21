let imgList = document.querySelectorAll(".gallery>li")
let length = imgList.length
for (let i = 0; i < length; i++) {
  imgList[i].classList.add("pt-10", "rounded-4", "mx-4", "w-auto", "lg:w-64", )
}