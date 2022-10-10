//некоторые фарианты обращения к элекментам
// $('.icons div img+h4');
// $('img[height=150');
// $('img[src^=img/]');
// $('img[src$=.png]');
// $('a[href*=#]');
// $('.icons > div'); // обращение к дочерним блокам
// $('div');
// $('.icons');
// $('#icons');
// $('.icons div');
// // выборка с помощью фильтрации (помним, что счёт начинается с 0)
// $('menu li:even'); // по чётным
// $('menu li:odd'); // по нечётным
// $('img:not(.logo img)'); // выборка всех картинок, кроме картинок с классом logo
// $('li:has(a)'); // выборка всех тегов li с тегом a внутри
// $('p:contains(client)'); // выборка всех p со словом client
// $('li:first'); // выбор первого элемента
// $('li:last'); // выбор последнего элемента
// $('div:hidden'); // выбор всех скрытых блоков
// $('div:visibility'); // выбор всех видимых блоков

// чтобы весь код загружался только после подключения jQuery нужно код писать в следующей функции
// $(document).ready(function() {
//весь код, если скрипты подключить в head, а не в конце документа
// });
// тот же самый вариант, только короче
// $(function() {
//     //весь код, если скрипты подключить в head, а не в конце документа
//     $('.mainText p').text('Новый текст 2'); //меняет текст к определенному элементу
//     $('.mainText p').css({
//         'cursor': 'pointer'
//     });
//     $('.mainText p').click(function() {
//         $('.mainText p').hide(2000).show(2000); //
//     })

// });

// $(function() {
//     var txtP = $('.mainText p'); // объект храниться в переменной
//     txtP.hide(1000).show(1000); // вызов действия через переменную
// })

// $(function() {
//     $('.mainText p').css({
//         'cursor': 'pointer'
//     });
//     $('.mainText p').click(function() {
//         $('.mainText p').hide().text('Новый текст 2').show(1000); //смена текста по клику, запись в виде цепной функции
//     })
// });

// $(function() {
//     $('.icons div p').text('Обновлёный текст'); // выделение несколько элементов в массив
// });

// $(function() {
//     // var w = $('.mainText').width(500); // определяет ширину объекта в пикселях и может менять размер блочного элемента
//     // var h = $('.mainText').height(500); // определяет высоту блока
// });

// $(function() { // функция вывода высоты и ширины элекмента в зависимости от выбранного класса
//     function WidthAndHeight(element) { // имя класса без точки (т.е. просто btn) храниться в переменной element (имя может быть и другое)
//         var className = "." + element; // в переменной className храниться запись о классе .btn
//         var w = $(className).width(); // в переменной w храниться ширина объекта
//         var h = $(className).height(); // в переменной h храниться высота объекта
//         $('.mainText p').text('Ширина:' + w + '; Высота' + h); // в абзаце выводиться ширина и высота выбранного класса
//     }
//     WidthAndHeight('btn'); //выбираем класс элемента, который хотим узнать
// });

// $(function() {
//     $('.mainText p').html('<h2>Вместо абзаца заголовок</h2>'); // замена на другой тег
// });

// $(function() {
//     $('.mainText').fadeOut(2000).fadeIn(3000); // исчезание и появление блока
// });

// $(function() {
//     function changeColor() {
//         $('menu li a').css({ 'color': 'red' })
//     }
//     $('.mainText').fadeTo(4000, 0, changeColor).fadeTo(4000, 1); // fadeTo меняет прозрачность блока за 4 секунды, а changeColor это вызов ранее написанной функции после выполенения первой части кода
// });

// $(function() {
//     $('.mainText').slideUp(1000).slideDown(1000); // свернуть и развернуть элемент 
// });

// $(function() {
//     $('.logo img').attr('title', 'Подсказка'); // добавляет атрибут title
//     $('.logo img').attr('src', 'img/icon1.png'); //меняет путь src
//     $('.logo img').removeAttr('src'); // удаляет src
// });

// $(function() {
//     $('nav menu').addClass('border').removeClass('border'); // добавили класс border и сразу его удалили
// });

// $(function() {
//     $('nav menu li a').css({ //добавление css свойств
//         'font-size': '20px',
//         'color': '#ff9900'
//     });
// });

// $(function() {
//     $('nav menu li a').animate({ //добавление анимации
//         'font-size': '30px'
//     }, 3000, function() {
//         //код
//     });
// });

