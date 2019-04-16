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
        td.colSpan = "2";
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
    span = document.createElement("span");
    span.classList.add("tableBold");
    span.textContent = "GI";
    td.appendChild(span);
    tr.appendChild(td);

    // пустая ячейка
    for (let i = 1; i <= 1; i++) {
        td = document.createElement("td");
        td.id = "GI";
        td.colSpan = "58";

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
function addTruck(ID, division, DO, manifest, client, volume, time, date, totalVolume, totalTrucks) {

    let TruckDate = new Date((date-25569)*24*60*60*1000+time*24*60*60*1000-3*60*60*1000);
    let TruckHour = TruckDate.getHours();
    let div = document.createElement("div");
    let currentTime = new Date().getHours();
    let MblinkT = currentTime +3;
    let RblinkT = currentTime +8;
    console.log(currentTime, MblinkT, RblinkT, TruckHour);
     console.log(totalVolume, totalTrucks, client);

    div.classList.add("Truck");
    div.id = "Truck_"+ID;

    TruckHour = TruckHour - 3;
    if (TruckHour < 0 ) {
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

    document.querySelector("#totalV").appendChild(b);
    if (totalVolume !== null) {
        b.textContent = totalVolume;}
    document.querySelector("#totalT").appendChild(span);
    if (totalTrucks !== null) {
        span.textContent = totalTrucks;}


    jQuery(function () {
        // There's the gallery and the trash
        var $gallery = $(".Truck"),
            $trash = $(".yardTableData");
        var $blink;
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
                if (target.id === "GI");
            });

            $item.find("a.ui-icon-trash").remove();
            // console.log(target.id);
        }
    });
}
