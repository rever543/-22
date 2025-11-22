let языки = {
    'Python': {
        guide: '<p>О языке:</p>' +
               '<p>Python - один из самых популярных языков программирования.</p>' +
               '<p>Создан в 1991 году.</p>' +
               '<p>Очень простой синтаксис, читается почти как обычный текст.</p>' +
               '<p>Отлично подходит для начинающих.</p>' +
               '<p>Где используется:</p>' +
               '<p>• Веб-разработка (Django, Flask)<br>' +
               '• Наука о данных и машинное обучение<br>' +
               '• Автоматизация задач<br>' +
               '• Создание игр (Pygame)<br>' +
               '• Разработка приложений</p>' +
               '<p>С чего начать:</p>' +
               '<p>1. Установите Python с официального сайта python.org<br>' +
               '2. Изучите основы: переменные, циклы, функции, списки<br>' +
               '3. Попробуйте написать простые программы (калькулятор, игры)<br>' +
               '4. Изучите библиотеки: NumPy, Pandas для работы с данными<br>' +
               '5. Попробуйте создать веб-приложение на Flask</p>' +
               '<p>Сложность: Легкая</p>',
        links: [
            {name: 'Официальная документация', url: 'https://www.python.org/doc/'},
            {name: 'Python Tutor (визуализация кода)', url: 'https://pythontutor.com/'},
            {name: 'Stepik - курс Python', url: 'https://stepik.org/course/67'},
            {name: 'YouTube - каналы по Python', url: 'https://www.youtube.com/results?search_query=python+уроки'}
        ]
    },
    'JavaScript': {
        guide: '<p>О языке:</p>' +
               '<p>JavaScript - язык для веб-разработки.</p>' +
               '<p>Создан в 1995 году.</p>' +
               '<p>Работает во всех браузерах.</p>' +
               '<p>Без него современные сайты были бы статичными и скучными.</p>' +
               '<p>Один из самых востребованных языков.</p>' +
               '<p>Где используется:</p>' +
               '<p>• Фронтенд разработка (интерактивные сайты)<br>' +
               '• Бэкенд разработка (Node.js)<br>' +
               '• Мобильные приложения (React Native)<br>' +
               '• Десктопные приложения (Electron)<br>' +
               '• Игры в браузере</p>' +
               '<p>С чего начать:</p>' +
               '<p>1. Откройте консоль браузера (F12) и попробуйте написать код<br>' +
               '2. Изучите основы: переменные (let, const), функции, объекты, массивы<br>' +
               '3. Попробуйте изменить элементы на странице через DOM<br>' +
               '4. Изучите события (клики, наведение мыши)<br>' +
               '5. Переходите к фреймворкам: React, Vue, Angular</p>' +
               '<p>Сложность: Средняя</p>',
        links: [
            {name: 'MDN Web Docs', url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript'},
            {name: 'JavaScript.info', url: 'https://learn.javascript.ru/'},
            {name: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/'},
            {name: 'Codecademy - JavaScript', url: 'https://www.codecademy.com/learn/introduction-to-javascript'}
        ]
    },
    'Java': {
        guide: '<p>О языке:</p>' +
               '<p>Java - мощный объектно-ориентированный язык.</p>' +
               '<p>Создан в 1995 году компанией Sun Microsystems.</p>' +
               '<p>Девиз: "Напиши один раз, запускай везде".</p>' +
               '<p>Очень популярен в корпоративной разработке.</p>' +
               '<p>Где используется:</p>' +
               '<p>• Корпоративные приложения<br>' +
               '• Android разработка<br>' +
               '• Веб-приложения (Spring Framework)<br>' +
               '• Игры (Minecraft написан на Java!)<br>' +
               '• Большие системы и серверы</p>' +
               '<p>С чего начать:</p>' +
               '<p>1. Установите JDK (Java Development Kit) с oracle.com<br>' +
               '2. Настройте среду разработки (IntelliJ IDEA - лучший выбор)<br>' +
               '3. Изучите основы: классы, объекты, наследование, полиморфизм<br>' +
               '4. Практикуйтесь на простых задачах (калькулятор, консольные игры)<br>' +
               '5. Изучите коллекции (ArrayList, HashMap) и многопоточность<br>' +
               '6. Попробуйте создать простое Android приложение</p>' +
               '<p>Сложность: Средняя</p>',
        links: [
            {name: 'Официальная документация Oracle', url: 'https://docs.oracle.com/javase/tutorial/'},
            {name: 'JavaRush - интерактивный курс', url: 'https://javarush.ru/'},
            {name: 'Stepik - курс Java', url: 'https://stepik.org/course/187'},
            {name: 'YouTube - Java для начинающих', url: 'https://www.youtube.com/results?search_query=java+уроки+для+начинающих'}
        ]
    },
    'C++': {
        guide: '<p>О языке:</p>' +
               '<p>C++ - быстрый и мощный язык.</p>' +
               '<p>Создан в 1983 году как расширение языка C.</p>' +
               '<p>Дает полный контроль над памятью и производительностью.</p>' +
               '<p>Сложный, но очень мощный.</p>' +
               '<p>Где используется:</p>' +
               '<p>• Системное программирование (операционные системы)<br>' +
               '• Игры (Unreal Engine, многие AAA игры)<br>' +
               '• Высокопроизводительные приложения<br>' +
               '• Встраиваемые системы<br>' +
               '• Научные вычисления</p>' +
               '<p>С чего начать:</p>' +
               '<p>1. Установите компилятор (GCC для Linux/Mac, Visual Studio для Windows)<br>' +
               '2. Изучите основы: типы данных, переменные, циклы, функции<br>' +
               '3. Разберитесь с памятью и указателями (это важно!)<br>' +
               '4. Изучите ООП в C++: классы, наследование, полиморфизм<br>' +
               '5. Практикуйтесь на алгоритмах и структурах данных<br>' +
               '6. Изучите STL (Standard Template Library)</p>' +
               '<p>Сложность: Высокая</p>',
        links: [
            {name: 'CppReference - документация', url: 'https://ru.cppreference.com/'},
            {name: 'LearnCpp.com', url: 'https://www.learncpp.com/'},
            {name: 'Stepik - курс C++', url: 'https://stepik.org/course/363'},
            {name: 'YouTube - C++ уроки', url: 'https://www.youtube.com/results?search_query=c%2B%2B+уроки'}
        ]
    },
    'C#': {
        guide: '<p>О языке:</p>' +
               '<p>C# (читается "си-шарп") - язык от Microsoft.</p>' +
               '<p>Создан в 2000 году.</p>' +
               '<p>Похож на Java, но с улучшениями.</p>' +
               '<p>Отлично интегрирован с платформой .NET и Windows.</p>' +
               '<p>Где используется:</p>' +
               '<p>• Windows приложения (десктопные программы)<br>' +
               '• Игры на Unity (большинство игр в Unity)<br>' +
               '• Веб-приложения (ASP.NET)<br>' +
               '• Мобильные приложения (Xamarin)<br>' +
               '• Корпоративное ПО</p>' +
               '<p>С чего начать:</p>' +
               '<p>1. Установите Visual Studio Community (бесплатно) с сайта Microsoft<br>' +
               '2. Изучите основы C# и .NET: переменные, классы, методы<br>' +
               '3. Попробуйте создать консольное приложение (Hello World)<br>' +
               '4. Изучите Windows Forms или WPF для создания оконных приложений<br>' +
               '5. Для игр - скачайте Unity и изучите C# для игровой разработки<br>' +
               '6. Попробуйте создать простую игру</p>' +
               '<p>Сложность: Средняя</p>',
        links: [
            {name: 'Microsoft Learn - C#', url: 'https://learn.microsoft.com/ru-ru/dotnet/csharp/'},
            {name: 'Metanit - C# и .NET', url: 'https://metanit.com/sharp/'},
            {name: 'Stepik - курс C#', url: 'https://stepik.org/course/574'},
            {name: 'YouTube - C# для начинающих', url: 'https://www.youtube.com/results?search_query=c%23+уроки'}
        ]
    },
    'PHP': {
        guide: '<p>О языке:</p>' +
               '<p>PHP - язык для веб-разработки.</p>' +
               '<p>Создан в 1995 году.</p>' +
               '<p>Очень популярен для создания сайтов и веб-приложений.</p>' +
               '<p>Работает на сервере, обрабатывает запросы от браузера.</p>' +
               '<p>Где используется:</p>' +
               '<p>• Веб-сайты и веб-приложения<br>' +
               '• Серверная часть сайтов (бэкенд)<br>' +
               '• CMS системы (WordPress, Drupal)<br>' +
               '• Интернет-магазины<br>' +
               '• Социальные сети и форумы</p>' +
               '<p>С чего начать:</p>' +
               '<p>1. Установите локальный сервер (XAMPP для Windows или OpenServer)<br>' +
               '2. Изучите основы PHP: переменные, массивы, функции, циклы<br>' +
               '3. Работайте с формами (GET, POST запросы)<br>' +
               '4. Изучите MySQL для работы с базами данных<br>' +
               '5. Попробуйте создать простой сайт с регистрацией<br>' +
               '6. Изучите фреймворки: Laravel, Symfony</p>' +
               '<p>Сложность: Средняя</p>',
        links: [
            {name: 'PHP.net - официальная документация', url: 'https://www.php.net/manual/ru/'},
            {name: 'PHP The Right Way', url: 'https://www.phptherightway.com/'},
            {name: 'Metanit - PHP', url: 'https://metanit.com/php/'},
            {name: 'YouTube - PHP уроки', url: 'https://www.youtube.com/results?search_query=php+уроки'}
        ]
    },
    'Ruby': {
        guide: '<p>О языке:</p>' +
               '<p>Ruby - элегантный и красивый язык.</p>' +
               '<p>Создан в 1995 году японским программистом.</p>' +
               '<p>Девиз: "Радость программирования".</p>' +
               '<p>Очень простой и понятный синтаксис.</p>' +
               '<p>Известен благодаря фреймворку Ruby on Rails.</p>' +
               '<p>Где используется:</p>' +
               '<p>• Веб-разработка (Ruby on Rails)<br>' +
               '• Автоматизация задач<br>' +
               '• Скрипты для системного администрирования<br>' +
               '• Прототипирование приложений<br>' +
               '• Стартапы (Twitter изначально был на Ruby)</p>' +
               '<p>С чего начать:</p>' +
               '<p>1. Установите Ruby с официального сайта ruby-lang.org<br>' +
               '2. Изучите синтаксис Ruby (очень простой и читаемый!)<br>' +
               '3. Попробуйте интерактивную консоль IRB для экспериментов<br>' +
               '4. Изучите Ruby on Rails для веб-разработки<br>' +
               '5. Создайте свой первый веб-сайт на Rails<br>' +
               '6. Изучите гемы (библиотеки Ruby)</p>' +
               '<p>Сложность: Легкая</p>',
        links: [
            {name: 'Ruby-lang.org - документация', url: 'https://www.ruby-lang.org/ru/documentation/'},
            {name: 'Ruby on Rails Guides', url: 'https://guides.rubyonrails.org/'},
            {name: 'RubyMonk - интерактивное обучение', url: 'https://rubymonk.com/'},
            {name: 'YouTube - Ruby уроки', url: 'https://www.youtube.com/results?search_query=ruby+уроки'}
        ]
    },
    'Go': {
        guide: '<p>О языке:</p>' +
               '<p>Go (Golang) - современный язык от Google.</p>' +
               '<p>Создан в 2009 году.</p>' +
               '<p>Простой синтаксис, быстрая компиляция, отличная поддержка многопоточности.</p>' +
               '<p>Набирает популярность в бэкенд разработке.</p>' +
               '<p>Где используется:</p>' +
               '<p>• Серверная разработка (бэкенд)<br>' +
               '• Микросервисы<br>' +
               '• Облачные приложения<br>' +
               '• DevOps инструменты (Docker написан на Go!)<br>' +
               '• Высоконагруженные системы</p>' +
               '<p>С чего начать:</p>' +
               '<p>1. Установите Go с официального сайта go.dev<br>' +
               '2. Изучите основы: пакеты, функции, структуры, интерфейсы<br>' +
               '3. Разберитесь с горутинами (легкая многопоточность)<br>' +
               '4. Изучите работу с каналами для обмена данными<br>' +
               '5. Создайте простой веб-сервер<br>' +
               '6. Попробуйте создать REST API</p>' +
               '<p>Сложность: Средняя</p>',
        links: [
            {name: 'Go.dev - официальная документация', url: 'https://go.dev/doc/'},
            {name: 'A Tour of Go - интерактивный курс', url: 'https://go.dev/tour/ru/welcome/1'},
            {name: 'Go by Example', url: 'https://gobyexample.com/'},
            {name: 'YouTube - Go уроки', url: 'https://www.youtube.com/results?search_query=golang+уроки'}
        ]
    }
};

function showGuide(languageName) {
    let guide = языки[languageName];
    if (!guide) return;
    
    document.getElementById('modal-title').textContent = languageName;
    document.getElementById('modal-guide').innerHTML = guide.guide;
    
    let linksHtml = '<p>Полезные ссылки для изучения:</p><ul>';
    guide.links.forEach(function(link) {
        linksHtml += '<li><a href="' + link.url + '" target="_blank">' + link.name + '</a></li>';
    });
    linksHtml += '</ul>';
    document.getElementById('modal-links').innerHTML = linksHtml;
    
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function loadFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let list = document.getElementById('favorites-list');
    list.innerHTML = '';
    
    if (favorites.length === 0) {
        list.innerHTML = '<p style="color: #999;">Пока нет избранных языков</p>';
        return;
    }
    
    favorites.forEach(function(item) {
        if (!item || !item.name) return;
        
        let div = document.createElement('div');
        div.className = 'a2 a3';
        div.style.cursor = 'pointer';
        div.onclick = function() { showGuide(item.name); };
        
        let nameDiv = document.createElement('div');
        nameDiv.className = 'a4';
        nameDiv.textContent = item.name;
        
        let descDiv = document.createElement('div');
        descDiv.className = 'a5';
        descDiv.textContent = item.description || '';
        
        let btn = document.createElement('button');
        btn.className = 'a6 a7';
        btn.textContent = 'Удалить из избранного';
        btn.onclick = function(e) { e.stopPropagation(); removeFromFavorites(item.name); };
        
        div.appendChild(nameDiv);
        div.appendChild(descDiv);
        div.appendChild(btn);
        list.appendChild(div);
    });
}

function addToFavorites(name, description) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (!favorites.find(function(item) { return item && item.name === name; })) {
        favorites.push({name: name, description: description});
        localStorage.setItem('favorites', JSON.stringify(favorites));
        loadFavorites();
    }
}

function removeFromFavorites(name) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites = favorites.filter(function(item) { return item && item.name !== name; });
    localStorage.setItem('favorites', JSON.stringify(favorites));
    loadFavorites();
}

loadFavorites();

