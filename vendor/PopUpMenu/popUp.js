function truckPopUpMenu () {

    "use strict";

    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //
    // H E L P E R    F U N C T I O N S
    //
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    let taskItemInContextId; // id for source item of menu

    /**
     * Function to check if we clicked inside an element with a particular class
     * name.
     *
     * @param {Object} e The event
     * @param {String} className The class name to check against
     * @return {Boolean}
     */
    function clickInsideElement( e, className ) {
        let el = e.srcElement || e.target;

        if ( el.classList.contains(className) ) {
            return el;
        } else {
            while ( el === el.parentNode ) {
                if ( el.classList && el.classList.contains(className) ) {
                    taskItemInContextId = el.id;
                    return el;
                }
            }
        }

        return false;
    }

    /**
     * Get's exact position of event.
     *
     * @param {Object} e The event passed in
     * @return {Object} Returns the x and y position
     */
    function getPosition(e) {
        let posx = 0;
        let posy = 0;

        if (!e) var e = window.event;

        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        return {
            x: posx,
            y: posy
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //
    // C O R E    F U N C T I O N S
    //
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    /**
     * letiables.
     */
    let contextMenuClassName = "context-menu";
    let contextMenuItemClassName = "context-menu__item";
    let contextMenuLinkClassName = "context-menu__link";
    let contextMenuActive = "context-menu--active";

    let taskItemClassName = "Truck";
    let taskItemInContext;

    let clickCoords;
    let clickCoordsX;
    let clickCoordsY;

    let menu = document.querySelector("#context-menu");
    let menuItems = menu.querySelectorAll(".context-menu__item");
    let menuState = 0;
    let menuWidth;
    let menuHeight;
    let menuPosition;
    let menuPositionX;
    let menuPositionY;

    let windowWidth;
    let windowHeight;

    /**
     * Initialise our application's code.
     */
    function init() {
        contextListener();
        clickListener();
        keyupListener();
        resizeListener();
        console.log("PopUpMenu for class", taskItemClassName, "initialized");
    }

    /**
     * Listens for contextmenu events.
     */
    function contextListener() {
        document.addEventListener( "contextmenu", function(e) {
            taskItemInContext = clickInsideElement( e, taskItemClassName );
            if ( taskItemInContext ) {
                e.preventDefault();
                toggleMenuOn();
                positionMenu(e);
            } else {
                taskItemInContext = null;
                toggleMenuOff();
            }
        });
    }

    /**
     * Listens for click events.
     */
    function clickListener() {
        document.addEventListener( "click", function(e) {
            let clickeElIsLink = clickInsideElement( e, contextMenuLinkClassName );

            if ( clickeElIsLink ) {
                e.preventDefault();
                menuItemListener( clickeElIsLink );
            } else {
                let button = e.which || e.button;
                if ( button === 1 ) {
                    toggleMenuOff();
                }
            }
        });
    }

    /**
     * Listens for keyup events.
     */
    function keyupListener() {
        window.onkeyup = function(e) {
            if ( e.keyCode === 27 ) {
                toggleMenuOff();
            }
        }
    }

    /**
     * Window resize event listener
     */
    function resizeListener() {
        window.onresize = function(e) {
            toggleMenuOff();
        };
    }

    /**
     * Turns the custom context menu on.
     */
    function toggleMenuOn() {
        if ( menuState !== 1 ) {
            menuState = 1;
            menu.classList.add( contextMenuActive );
        }
    }

    /**
     * Turns the custom context menu off.
     */
    function toggleMenuOff() {
        if ( menuState !== 0 ) {
            menuState = 0;
            menu.classList.remove( contextMenuActive );
        }
    }

    /**
     * Positions the menu properly.
     *
     * @param {Object} e The event
     */
    function positionMenu(e) {
        clickCoords = getPosition(e);
        clickCoordsX = clickCoords.x;
        clickCoordsY = clickCoords.y;

        menuWidth = menu.offsetWidth + 4;
        menuHeight = menu.offsetHeight + 4;

        // windowWidth = window.innerWidth;
        // windowHeight = window.innerHeight;

        // windowWidth = $(document).width();
        // windowHeight = $(document).height();

        window.onresize = function () {
            windowWidth = $(document).width();
            windowHeight = $(document).height();
        }

        if ( (windowWidth - clickCoordsX) < menuWidth ) {
            menu.style.left = windowWidth - menuWidth + "px";
        } else {
            menu.style.left = clickCoordsX + "px";
        }

        if ( (windowHeight - clickCoordsY) < menuHeight ) {
            menu.style.top = windowHeight - menuHeight + "px";
        } else {
            menu.style.top = clickCoordsY + "px";
        }

        // menu.style.left = clickCoordsX + "px";
        // menu.style.top = clickCoordsY + "px";

    }

    


     /**
      * Sets for id element: backgroungColor, borderColor, fontColor
      * 
      * @param {*} id 
      * @param backgroundColor
      * @param {*} borderColor 
      * @param {*} fontColor 
      */
    function formatIdElement (id, backgroundColor, borderColor, fontColor) {
        id = "#"+id;
        let el = document.querySelector(id);
        el.style.backgroundColor = backgroundColor;
        el.style.borderColor = borderColor;
        el.style.color = fontColor;
    }


    /**
     * Dummy action function that logs an action when a menu item link is clicked
     *
     * @param {HTMLElement} link The link that was clicked
     */
    function menuItemListener( link ) {
        console.log( "TruckId = " + taskItemInContextId + ", Task action = " + link.getAttribute("data-action"));
        switch (link.getAttribute("data-action")) {
            case 'Moscow': formatIdElement (taskItemInContextId, '#05acd6', '#000000', 'black'); // сделать голубым
            break;
            case 'Regions': formatIdElement (taskItemInContextId, '#11690e', '#000000', 'black'); // сделать темно-зеленным
                break;
            case 'Pickup': formatIdElement (taskItemInContextId, '#ffe800', '#000000', 'black');
        }
        toggleMenuOff();
        }


    /**
     * Run the app.
     */
    init();
}