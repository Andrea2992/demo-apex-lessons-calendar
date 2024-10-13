let liId = '';
let divId = '';


function checkPastLessons() {

    const currentDay = new Date().toISOString().split('T')[0];
    const UTCTime = new Date();
    const currentTime = UTCTime.toLocaleTimeString('it-IT', {
        hour: '2-digit',
        minute: '2-digit'
    });

    const locStor = window.localStorage.getItem('lessons');
    const plocStor = JSON.parse(locStor);
   
    plocStor.filter(element => {
        return element.date < currentDay || element.date == currentDay && element.ending < currentTime
    }).forEach(element => {
        const index = plocStor.indexOf(element);
        if (index > -1) {
        plocStor.splice(index, 1);
        }
    });
    
    localStorage.setItem('lessons', JSON.stringify(plocStor));

}

function checkLocalStorage() {
    const slessonsData = JSON.stringify(lessons);
    if (window.localStorage.getItem('lessons') === null) {
        window.localStorage.setItem('lessons', slessonsData);
        checkPastLessons();
    } else {
        checkPastLessons();
    }
}
checkLocalStorage();

function createLiElem() {
    const ul = document.getElementById('ul-list');
    const fatherDiv = document.createElement('div');
    fatherDiv.setAttribute('class', 'father-div');
    const li = document.createElement('li');
    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('class', 'button-div');
    const updateButton = document.createElement('button');
    updateButton.innerHTML = 'Aggiorna lezione';
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Cancella lezione';
    ul.appendChild(fatherDiv);
    fatherDiv.appendChild(li);
    fatherDiv.appendChild(buttonDiv);
    buttonDiv.appendChild(updateButton);
    buttonDiv.appendChild(deleteButton);
    const liCounter = document.getElementsByTagName('li').length;
    li.id = 'liElem' + liCounter;
    const div1 = document.createElement('div');
    div1.setAttribute('class', 'subgrid');
    const div2 = document.createElement('div');
    div2.setAttribute('class', 'subgrid2');
    const p1 = document.createElement('p');
    p1.setAttribute('class', 'p-element');
    const p2 = document.createElement('p');
    p2.setAttribute('class', 'p-element');
    const p3 = document.createElement('p');
    p3.setAttribute('class', 'p-element');
    const p4 = document.createElement('p');
    p4.setAttribute('class', 'p-element');
    updateButton.addEventListener('click', event => updateLiElem(li.id));
    deleteButton.addEventListener('click', event => deleteLiElem(li.id));

    li.appendChild(div1);
    li.appendChild(div2);
    div1.appendChild(p1);
    div1.appendChild(p2);
    div2.appendChild(p3);
    div2.appendChild(p4);
    const paragraphObj = { p1, p2, p3, p4 };

    return paragraphObj
}

function lessonsCompilation() {
    const locStorLessons = JSON.parse(window.localStorage.getItem('lessons'));
    const nRemainingLessons = locStorLessons.length;

    for (let i = 0; i < nRemainingLessons; i++) {

        const newElem = createLiElem();
        newElem.p1.innerHTML = 'Data: ' + locStorLessons[i].date;
        newElem.p2.innerHTML = locStorLessons[i].lesson;
        newElem.p3.innerHTML = 'Docente: ' + locStorLessons[i].teacher;
        const orario = locStorLessons[i].starting + ' - ' + locStorLessons[i].ending;
        newElem.p4.innerHTML = 'Orario: ' + orario;

    }

    const liElems = document.getElementsByTagName('li');
    const lessonsCounter = document.getElementById('lessons-counter');
    lessonsCounter.innerHTML = liElems.length;

}
lessonsCompilation();


function addLesson(e) {
    e.preventDefault();

    const date = document.getElementById('day').value;
    const subjectList = document.getElementById('subjects')
    const subject = subjectList.options[subjectList.selectedIndex].text;
    const teacherList = document.getElementById('teachers');
    const teacher = teacherList.options[teacherList.selectedIndex].text;
    const startTime = document.getElementById('time-start').value;
    const endTime = document.getElementById('time-finish').value;

    const newObj = {
        date: date,
        lesson: subject,
        teacher: teacher,
        starting: startTime,
        ending: endTime
    }

    const locStor = window.localStorage.getItem('lessons');
    const pLocStor = JSON.parse(locStor);
    pLocStor.push(newObj);

    const form = document.getElementById('new-item-form');
    form.classList.remove('flex');
    form.classList.add('hide');
    const submitLessonButton = document.getElementById('confirm-add-lesson');
    submitLessonButton.classList.add('hide');

    pLocStor.sort((a, b) => sortLessons(a, b));
    const ul = document.getElementById('ul-list');
    ul.innerHTML = '';
    localStorage.setItem('lessons', JSON.stringify(pLocStor));
    lessonsCompilation();
    document.body.style.overflow = '';
}

