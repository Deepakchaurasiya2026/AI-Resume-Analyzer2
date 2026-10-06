/* =========================================
   RESUME ANALYZER
========================================= */


function analyzeResume() {

    const fileInput =
        document.getElementById("resumeFile");

    const jobRole =
        document.getElementById("jobRole");

    const result =
        document.getElementById("analysisResult");


    /* Check Resume */

    if (!fileInput.files.length) {

        alert("Please upload your resume first.");

        return;
    }


    /* Check File Size */

    const file =
        fileInput.files[0];

    const maxSize =
        5 * 1024 * 1024;


    if (file.size > maxSize) {

        alert(
            "File size must be less than 5 MB."
        );

        return;
    }


    /* Show Result */

    result.style.display = "block";


    result.scrollIntoView({
        behavior: "smooth"
    });


    /* Animate Score */

    animateScore();


    /* Console */

    console.log(
        "Resume:",
        file.name
    );

    console.log(
        "Target Job Role:",
        jobRole.value
    );

}


/* =========================================
   SCORE ANIMATION
========================================= */


function animateScore() {

    const scoreElement =
        document.getElementById("scoreNumber");

    let score = 0;

    const targetScore = 84;


    const interval =
        setInterval(function () {

            score++;

            scoreElement.textContent =
                score;


            if (score >= targetScore) {

                clearInterval(interval);

            }

        }, 20);

}


/* =========================================
   RESET ANALYSIS
========================================= */


function resetAnalysis() {

    const result =
        document.getElementById("analysisResult");

    const fileInput =
        document.getElementById("resumeFile");


    result.style.display = "none";

    fileInput.value = "";


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}