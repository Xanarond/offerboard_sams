"use strict";

// КОНСТАНТЫ
const timeTable = document.querySelector("#timeTable");
const yardTable = document.querySelector("#yardTable");

//Модальное окно для Picking Status и Picking Delay
function input_m2() {
    $('#pickingS, #pickingD').click(function () {
        $('#modal2').modal('show');

        function ps_inp() {
            let inp = document.getElementById('ps');
            let span1 = document.createElement("span");
            if (inp !== null) {
                inp.oninput = function () {
                    span1.setAttribute("id", "result_ps");
                    span1.textContent = inp.value;
                    document.getElementById('pickingS').appendChild(span1);
                };
            }
        }

        function pd_inp() {
            let inp2 = document.getElementById('pd');
            let span2 = document.createElement("span");
            if (inp2 !== null) {
                inp2.oninput = function () {
                    span2.setAttribute("id", "result_pd");
                    span2.textContent = inp2.value;
                    document.getElementById('pickingD').appendChild(span2);
                };
            }
        }

        ps_inp();
        pd_inp();
    });
}

input_m2();

// Удаление статусов в главной таблице
function remove_m2() {
    $("#remove").click(function () {
        $('span#result_ps').detach();
        $('span#result_pd').detach();
    });
}

remove_m2();

$('.pal_btn').click(function () {
    $('#modal3').modal('show');
});


/*РУЧНОЙ ВВОД ДАННЫХ ДЛЯ ПАЛЕТ*/

// eslint-disable-next-line no-unused-vars
function truck_input() {
    $('#save').click(function (truck) {
        truck = document.createElement("div");
        truck.classList.add('Truck');
        let id = document.getElementById('num').value;
        truck.id = "Truck" + id;
        document.querySelector('#OUTDO23').appendChild(truck);


        function man_inp(man) {
            let inp_man = document.getElementById('man');
            man = document.createElement("p");
            man.classList.add('manifest');
            man.textContent = inp_man.value;
            man.id = "man" + id;
            document.getElementById(truck.id).appendChild(man);
        }

        man_inp();

        function do_inp(DO) {
            let inp_do = document.getElementById('do');
            DO = document.createElement("p");
            DO.classList.add('DO');
            DO.textContent = "DO:" + inp_do.value;
            DO.id = 'do' + id;
            document.getElementById(truck.id).appendChild(DO);
        }

        do_inp();

        function div_inp(div) {
            let inp_div = document.getElementById('div');
            div = document.createElement("p");
            div.classList.add('division');
            div.textContent = "Division:" + inp_div.value;
            div.id = 'do' + id;
            document.getElementById(truck.id).appendChild(div);
        }

        div_inp();

        function client_inp(client) {
            let inp_client = document.getElementById('clt');
            client = document.createElement("p");
            client.classList.add('do');
            client.textContent = "Client:" + inp_client.value;
            client.id = 'client' + id;
            document.getElementById(truck.id).appendChild(client);
        }

        client_inp();

        function vol_inp(volume) {
            let inp_volume = document.getElementById('vol');
            volume = document.createElement("p");
            volume.classList.add('volume');
            volume.textContent = "Volume:" + inp_volume.value;
            volume.id = 'volume' + id;
            document.getElementById(truck.id).appendChild(volume);
        }

        vol_inp();

        function last_row(time, date) {
            let inp_time = document.getElementById('time');
            time = document.createElement("p");
            time.classList.add('time');
            time.textContent = inp_time.value;
            time.id = 'volume' + id;
            document.getElementById(truck.id).appendChild(time);

            let inp_date = document.getElementById('date');
            date = document.createElement("p");
            date.classList.add('date');
            date.textContent = inp_date.value;
            date.id = 'volume' + id;
            document.getElementById(truck.id).appendChild(date);

            let lr = document.createElement('div');
            lr.classList.add('lastRow');
            truck.appendChild(lr);
            lr.appendChild(time);
            lr.appendChild(date);
        }

        last_row();
    })

}

