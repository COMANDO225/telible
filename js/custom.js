const languageButton = document.getElementById("language-button");
const languageButtonMobile = document.getElementById("language-button-mobile");
const flagImage = document.getElementById("flag");
const languageText = document.getElementById("language-text");
const flagImageMobile = document.getElementById("flag-mobile");
const languageTextMobile = document.getElementById("language-text-mobile");
let currentLanguage = localStorage.getItem("selectedLanguage") || "es";

if (!currentLanguage) {
	currentLanguage = "es";
	localStorage.setItem("selectedLanguage", currentLanguage);
}

// Función para cambiar el idioma y la bandera al hacer clic en el botoncito masna!!!.
languageButton.addEventListener("click", () => {
	if (currentLanguage === "es") {
		currentLanguage = "en";
		flagImage.src =
			"https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg";
		flagImage.style.height = "auto";
		languageText.innerHTML = "Spanish";
	} else {
		currentLanguage = "es";
		flagImage.src =
			"https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg";
		flagImage.style.height = "21px";
		languageText.innerHTML = "English";
	}
	localStorage.setItem("selectedLanguage", currentLanguage);
	changeLanguage(currentLanguage);
});

// Función para cambiar el idioma y la bandera al hacer clic en el botoncito masna!!!.
languageButtonMobile.addEventListener("click", () => {
	if (currentLanguage === "es") {
		currentLanguage = "en";
		flagImageMobile.src =
			"https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg";
		flagImageMobile.style.height = "auto";
		languageTextMobile.innerHTML = "Spanish";
	} else {
		currentLanguage = "es";
		flagImageMobile.src =
			"https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg";
		flagImageMobile.style.height = "21px";
		languageTextMobile.innerHTML = "English";
	}
	localStorage.setItem("selectedLanguage", currentLanguage);
	changeLanguage(currentLanguage);
});

// Establecer la bandera y el idioma al refrescar.
if (currentLanguage === "es") {
	flagImage.src =
		"https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg";
	flagImageMobile.src =
		"https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg";
	languageText.innerHTML = "English";
	languageTextMobile.innerHTML = "English";
} else {
	flagImage.src =
		"https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg";
	flagImageMobile.src =
		"https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg";
	languageText.innerHTML = "Spanish";
	languageTextMobile.innerHTML = "Spanish";
}

const navigation = {
	es: {
		home: "Inicio",
		about: "Quienes Somos",
		missionVision: "Misión y Visión",
		projects: "Proyectos",
		contact: "Contáctenos",
	},
	en: {
		home: "Home",
		about: "About Us",
		missionVision: "Mission and Vision",
		projects: "Projects",
		contact: "Contact Us",
	},
};

