> 1) Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки
зрения 

`Пользователя`:  В первую очередь как мне кажется пользователь ощутит некачественную верстку если он пользуется старыми браузерами.  Если верстальщик не учел особенности разных браузеров, а разрабатывал только для одного конкретного, то это будет заметно. Во вторых - адаптивность. Просматривать на телефоне сайт, который верстался для компьютера не очень удобно.  Так же я считаю что пользователь обратит внимание на удобство пользования сайтом, его визуальную составляющую(ховеры, фокусы, анимации), и если это все не проработано как следует, или сделано криво, то это может не понравиться посетителю сайта.  Ну и наконец это время загрузки сайта. Если сайт долго грузиться, то пользователю будет неприятно на нём находиться. Верстальщик должен позаботиться об этом. В частности - оптимизировать изображения, скрипты и.т.д. 

`Менеджера`: Если верстка  выполнена строго по ТЗ и в установленные сроки, то мне кажеться менеджер будет доволен. Ну и главное для менеджера чтобы заказчик был доволен :)

`Дизайнера`: Я думаю что с точки зрения дизайнера плохая верстка та, которая выполнена не строго по созданному им макету. Не все идеи дизайнера можно воплотить в жизнь, и иногда приходиться изменять некоторые моменты.  Но ведь не все дизайнеры знают хотя бы основы верстки. Поэтому как мне кажеться важна работа в команде, чтобы когда возникали недопонимания, можно было бы из разрешить.

`Верстальщика`: Во первых в хорошей верстке важна семантика, нужно внимательно разобрать макет, для каждого элемента подобрать соответсвующий тег, будь то текстовый блок, навигация или список. Если же вся верстка построена на div'ах, то это плохая верстка. Во вторых очень важна доступность. Например сайтом могут пользоваться незрячие люди которые пользуються скринридером. Иногда могут не работать скрипты. В хорошей верстке все это учтено(Есть хороший термин, который подходит для таких случаев - "постепенная деградация" или возможность продолжать работу в случае отказа некоторых компонентов). В третьих - кроссбраузерность. Сайт должен одинаково выглядеть в разных браузерах. Немаловажный фактор это адаптивность, если конечно она предусмотрена. Можно бесконечно продолжать искать отличия хорошей верстки от плохой, но я думаю этих основных примером хватит.

`Программиста`: Если верстальщик хорошо знает свою работу, то он может облегчить работу программисту. Например при верстке формы верстальщик, используя возможности html5 может добавить необходимые аттрибуты тегам, тем самым организовав простую валидацию формы по средствам html(в частности я говорю про теги required, pattern, disabled и.т.д). Так же если верстальщик знает как использовать тег template он может "облегчить" жизнь программисту. Так же на мой взгляд если верстка хорошая, то программисту не надо ничего исправлять в ней.

<hr>

> 2) Опишите основные особенности верстки крупных многостраничных сайтов,
дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике. 

При верстке многостраничных сайтов необходимо организовать код таким образом, чтобы в случае изменения дизайна можно было бы перемещать, удалять блоки кода без ущерба. В этом как мне кажется помогает методология БЭМ. Её я использую в своей работе. Определив 'блок', его можно будет переиспользовать на других страницах этого сайта, его можно перемещать и удалять.

<hr>

> 3) Опишите основные особенности верстки сайтов, которые должны одинаково
хорошо отображаться как на любом современном компьютере, так и на
смартфонах и планшетах под управлением iOS и Android. Расскажите о своем
опыте верстки подобных сайтов: какие инструменты и технологии вы применяли,
как проверяли результат на различных устройствах, какие именно устройства
требовалось поддерживать. 

В первую очередь еще на этапе разработки необходимо проверять свою верстку в разных браузерах. Для проверки верски на мобильных устройствах желательно использовать сами устройства, но если нет такой возможности, можно использовать и эмуляторы. Так же в инструментах разработчика можно проверить как будет выглядеть верстка на различных устройствах. Там же можно сэмулировать процесс загрузки сайта при слабом интернет соединении, что являеться очень важным для мобильных устройств. Необходимо расставлять префиксы, так же проверять поддержку css правил дял разных браузеров( в этом помогает сервис caniuse). Так же часто встречаются ретиновые дисплеи, например в продукции от apple. Изображения для таких дисплеев должны быть в два раза больше( но это уже ньюансы адаптивности). В своей работе я пользуюсь сборщиком gulp, который сам расставляет префиксы, и делает еще много полезного. 

<hr>

> 4) Расскажите, какие инструменты помогают вам экономить время в процессе
написания, проверки и отладки кода. 


В процессе написания кода мне помогает экономить время плагин emmet. Так же я пользуюсь плагином prettyfier, который организовывает код так, как мне удобно. Линтер следит за правильностью написания кода. Препроцессор SASS, тоже помогает экономить время на написании кода. Так же я использую сборщик gulp. В браузере я пользуюсь  расширениями, в частности pixel perfect, очень полезный инструмент для верстальщика. Есть несколько плагинов для шрифтов, цвета. Они очень помогают. В процессе отладки использую браузерные инструменты разработчика. Для проверки валидности html, есть валидатор. Так же я часто использую сайты, который помогают в написании анимации, теней, построении фигур. 

<hr>

> 5) Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в
IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия?
Сталкивались ли вы с подобными проблемами на практике? 

Честно сказать с таким я не сталкивался, но думаю что в данном случае я для начала бы определил, какой именно элемент отображаеться по разному в этих браузерах. Без наличия исходников, мне помогут инструменты разработчика. Там я проанализирую верстку, стили и внесу правки. В крайнем случае можно 'вытащить' верстку и стили из инструментов разработчика, исправить ошибки и протестировать в этих браузерах.

<hr>

> 6) Дизайнер отдал вам макет, в котором не показано, как должны выглядеть
интерактивные элементы при наведении мыши. Ваши действия?

Не думаю что дизайнер оставил решение этого вопроса для меня, поэтому пологаю что он просто забыл добавить стили для интерактивных элементов. В любом случае, я постараюсь связаться с ним и решить этот вопрос. Если же это не возможно, то постараюсь подобрать максимально подходящие стили для этих элементов самостоятельно, в меру своих возможностей.  Добавлю что мне нравиться работать с интерактивностью, делать сайт 'живым', это одна из прелестей этой работы.

<hr>

> 7) Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSS-
верстка или и то, и другое? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?


Для своего развития я использую все возможности интернета: прохожу курсы, смотрю обучающие видео, читаю книги. Я неплохо знаю английский язык, поэтому часто использую материалы на иностраном языке. Всегда слежу за современными тендециями и напрявлении во фронтенде. Слушаю подкасты и смотрю выступления на конференциях. В плане развития в данный момент мне интерестно все вместе и html/css и js. Но я бы сказал что у меня есть большее желание развиваться в сфере js программирования. Что касаеться других областей знаний, которые мне интерестны, и которые не относятся к работе, то пожалуй я скажу что мне нравиться изучать историю. 

<hr>

> 8) Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами. 

О себе я рассказал в резюме, а мои работы находяться в этом аккаунте гитхаба.

<hr>


[Практическое задание](https://qudenaza.github.io/Cat/)
