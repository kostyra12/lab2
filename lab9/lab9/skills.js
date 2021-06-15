const skills = [
    { css: "skill-html", skillName: "HTML", skillLevel: 40 },
    { css: "skill-css", skillName: "CSS", skillLevel: 20 },
    { css: "skill-ps", skillName: "Photoshop", skillLevel: 40 },
];


function add() {
    const dl = document.createElement('dl');
    dl.classList.add('skills-list');
    skills.forEach(item => {
        const dt = document.createElement('dt');
        dt.textContent = item.skillName;
        dt.classList.add(item.css);

        const dd = document.createElement('dd');
        dd.classList.add('level');

        const div = document.createElement('div');
        div.style.width = item.skillLevel + '%';
        div.textContent = item.skillLevel;
        
        dd.appendChild(div);
        dl.append(dt);
        dl.append(dd);
    });
    document.querySelector('.skills').append(dl);
}

add();