const nosotros = {
	es: {
		quienes: "Quiénes <span class='text-primary'>somos</span>",
		descripcion:
			"GREEN DESERT ES UNA ASOCIACIÓN SIN FINES DE LUCRO QUE TRABAJA PARA REFORESTAR<br /> LAS ZONAS DESÉRTICAS O DEPREDADAS SUDAMERICANAS QUE ANTES FUERON BOSQUES.",
		atecedentes_titulo: "Antecedentes",
		atecedentes_desc: `Desde el siglo XIX se presentan pronunciadas
        variaciones climáticas a nivel
        mundial, las cuales se ven reflejadas en cambios de temperatura y patrones
        climáticos que alteran negativamente el medio ambiente. En muchos casos,
        estos
        cambios son provocados por la actividad humana, la cual ha sido la
        principal
        causa de la rotura del equilibrio ecológico.
        Cuando los españoles llegaron a américa en el siglo XV, la costa
        occidental
        del continente, desde Guayaquil en Ecuador, hasta Tamarugal en Chile, era
        verde
        y estaba poblada, por millones de árboles de la especie nativa PROSOPIS PALLIDA,
        comúnmente
        llamada ALGARROBO o TAMARUGO. Posteriormente los españoles introducen la
        cabra
        como agente extraño al hábitat americano y sacrifican a los guanacos que
        daban
        sustento al mantenimiento del bosque. Simultáneamente ejecutaron la tala
        masiva
        de árboles para enviar madera a España y con todo ello se generó la
        desertificación de las zonas costeras de esta región.
        `,
		atecedentes_desc_two: `En la zona amazónica, ocurre un fenómeno parecido que está ocasionando la
        pérdida de extensas zonas boscosas, por la acción incontrolada de la mano
        del hombre.
        Para contrarrestar los efectos de estas críticas situaciones, se ha creado
        la Asociación Green Desert (GD).`,
	},
	en: {
		quienes: "Who <span class='text-primary'>we are</span>",
		descripcion:
			"Green Desert is a non-profit organization <br> dedicated to reforestation of desert and degraded areas in South America, which in the past were forests.",
		atecedentes_titulo: "Background",
		atecedentes_desc: `Since the nineteenth century there have been pronounced
        climatic variations worldwide, which are reflected in temperature changes and patterns
        climate that negatively alter the environment. In many cases,
        these
        changes are caused by human activity, which have been the
        main
        cause of the break in the ecological balance.
        When the Spaniards arrived in America in the 15th century, the coast
        western
        of the continent, from Guayaquil in Ecuador, to Tamarugal in Chile, was
        green
        and was populated by millions of trees of the native species PROSOPIS PALLIDA,
        commonly
        called ALGARROBO or TAMARUGO. Subsequently the Spaniards introduced the
        goat
        as a foreign agent to the American habitat and sacrifice the guanacos that
        gave
        support to the maintenance of the forest. Simultaneously executed the felling
        massive
        of trees to send wood to Spain and with all this the
        desertification of the coastal areas of this region.
        `,
		atecedentes_desc_two: `In the Amazon area, a similar phenomenon occurs that is causing the loss of extensive forest areas, due to the uncontrolled action of the human hand.
        To counteract the effects of these critical situations, the Green Desert Association (GD) has been created.`,
	},
};

const missionVision = {
	es: {
		mision: "Misión",
		mision_desc:
			"Contando con la cooperación nacional e internacional, reforestar las zonas desérticas o depredadas que antes fueron bosques en Sudamérica.",
		vision: "Visión",
		vision_desc:
			"Green Desert consigue reducir la desertificación de las zonas costeras occidentales de Sudamérica y la reforestación de la amazonia.",
	},
	en: {
		mision: "Mission",
		mision_desc:
			"With the cooperation of national and international, reforest desert or depredated areas that were once forests in South America.",
		vision: "Vision",
		vision_desc:
			"Green Desert manages to reduce the desertification of the western coastal areas of South America and the reforestation of the Amazon.",
	},
};

