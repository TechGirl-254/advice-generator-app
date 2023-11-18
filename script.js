var url = "https://api.adviceslip.com/advice";
var advice_title = document.getElementById('advice_title');
var advice_content = document.getElementById('advice');
var button = document.querySelector(".btn");

async function generateAdvice() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.slip) {
            let advice_id = data.slip.id;
            let advice_paragraph = data.slip.advice;

            advice_title.innerHTML = "Advice # " + advice_id;
            advice_content.innerHTML = advice_paragraph;
        } else {
            console.log("Invalid API response structure: ", data);
        }
    } catch (error) {
        console.log("Error", error);
    }
}

// Initial call when the page loads
generateAdvice();

// Add the button click event listener
button.addEventListener("click", function() {
    button.classList.add("clicked");
    generateAdvice();

    setTimeout(function() {
        button.classList.remove("clicked");
    }, 500);
});