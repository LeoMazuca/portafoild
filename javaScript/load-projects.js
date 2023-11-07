const $main = document.querySelector(".project-container"),
  $project_indicator = document.querySelector(".project_indicator");
let $template = "",
  $indicator_template = "",
  reverse_first_names = [],
  reverse_second_names = [],
  projects_images = [],
  names_indicators = 0;
async function loadProjects(url) {
  try {
    let res = await fetch(url),
      json = await res.json();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    try {
      /* !Con este for guardamos los nombres de los proyectos en dos arrays para, si es necesario ordenarlos en reversa*/
      for (let index = 0; index < 7; index++) {
        reverse_first_names[index] = json.projects[index].name;
        reverse_second_names[index] = json.projects[index].second_name;
      }
      /* !Aqui dependiendo de en que dispositivo esten visualizando la pagina mostramos una u otra imagen */
      if (screen.width <= 480) {
        /* !Hacemos que los nombres de los proyectos se ordenen en reversa para que se puedan mostrar bien solo en caso 
        de que la pagina se este visualizando en pantallas con un maximo de 480px Tambien agregamos las imagenes con el
        mockup de Iphone*/
        reverse_first_names.reverse();
        reverse_second_names.reverse();
        for (let index = 0; index < 7; index++) {
          projects_images[index] = json.projects[index].mobile_img;
        }
      } else if (screen.width > 480 && screen.width <= 768) {
        console.log("es tablet");
        for (let index = 0; index < 7; index++) {
          projects_images[index] = json.projects[index].tablet_img;
        }
      } else if (screen.width > 768 && screen.width <= 1024) {
        console.log("es laptop");
        for (let index = 0; index < 7; index++) {
          projects_images[index] = json.projects[index].laptop_img;
        }
      } else {
        console.log("es pc de escritorio");
        for (let index = 0; index < 7; index++) {
          projects_images[index] = json.projects[index].desktop_img;
        }
      }
      json.projects.forEach((project) => {
        $template += `
      <div class="project">
      <div class="project_tittle">
          <div class="project_name">
              <h3><span>${reverse_first_names[names_indicators]} </span>
                  ${reverse_second_names[names_indicators]}
              </h3>
          </div>
          <div class="project_number">
              <label>${project.first_number}</label>
          </div>
      </div>
      <div class="card">
          <div class="project_img">
              <img src="${projects_images[names_indicators]}" alt="Cargando..." class="face">
          </div>
          <div class="info">
              <h3 class="info_number">${project.first_number}</h3>
              <p>${project.description}</p>
              <hr class="linea">
              <div class="icons">
                  <i class="fab fa-html5" title="HTML 5"></i>
                  <div class="progress-bar">
                      <div class="progress" style="background: var(--html-color);width: ${project.html_percent};"><span >${project.html_percent}</span></div>
                  </div>
                  <i class="fab fa-css3-alt" title="CSS 3"></i>
                  <div class="progress-bar">
                      <div class="progress" style="background: var(--css-color);width: ${project.css_percent};"><span>${project.css_percent}</span></div>
                  </div>
                  <i class="fab fa-js" title="JavaScript"></i>
                  <div class="progress-bar">
                      <div class="progress" style="background: var(--js-color);width: ${project.js_percent};"><span>${project.js_percent}</span></div>
                  </div>
              </div>
              <div class="button" id="goToButton" data-url="${project.url}">
                  Visitar Página
                  <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                  </div>
              </div>    
          </div>
      </div>
      
  </div>
                `;
        /* !Agregamos un indicador(los circulitos que indican el proyecto seleccionado) por cada proyecto en el json */
        $indicator_template += `<button class="indicator"></button>`;
        names_indicators++;
      });
    } catch (err) {
      console.log(err);
    }
    $project_indicator.innerHTML = $indicator_template;
    $main.insertAdjacentHTML("beforeend", $template);
  } catch (err) {
    console.log(err);
  }
}
function gerReady(current, imgs, cards, all_projects_buttons) {
  /* !Agregamos las clases front y back que son las que se muestran en un pricipio*/
  imgs[0].classList.add("front");
  imgs[current + 1].classList.add("back");
  /* !Agregamos las clases front y back a las cards para que no se vean todas al mismo tiempo */
  cards[0].firstElementChild.classList.add("face_card_front");
  cards[0].firstElementChild.classList.add("face_card");
  cards[0].lastElementChild.classList.add("face_card");
  cards[0].lastElementChild.classList.add("face_card_back");
  /* !Agregamos la clase active a los indicadores de proyectos para este seleccionado el primer proyecto */
  all_projects_buttons[0].classList.add("active");
}
document.addEventListener("DOMContentLoaded", async (e) => {
  await loadProjects("./javaScript/projects.json");
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

  gerReady(current, imgs, cards, all_projects_buttons);

  /* TODO: FALTA CORREGIR EL ERROR DE QUE NO MUESTRA EL NOMBRE DEL PROYECTO NUMERO SIETE */
  move_left.addEventListener("click", (e) => {
    if (current === 0) {
      /*! esta parte del codigo hace que las imagenes de los proyectos giren y muestren la siguiente */
      /* Removemos el .back porque esta dando click en el boton de proyecto anterior entonces el siguiente proyecto a mostrar
      es el ultimo y no el segundo */
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
      cards[cards.length - 1].firstElementChild.classList.add(
        "face_card_front"
      );
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
});