const proyectos = {
	es: {
		proyectos_titulo: `PROYECTOS <span
        class="text-primary">ESPECÍFICOS</span>`,
		escenario_costa: `<h4 style="font-weight: 500;">Escenario de la costa sudamericana</h4>
        <ul>
            <li>
                <p style="margin: 0 0 4px 0; color: #000;">- Proyecto piloto de reforestación de una zona costera desértica del
                    norte del
                    Perú</p>
            </li>
            <li>
                <p style="margin: 0 0 4px 0; color: #000;">- Replicación del proyecto piloto en otras zonas desérticas del
                    Perú</p>
            </li>
            <li>
                <p style="margin: 0 0 4px 0; color: #000;">- Rehabilitación de otras áreas costeras sudamericanas
                    desertificadas.
                </p>
            </li>
        </ul>`,
		escenario_amazonia: `<h4 style="font-weight: 500;">Escenario de la amazonía</h4>
        <ul>
            <li>
                <p style="margin: 0 0 4px 0; color: #000;">- Evaluación histórica de la disminución de las áreas verdes de
                    la Amazonía.</p>
            </li>
            <li>
                <p style="margin: 0 0 4px 0; color: #000;">- Proyectos de control, remediación, reforestación, revegetación
                    y restauración de zonas
                    degradas.</p>
            </li>
        </ul>`,
		piloto_titulo: `DESCRIPCIÓN RESUMIDA DEL PROYECTO <span
        class="text-primary">PILOTO EN LA COSTA</span>`,
		piloto_subtitulo: `<p class="texto_piloto_costa" style="color: #000">
    Para el cumplimiento de su misión, GD ha elaborado un proyecto
    piloto para reforestar una zona costera del Perú con la especie
    denominada “Prosopis Pallida”, comúnmente llamada algarrobo o
    tamarugo.
  </p>
  <div class="">
    <h4 style="font-weight: 500">
      Algarrobo
      <span class="text-primary">El Rey del desierto</span>
    </h4>
    <div class="">
      <p style="margin: 0; color: #000 !important">
        El algarrobo es una planta que brinda diversos beneficios al
        hombre debido a sus múltiples características y propiedades
        siendo materia prima en el desarrollo de muchas actividades
        productivas y económicas como alimento, medicina, abono y
        más.
      </p>
      <br />
      <p style="margin: 0; color: #000 !important">
        Desde tiempos ancestrales, los habitantes del norte del Perú
        consideran la planta del algarrobo como “un regalo de Dios”,
        porque teniendo raíces profundas que extraen agua
        subterránea, no necesita de lluvias para existir. Por ello,
        es un árbol muy importante para minimizar el progreso del
        desierto en las zonas más áridas, toda vez que, además,
        sobrevive utilizando mínimas cantidades de agua.
      </p>
    </div>
  </div>`,
		algarrobo_second_parraf: `<p style="margin: 0; color: #000">
  Para la ejecución del proyecto piloto Green Desert ha logrado el
  apoyo inicial del Instituto Peruano de Catastro (IPDC), el cual ha
  financiado el perfil, el anteproyecto y el proyecto final de
  reforestación de una zona desértica en norte del Perú denominado:
  “Proyecto piloto para reforestación de un área de 200 hectáreas
  con la especie denominada algarrobo (Prosopis Pallida), en el
  caserío Nuevo Cucungará – distrito Catacaos, Provincia de Piura –
  Departamento de Piura”.
</p>
<div style="padding-top: 3rem">
  <p style="margin: 0; color: #000">
    El proyecto visa reforestar un área desértica, donde se pretende
    implementar un pozo tubular para la captación de agua
    subterránea para consumo y riego, así como un reservorio apoyado
    para almacenamiento de agua de riego y una trocha carrozable de
    ingreso al área proyectada.
  </p>
  <br />
  <p style="margin: 0; color: #000">
    Así mismo, se considera una zona de una hectárea de extensión,
    que servirá como vivero para 10,000 plantones, donde se instalará una casa
    prefabricada que servirá como casa habitación para el personal
    de vigilancia, técnicos y obreros encargados de los cultivos y
    riego de la plantación. También, en cada una de estas áreas se
    instalarán los servicios sanitarios con un biodigestor para el
    personal de servicio.
  </p>
</div>`,
	},
	en: {
		proyectos_titulo: `SPECIFIC <span class="text-primary">PROJECTS</span>`,
		escenario_costa: `<h4 style="font-weight: 500;">South American coast scenario</h4>
        <ul>
            <li>
                <p style="margin: 0 0 4px 0; color: #000;">- Pilot reforestation project of a desert coastal area of
                    the north of
                    Peru</p>
            </li>
            <li>
                <p style="margin: 0 0 4px 0; color: #000;">- Replication of the pilot project in other desert areas of
                    Peru</p>
            </li>
            <li>
                <p style="margin: 0 0 4px 0; color: #000;">- Rehabilitation of other South American coastal areas
                    desertified.
                </p>
            </li>
        </ul>`,
		escenario_amazonia: `<h4 style="font-weight: 500;">Amazon scenario</h4>
        <ul>
            <li>
                <p style="margin: 0 0 4px 0; color: #000;">- Historical evaluation of the decrease in green areas of
                    the Amazon.</p>
            </li>
            <li>
                <p style="margin: 0 0 4px 0; color: #000;">- Control, remediation, reforestation, revegetation projects
                    and restoration of areas
                    degraded.</p>
            </li>
        </ul>`,
		piloto_titulo: `BRIEF DESCRIPTION OF THE PROJECT <span class="text-primary">PILOT ON THE COAST</span>`,
		piloto_subtitulo: `<p class="texto_piloto_costa" style="color: #000">
    To fulfill its mission, GD has developed a pilot project to reforest a coastal area in Peru with the species known as "Prosopis Pallida," commonly called carob or tamarugo.
</p>
<div class="">
    <h4 style="font-weight: 500">
        Carob
        <span class="text-primary">The King of the Desert</span>
    </h4>
    <div class="">
        <p style="margin: 0; color: #000 !important">
            The carob is a plant that offers various benefits to humans due to its multiple characteristics and properties, serving as a raw material in the development of many productive and economic activities such as food, medicine, and fertilizer, among others.
        </p>
        <br />
        <p style="margin: 0; color: #000 !important">
            Since ancient times, the inhabitants of northern Peru have regarded the carob plant as "a gift from God" because, with deep roots that extract groundwater, it does not rely on rainfall to survive. Hence, it is a vital tree for mitigating desertification in the most arid areas, as it thrives with minimal water resources.
        </p>
    </div>
</div>
`,
		algarrobo_second_parraf: `<p style="margin: 0; color: #000">
    For the execution of the Green Desert pilot project, initial support has been secured from the Peruvian Institute of Land Registry (IPDC), which has funded the profile, preliminary project, and final reforestation project for a desert area in northern Peru named: "Pilot Project for Reforestation of a 200-hectare area with the species known as carob (Prosopis Pallida) in the village of Nuevo Cucungará - Catacaos district, Piura Province - Piura Department."
</p>
<div style="padding-top: 3rem">
    <p style="margin: 0; color: #000">
        The project aims to reforest a desert area, where a tubular well will be implemented for the extraction of groundwater for consumption and irrigation. Additionally, there will be a supported reservoir for irrigation water storage and a drivable road to access the planned area.
    </p>
    <br />
    <p style="margin: 0; color: #000">
        Furthermore, a one-hectare area will serve as a nursery with 10,000 seedlings, where a prefabricated house will be installed to accommodate surveillance personnel, technicians, and laborers responsible for crop cultivation and irrigation. Additionally, sanitary facilities with a biodigester will be installed in each of these areas for the service personnel.
    </p>
</div>
`,
	},
};

