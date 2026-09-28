/* =========================================================
   NAZAM OS
   JAVASCRIPT
   ========================================================= */


/* =========================================================
   CLOCK
   ========================================================= */

function updateClock() {

    const clock =
        document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    const hours =
        String(now.getHours()).padStart(2, "0");

    const minutes =
        String(now.getMinutes()).padStart(2, "0");

    const seconds =
        String(now.getSeconds()).padStart(2, "0");

    clock.textContent =
        `${hours}:${minutes}:${seconds}`;
}

updateClock();

setInterval(
    updateClock,
    1000
);


/* =========================================================
   AUTOMATIC ORBIT NODE POSITION
   ========================================================= */

const system =
    document.querySelector(".system");

const nodes =
    document.querySelectorAll(".node");


function positionNodes() {

    if (!system || !nodes.length) return;

    const rect =
        system.getBoundingClientRect();

    const centerX =
        rect.width / 2;

    const centerY =
        rect.height / 2;


    /*
       Ukuran orbit otomatis mengikuti
       ukuran layar.
    */

    const smallest =
        Math.min(
            rect.width,
            rect.height
        );


    let radius =
        smallest * 0.30;


    /*
       Jangan terlalu dekat
       dan jangan terlalu jauh.
    */

    radius =
        Math.max(
            120,
            Math.min(
                radius,
                330
            )
        );


    /*
       HP kecil
    */

    if (rect.width < 600) {

        radius =
            smallest * 0.31;

        radius =
            Math.max(
                105,
                Math.min(
                    radius,
                    180
                )
            );
    }


    nodes.forEach(function(node) {

        const angle =
            Number(
                node.dataset.angle
            ) || 0;


        const radians =
            angle *
            Math.PI /
            180;


        const x =
            centerX +
            Math.cos(radians) *
            radius;


        const y =
            centerY +
            Math.sin(radians) *
            radius;


        node.style.left =
            `${x}px`;

        node.style.top =
            `${y}px`;

    });

}


positionNodes();


window.addEventListener(
    "resize",
    positionNodes
);


/* =========================================================
   WINDOW SYSTEM
   ========================================================= */

const windows =
    document.querySelectorAll(".window");

const closeButtons =
    document.querySelectorAll(".close");

const player =
    document.getElementById("youtubePlayer");


function stopMusic() {

    if (!player) return;

    player.src = "";

}


function closeAllWindows() {

    windows.forEach(
        function(windowElement) {

            windowElement.classList
                .remove("active");

        }
    );

    stopMusic();
}


/* =========================================================
   NODE CLICK
   ========================================================= */

nodes.forEach(
    function(node) {

        node.addEventListener(
            "click",
            function() {

                const targetId =
                    this.dataset.window;

                const target =
                    document.getElementById(
                        targetId
                    );

                if (!target) return;


                closeAllWindows();


                target.classList
                    .add("active");


                /*
                   MUSIC
                */

                if (
                    targetId ===
                    "musicWindow"
                ) {

                    if (player) {

                        player.src =
                            "https://www.youtube.com/embed/U3SA9Nb5GY8?autoplay=1&rel=0";

                    }

                }

            }
        );

    }
);


/* =========================================================
   CLOSE BUTTON
   ========================================================= */

closeButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                const windowElement =
                    this.closest(".window");

                if (!windowElement) return;


                windowElement.classList
                    .remove("active");


                if (
                    windowElement.id ===
                    "musicWindow"
                ) {

                    stopMusic();

                }

            }
        );

    }
);


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeAllWindows();

        }

    }
);


/* =========================================================
   CLICK OUTSIDE WINDOW
   ========================================================= */

document.addEventListener(
    "click",
    function(event) {

        windows.forEach(
            function(windowElement) {

                if (
                    !windowElement.classList
                        .contains("active")
                ) {
                    return;
                }


                if (
                    windowElement.contains(
                        event.target
                    )
                ) {
                    return;
                }


                if (
                    event.target.closest(".node")
                ) {
                    return;
                }


                windowElement.classList
                    .remove("active");


                if (
                    windowElement.id ===
                    "musicWindow"
                ) {

                    stopMusic();

                }

            }
        );

    }
);


/* =========================================================
   CORE CLICK
   ========================================================= */

const core =
    document.getElementById("core");


