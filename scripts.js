let noButtonClickCount = 0;

function moveNoButton() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const noButtonTexts = ["No", "Are you sure?", "Really?", "WOW!!!!!", "Pleasssseeee!!!!", "WTF REALLY??!?!", "Just click YES!!!", "I'm begging you!!!", "I'm crying now", "I'm gonna die", "I'm dead", "I'm a ghost now"];
    noButton.textContent = noButtonTexts[noButtonClickCount % noButtonTexts.length];
    yesButton.style.transform = `scale(${1 + noButtonClickCount * 0.1})`;
    yesButton.style.setProperty('transform', `scale(${1 + noButtonClickCount * 0.1})`, 'important');
    yesButton.style.fontSize = `${18 + noButtonClickCount * 2}px`;
    yesButton.style.padding = `${15 + noButtonClickCount}px ${30 + noButtonClickCount * 2}px`;
    const x = Math.random() * (window.innerWidth - noButton.clientWidth);
    const y = Math.random() * (window.innerHeight - noButton.clientHeight);
    noButton.style.position = 'absolute';
    noButton.style.transition = 'left 0.5s ease, top 0.5s ease';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    noButtonClickCount++;
    if (noButtonClickCount === 3) {
        const image = document.querySelector('.image-container img');
        image.src = 'images/dudu-sad.gif';
    } else if (noButtonClickCount === 6) {
        const image = document.querySelector('.image-container img');
        image.src = 'images/dudu-tears.gif';
    }
}

const yesButton = document.querySelector('.yes-button');
yesButton.addEventListener('click', () => {
    const image = document.querySelector('.image-container img');
    image.src = 'images/bubu-dudu-kiss.gif';
    document.querySelector('.buttons').remove();
    const message = document.createElement('h2');
    message.textContent = '"Yay! You’re my Valentine! 💖 I’d say you have great taste, but I already knew that lol. Thanks for putting up with my annoying butt! 🍑💕✨"';
    document.body.appendChild(message);
});