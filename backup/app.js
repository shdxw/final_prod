
    function showContent(link, place, number) {

    var cont = document.getElementById(place);
    var http = createRequestObject();					// создаем ajax-объект
    if( http ) {
    http.open('get', link);// инициируем загрузку страницы
    http.onreadystatechange = function () {			// назначаем асинхронный обработчик события
    if(http.readyState == 4) {
        if (number === null) {
            cont.innerHTML = http.responseText;
        } else {
            let newinfo = http.responseText.split('\n')[number];
            console.log(newinfo);
            cont.innerHTML = newinfo;
        }
}
}
    http.send(null);
} else {
    document.location = link;	// если ajax-объект не удается создать, просто перенаправляем на адрес
}
}

    // создание ajax объекта
    function createRequestObject() {
    try { return new XMLHttpRequest() }
    catch(e) {
    try { return new ActiveXObject('Msxml2.XMLHTTP') }
    catch(e) {
    try { return new ActiveXObject('Microsoft.XMLHTTP') }
    catch(e) { return null; }
}
}
}

window.onload = function() {
    showContent('page1.html', 'contentBody', null);
};

    async function main(order) {

        emailjs.init("user_wHMUFoVGLeOyXGAgKmDUU");
        emailjs.send('service_ja7krkb', 'template_9vctrlj', order) //Insert your email service ID and email template ID
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
    }

    function main2() {
            var name = document.getElementById("1").value;
            var adress = document.getElementById("2").value;
            var details = document.getElementById("3").value;

            let order = {
                nameto: 'Админу всея руси',
                name: name,
                adress: adress,
                details: details,
            };
            return order
    }