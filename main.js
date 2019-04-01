"use strict";

// КОНСТАНТЫ
const timeTable = document.querySelector("#timeTable");
const yardTable = document.querySelector("#yardTable");


// чертим скелет 1 таблички - timeTable
function redrawTimeTable() {
    // удаляем все содержание тега таблицы timeTable
    timeTable.innerHTML = null;
    // добавляем ряд - шапку в timeTable
    let tr = document.createElement("tr");
    timeTable.appendChild(tr);
    // добавляем заглавную ячейку = "OUT D/O"
    let td = document.createElement("td");
    td.rowSpan = "2";
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
        i = i * 1;
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
        span.classList.add("tableBold");
        span.textContent = "V-" + (59 - i);
        i = i;
        td.appendChild(span);
        tr.appendChild(td);
    }

    // добавляем ряд - Pick Start в timeTable
    tr = document.createElement("tr");
    yardTable.appendChild(tr);
    // добавляем заглавную ячейку = "Pick Start"
    td = document.createElement("td");
    let span = document.createElement("span");
    span.classList.add("tableBold");
    span.textContent = "Pick Start";
    td.appendChild(span);
    tr.appendChild(td);
    // пустые ячейки
    for (let i = 1; i <= 29; i++) {
        td = document.createElement("td");
        td.classList.add("yardTableData");
        td.id = "Pick Start" + (59 - i);
        i = i;
        tr.appendChild(td);
    }

    // добавляем ряд - Pick Finish D+2 в timeTable
    tr = document.createElement("tr");
    yardTable.appendChild(tr);
    // добавляем заглавную ячейку = "Pick Finish D+2"
    td = document.createElement("td");
    span = document.createElement("span");
    span.classList.add("tableBold");
    span.textContent = "Pick Finish D+2";
    td.appendChild(span);
    tr.appendChild(td);
    // пустые ячейки
    for (let i = 1; i <= 29; i++) {
        td = document.createElement("td");
        td.classList.add("yardTableData");
        td.id = "Pick Finish D+2" + (59 - i);
        i = i * 1;
        tr.appendChild(td);
    }

    // добавляем ряд - Pick Finish в timeTable
    tr = document.createElement("tr");
    yardTable.appendChild(tr);
    // добавляем заглавную ячейку = "Pick Finish"
    td = document.createElement("td");
    span = document.createElement("span");
    span.classList.add("tableBold");
    span.textContent = "Pick Finish";
    td.appendChild(span);
    tr.appendChild(td);
    // пустые ячейки
    for (let i = 1; i <= 29; i++) {
        td = document.createElement("td");
        td.classList.add("yardTableData");
        td.id = "Pick Finish" + (59 - i);
        i = i * 1;
        tr.appendChild(td);
    }

    // добавляем ряд - Truck waiting в timeTable
    tr = document.createElement("tr");
    yardTable.appendChild(tr);
    // добавляем заглавную ячейку = "Truck waiting"
    td = document.createElement("td");
    span = document.createElement("span");
    span.classList.add("tableBold");
    span.textContent = "Truck_waiting";
    td.appendChild(span);
    tr.appendChild(td);
    // пустые ячейки
    for (let i = 1; i <= 29; i++) {
        td = document.createElement("td");
        td.classList.add("yardTableData");
        td.id = "Truck_waiting" + (59 - i);
        i = i * 1;
        tr.appendChild(td);
    }

    // добавляем ряд - Truck arrived в timeTable
    tr = document.createElement("tr");
    yardTable.appendChild(tr);
    // добавляем заглавную ячейку = "Truck arrived"
    td = document.createElement("td");
    span = document.createElement("span");
    span.classList.add("tableBold");
    span.textContent = "Truck arrived";
    td.appendChild(span);
    tr.appendChild(td);
    // пустые ячейки
    for (let i = 1; i <= 29; i++) {
        td = document.createElement("td");
        td.classList.add("yardTableData");
        td.id = "Truck arrived" + (59 - i);
        i = i * 1;
        tr.appendChild(td);
    }

    // добавляем ряд - Loading в timeTable
    tr = document.createElement("tr");
    yardTable.appendChild(tr);
    // добавляем заглавную ячейку = "Loading"
    td = document.createElement("td");
    span = document.createElement("span");
    span.classList.add("tableBold");
    span.textContent = "Loading";
    td.appendChild(span);
    tr.appendChild(td);
    // пустые ячейки
    for (let i = 1; i <= 29; i++) {
        td = document.createElement("td");
        td.classList.add("yardTableData");
        td.id = "Loading" + (59 - i);
        i = i * 1;
        tr.appendChild(td);
    }

    // добавляем ряд - GI в timeTable
    tr = document.createElement("tr");
    yardTable.appendChild(tr);
    // добавляем заглавную ячейку = "Loading"
    td = document.createElement("td");
    span = document.createElement("span");
    span.classList.add("tableBold");
    span.textContent = "GI";
    td.appendChild(span);
    tr.appendChild(td);

    // пустая ячейка
    for (let i = 1; i <= 1; i++) {
        td = document.createElement("td");
        td.id = "GI";
        i = i * 1;
        td.colSpan = "29";

        // внутрь кладем div
        let div;
        div = document.createElement("div");
        div.classList.add("GITruckWrapper");
        div.classList.add("yardTableData");
        td.appendChild(div);
        tr.appendChild(td);
    }

}

