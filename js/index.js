// - - - - - - - - - - - Создадим генератор - - - - - - - - - - - 
let obj = {
    generator() {
        let i = 0;
        return {
            next() {
                return {value: ++i, done: false}
            }
        }
    }
}
let it = obj.generator();

// - - - - - - - - - - - Создаем переменные - - - - - - - - - - - 
var div_task = "";
var div_input = "";


// - - - - - Получение данных из поля [.container input] - - - - - 
$(".container input").on("keyup", function() {
    div_input = $(".container input").val();
});


// - - - - - - - - - Нажатие клавиши [Добавить] - - - - - - - - -
$("#add").on("click", function() {
    // Проверка на пустоту поля ввода
    if (div_input.length < 3) {
        $(".container span").text('Напишите побольше. Не менее 3 символов.');
        $(".container span").css('color', 'red');
    }

    else {
    $(".container span").text('Задача была добавлена');
    $(".container span").css('color', 'grey');  
    let i = it.next().value;
    // Создание элемента html 
    div_task += `<p class='point'>Задание #${i}:&nbsp;&nbsp;&nbsp;${div_input}</p>`;
    // Очистка поля input и передача ему фокуса ввода
    div_input = $(".container input").val('');
    $(".container input").focus()
    }
    // Вывод информационных сообщений на 2 секунды
    $(".container span").css('display', 'inline-block');
    setTimeout(function(){
        $(".container span").css('display', 'none');
    }, 2000)
});


// - - - - - - - - - Нажатие клавиши [Показать] - - - - - - - - -
$("#show").on("click", function() {
    $(".container .task").css('display', 'flex');
    $(".container .task").append(div_task);
    if (div_task != "")
        $(".container hr").css('display', 'block');
    div_task = "";
});


// - - - - - - - - - Нажатие клавиши [Скрыть] - - - - - - - - -
$("#hide").on("click", function() {
    $(".container .task").css('display', 'none');
    $(".container hr").css('display', 'none');
});


// - - - - - - - - - Помечание выполненных задач - - - - - - - - - 
$(document).ready(function () {
    $(".container").on("click", ".point", function() {
        if ($(this).css('font-style') == 'italic')
            $(this).css({
                'text-decoration': 'none',
                'color': 'black',
                'font-style': 'normal'
            });
        else 
            $(this).css({
                'text-decoration': 'line-through',
                'color': '#bdbdbd',
                'font-style': 'italic'
            });
    });
});
