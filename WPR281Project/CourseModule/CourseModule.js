function removeTag() {
    localStorage.setItem('showModuleNavItem', 'False');
    window.location.href = '../HomePage/home.html';
}

function timeDifference() {
    let d = new Date();
    let startDateString = document.getElementById('startDate').innerHTML;
    let startDate = new Date(startDateString);
    let diff = startDate.getTime() - d.getTime();
    let diffInDays = Math.round(diff / (1000 * 60 * 60 * 24));
    document.getElementById('timeClock').innerHTML = diffInDays + " Days left till the start of the course";
}

function selectingPage() {
    let pageName = document.getElementById("pageName").innerText;
    switch (pageName) {
        case "Bachelors In Artificial Intelligence And Robotics":
            return 'CourseModule 1.html';
        case "Certificate In Artificial Intelligence":
            return 'CourseModule 2.html';
        case "Diploma In Machine Learning And Data Science":
            return 'CourseModule 3.html';
        case "Honors In Machine Learning":
            return 'CourseModule 4.html';
        case "Masters In Artificial Intelligence":
            return 'CourseModule 5.html';
        case "Postgrad Diploma In DataScience And Artificial Intelligence":
            return 'CourseModule 6.html';
        default:
            window.location.href = '../HomePage/home.html';
            return null;
    }
}


function newListItem() {
    try {
        let ulist = document.getElementById('list');
        let selectedPage = selectingPage();
        if (!selectedPage) return; 

        let lNode = document.createElement('li');
        let aNode = document.createElement('a');
        aNode.setAttribute('href', selectedPage);
        aNode.setAttribute('class', 'nav-item');
        aNode.innerHTML = 'Module';
        lNode.appendChild(aNode);

        let lNode2 = document.createElement('li');
        let buttonNode = document.createElement('a');
        buttonNode.setAttribute('onclick', 'removeTag()');
        buttonNode.setAttribute('class','nav-item');
        buttonNode.innerText = 'Log out';
        lNode2.appendChild(buttonNode);

        ulist.appendChild(lNode);
        ulist.appendChild(lNode2);

        localStorage.setItem('selectedPage', selectedPage);
        localStorage.setItem('showModuleNavItem', 'true');
        document.cookie = 'showModuleNavItem=true';

    } catch (e) {
        console.log(e);
    }
}

function updateSubjectCompletion(subject, checkboxes) {
    const title = subject.querySelector('#title').innerText;        
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    let completedList = document.getElementById('completedSubjects');

    if (allChecked) {
        subject.classList.add('completed');
        if (!Array.from(completedList.children).some(child => child.innerText === title)) {
            let listItem = document.createElement('li');
            listItem.innerHTML = title;
            listItem.classList.add('cListItem');
            completedList.appendChild(listItem);
        }
    } else {
        subject.classList.remove('completed');
        let listItemToRemove = Array.from(completedList.children).find(child => child.innerText === title);
        if (listItemToRemove) {
            completedList.removeChild(listItemToRemove);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    timeDifference();
     newListItem();

    const subjects = document.querySelectorAll('.subject_container');
    subjects.forEach(subject => {
        const checkboxes = subject.querySelectorAll('.task_checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                updateSubjectCompletion(subject, checkboxes);
            });
        });
    });
});
