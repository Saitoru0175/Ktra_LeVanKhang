// Get the current date and year
var current_date = new Date();
var current_year = current_date.getFullYear();

// Set the target date to January 1st of the next year
var next_year = current_year + 1;
var target_date = new Date(next_year, 0, 1).getTime(); // January is 0 in JavaScript

// Declare variables for time units
var days, hours, minutes, seconds;

// Get the countdown element from the document
var countdown = document.getElementById("tiles");

// Initialize the countdown
getCountdown();

// Update the countdown every second
setInterval(function() { getCountdown(); }, 1000);

function getCountdown() {
    // Get the current time and calculate the difference in seconds
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // Calculate days, hours, minutes, and seconds
    days = pad(parseInt(seconds_left / 86400));
    seconds_left = seconds_left % 86400;

    hours = pad(parseInt(seconds_left / 3600));
    seconds_left = seconds_left % 3600;

    minutes = pad(parseInt(seconds_left / 60));
    seconds = pad(parseInt(seconds_left % 60));

    // Display the countdown
    countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";
}

// Helper function to add a leading zero to numbers less than 10
function pad(n) {
    return (n < 10 ? '0' : '') + n;
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❅';

    // Random position of snowflake horizontally and random opacity
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.opacity = `${0.4 + Math.random() * 0.6}`;

    // Adding the snowflake to the container
    document.body.appendChild(snowflake);

    // Setting random falling duration and animation delay
    const duration = `${5 + Math.random() * 10}s`;
    const delay = `${Math.random() * 5}s`;
    snowflake.style.animationDuration = duration;
    snowflake.style.animationDelay = delay;

    // Removing the snowflake after it falls
    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(duration) * 1000 + parseFloat(delay) * 1000); // Convert to milliseconds
}

// Function to start creating snowflakes every 50 milliseconds
function startSnowing() {
    setInterval(createSnowflake, 50);
}

// Start snowfall when the page is loaded
document.addEventListener('DOMContentLoaded', startSnowing);

// Array of strings to be "typed"
const codePhrases = [

    "Chào năm mới – thời điểm đầy hy vọng và cơ hội mới đang đến gần. Đây là khoảnh khắc chúng ta cùng nhau chia tay những điều cũ kỹ, để chào đón những trang mới, những trải nghiệm mới và những cơ hội mới rực rỡ.",
    "Năm mới đến, hãy để lòng mình tràn đầy niềm vui và hy vọng. Hãy dành thời gian để đón nhận những điều tốt đẹp nhất từ cuộc sống, để cùng nhau xây dựng những ước mơ, hoài bão mới và để mọi điều tốt lành đến với mỗi người.",
    "Mỗi năm mới là một cơ hội để ta có thể tự làm mới bản thân, để xóa bỏ những gì đã qua và hướng tới tương lai với sự lạc quan và quyết tâm. Hãy để mỗi ngày trong năm mới này trở nên ý nghĩa hơn, tràn đầy năng lượng và ý chí, để chúng ta có thể vươn tới những mục tiêu lớn lao mà chúng ta đã đặt ra.",
    "Nhân dịp năm mới, chúc mừng bạn và gia đình có một năm mới thật hạnh phúc, an lành và thành công. Chúng ta hãy cùng nhau tạo nên những kỷ niệm đáng nhớ, chia sẻ niềm vui và lan tỏa yêu thương đến mọi người xung quanh.",
    "Năm mới không chỉ là một cơ hội để bắt đầu lại mà còn là thời điểm để chúng ta cảm ơn những điều tốt đẹp đã đến trong quãng thời gian vừa qua và để bắt đầu một hành trình mới đầy ý nghĩa. Chúc mừng năm mới, hãy để năm này trở thành một chương mới, một trang sách mới đầy màu sắc và hạnh phúc!"
];

// Element where the code will be displayed
const codeElement = document.getElementById('code');

// Function to simulate typing text
function typePhrases(phrases, index = 0) {
    let phraseIndex = index;
    let charIndex = 0;
    let intervalId;
    const typingSound = document.getElementById('typing-sound'); // Get the audio element

    function typeNextChar() {
        if (charIndex < phrases[phraseIndex].length) {
            if (charIndex === 0) {
                typingSound.play(); // Start playing the sound
            }
            codeElement.textContent += phrases[phraseIndex].charAt(charIndex);
            charIndex++;
        } else {
            typingSound.pause(); // Stop playing the sound
            typingSound.currentTime = 0; // Reset the sound time to the beginning
            clearInterval(intervalId);
            setTimeout(() => {
                codeElement.textContent = '';
                charIndex = 0;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                intervalId = setInterval(typeNextChar, 100); // Typing speed
            }, 2000); // Pause before starting the next phrase
        }
    }

    intervalId = setInterval(typeNextChar, 100); // Typing speed
}

document.addEventListener('DOMContentLoaded', () => typePhrases(codePhrases));

// Get audio elements and the mute button
var backgroundMusic = document.getElementById('background-music');
var muteButton = document.getElementById('mute-button');

// Flag to track the sound state
var isMuted = false;

// Function to toggle mute
function toggleMute() {
    isMuted = !isMuted; // Toggle the flag
    backgroundMusic.muted = isMuted; // Enable or disable background music
    muteButton.textContent = isMuted ? "Unmute" : "Mute"; // Update the button text
}

// Add an event listener for the mute button
muteButton.addEventListener('click', toggleMute);