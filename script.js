// task 1
const systemInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform  
};

localStorage.setItem('userSystemData', JSON.stringify(systemInfo));

const savedInfoString = localStorage.getItem('userSystemData');
const parsedInfo = JSON.parse(savedInfoString);

const footerElement = document.querySelector('footer');

const sysInfoParagraph = document.createElement('p');

sysInfoParagraph.textContent = `ОС: ${parsedInfo.platform} | Браузер: ${parsedInfo.userAgent}`;
sysInfoParagraph.style.textAlign = 'center';
sysInfoParagraph.style.fontSize = '12px';
sysInfoParagraph.style.marginTop = '10px';
sysInfoParagraph.style.color = '#64748b';

footerElement.appendChild(sysInfoParagraph);

//task 2
async function fetchEmployerComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/14/comments');

    const comments = await response.json();

    const experienceSection = document.querySelector('main > section:first-of-type');

    const commentsHeading = document.createElement('h4');
    commentsHeading.textContent = 'Відгуки попередніх роботодавців:';
    commentsHeading.style.marginTop = '20px';
    experienceSection.appendChild(commentsHeading);

    comments.forEach(comment => {
        const commentBlock = document.createElement('div');

        commentBlock.style.border = '1px solid #d8dee8';
        commentBlock.style.backgroundColor = '#f8fafc';
        commentBlock.style.borderRadius = '8px';
        commentBlock.style.padding = '12px';
        commentBlock.style.marginTop = '12px';

        commentBlock.innerHTML = `
            <strong>${comment.name}</strong> 
            <span style="color: #596b80; font-size: 14px;">(${comment.email})</span>
            <p style="margin-top: 8px; margin-bottom: 0;">${comment.body}</p>
        `;

        experienceSection.appendChild(commentBlock);
    })
}

fetchEmployerComments();

//task 3
const modal = document.getElementById('feedback-modal');
const closeBtn = document.querySelector('.close-button');

setTimeout(() => {
    modal.style.display = 'block';
}, 60000);

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// task 3
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

function setAutoTheme() {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 7 && currentHour < 21) {
        bodyElement.classList.remove('dark-theme');
        themeToggleBtn.textContent = '🌙 Нічна тема';
    } else {
        bodyElement.classList.add('dark-theme');
        themeToggleBtn.textContent = '☀️ Денна тема';
    }
}

setAutoTheme();

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-theme');
    
    if (bodyElement.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = '☀️ Денна тема';
    } else {
        themeToggleBtn.textContent = '🌙 Нічна тема';
    }
});