// чертим скелет 1 таблички - timeTable
function redrawTimeTable() {
    // удаляем все содержание тега таблицы timeTable
    timeTable.innerHTML = null;
    // добавляем ряд - шапку в timeTable
    let tr = document.createElement("tr");
    timeTable.appendChild(tr);
    // добавляем заглавную ячейку = "OUT D/O"
    let td = document.createElement("td");
    td.classList.add("timeTableHead");
    td.rowSpan = 2;
    let span = document.createElement("span");
    span.classList.add("tableBold");
    span.textContent = "OUT D/O";
    td.appendChild(span);
    tr.appendChild(td);

    // добавляем ячейки шапки
    for (let i = 1; i <= 24; i++) {
        td = document.createElement("td");
        td.classList.add("timeTableHead");
        span = document.createElement("span");
        span.classList.add("tableBold");
        span.textContent = (24 - i).toString() + ":00";
        td.appendChild(span);
        tr.appendChild(td);
    }
    // второй незаполненный ряд ячеек
    tr = document.createElement("tr");
    for (let i = 1; i <= 24; i++) {
        td = document.createElement("td");
        td.classList.add("timeTableData");
        td.id = "OUTDO" + (24 - i);
        tr.appendChild(td);
    }
    timeTable.appendChild(tr);
}

redrawTimeTable();

// чертим скелет 2 таблички - yardTableData
function redrawYardTable() {
    // удаляем все содержание тега таблицы timeTable
    yardTable.innerHTML = null;
    // добавляем ряд - шапку в timeTable
    let tr = document.createElement("tr");
    yardTable.appendChild(tr);
    // первая пустая ячейка
    let td = document.createElement("td");
    td.classList.add("yardTableHead");
    tr.appendChild(td);
    for (let i = 1; i <= 29; i++) {
        td = document.createElement("td");
        td.classList.add("yardTableHead");
        let span = document.createElement("span");
        td.colSpan = 2;
        span.classList.add("tableBold");
        span.textContent = "V-" + (59 - i);
        td.appendChild(span);
        tr.appendChild(td);
    }

    // добавляем ряд - Pick Start в timeTable
    tr = document.createElement("tr");
    yardTable.appendChild(tr);
    // добавляем заглавную ячейку = "Pick Start"
    td = document.createElement("td");
    td.classList.add("yardTableHead");
    let span = document.createElement("span");
    span.classList.add("tableBold");
    span.textContent = "Pick Start";
    td.appendChild(span);
    tr.appendChild(td);
    // пустые ячейки
    for (let i = 1; i <= 58; i++) {
        td = document.createElement("td");
        td.classList.add("yardTableData");
        td.id = "Pick Start" + (59 - i);
        tr.appendChild(td);
    }

    // добавляем ряд - Pick Finish D+2 в timeTable
    tr = document.createElement("tr");
    yardTable.appendChild(tr);
    // добавляем заглавную ячейку = "Pick Finish D+2"
    td = document.createElement("td");
    td.classList.add("yardTableHead");
    span = document.createElement("span");
    span.classList.add("tableBold");
    span.textContent = "Pick Finish D+2";
    td.appendChild(span);
    tr.appendChild(td);
    // пустые ячейки
    for (let i = 1; i <= 58; i++) {
        td = document.createElement("td");
        td.classList.add("yardTableData");
        td.id = "Pick Finish D+2" + (59 - i);
        tr.appendChild(td);
    }

    // добавляем ряд - Pick Finish в timeTable
    tr = document.createElement("tr");
    yardTable.appendChild(tr);
    // добавляем заглавную ячейку = "Pick Finish"
    td = document.createElement("td");
    td.classList.add("yardTableHead");
    span = document.createElement("span");
    span.classList.add("tableBold");
    span.textContent = "Pick Finish";
    td.appendChild(span);
    tr.appendChild(td);
    // пустые ячейки
    for (let i = 1; i <= 58; i++) {
        td = document.createElement("td");
        td.classList.add("yardTableData");
        td.id = "Pick Finish" + (59 - i);
        tr.appendChild(td);
    }

    // добавляем ряд - Truck waiting в timeTable
    tr = document.createElement("tr");
    tr.classList.add("Truck_wait");
    yardTable.appendChild(tr);
    // добавляем заглавную ячейку = "Truck waiting"
    td = document.createElement("td");
    td.classList.add("yardTableHead");
    span = document.createElement("span");
    span.classList.add("tableBold");
    span.textContent = "Truck waiting";
    td.appendChild(span);
    tr.appendChild(td);
    // пустые ячейки
    for (let i = 1; i <= 58; i++) {
        td = document.createElement("td");
        td.classList.add("Truck_waiting");
        td.id = "Truck_waiting" + (59 - i);
        tr.appendChild(td);
    }

    // добавляем ряд - Truck arrived в timeTable
    tr = document.createElement("tr");
    yardTable.appendChild(tr);
    // добавляем заглавную ячейку = "Truck arrived"
    td = document.createElement("td");
    td.classList.add("yardTableHead");
    span = document.createElement("span");
    span.classList.add("tableBold");
    span.textContent = "Truck arrived";
    td.appendChild(span);
    tr.appendChild(td);
    // пустые ячейки
    for (let i = 1; i <= 58; i++) {
        td = document.createElement("td");
        td.classList.add("yardTableData");
        td.id = "Truck arrived" + (59 - i);
        tr.appendChild(td);
    }

    // добавляем ряд - Loading в timeTable
    tr = document.createElement("tr");
    tr.classList.add("Load");
    yardTable.appendChild(tr);
    // добавляем заглавную ячейку = "Loading"
    td = document.createElement("td");
    td.classList.add("yardTableHead");
    span = document.createElement("span");
    span.classList.add("tableBold");
    span.textContent = "Loading";
    td.appendChild(span);
    tr.appendChild(td);
    // пустые ячейки
    for (let i = 1; i <= 58; i++) {
        td = document.createElement("td");
        td.classList.add("yardTableData");
        td.id = "Loading" + (59 - i);
        tr.appendChild(td);
    }

    // добавляем ряд - GI в timeTable
    tr = document.createElement("tr");
    yardTable.appendChild(tr);
    // добавляем заглавную ячейку = "Loading"
    td = document.createElement("td");
    td.classList.add("yardTableHead");
    span = document.createElement("span");
    span.classList.add("tableBold");
    span.textContent = "GI";
    td.appendChild(span);
    tr.appendChild(td);

    // пустая ячейка
    for (let i = 1; i <= 1; i++) {
        td = document.createElement("td");
        td.id = "GI";
        td.colSpan = 58;

        // внутрь кладем div
        let div;
        div = document.createElement("div");
        div.classList.add("GITruckWrapper");
        div.classList.add("yardTableData");
        td.appendChild(div);
        tr.appendChild(td);
    }

}