// ID, division, DO, manifest, client, volume, time, date
// Добавляет информацию по грузовику в таблицу OUT DO
function addTruck(ID, division, DO, manifest, client, volume, time, date) {

    let TruckDate = new Date((date-25569)*24*60*60*1000+time*24*60*60*1000-3*60*60*1000);

    let div = document.createElement("div");
    div.classList.add("Truck");
    div.id = "Truck_"+ID;

    let TruckHour = TruckDate.getHours();
    TruckHour = TruckHour - 2;
    if (TruckHour < 0 ) {
        TruckHour += 24;
    }

    document.querySelector("#OUTDO" + TruckHour).appendChild(div);
    let TruckID = div.id;

    // div = document.createElement("div");
    // div.id = ID + "idFirstRow";
    // div.classList.add("firstRow");
    // document.getElementById(TruckID).appendChild(div);


    // p.classList.add("TruckID");
    // p.textContent = "№ "+ID;
    // document.getElementById(div.id).appendChild(p);

    p = document.createElement("p");
    p.classList.add("manifest");
    if (manifest !== null) {
    p.textContent = "Manifest: " + manifest;}
    document.getElementById(TruckID).appendChild(p);

    p = document.createElement("p");
    p.classList.add("DO");
    p.textContent = "DO: " + DO;
    document.getElementById(div.id).appendChild(p);

    p = document.createElement("p");
    p.classList.add("client");
    p.textContent = client.replace(/ {1,}/g," ");
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
    p.textContent = ("0" + TruckDate.getDate()).slice(-2) + "-" + ("0"+(TruckDate.getMonth()+1)).slice(-2) + "-" +
        TruckDate.getFullYear();
    document.getElementById(div.id).appendChild(p);

    $(function () {
        // There's the gallery and the trash
        var $gallery = $(".Truck"),
            $trash = $(".yardTableData");

        // Let the gallery items be draggable
        $($gallery).draggable({
            cancel: "a.ui-icon", // clicking an icon won't initiate dragging
            revert: "invalid", // when not dropped, the item will revert back to its initial position
            //containment: "document",
            helper: "clone",
            cursor: "move",
            cursorAt: {top: 48, left: 55},
            opacity: 0.35,
            //iframeFix: true
        });

        //Будущая анимация по выполнению заказов
        // $($gallery).animate({backgroundColor: "#3737A2"}, 250)
		// 	.animate({backgroundColor: "#FFFFFF"}, 250)
		// 	.animate({backgroundColor: "#3737A2"}, 250)
		// 	.animate({backgroundColor: "#FFFFFF"}, 250).mousemove();


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

        // Truck drug function
        function drugTruck($item, target) {
            $item.append().appendTo(target).fadeIn(function () {
                if (target.id = "GI") {
                }
            });

            $item.find("a.ui-icon-trash").remove();
            // console.log(target.id);
        }
    });
}
