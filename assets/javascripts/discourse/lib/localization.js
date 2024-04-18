class Localization {

  constructor() {
    this.sidebarObserver = null;
    this.widgetObserver = null;
    this.topicsObserver = null;
    this.acceptedLocales = ['ru', 'uk'];
    this.currentLocale = document.querySelector('html')?.lang || 'en';

    console.log(1111, this.currentLocale)


    this.localizedNames = [
      { en: "General", ru: "Общее", uk: "Загальне" },
      { en: "Experiments", ru: "Эксперименты", uk: "Експерименти" },
      { en: "Family and Children", ru: "Семья и дети", uk: "Сім'я та діти" },
      { en: "Everyday Life", ru: "Быт", uk: "Побут" },
      { en: "Health", ru: "Здоровье", uk: "Здоров'я" },
      { en: "History", ru: "История", uk: "Історія" },
      { en: "Public Figures and Brands", ru: "Публичные люди и бренды", uk: "Громадські люди та бренди" },
      { en: "Law", ru: "Закон", uk: "Закон" },
      { en: "Culture and Society", ru: "Культура и общество", uk: "Культура та суспільство" },
      { en: "Science, Progress, Technology", ru: "Наука, прогресс, технологии", uk: "Наука, прогрес, технології" },
      { en: "Religion and Atheism", ru: "Религия и атеизм", uk: "Релігія та атеїзм" },
      { en: "Disasters and Calamities", ru: "Катастрофы и бедствия", uk: "Катастрофи та лиха" },
      { en: "Discrimination and Human Rights", ru: "Дискриминация и права людей", uk: "Дискримінація та права людини" },
      { en: "Love and Sex", ru: "Любовь и секс", uk: "Любов і секс" },
      { en: "Gender and Orientation", ru: "Гендер и ориентация", uk: "Гендер та орієнтація" },
      { en: "Nationalities and Races", ru: "Национальности и расы", uk: "Національності та раси" },
      { en: "Wars and Territorial Conflicts", ru: "Войны и территориальные конфликты", uk: "Війни та територіальні конфлікти" },
      { en: "Politics and States", ru: "Политика и государства", uk: "Політика та держави" },
      { en: "Site Feedback", ru: "Обратная связь", uk: "Зворотний зв'язок" },
    ];

    this.localizedDescriptions = [
      { en: "All the Most Important Information about the HumanTalk Forum and Communication Rules", ru: "Все самое важное о форуме HumanTalk и правилах общения", uk: "Вся найважливіша інформація про форум HumanTalk та правила спілкування" },
      { en: "Participate in experiments – help create a new path to mutual understanding through AI!", ru: "Поучаствуйте в экспериментах – помогите создать новый путь к взаимопониманию с помощью AI!", uk: "Візьміть участь в експериментах – допоможіть створити новий шлях до взаєморозуміння за допомогою AI!" },
      { en: "Discussion of parenting issues, family relationships, and everything related to parenthood", ru: "Обсуждение вопросов воспитания, семейных отношений и всего, что связано с родительством", uk: "Обговорення питань виховання, сімейних відносин та всього, що пов'язано з батьківством" },
      { en: "Advice and discussion of routine: from organizing household chores to moving and settling in a new country", ru: "Советы и обсуждение рутины: от организации домашних дел до переезда и обустройства в новой стране", uk: "Поради та обговорення рутини: від організації домашніх справ до переїзду та облаштування в новій країні" },
      { en: "Everything about maintaining health, disease prevention, and medicine", ru: "Все о поддержании здоровья, профилактике болезней и медицине", uk: "Все про підтримання здоров'я, профілактику захворювань та медицину" },
      { en: "We discuss history, send interesting articles, talk about great books we’ve read, and share our favorite historical figures", ru: "Обсуждаем историю, присылаем интересные статьи, рассказываем о классных книгах, которые прочитали и делимся любимыми историческими личностями", uk: "Ми обговорюємо історію, надсилаємо цікаві статті, розповідаємо про класні книги, які ми прочитали, та ділимося улюбленими історичними особистостями" },
      { en: "Discussion of famous personalities, brands, and their influence on culture", ru: "Обсуждение известных личностей, брендов и их влияния на культуру", uk: "Обговорення відомих особистостей, брендів та їх впливу на культуру" },
      { en: "Issues of law, legal assistance, interpretation of laws, and legal advice", ru: "Вопросы права, правовой помощи, трактовки законов и юридические советы", uk: "Питання права, правової допомоги, трактування законів та юридичні поради" },
      { en: "Discussions on cultural phenomena, trends in society, and social norms", ru: "Дискуссии о культурных явлениях, тенденциях в обществе и социальных нормах", uk: "Дискусії про культурні явища, тенденції у суспільстві та соціальні норми" },
      { en: "Discussion of scientific discoveries and progress, as well as ideas considered to be unscientific", ru: "Обсуждение научных открытий и прогресса, а также представлений, которые считаются антинаучными", uk: "Обговорення наукових відкриттів та прогресу, а також поглядів, які вважаються антинауковими" },
      { en: "Dialogue between believers and atheists, discussion of religious and philosophical questions", ru: "Диалог между верующими и атеистами, обсуждение религиозных и философских вопросов", uk: "Діалог між віруючими та атеїстами, обговорення релігійних та філософських питань" },
      { en: "Causes, consequences, and prevention of natural and man-made disasters, as well as eyewitness accounts", ru: "Причины, последствия и превенция природных и техногенных катастроф, а также свидетельства очевидцев", uk: "Причини, наслідки та превенція природних та техногенних катастроф, а також свідчення очевидців" },
      { en: "Discussion on the protection of human rights, issues of discrimination, and equality", ru: "Обсуждение защиты прав человека, проблем дискриминации и равенства", uk: "Обговорення захисту прав людини, проблем дискримінації та рівності" },
      { en: "Everything about personal relationships, love, intimacy, and sexuality", ru: "Все о личных отношениях, любви, интимности и сексуальности", uk: "Все про особисті стосунки, любов, інтимність та сексуальність" },
      { en: "Issues of gender identity, sexual orientation, and social inclusion", ru: "Вопросы гендерной идентичности, сексуальной ориентации и социальной инклюзии", uk: "Питання гендерної ідентичності, сексуальної орієнтації та соціальної інклюзії" },
      { en: "Discussion on cultural diversity, racial issues, and characteristics of various ethnic groups", ru: "Обсуждение культурного многообразия, расовых вопросов и особенностей различных этносов", uk: "Обговорення культурного розмаїття, расових питань та особливостей різних етносів" },
      { en: "Analysis and discussion of international conflicts, wars, and geopolitical disputes", ru: "Анализ и обсуждение международных конфликтов, войн и геополитических споров", uk: "Аналіз та обговорення міжнародних конфліктів, війн та геополітичних суперечок" },
      { en: "For discussing political ideologies, state governance, and international relations", ru: "Для обсуждения политических идеологий, государственного устройства и международных отношений", uk: "Для обговорення політичних ідеологій, державного устрою та міжнародних відносин" },
      { en: "Complaints and suggestions regarding the organization of communication, forum rules, AI operation, and mediators", ru: "Жалобы и предложения по организации общения, правилам Форума, работе AI и медиаторов", uk: "Скарги та пропозиції щодо організації спілкування, правил Форуму, роботи AI та медіаторів" },
    ];

    this.localizedFooterBlurb = [{
      en: "Creating mutual understanding through AI and human support",
      ru: "Cоздаем взаимопонимание с помощью AI и человеческой поддержки",
      uk: "Створюємо взаєморозуміння за допомогою AI та людської підтримки",
    }]

    this.localizedFooterMadeBy = [{
      en: "Made by Reshim.org",
      ru: "Сделано командой Reshim.org",
      uk: "Зроблено командою Reshim.org",
    }]

    this.localizedFooterLinksBlockTitle = [
      { en: "Resources", ru: "Ресурсы", uk: "Ресурси" },
      { en: "For Experts", ru: "Для экспертов", uk: "Для експертів" },
      { en: "For Mediators", ru: "Для медиаторов", uk: "Для медіаторів" },
    ]

    this.localizedFooterLinksTexts = [
      { en: "Navigation", ru: "Навигация", uk: "Навігація" },
      { en: "Guidelines", ru: "Правила", uk: "Правила" },
      { en: "Registration", ru: "Регистрация", uk: "Реєстрація" },
      { en: "Join the project", ru: "Присоединятейсь к проекту", uk: "Приєднуйтесь до проекту" },
      { en: "Join the mediation team", ru: "Присоединяйтесь к команде медиаторов", uk: "Приєднуйтесь до команди медіаторів" },
    ]
  }

  // initSidebarObserver() {
  //   if (!this.sidebarObserver){
  //     const targetNode = document.querySelector(".sidebar-wrapper");
  //     if (!targetNode){
  //       return;
  //     }
  //     const config = { childList: true };
  //
  //     const callback = (records, observer) => {
  //       for (const record of records) {
  //         if (record.addedNodes.length !== 0){
  //           this.localizeSidebarCategories();
  //           break;
  //         }
  //       }
  //     };
  //
  //     this.sidebarObserver = new MutationObserver(callback);
  //     this.sidebarObserver.observe(targetNode, config);
  //   }
  // }

  initWidgetObserver() {
    if (!this.widgetObserver){
      const targetNode = document.querySelector(".d-header .panel");
      if (!targetNode){
        return;
      }
      const config = { childList: true };

      const callback = (records, observer) => {
        for (const record of records) {
          if (record.addedNodes.length !== 0){
            this.localizeSidebarCategories();
            break;
          }
        }
      };

      this.sidebarObserver = new MutationObserver(callback);
      this.sidebarObserver.observe(targetNode, config);
    }
  }

  initTopicsObserver() {
    if (!this.topicsObserver){
      const targetNode = document.querySelector(".topic-list-body");
      if (!targetNode){
        return;
      }
      const config = { childList: true };

      const callback = (records, observer) => {
        for (const record of records) {
          if (record.addedNodes.length !== 0){
            this.localizeTopicsCategories();
            break;
          }
        }
      };

      this.topicsObserver = new MutationObserver(callback);
      this.topicsObserver.observe(targetNode, config);
    }
  }

  localizeSidebarCategories() {
    if (!this.acceptedLocales.includes(this.currentLocale)){
      return;
    }

    let categories = document.querySelectorAll('#sidebar-section-content-categories .sidebar-section-link-wrapper');
    categories?.forEach(category => {
      let categoryLink = category.querySelector('.sidebar-section-link');
      let categoryTextElement = category.querySelector('.sidebar-section-link-content-text');
      this.changeLinkTitle(categoryLink);
      this.changeElementText(categoryTextElement, this.localizedNames);
    });
  }

  localizeCategoriesList() {
    if (!this.acceptedLocales.includes(this.currentLocale)){
      return;
    }

    let categories = document.querySelectorAll('.category-list tr');
    categories?.forEach(category => {
      let categoryName = category.querySelector('h3 .category-name span');
      let categoryDescription = category.querySelector('.category-description span');
      this.changeElementText(categoryName, this.localizedNames);
      this.changeElementText(categoryDescription, this.localizedDescriptions);
    });

    let latestCategories = document.querySelectorAll('.latest-topic-list-item .badge-category');
    latestCategories?.forEach(category => {
      let categoryName = category.querySelector('.badge-category__name');
      this.changeLinkTitle(category);
      this.changeElementText(categoryName, this.localizedNames);
    });
  }

  localizeTopicsCategories() {
    if (!this.acceptedLocales.includes(this.currentLocale)){
      return;
    }

    let categories = document.querySelectorAll('.topic-list .badge-category');
    categories?.forEach(category => {
      let categoryName = category.querySelector('.badge-category__name');
      this.changeLinkTitle(category);
      this.changeElementText(categoryName, this.localizedNames);
    });
  }

  localizeShowTopicCategories() {
    if (!this.acceptedLocales.includes(this.currentLocale)){
      return;
    }

    let categories = document.querySelectorAll('#topic-title .badge-category');
    categories?.forEach(category => {
      let categoryName = category.querySelector('.badge-category__name');
      this.changeLinkTitle(category);
      this.changeElementText(categoryName, this.localizedNames);
    });
  }


  changeElementText(element, translations){
    if (!element){
      return;
    }
    const currentElementText = element.textContent.trim();
    const translation = translations.find((translationItem) => translationItem.en === currentElementText);

    if (!translation){
      return;
    }

    element.textContent = translation[this.currentLocale];
  }

  changeLinkTitle(element){
    if (!element){
      return;
    }
    const currentElementTitle = element.getAttribute('title')?.trim();
    const translation = this.localizedDescriptions.find((translationItem) => translationItem.en === currentElementTitle);

    if (!translation){
      return;
    }

    element.setAttribute('title', translation[this.currentLocale]);
  }

  localizeFooter() {
    if (!this.acceptedLocales.includes(this.currentLocale)){
      return;
    }

    setTimeout(() => {
      this.localizeFooterBlurb()
      this.localizeFooterMadeBy()
      this.localizeFooterLinksBlockTitle()
      this.localizeFooterLinksTexts()
    }, 100)

  }

  localizeFooterBlurb() {
    const footerBlurb = document.querySelector('.below-footer-outlet .first-box .blurb')
    console.log(222, footerBlurb)
    if (footerBlurb){
      this.changeElementText(footerBlurb, this.localizedFooterBlurb)
    }
  }

  localizeFooterMadeBy() {
    const footerMadeBy = document.querySelector('.below-footer-outlet .third-box .small-link')
    console.log(333, footerMadeBy)
    if (footerMadeBy){
      this.changeElementText(footerMadeBy, this.localizedFooterMadeBy)
    }
  }

  localizeFooterLinksBlockTitle() {
    const blockTitles = document.querySelectorAll('.below-footer-outlet .second-box .list > span')
    console.log(444, blockTitles)
    blockTitles.forEach(title => {
      this.changeElementText(title, this.localizedFooterLinksBlockTitle)
    })
  }

  localizeFooterLinksTexts() {
    const links = document.querySelectorAll('.below-footer-outlet .second-box .footer-section-link')
    console.log(555, links)
    links.forEach(link => {
      this.changeElementText(link, this.localizedFooterLinksTexts)
    })
  }
}

export default Localization;