// $(function() {
//     $('.mainText').before('<p class="par">Новый абзац 1</p>'); // добавляет абзац перед блоком .mainText, добавление класса работает
//     $('.mainText').after('<p class="par">Новый абзац 2</p>'); // добавляет абзац после блоком .mainText
//     $('.mainText').append('<p>Новый абзац 3</p>'); // добавляет абзац после текста внутри блока .mainText
//     $('.mainText').prepend('<p>Новый абзац 4</p>'); // добавляет абзац перед перед текстом в блоке .mainText
// });

// $(function() {
//     $('.icons img').each(function() { // each означает выборка каждого элемента
//         if ($(this).attr('src') == 'img/icon1.png') { // выборка конкретного элекмента из всех, позволяет производить выборку элемента по определённому атрибуту, css-свойству и т.д.
//             $(this).fadeOut(1000);
//             $(this).fadeIn(1000);
//         }
//     })
// });

// $(function() {
//     alert($('li').length); // выводит количество li
//     for (var i = 0; i < $('li').length; i++) { //.length позволяет определять количсетво тех или иных элементов, за частую удобнее использовать each this
//         // код
//     }
// });

// $(function() {
//     var recive = $('.recive').clone(); // скопирован в переменную блок recive
//     $('body').append(recive); // recive выведен в конце блока body

//     var mainTxt = $('.mainText').remove(); // в переменную mainTxt сохранён блок .mainText и с помощью .remove он удалён со страницы
//     $('nav').after(mainTxt).css('background', 'black'); // через переменную вернули после тега nav (вызывать эту переменную можно множество раз) 
//     // добавленный css стилль применяется к nav
// });

// $(function() {
//     $('img, a').css('background', 'black'); // выборка по тегам img и a
//     $('img[alt]').css('background', 'white'); // выборка среди img по атрибуту наличию атрибута alt
// });


// $(function() { // построение события на jQuery
//     $('.arrowDown').mouseover(function() { // выбор элемента -> вызов события mouseover или другого и вызов функции по событию
//         $('.arrowDown').css({ // реакция на собитие -> функция меняет цвет и фон
//             'background': 'black',
//             'color': 'white'
//         })
//     });
//     $('.arrowDown').mouseleave(function() { // выбор элемента -> вызов события mouseleave или другого и вызов функции по событию
//         $('.arrowDown').css({ // реакция на собитие -> функиця меняет цвет и фон
//             'background': 'none',
//             'color': 'orange'
//         })
//     })
// });

// $(function() {
//     var link = $('menu li a'); // сохранили в переменную link тег a
//     link.hover(function() { // вызов события для переменной через hover
//             $(this).addClass('border'); // выполнение первой функции при наведении (заменяет mouseover)
//         },
//         function() {
//             $(this).removeClass('border'); // выполнение второй функции после наведения (заменяет mouseleave)
//         });
// });

// $(function() {
//     $('.mainText').click(function(el) {
//         alert(el.screenX + " " + el.screenY); // выводит координаты в пикселях, где был совершён клик от края монитора
//         alert(el.pageX + " " + el.pageY); // выводит координаты в пикселях, где был совершён клик от края окна браузера
//         alert(el.altKey); // выводит была ли зажата клавиша alt при клике, если да, то true, если нет то false
//         alert(el.ctrlKey); // выводит была ли зажата клавиша ctrl при клике, если да, то true, если нет то false
//         alert(el.shiftKey); // выводит была ли зажата клавиша shift при клике, если да, то true, если нет то false
//         alert(el.target); // выводит тип объекта по которому был совершён клик div, span и т.д.
//     })
// });

// $(function() {
//     $('.btn, .arrowDown').click(function(e) {
//         var answer = confirm('Вы хотите выполнить действие?');
//         if (!answer) { // условие, что если ответить да, то функция выполняется, а если отмена, то не выолняется
//             e.preventDefault(); // отменяет стандартное выполнение функции
//         }
//     })
// });


// $(function formElem() {
//     // $(':checkbox').fadeOut(1000);
//     //  $(':radio').fadeOut(1000);
//     // $(':submit').fadeOut(1000);
//     // $(':reset').fadeOut(1000);
//     // $(':file').fadeOut(1000);
//     // $(':button').fadeOut(1000);
//     // $(':text').fadeOut(1000);
//     // $(':password').fadeOut(1000);
//     // $(':input').fadeOut(1000);
//     // $('.form1 :input').fadeOut(1000);
//     // $('.form1 :checkbox:checked').fadeOut(1000);
//     // $('.form1 :selected').remove();
// });

