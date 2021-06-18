fetch('db/skills.json')
    .then(data => data.json())
    .then(skills => {
        const dl = document.createElement('dl');
        dl.classList.add('skills-list');
        skills.forEach(skill => {
            const dt = document.createElement('dt');
            dt.textContent = skill.skillName;
            dt.classList.add(skill.css);

            const dd = document.createElement('dd');
            dd.classList.add('level');

            const div = document.createElement('div');
            div.style.width = skill.skillLevel + '%';
            div.textContent = skill.skillLevel;

            dd.appendChild(div);
            dl.append(dt);
            dl.append(dd);
        });
        document.querySelector('.skills').append(dl);
    })
    .catch(() => console.error("Ошибка!"));