function updateLiElem(id) {

    const liElem = document.getElementById(id);
    const div1 = liElem.getElementsByTagName('div')[0];
    const div2 = liElem.getElementsByTagName('div')[1];
    const p1 = div1.getElementsByTagName('p')[0];
    const p2 = div1.getElementsByTagName('p')[1];
    const p3 = div2.getElementsByTagName('p')[0];
    const p4 = div2.getElementsByTagName('p')[1];
    const subjectList = document.getElementById('subjects');
    const teacherList = document.getElementById('teachers');
    const startTime = document.getElementById('time-start');
    const endTime = document.getElementById('time-finish');
    const p1Text = p1.textContent.slice(-10);
    const p2Text = p2.textContent;
    const p3Text = p3.textContent.replace('Docente: ', '');
    const p4onlyHour = p4.textContent.replace('Orario: ', '');
    const p4StartText = p4onlyHour.slice(0, 5);
    const p4EndText = p4onlyHour.slice(-5);
    document.getElementById('day').value = p1Text;
    const subjectListArray = Array.from(subjectList.options);
    const subjectOption = subjectListArray.find(option => {
        return option.text === p2Text
    }
    );
    subjectOption.selected = true;
    const teacherListArray = Array.from(teacherList.options);
    const teacherOption = teacherListArray.find(option => {
        return option.text === p3Text
    }
    );
    teacherOption.selected = true;
    startTime.value = p4StartText;
    endTime.value = p4EndText;
    liId = id;

    const form = document.getElementById('new-item-form');
    form.classList.remove('hide');
    form.classList.add('flex');
    const updateLessonButton = document.getElementById('update-lesson');
    updateLessonButton.classList.remove('hide');
    document.body.style.overflow = 'hidden';

}

function confirmUpdateLiElem() {

    const date = document.getElementById('day').value;
    const subjectList = document.getElementById('subjects')
    const subject = subjectList.options[subjectList.selectedIndex].text;
    const teacherList = document.getElementById('teachers');
    const teacher = teacherList.options[teacherList.selectedIndex].text;
    const startTime = document.getElementById('time-start').value;
    const endTime = document.getElementById('time-finish').value;

    const locStorLessons = JSON.parse(window.localStorage.getItem('lessons'));

    const liElems = document.getElementsByTagName('li');
    const liElemsArray = Array.from(liElems);
    const liElemIndex = liElemsArray.findIndex(elem => elem.id === liId);
    const locStorElem = locStorLessons[liElemIndex];
    locStorElem.date = date;
    locStorElem.lesson = subject;
    locStorElem.teacher = teacher;
    locStorElem.starting = startTime;
    locStorElem.ending = endTime;

    document.getElementById('new-item-form').reset();
    liId = '';

    const form = document.getElementById('new-item-form');
    form.classList.remove('flex');
    form.classList.add('hide');
    const updateLessonButton = document.getElementById('update-lesson');
    updateLessonButton.classList.add('hide');

    locStorLessons.sort((a, b) => sortLessons(a, b));
    const ul = document.getElementById('ul-list');
    ul.innerHTML = '';
    localStorage.setItem('lessons', JSON.stringify(locStorLessons));
    lessonsCompilation();
    document.body.style.overflow = '';

}

function deleteLiElem(id) {

    const confDeleteElem = document.getElementById('confirm-delete-element')
    confDeleteElem.classList.remove('hide');
    confDeleteElem.classList.add('flex');
    divId = id;
    document.body.style.overflow = 'hidden';
}

function confirmDeleteLiElem(id) {

    const ul = document.getElementById('ul-list');
    const liElem = document.getElementById(id);
    const parent = liElem.parentElement;
    const liElems = document.getElementsByTagName('li');
    const liElemsArray = Array.from(liElems);
    const liElemIndex = liElemsArray.findIndex(elem => elem.id === id);
    const locStorLessons = JSON.parse(window.localStorage.getItem('lessons'));
    locStorLessons.splice(liElemIndex, 1);
    ul.removeChild(parent);
    localStorage.setItem('lessons', JSON.stringify(locStorLessons));

    const lessonsCounter = document.getElementById('lessons-counter');
    lessonsCounter.innerHTML = liElems.length;

    const confDeleteElem = document.getElementById('confirm-delete-element')
    confDeleteElem.classList.remove('flex');
    confDeleteElem.classList.add('hide');
    divId = '';
    document.body.style.overflow = '';
}

function cancelDelete() {

    const confDeleteElem = document.getElementById('confirm-delete-element')
    confDeleteElem.classList.remove('flex');
    confDeleteElem.classList.add('hide');
    divId = '';
    document.body.style.overflow = '';
}

function showForm() {

    const form = document.getElementById('new-item-form');
    form.classList.remove('hide');
    form.classList.add('flex');
    const submitLessonButton = document.getElementById('confirm-add-lesson');
    submitLessonButton.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

function sortLessons(a, b) {
    const dateA = a.date;
    const dateB = b.date;
    const endLessonA = a.ending;
    const endLessonB = b.ending;
    const textA = dateA + endLessonA;
    const textB = dateB + endLessonB;

    if (textA < textB) {
        return -1;
    } else if (textA > textB) {
        return 1;
    }
    return 0;
}

function cancelOperation() {
    const form = document.getElementById('new-item-form');
    const confirmUpdateButton = document.getElementById('update-lesson');
    const confirmAddButton = document.getElementById('confirm-add-lesson');
    form.reset();
    form.classList.remove('flex');
    form.classList.add('hide');
    if (!confirmUpdateButton.classList.contains('hide')) {
        confirmUpdateButton.classList.add('hide');
    }
    if (!confirmAddButton.classList.contains('hide')) {
        confirmAddButton.classList.add('hide');
    }
    document.body.style.overflow = '';
}