// $(function commentsArea() {
//     $('.comm').click(function(el) { //реализовал подобие комментариев, но с багом повторения после 3 отправки
//         var commenT = $('textarea').val();
//         var txtArea = $('.comments p').clone();
//         $('.comments p').text(commenT).append(txtArea).removeAttr('id');
//         $('#txtNo').text('');
//         $('textarea').val('');
//         el.preventDefault();
//     })

// });

// $(function check() {
//     $('#sent').click(function(e) { //реализован вывод значений checkbox
//         var value = $(':checkbox').each(function() {
//             var value = $(this).val();
//             alert(value);
//         });
//         e.preventDefault();
//     })

// });

// $(function commentsInput() {
//     $('.comm').click(function(el) { //реализовал отправку сообщения из input в комментарии, но с багом повторения после 3 отправки
//         var commentIn1 = $('.text1').val();
//         var commentIn2 = $('.text2').val();
//         var txtIn = $('.comments p').clone();
//         $('.comments p').text(commentIn1 + " " + commentIn2).append(txtIn).removeAttr('id');
//         $('#txtNo').text('');
//         $('.text1').val('');
//         $('.text2').val('');
//         el.preventDefault();
//     })
// });

// $(function commentsSelect() {
//     $(':submit').click(function(el) { //реализовал вывод выбранного значения select
//         var value1 = $('#select1 :selected').val();
//         alert(value1);
//         el.preventDefault();
//     })
// });

// $(function form() {
//     $('.form1').submit(function(e) { // реализована проверка на заполненность всех полей в форме перед отправкой
//         if ($('.text1').val() == "") {
//             e.preventDefault();
//             alert("Вы не заполнили поле 1");
//         } else if ($('.text2').val() == "") {
//             e.preventDefault();
//             alert("Вы не заполнили поле 2");
//         } else if ($('.password').val() == "") {
//             e.preventDefault();
//             alert("Вы не ввели пароль");
//         }
//         $('.text1').val('');
//         $('.text2').val('');
//         $('.password').val('');
//         e.preventDefault();
//     });
// });

// $(function txtInp() { // данная функция напоминает hover, но только требует щелчок мышью, а не просто наведение
//     $('.txtinp').focus(function() {
//         $(this).addClass('border');
//     });
//     $('.txtinp').blur(function() {
//         $(this).removeClass('border');
//     });
// });

// $(function selec() {
//     $('#select1').change(function() {
//         var v = $('#select1 :selected').val();
//         if (v == 1) {
//             $('#select2').html('<option value="1">disabled 1</option><option value="2">disabled 2</option>');
//         } else if (v == 2) {
//             $('#select2').html('<option value="1">disabled 1</option><option value="2">disabled 2</option><option value="3">disabled 3</option>');
//         } else if (v == 3) {
//             $('#select2').html('<option value="1" selected>disabled 1</option><option value="2">disabled 2</option><option value="3">disabled 3</option><option value="4">disabled 4</option>');
//         } else {
//             $('#select2').html('<option value="1">disabled 1</option>');
//         }
//     });

// });

// $(function selecDouble() {
//     $('#select1').change(function() { // то же самое, что и функция выше, только реализованро не через if, а через switch
//         var v = $('#select1 :selected').val();
//         switch (v) {
//             case '1':
//                 $('#select2').html('<option value="1">disabled 1</option><option value="2">disabled 2</option>');
//                 break;
//         }
//         switch (v) {
//             case '2':
//                 $('#select2').html('<option value="1">disabled 1</option><option value="2">disabled 2</option><option value="3">disabled 3</option>');
//                 break;
//         }
//         switch (v) {
//             case '3':
//                 $('#select2').html('<option value="1" selected>disabled 1</option><option value="2">disabled 2</option><option value="3">disabled 3</option><option value="4">disabled 4</option>');
//                 break;
//         }
//         switch (v) {
//             case '4':
//                 $('#select2').html('<option value="1">disabled 1</option>');
//                 break;
//         }
//     });

// });

// $(function dis() {
//     $('#sent').click(function(e) { //блокировка элемента при нажатии на кнопку отправить и разблокировка при нажатии на кнопку сбросить
//         $('#chk2').attr('disabled', 'disabled');
//         e.preventDefault();
//     });
//     $(':reset').click(function(e) {
//         $('#chk2').removeAttr('disabled');
//         e.preventDefault();
//     });
// });