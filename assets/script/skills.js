const skills = [
    {
        "id": 1,
        "name": "JAVA",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
    },
    {
        "id": 2,
        "name": "Spring boot",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
    },
   
    {
        "id": 14,
        "name": "C",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
    },
    {
        "id": 4,
        "name": "HTML",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    },
    {
        "id": 5,
        "name": "CSS",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
    },
      
    {
        "id": 6,
        "name": "JavaScript",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    
    {
        "id": 7,
        "name": "React Js",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },

    {
        "id": 8,
        "name": "Node Js",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
    },
    
    {
        "id": 9,
        "name": "MySql",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    },
  
    {
        "id": 11,
        "name": "Git",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    },
]

const skillsWrapper = document.querySelector(".skill-card-wrapper");
skills.map((skill) => addSkill(skill))

function addSkill(skill) {
    const skillItemWrapper = document.createElement("div");
    skillItemWrapper.setAttribute('class', 'skill-item-wrapper');
    skillItemWrapper.innerHTML = `
    <div class="skill-item">
        <img src="${skill.icon}" alt="">
        <h2>${skill.name}</h2>
    </div>`

    skillsWrapper.appendChild(skillItemWrapper);
}
