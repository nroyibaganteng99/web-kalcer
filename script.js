/* =====================================================
   NAZAM WEBSITE // MAIN JAVASCRIPT
   ===================================================== */


/* =====================================================
   BIODATA TAB SYSTEM
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");

    tabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            const target = this.getAttribute("data-target");

            tabs.forEach(function (item) {
                item.classList.remove("active");
            });

            contents.forEach(function (content) {
                content.classList.remove("active");
            });

            this.classList.add("active");

            const selected =
                document.getElementById(target);

            if (selected) {
                selected.classList.add("active");
            }

        });

    });

});


/* =====================================================
   ULTIMATE LAB // HTML
   ===================================================== */

function runHTML() {

    const result =
        document.getElementById("htmlResult");

    const status =
        document.getElementById("htmlStatus");

    if (!result) return;


    result.classList.remove("active");

    void result.offsetWidth;


    if (status) {

        status.textContent =
            "SCANNING...";

        status.style.color =
            "#ff2020";

    }


    setTimeout(function () {

        result.classList.add("active");

        if (status) {

            status.textContent =
                "ONLINE ✓";

            status.style.color =
                "#ff2020";

        }

    }, 600);

}


/* =====================================================
   ULTIMATE LAB // CSS
   ===================================================== */

function runCSS() {

    const result =
        document.getElementById("cssResult");

    const energyText =
        document.getElementById("energyText");

    const energyBar =
        document.getElementById("energyBar");

    if (!result) return;


    const active =
        result.classList.contains("active");


    if (!active) {

        result.classList.add("active");


        if (energyText) {
            energyText.textContent =
                "100% ONLINE";
        }


        if (energyBar) {

            energyBar.classList.add("active");

            energyBar.style.width =
                "100%";

        }


        createEnergyExplosion();


    } else {

        result.classList.remove("active");


        if (energyText) {
            energyText.textContent =
                "OFFLINE";
        }


        if (energyBar) {

            energyBar.classList.remove("active");

            energyBar.style.width =
                "0%";

        }

    }

}


/* =====================================================
   CSS ENERGY EXPLOSION
   ===================================================== */