redrawYardTable();
// ID, division, DO, manifest, client, volume, time, date
// Добавляет информацию по грузовику в таблицу OUT DO


function addTruck(ID, division, DO, manifest, client, volume, time, date, totalTrucks, totalVolume, moscowTrucks, moscowVolume, regionTrucks, regionVolume, pickupTrucks, pickupVolume) {

    let TruckDate = new Date((date - 25569) * 24 * 60 * 60 * 1000 + time * 24 * 60 * 60 * 1000 - 3 * 60 * 60 * 1000);
    let TruckHour = TruckDate.getHours();
    let div = document.createElement("div");
    let currentTime = new Date().getHours();

    /*console.log(currentTime, MblinkT, RblinkT, TruckHour);
    console.log(totalVolume, totalTrucks, moscowTrucks, moscowVolume, regionTrucks, regionVolume, pickupTrucks, pickupVolume);*/

    div.classList.add("Truck");
    div.id = "Truck_" + ID;

    TruckHour = TruckHour - 4;
    if (TruckHour < 0) {
        TruckHour += 24;
    }

    document.querySelector("#OUTDO" + TruckHour).appendChild(div);
    let TruckID = div.id;
    let p = document.createElement("p");
    let span = document.createElement("span");
    let b = document.createElement("b");

    // div = document.createElement("div");
    // div.id = ID + "idFirstRow";
    // div.classList.add("firstRow");
    // document.getElementById(TruckID).appendChild(div);


    /*p.classList.add("TruckID");
    p.textContent = "№ " + ID;
    document.getElementById(div.id).appendChild(p);*/

    p = document.createElement("p");
    p.classList.add("manifest");
    if (manifest !== null) {
        p.textContent = manifest;
    }
    document.getElementById(TruckID).appendChild(p);

    p = document.createElement("p");
    p.classList.add("DO");
    p.textContent = "DO: " + DO;
    document.getElementById(div.id).appendChild(p);

    p = document.createElement("p");
    p.classList.add("division");
    p.textContent = division.replace(/ +/g, " ");
    document.getElementById(TruckID).appendChild(p);

    p = document.createElement("p");
    p.classList.add("client");
    p.textContent = client.replace(/ +/g, " ");
    document.getElementById(TruckID).appendChild(p);

    p = document.createElement("p");
    p.classList.add("volume");
    p.textContent = "Volume: " + volume;
    document.getElementById(TruckID).appendChild(p);

    div = document.createElement("div");
    div.id = ID + "idLastRow";
    div.classList.add("lastRow");
    document.getElementById(TruckID).appendChild(div);

    p = document.createElement("p");
    p.classList.add("time");
    p.textContent = ("0" + TruckDate.getHours()).slice(-2) + ":" + ("0" + TruckDate.getMinutes()).slice(-2);
    document.getElementById(div.id).appendChild(p);

    p = document.createElement("p");
    p.classList.add("date");
    p.textContent = ("0" + TruckDate.getDate()).slice(-2) + "-" + ("0" + (TruckDate.getMonth() + 1)).slice(-2) + "-" +
        TruckDate.getFullYear();
    document.getElementById(div.id).appendChild(p);

    // Мигание через определенный период
    let timing = (currentTime >= TruckHour);
    if (timing === true) {
        // console.log(timing, TruckID, TruckHour + 'часов', currentTime + 'часов');
        let p2 = document.createElement('p');
        p2.classList.add("blinked");
        document.getElementById(TruckID).appendChild(p2);
        p2.textContent = "ПОГРУЗКА ОПАЗДЫВАЕТ!";
        setInterval(function () {
            $('.blinked').addClass("blinking").animate({opacity: '0.0'}, 800);
            setTimeout(function () {
                $('.blinked').addClass("blinking").animate({opacity: '1.0'}, 800);
            })
        });
    } else {
        console.log(timing, TruckID, TruckHour + 'часов', currentTime + 'часов');
    }

    // Задание полей для таблицы Total Table
    let divtt = document.createElement("div");
    document.querySelector("#totalT").appendChild(divtt);
    divtt.classList.add("TT");
    divtt.textContent = totalTrucks;


    let divtv = document.createElement("div");
    document.querySelector("#totalV").appendChild(divtv);
    divtv.classList.add("TV");
    divtv.textContent = totalVolume;


    let divmt = document.createElement("div");
    document.querySelector("#moscowT").appendChild(divmt);
    divmt.classList.add("MT");
    divmt.textContent = moscowTrucks;


    let divmv = document.createElement("div");
    document.querySelector("#moscowV").appendChild(divmv);
    divmv.classList.add("MV");
    divmv.textContent = moscowVolume;

    let divrt = document.createElement("div");
    document.querySelector("#regionT").appendChild(divrt);
    divrt.classList.add("RT");
    divrt.textContent = regionTrucks;


    let divrv = document.createElement("div");
    document.querySelector("#regionV").appendChild(divrv);
    divrv.classList.add("RV");
    divrv.textContent = regionVolume;


    let divpt = document.createElement("div");
    document.querySelector("#pickupT").appendChild(divpt);
    divpt.classList.add("PT");
    divpt.textContent = pickupTrucks;


    let divpv = document.createElement("div");
    document.querySelector("#pickupV").appendChild(divpv);
    divpv.classList.add("PV");
    divpv.textContent = pickupVolume;

    jQuery(function drag_truck () {
        // There's the gallery and the trash
        let $gallery = $(".Truck"),
            $trash = $(".yardTableData");
        let $blink;
        $blink = $(".Truck_waiting");

        // Let the gallery items be draggable
        $gallery.draggable({
            cancel: "a.ui-icon", // clicking an icon won't initiate dragging
            revert: "invalid", // when not dropped, the item will revert back to its initial position
            //containment: "document",
            helper: "clone",
            cursor: "move",
            cursorAt: {top: 48, left: 55},
            opacity: 0.35,
            //iframeFix: true
        });

        // Let the trash be droppable, accepting the gallery items
        $trash.droppable({
            accept: ".Truck",
            classes: {
                "ui-droppable-active": "ui-state-highlight"
            },
            drop: function (event, ui) {
                drugTruck(ui.draggable, event.target);
            }
        });

        $blink.droppable({
            accept: ".Truck",
            classes: {
                "ui-droppable-active": "ui-state-highlight"
            },
            drop: function (event, ui) {
                drugTruck(ui.draggable, event.target);
            }
        });

        // Truck drug function
        function drugTruck($item, target) {
            $item.append().appendTo(target).fadeIn(function () {
                while (target.id === "GI") ;
            });

            $item.find("a.ui-icon-trash").remove();
            // console.log(target.id);
        }
    });
}