const galeriaMasna = {
	es: {
		titulo: `Nuestra <span class="text-color">Galeria</span>`,
		vertodo: `Ver todo`,
		trabajo: `Trabajo`,
		planeacion: `Planeación`,
	},
	en: {
		titulo: `Our <span class="text-color">Gallery</span>`,
		vertodo: `See all`,
		trabajo: `Work`,
		planeacion: `Planning`,
	},
};

const directivos = {
	es: {
		titulo: `Nuestros <span class="text-color">Directivos</span>`,
		unidos_mejorar: `UNIDOS PARA MEJORAR EL PLANETA.`,
	},
	en: {
		titulo: `Our <span class="text-color">Directors</span>`,
		unidos_mejorar: `GREEN DESERT EMBRACE A DEEP PROMISE WITH THE RESTORATION THE ECOSYSTEMS.`,
	},
};

const formContacto = {
	es: {
		titulo: `Envianos un <span class="text-color">Mensaje</span>`,
		name: `Nombre`,
		email: `Correo Electronico`,
		message: `Mensaje`,
		send: `Enviar Mensaje`,
	},
	en: {
		titulo: `Send us a <span class="text-color">Message</span>`,
		name: `Name`,
		email: `Email`,
		message: `Message`,
		send: `Send Message`,
	},
};

const slides = {
	es: {
		slidetwo: `background-image: url('./images/slider/slider-2-spanish.jpg')`,
		slidethree: `background-image: url('./images/slider/slider-3-spanish.jpg')`,
		slidefour: `images/LOGO_CUADRO_SPANISH.png`,
	},
	en: {
		slidetwo: `background-image: url('./images/slider/slider-2-english.jpg')`,
		slidethree: `background-image: url('./images/slider/slider-3-english.jpg')`,
		slidefour: `images/LOGO_CUADRO_ENGLISH.png`,
	},
};