function createEnergyExplosion() {

    const reactor =
        document.querySelector(".reactor");

    if (!reactor) return;


    for (let i = 0; i < 18; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "energy-particle";

        particle.style.position =
            "absolute";

        particle.style.left =
            "50%";

        particle.style.top =
            "50%";

        particle.style.width =
            "4px";

        particle.style.height =
            "4px";

        particle.style.background =
            "#ff2020";

        particle.style.borderRadius =
            "50%";

        particle.style.boxShadow =
            "0 0 12px #ff2020";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            100 + Math.random() * 100;

        particle.animate(

            [
                {
                    transform:
                        "translate(-50%, -50%) scale(1)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${Math.cos(angle) * distance}px),
                            calc(-50% + ${Math.sin(angle) * distance}px)
                        ) scale(0)`,

                    opacity: 0
                }
            ],

            {
                duration:
                    700 + Math.random() * 500,

                easing:
                    "cubic-bezier(.1,.8,.2,1)"
            }

        );


        reactor.appendChild(particle);


        setTimeout(function () {

            particle.remove();

        }, 1300);

    }

}


/* =====================================================
   ULTIMATE LAB // JAVASCRIPT
   ===================================================== */

function runJS() {

    const result =
        document.getElementById("jsResult");

    const terminal =
        document.getElementById("terminalBody");

    const status =
        document.getElementById("jsStatus");

    const card =
        document.querySelector(".js-card");

    if (!result || !terminal) return;


    result.classList.remove("active");

    terminal.innerHTML = "";


    if (status) {

        status.textContent =
            "BOOTING SYSTEM...";

    }


    if (card) {

        card.classList.add("booting");

    }


    const lines = [

        "> connecting to system...",

        "> loading JavaScript engine...",

        "> checking interaction module...",

        "> functions detected...",

        "> initializing events...",

        "> security check passed..."

    ];


    lines.forEach(function (line, index) {

        setTimeout(function () {

            terminal.innerHTML +=
                `<div>${line}</div>`;

            terminal.scrollTop =
                terminal.scrollHeight;

        }, index * 450);

    });


    setTimeout(function () {

        terminal.innerHTML +=
            `<div class="success">
                > JAVASCRIPT ONLINE ✓
            </div>`;

        result.classList.add("active");


        if (status) {

            status.textContent =
                "SYSTEM ONLINE";

        }


        if (card) {

            card.classList.remove("booting");

            card.classList.add("js-result-active");

        }

    }, 3000);


    setTimeout(function () {

        terminal.innerHTML +=
            `<div class="success">
                > SYSTEM READY_
            </div>`;

        terminal.scrollTop =
            terminal.scrollHeight;

    }, 3500);

}


/* =====================================================
   NAZAM // SECRET DIMENSION
   TYPE: NAZAM
   ===================================================== */

let secretInput = "";
let secretDimension = false;

document.addEventListener("keydown", function (event) {

    if (secretDimension) return;

    if (event.key.length !== 1) return;

    secretInput += event.key.toLowerCase();

    if (secretInput.length > 5) {
        secretInput = secretInput.slice(-5);
    }

    if (secretInput === "nazam") {
        openSecretDimension();
    }

});


function openSecretDimension() {

    secretDimension = true;

    const dimension = document.createElement("div");

    dimension.id = "secretDimension";

    dimension.innerHTML = `

        <!-- BACKGROUND -->
        <div class="dimension-stars"></div>

        <div class="dimension-noise"></div>

        <div class="dimension-vignette"></div>


        <!-- CENTER PORTAL -->
        <div class="dimension-portal">

            <div class="portal-ring portal-ring-1"></div>
            <div class="portal-ring portal-ring-2"></div>
            <div class="portal-ring portal-ring-3"></div>

            <div class="portal-core">
                <span>?</span>
            </div>

        </div>


        <!-- SYSTEM TEXT -->

        <div class="dimension-status">
            UNKNOWN SIGNAL DETECTED
        </div>


        <div class="dimension-message">

            <div id="dimensionText">
                ...
            </div>

            <small id="dimensionSub">
                PLEASE WAIT
            </small>

        </div>


        <!-- TERMINAL -->

        <div class="dimension-terminal">

            <div class="dimension-terminal-title">
                UNKNOWN_PROTOCOL
            </div>

            <div id="dimensionTerminal"></div>

        </div>


        <!-- SECRET ID -->

        <div class="dimension-id">
            NAZAM // 001
        </div>


        <!-- SCAN -->

        <div class="dimension-scan-line"></div>


        <!-- FINAL -->

        <div id="dimensionFinal">

            <strong>THE DOOR IS OPEN.</strong>

        </div>

    `;

    document.body.appendChild(dimension);


    /* =========================================
       STAGE 1
       ========================================= */

    setTimeout(() => {

        const text =
            document.getElementById("dimensionText");

        const sub =
            document.getElementById("dimensionSub");

        if (text) {
            text.textContent =
                "SOMETHING IS HERE.";
        }

        if (sub) {
            sub.textContent =
                "SIGNAL LOCKED";
        }

    }, 1200);


    /* =========================================
       STAGE 2
       ========================================= */

    setTimeout(() => {

        const text =
            document.getElementById("dimensionText");

        if (text) {

            text.textContent =
                "YOU FOUND IT.";

            text.classList.add("dimension-reveal");

        }

    }, 2600);


    /* =========================================
       TERMINAL
       ========================================= */

    const terminal =
        document.getElementById("dimensionTerminal");

    const commands = [

        "> searching hidden layer...",
        "> layer 01 detected",
        "> layer 02 detected",
        "> layer 03 detected",
        "> unauthorized discovery",
        "> user signature recognized",
        "> NAZAM // 001",
        "> opening dimensional gateway..."

    ];


    commands.forEach((command, index) => {

        setTimeout(() => {

            if (!terminal) return;

            const line =
                document.createElement("div");

            line.textContent =
                command;

            terminal.appendChild(line);

        }, 3200 + index * 450);

    });


    /* =========================================
       PORTAL POWER
       ========================================= */

    setTimeout(() => {

        const portal =
            document.querySelector(".dimension-portal");

        if (portal) {
            portal.classList.add("portal-power");
        }

    }, 6000);


    /* =========================================
       FINAL MESSAGE
       ========================================= */

    setTimeout(() => {

        const final =
            document.getElementById("dimensionFinal");

        if (final) {
            final.classList.add("show");
        }

    }, 6900);


    /* =========================================
       PORTAL OPEN
       ========================================= */

    setTimeout(() => {

        const portal =
            document.querySelector(".dimension-portal");

        if (portal) {
            portal.classList.add("portal-open");
        }

    }, 7600);


    /* =========================================
       FINAL TRANSITION
       ========================================= */

    setTimeout(() => {

        dimension.classList.add(
            "dimension-collapse"
        );

    }, 8300);


    /* =========================================
       SECRET PAGE
       ========================================= */

    setTimeout(() => {

        window.location.href =
            "secret.html";

    }, 9000);

}
/* =========================================================
   NAZAM // CLASSIFIED ARCHIVE
   SECRET CODE : NAZAM
   ========================================================= */

let secretBuffer = "";
let archiveActivated = false;

document.addEventListener("keydown", function (e) {

    if (archiveActivated) return;
    if (e.key.length !== 1) return;

    secretBuffer += e.key.toLowerCase();

    if (secretBuffer.length > 5) {
        secretBuffer = secretBuffer.slice(-5);
    }

    if (secretBuffer === "nazam") {
        activateClassifiedArchive();
    }

});


function activateClassifiedArchive() {

    archiveActivated = true;

    const archive = document.createElement("div");

    archive.id = "classifiedArchive";

    archive.innerHTML = `

        <div class="archive-noise"></div>
        <div class="archive-scan"></div>
        <div class="archive-grid"></div>

        <div class="archive-top">

            <span>NAZAM // CLASSIFIED SYSTEM</span>

            <span id="archiveClock">
                SYSTEM BOOT
            </span>

        </div>


        <!-- SYSTEM BREACH -->

        <section class="archive-stage stage-breach">

            <div class="warning-symbol">!</div>

            <h1>⚠ SYSTEM BREACH</h1>

            <p>
                UNKNOWN USER DETECTED
            </p>

            <small>
                SECURITY PROTOCOL OVERRIDE
            </small>

        </section>


        <!-- SCANNING -->

        <section class="archive-stage stage-scan">

            <div class="scanner-circle">

                <div class="scanner-line"></div>

                <span>SCAN</span>

            </div>

            <div class="scan-text">

                <div>> scanning identity...</div>
                <div>> searching database...</div>
                <div>> matching user signature...</div>

            </div>

        </section>


        <!-- IDENTITY -->

        <section class="archive-stage stage-identity">

            <div class="identity-box">

                <div class="identity-header">
                    IDENTITY CONFIRMED
                </div>

                <div class="identity-name">
                    NAZAM ROYIBA
                </div>

                <div class="identity-row">
                    <span>STATUS</span>
                    <b>ACTIVE</b>
                </div>

                <div class="identity-row">
                    <span>SYSTEM</span>
                    <b>TKJ</b>
                </div>

                <div class="identity-row">
                    <span>ACCESS</span>
                    <b>ROOT</b>
                </div>

                <div class="identity-row">
                    <span>INSTANCE</span>
                    <b>001</b>
                </div>

            </div>

        </section>


        <!-- DIGITAL CLONE -->

        <section class="archive-stage stage-clone">

            <div class="clone-container">

                <div class="clone-ring clone-ring-a"></div>
                <div class="clone-ring clone-ring-b"></div>

                <div class="clone-body">

                    <div class="clone-head"></div>

                    <div class="clone-neck"></div>

                    <div class="clone-chest">

                        <span>N</span>

                    </div>

                    <div class="clone-arm left"></div>
                    <div class="clone-arm right"></div>

                </div>

                <div class="clone-scan"></div>

            </div>


            <div class="clone-status">

                CREATING DIGITAL INSTANCE...

                <div class="clone-progress">
                    <i></i>
                </div>

                <strong id="clonePercent">
                    0%
                </strong>

            </div>

        </section>


        <!-- MESSAGE -->

        <section class="archive-stage stage-message">

            <div class="classified-message">

                <span class="red-line"></span>

                <h2>
                    YOU WEREN'T SUPPOSED
                    <br>
                    TO OPEN THIS.
                </h2>

                <p>
                    But since you're here...
                </p>

            </div>

        </section>


        <!-- ARCHIVE -->

        <section class="archive-stage stage-files">

            <div class="archive-title">

                NAZAM ARCHIVE

                <span>ACCESS LEVEL: ROOT</span>

            </div>


            <div class="archive-file-box">

                <div class="file-row">
                    <span>USER</span>
                    <b>NAZAM ROYIBA</b>
                </div>

                <div class="file-row">
                    <span>SCHOOL</span>
                    <b>SMKN 1 JAKARTA</b>
                </div>

                <div class="file-row">
                    <span>SYSTEM</span>
                    <b>TKJ</b>
                </div>

                <div class="file-row">
                    <span>PROJECTS</span>
                    <b>07</b>
                </div>

                <div class="file-row">
                    <span>STATUS</span>
                    <b>ACTIVE</b>
                </div>

            </div>


            <div class="archive-files">

                <div class="archive-card">
                    <span>01</span>
                    HOME
                </div>

                <div class="archive-card">
                    <span>02</span>
                    BIODATA
                </div>

                <div class="archive-card">
                    <span>03</span>
                    MUSIC
                </div>

                <div class="archive-card">
                    <span>04</span>
                    FUN FACTS
                </div>

                <div class="archive-card">
                    <span>05</span>
                    RANDOM
                </div>

                <div class="archive-card">
                    <span>06</span>
                    SPIDER-MAN
                </div>

                <div class="archive-card">
                    <span>07</span>
                    LAB
                </div>

            </div>

        </section>


        <!-- FINAL FILE -->

        <section class="archive-stage stage-final">

            <div class="final-terminal">

                <div>> ARCHIVE COMPLETE.</div>
                <div>> CREATING NEW FILE...</div>

                <strong>
                    /NAZAM/001/SECRET
                </strong>

                <div>> FILE CREATED.</div>

            </div>


            <button
                id="enterArchive"
                class="enter-archive"
            >

                ENTER THE ARCHIVE

                <span>→</span>

            </button>

        </section>


        <div class="archive-id">
            NAZAM // 001 // CLASSIFIED
        </div>

    `;

    document.body.appendChild(archive);


    /* =====================================================
       STAGE SYSTEM
       ===================================================== */

    setTimeout(() => {
        showArchiveStage("stage-scan");
    }, 2200);


    setTimeout(() => {
        showArchiveStage("stage-identity");
    }, 5200);


    setTimeout(() => {
        showArchiveStage("stage-clone");
        startCloneAnimation();
    }, 7600);


    setTimeout(() => {
        showArchiveStage("stage-message");
    }, 12000);


    setTimeout(() => {
        showArchiveStage("stage-files");
        animateArchiveCards();
    }, 15000);


    setTimeout(() => {
        showArchiveStage("stage-final");
    }, 19000);


    /* =====================================================
       BUTTON
       ===================================================== */

    setTimeout(() => {

        const button =
            document.getElementById("enterArchive");

        if (button) {

            button.addEventListener(
                "click",
                function () {

                    archive.classList.add(
                        "archive-exit"
                    );

                    setTimeout(() => {

                        window.location.href =
                            "secret.html";

                    }, 1000);

                }
            );

        }

    }, 19000);

}


/* =========================================================
   STAGE
   ========================================================= */

function showArchiveStage(name) {

    const stages =
        document.querySelectorAll(
            ".archive-stage"
        );

    stages.forEach(stage => {
        stage.classList.remove("active");
    });

    const selected =
        document.querySelector("." + name);

    if (selected) {
        selected.classList.add("active");
    }

}


/* =========================================================
   CLONE
   ========================================================= */

function startCloneAnimation() {

    const percent =
        document.getElementById(
            "clonePercent"
        );

    let value = 0;

    const interval =
        setInterval(() => {

            value += Math.floor(
                Math.random() * 8
            ) + 3;

            if (value >= 100) {
                value = 100;
                clearInterval(interval);
            }

            if (percent) {
                percent.textContent =
                    value + "%";
            }

        }, 180);

}


/* =========================================================
   ARCHIVE CARDS
   ========================================================= */

function animateArchiveCards() {

    const cards =
        document.querySelectorAll(
            ".archive-card"
        );

    cards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add("loaded");

        }, index * 180);

    });

}
/* =========================================================
   MOBILE EASTER EGG
   Tap logo NAZAM 5x
   ========================================================= */

const logo = document.querySelector(".logo");

let logoTaps = 0;
let logoTapTimer = null;

if (logo) {
    logo.addEventListener("click", function () {
        logoTaps++;

        clearTimeout(logoTapTimer);

        logoTapTimer = setTimeout(function () {
            logoTaps = 0;
        }, 1500);

        if (logoTaps >= 5) {
            logoTaps = 0;
            activateJumpscare();
        }
    });
}
// ================================
// SECRET JUMPSCARE
// ================================

let secretCode = "";
const secretWord = "NAZAM";

document.addEventListener("keydown", function (event) {
    if (event.key.length !== 1) return;

    secretCode += event.key.toUpperCase();

    if (secretCode.length > secretWord.length) {
        secretCode = secretCode.slice(-secretWord.length);
    }

    if (secretCode === secretWord) {
        secretCode = "";
        activateJumpscare();
    }
});
function activateJumpscare() {
    const jumpscare = document.getElementById("jumpscare");

    if (!jumpscare) return;

    jumpscare.classList.add("show");

    setTimeout(function () {
        window.location.href = "secret.html";
    }, 30000);
}