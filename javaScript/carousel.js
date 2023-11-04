const all_projects = document.querySelectorAll(".project"),
  all_projects_buttons = document.querySelectorAll(".indicator"),
  move_left = document.getElementById("moveLeft"),
  move_right = document.getElementById("moveRight"),
  visitButton = document.querySelectorAll("#goToButton");
let total_projects = all_projects.length,
  tittles = document.querySelectorAll(".project_name"),
  imgs = document.querySelectorAll(".project_img img"),
  info = document.querySelectorAll(".info"),
  cards = document.querySelectorAll(".card");
current = 0;
current_tittle = tittles.length - 1;
/* TODO: FALTA CORREGIR EL ERROR DE QUE NO MUESTRA EL NOMBRE DEL PROYECTO NUMERO SIETE */
move_left.addEventListener("click", (e) => {
  if (current === 0) {
    /*! esta parte del codigo hace que las imagenes de los proyectos giren y muestren la siguiente */
    document.querySelector(".back").classList.remove("back");
    imgs[total_projects - 1].classList.add("back");
    imgs[current].setAttribute("style", "transform : rotateY(180deg)");
    imgs[total_projects - 1].setAttribute(
      "style",
      "transform :rotateY(360deg)"
    );
    document.querySelector(".front").classList.remove("front");
    imgs[current].classList.add("front");
    /* Esto le da el efecto fade-in a la info del proyecto */
    info[current].classList.remove("active_info");
    info[info.length - 1].classList.add("active_info");
    /* !esta parte hace que muestren el proyecto actual en los indicadores de abajo */
    all_projects_buttons[total_projects - 1].classList.add("active");
    all_projects_buttons[0].classList.remove("active");
    cards[cards.length - 1].firstElementChild.classList.add("face_card");
    cards[cards.length - 1].firstElementChild.classList.add("face_card_front");
    cards[cards.length - 1].lastElementChild.classList.add("face_card");
    cards[cards.length - 1].lastElementChild.classList.add("face_card_back");
    cards[current].firstElementChild.classList.remove("face_card");
    cards[current].firstElementChild.classList.remove("face_card_front");
    cards[current].lastElementChild.classList.remove("face_card");
    cards[current].lastElementChild.classList.remove("face_card_back");

    current = total_projects - 1;
  } else {
    /*! esta parte del codigo hace que las imagenes de los proyectos giren y muestren la siguiente */
    imgs[current].setAttribute("style", "transform : rotateY(180deg)");
    imgs[current - 1].setAttribute("style", "transform :rotateY(360deg)");
    document.querySelector(".front").classList.remove("front");
    document.querySelector(".back").classList.remove("back");
    imgs[current].classList.add("front");
    imgs[current - 1].classList.add("back");
    /* Esto le da el efecto fade-in a la info del proyecto */
    info[current].classList.remove("active_info");
    info[current - 1].classList.add("active_info");
    /* !esta parte hace que muestren el proyecto actual en los indicadores de abajo */
    all_projects_buttons[current - 1].classList.add("active");
    all_projects_buttons[current].classList.remove("active");
    cards[current - 1].firstElementChild.classList.add("face_card");
    cards[current - 1].firstElementChild.classList.add("face_card_front");
    cards[current - 1].lastElementChild.classList.add("face_card");
    cards[current - 1].lastElementChild.classList.add("face_card_back");
    cards[current].firstElementChild.classList.remove("face_card");
    cards[current].firstElementChild.classList.remove("face_card_front");
    cards[current].lastElementChild.classList.remove("face_card");
    cards[current].lastElementChild.classList.remove("face_card_back");
    current = current - 1;
  }
  /* !Esto hace girar los nombres de los proyectos */
  if (current_tittle === tittles.length - 1) {
    console.log("tenemos que limpiar");
    for (let index = 0; index < tittles.length - 1; index++) {
      tittles[index].setAttribute(
        "style",
        "transform : rotateX(0deg); z-index : 1"
      );
    }
    tittles[0].setAttribute(
      "style",
      "animation: return-animation 0.8s;z-index : 2;"
    );
    tittles[tittles.length - 1].setAttribute(
      "style",
      "transform : rotateX(0deg);transition : 0s;z-index : 1;"
    );
    current_tittle = 0;
  } else {
    tittles[current_tittle + 1].setAttribute(
      "style",
      "transfor: rotateX(0deg);animation: return-animation 0.8s;z-index : 2;"
    );
    current_tittle++;
    if (current_tittle === 6) {
      tittles[0].setAttribute(
        "style",
        "transform : rotateX(0deg);transition : 0s;z-index : 1;"
      );
    }
  }
});
move_right.addEventListener("click", (e) => {
  if (current === total_projects - 1) {
    /*! esta parte del codigo hace que las imagenes de los proyectos giren y muestren la siguiente */
    imgs[current].setAttribute("style", "transform : rotateY(180deg)");
    imgs[0].setAttribute("style", "transform :rotateY(360deg)");
    document.querySelector(".front").classList.remove("front");
    document.querySelector(".back").classList.remove("back");
    imgs[current].classList.add("front");
    imgs[0].classList.add("back");
    /* Esto le da el efecto fade-in a la info del proyecto */
    info[current].classList.remove("active_info");
    info[0].classList.add("active_info");
    /* !esta parte hace que muestren el proyecto actual en los indicadores de abajo */
    all_projects_buttons[0].classList.add("active");
    all_projects_buttons[current].classList.remove("active");
    cards[0].firstElementChild.classList.add("face_card");
    cards[0].firstElementChild.classList.add("face_card_front");
    cards[0].lastElementChild.classList.add("face_card");
    cards[0].lastElementChild.classList.add("face_card_back");
    cards[current].firstElementChild.classList.remove("face_card");
    cards[current].firstElementChild.classList.remove("face_card_front");
    cards[current].lastElementChild.classList.remove("face_card");
    cards[current].lastElementChild.classList.remove("face_card_back");
    current = 0;
  } else {
    /*! esta parte del codigo hace que las imagenes de los proyectos giren y muestren la siguiente */
    imgs[current].setAttribute("style", "transform : rotateY(180deg)");
    imgs[current + 1].setAttribute("style", "transform :rotateY(360deg)");
    document.querySelector(".front").classList.remove("front");
    document.querySelector(".back").classList.remove("back");
    imgs[current].classList.add("front");
    imgs[current + 1].classList.add("back");
    /* Esto le da el efecto fade-in a la info del proyecto */
    info[current].classList.remove("active_info");
    info[current + 1].classList.add("active_info");
    /* !esta parte hace que muestren el proyecto actual en los indicadores de abajo */
    all_projects_buttons[current + 1].classList.add("active");
    all_projects_buttons[current].classList.remove("active");
    cards[current + 1].firstElementChild.classList.add("face_card");
    cards[current + 1].firstElementChild.classList.add("face_card_front");
    cards[current + 1].lastElementChild.classList.add("face_card");
    cards[current + 1].lastElementChild.classList.add("face_card_back");
    cards[current].firstElementChild.classList.remove("face_card");
    cards[current].firstElementChild.classList.remove("face_card_front");
    cards[current].lastElementChild.classList.remove("face_card");
    cards[current].lastElementChild.classList.remove("face_card_back");
    current = current + 1;
  }

  /* !Esto hace girar los nombres de los proyectos */
  /* tittles[0].setAttribute("style", "transform : rotateX(0deg);z-index:1"); */
  if (current_tittle === 0) {
    for (let index = 1; index < tittles.length; index++) {
      tittles[index].setAttribute(
        "style",
        "transform : rotateX(0deg);z-index:1"
      );
    }
    tittles[current_tittle].setAttribute(
      "style",
      "animation: next-animation .8s forwards;z-index : 2;"
    );
    current_tittle = tittles.length - 1;
  } else {
    tittles[current_tittle].setAttribute(
      "style",
      "animation: next-animation .8s forwards; z-index:2"
    );
    current_tittle--;
    if (current_tittle === 6) {
      tittles[0].setAttribute(
        "style",
        "transform : rotateX(0deg);transition : 0s;z-index : 1;"
      );
    }
  }
});
document.addEventListener("click", (e) => {
  if (e.target.matches("#goToButton")) {
    window.open(e.target.getAttribute("data-url"));
  }
});