const gerentes = {
	es: {
		cargo_presidente: `Presidente del Directorio`,
		cargo_gerente: `Gerente General`,
		cargo_logistica: `Gerente de logistica`,
	},
	en: {
		cargo_presidente: `CEO GREEN DESERT`,
		cargo_gerente: `GENERAL MANAGMENT GREEN DESERT`,
		cargo_logistica: `LOGISTIC MANAGMENT`,
	},
};

const footer = {
	es: {
		titulo: `ASOCIACIÓN GREEN DESERT`,
		sobrenosotros: `SOBRE NOSOTROS`,
		textosobrenosotros: `Green Desert, es una organización <br />
        sin fines de lucro <br />
        que abraza un compromiso profundo <br />
        con la restauración de los ecosistemas.`,
		submitbtn: `Enviar`,
		navegacion: `Navegación`,
		navegacion_menu: `<li><a class="page-scroll" href="#page-top">Inicio</a></li>
    <li>
      <a class="page-scroll" href="#nosotros">Quienes Somos</a>
    </li>
    <li>
      <a class="page-scroll" href="#misionvision"
        >Misión y Visión</a
      >
    </li>
    <li>
      <a class="page-scroll" href="#proyectos">Proyectos</a>
    </li>
    <li>
      <a class="page-scroll" href="#contact">Contáctenos</a>
    </li>`,
	},
	en: {
		titulo: `GREEN DESERT ASSOCIATION`,
		sobrenosotros: `ABOUT US`,
		textosobrenosotros: `Green Desert is a non-profit organization <br /> that embraces a deep commitment <br /> with the restoration of ecosystems.`,
		submitbtn: `Submit`,
		navegacion: `Navigation`,
		navegacion_menu: `<li><a class="page-scroll" href="#page-top">Home</a></li>
    <li>
      <a class="page-scroll" href="#nosotros">About Us</a>
    </li>
    <li>
      <a class="page-scroll" href="#misionvision"
        >Mission and Vision</a>
    </li>
    <li>
      <a class="page-scroll" href="#proyectos">Projects</a>
    </li>
    <li>
      <a class="page-scroll" href="#contact">Contact Us</a>
    </li>`,
	},
};