if (core) {

    core.addEventListener(
        "click",
        function() {

            this.animate(
                [
                    {
                        transform:
                            "translate(-50%, -50%) scale(1)"
                    },
                    {
                        transform:
                            "translate(-50%, -50%) scale(1.12)"
                    },
                    {
                        transform:
                            "translate(-50%, -50%) scale(1)"
                    }
                ],
                {
                    duration: 400,
                    easing: "ease-out"
                }
            );

        }
    );

}


/* =========================================================
   ARCADE GAME
   ========================================================= */

const startGame =
    document.getElementById(
        "startGame"
    );

const target =
    document.getElementById(
        "target"
    );

const gameArea =
    document.getElementById(
        "gameArea"
    );

const scoreText =
    document.getElementById(
        "score"
    );

const timeText =
    document.getElementById(
        "gameTime"
    );

const gameMessage =
    document.getElementById(
        "gameMessage"
    );


let score = 0;

let time = 10;

let gameRunning = false;

let gameTimer = null;


/* MOVE TARGET */

function moveTarget() {

    if (
        !gameArea ||
        !target
    ) {
        return;
    }


    const maxX =
        Math.max(
            0,
            gameArea.clientWidth -
            target.offsetWidth
        );


    const maxY =
        Math.max(
            0,
            gameArea.clientHeight -
            target.offsetHeight
        );


    const x =
        Math.random() *
        maxX;


    const y =
        Math.random() *
        maxY;


    target.style.left =
        `${x}px`;

    target.style.top =
        `${y}px`;

}


/* START GAME */

if (startGame) {

    startGame.addEventListener(
        "click",
        function() {

            if (gameRunning) {
                return;
            }


            score = 0;

            time = 10;

            gameRunning = true;


            scoreText.textContent =
                "000";

            timeText.textContent =
                "10";


            gameMessage.style.display =
                "none";


            target.style.display =
                "block";


            startGame.textContent =
                "GAME RUNNING...";


            moveTarget();


            clearInterval(
                gameTimer
            );


            gameTimer =
                setInterval(
                    function() {

                        time--;


                        timeText.textContent =
                            String(time)
                            .padStart(2, "0");


                        if (time <= 0) {

                            clearInterval(
                                gameTimer
                            );


                            gameRunning =
                                false;


                            target.style.display =
                                "none";


                            gameMessage.style.display =
                                "block";


                            gameMessage.textContent =
                                `SCORE: ${String(score).padStart(3, "0")}`;


                            startGame.textContent =
                                "PLAY AGAIN";

                        }

                    },
                    1000
                );

        }
    );

}


/* TARGET CLICK */

if (target) {

    target.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();


            if (!gameRunning) {
                return;
            }


            score++;


            scoreText.textContent =
                String(score)
                .padStart(3, "0");


            moveTarget();

        }
    );

}


/* =========================================================
   CLEANUP GAME WHEN PAGE CLOSES
   ========================================================= */

window.addEventListener(
    "beforeunload",
    function() {

        clearInterval(
            gameTimer
        );

    }
)
/* =========================================================
   EASTER EGG — SPIDER CORE
   Klik NAZAM 5x
   ========================================================= */

let coreClicks = 0;
let coreClickTimer = null;

if (core) {

    core.addEventListener("click", function () {

        coreClicks++;

        clearTimeout(coreClickTimer);

        coreClickTimer = setTimeout(function () {
            coreClicks = 0;
        }, 1500);


        if (coreClicks >= 5) {

            coreClicks = 0;

            activateEasterEgg();

        }

    });

}


function activateEasterEgg() {

    document.body.classList.add("easter-active");


    const message =
        document.createElement("div");

    message.className =
        "easter-message";

    message.innerHTML = `
        <div class="easter-title">
            SPIDER CORE
        </div>

        <div class="easter-subtitle">
            AWAKENED
        </div>

        <div class="easter-line">
            NAZAM SYSTEM // SPECIAL MODE
        </div>
    `;


    document.body.appendChild(message);


    setTimeout(function () {

        message.classList.add("show");

    }, 50);


    setTimeout(function () {

        message.classList.remove("show");

        setTimeout(function () {

            message.remove();

            document.body.classList.remove(
                "easter-active"
            );

        }, 500);

    }, 3500);

};