function changeLanguage(language) {
	// tradu. del footer
	const footerTranslation = footer[language];
	if (footerTranslation) {
		document.getElementById("footer_titulo").innerHTML =
			footerTranslation.titulo;
		document.getElementById("footer_sobrenosotros").innerHTML =
			footerTranslation.sobrenosotros;
		document.getElementById("footer_textosobrenosotros").innerHTML =
			footerTranslation.textosobrenosotros;
		document.getElementById("footer_navegacion").innerHTML =
			footerTranslation.navegacion;
		document.getElementById("footer_navegacion_menu").innerHTML =
			footerTranslation.navegacion_menu;
		document.getElementById("submitbtn").innerHTML =
			footerTranslation.submitbtn;
	}

	// tradu. de los sliders pe' causha
	const slidesTranslation = slides[language];
	if (slidesTranslation) {
		document.getElementById("slidetwo").style = slidesTranslation.slidetwo;
		document.getElementById("slidethree").style =
			slidesTranslation.slidethree;
		document.getElementById("slidefour").src = slidesTranslation.slidefour;
	}

	const navTranslation = navigation[language];
	if (navTranslation) {
		// Aplicar las traducciones a los elementos de la página
		document.getElementById("home-link").textContent = navTranslation.home;
		document.getElementById("about-link").textContent =
			navTranslation.about;
		document.getElementById("missionVision-link").textContent =
			navTranslation.missionVision;
		document.getElementById("projects-link").textContent =
			navTranslation.projects;
		document.getElementById("contact-link").textContent =
			navTranslation.contact;
		// home-link-mobile
		document.getElementById("home-link-mobile").textContent =
			navTranslation.home;
		document.getElementById("about-link-mobile").textContent =
			navTranslation.about;
		document.getElementById("missionVision-link-mobile").textContent =
			navTranslation.missionVision;
		document.getElementById("projects-link-mobile").textContent =
			navTranslation.projects;
		document.getElementById("contact-link-mobile").textContent =
			navTranslation.contact;
	}

	// tradu. de quienes somos
	const nosotrosTranslation = nosotros[language];
	if (nosotrosTranslation) {
		document.getElementById("nosotros-quienes").innerHTML =
			nosotrosTranslation.quienes;
		document.getElementById("nosotros-desc").innerHTML =
			nosotrosTranslation.descripcion;
		document.getElementById("nosotros-antecedentes-titulo").innerHTML =
			nosotrosTranslation.atecedentes_titulo;
		document.getElementById("nosotros-antecedentes-desc").innerHTML =
			nosotrosTranslation.atecedentes_desc;
		document.getElementById("atecedentes_desc_two").innerHTML =
			nosotrosTranslation.atecedentes_desc_two;
	}

	// tradu. de mision y vision
	const missionVisionTranslation = missionVision[language];
	if (missionVisionTranslation) {
		document.getElementById("mision-titulo").innerHTML =
			missionVisionTranslation.mision;
		document.getElementById("mision-desc").innerHTML =
			missionVisionTranslation.mision_desc;
		document.getElementById("vision-titulo").innerHTML =
			missionVisionTranslation.vision;
		document.getElementById("vision-desc").innerHTML =
			missionVisionTranslation.vision_desc;
	}

	// tradu. de proyectos
	const proyectosTranslation = proyectos[language];
	if (proyectosTranslation) {
		document.getElementById("proyectos_titulo").innerHTML =
			proyectosTranslation.proyectos_titulo;
		document.getElementById("escenario_costa").innerHTML =
			proyectosTranslation.escenario_costa;
		document.getElementById("escenario_amazonia").innerHTML =
			proyectosTranslation.escenario_amazonia;
		document.getElementById("piloto_titulo").innerHTML =
			proyectosTranslation.piloto_titulo;
		document.getElementById("piloto_subtitulo").innerHTML =
			proyectosTranslation.piloto_subtitulo;
		document.getElementById("algarrobo_second_parraf").innerHTML =
			proyectosTranslation.algarrobo_second_parraf;
	}

	// tradu. de galeria
	// const galeriaMasnaTranslation = galeriaMasna[language];
	// if (galeriaMasnaTranslation) {
	//     document.getElementById('galeria_titulo').innerHTML = galeriaMasnaTranslation.titulo;
	//     document.getElementById('vertodo').innerHTML = galeriaMasnaTranslation.vertodo;
	//     document.getElementById('trabajo').innerHTML = galeriaMasnaTranslation.trabajo;
	//     document.getElementById('planeacion').innerHTML = galeriaMasnaTranslation.planeacion;
	// }

	// tradu. de directivos
	const directivosTranslation = directivos[language];
	if (directivosTranslation) {
		document.getElementById("directivos_titulo").innerHTML =
			directivosTranslation.titulo;
		document.getElementById("unidos_mejorar").textContent =
			directivosTranslation.unidos_mejorar;
	}

	// tradu. de contacto
	const formContactoTranslation = formContacto[language];
	if (formContactoTranslation) {
		document.getElementById("form_contacto_titulo").innerHTML =
			formContactoTranslation.titulo;
		document.getElementById("name").placeholder =
			formContactoTranslation.name;
		document.getElementById("email").placeholder =
			formContactoTranslation.email;
		document.getElementById("message").placeholder =
			formContactoTranslation.message;
		document.getElementById("send_message_form").innerHTML =
			formContactoTranslation.send;
	}

	// tradu. de gerentes
	const gerentesTranslation = gerentes[language];
	if (gerentesTranslation) {
		document.getElementById("cargo_presidente").innerHTML =
			gerentesTranslation.cargo_presidente;
		document.getElementById("cargo_gerente").innerHTML =
			gerentesTranslation.cargo_gerente;
		document.getElementById("cargo_logistica").innerHTML =
			gerentesTranslation.cargo_logistica;
	}
}

changeLanguage(currentLanguage);
