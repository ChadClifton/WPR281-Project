function removeTag(){
    localStorage.setItem('showModuleNavItem','False')
    window.location.href = '../HomePage/home.html'
}



document.addEventListener('DOMContentLoaded', function() {
    // Check if the flag is set
    if (localStorage.getItem('showModuleNavItem') === 'true' || document.cookie.includes('showModuleNavItem=true')) {
        // Code to dynamically add the new navigation item
        let ulist = document.getElementById('list');
        let lNode = document.createElement('li');
        let lNode2 = document.createElement('li');
        let aNode = document.createElement('a');

        let buttonNode = document.createElement('a');
        buttonNode.setAttribute('onclick' , 'removeTag()');
        buttonNode.innerText = 'Log out'
        buttonNode.classList.add("nav-item");



        aNode.setAttribute('href', '../CourseModule/' + localStorage.getItem('selectedPage'));
        aNode.setAttribute('class', 'nav-item');
        aNode.innerHTML = 'Module';

        lNode.appendChild(aNode);
        lNode2.appendChild(buttonNode)
        ulist.appendChild(lNode);
        ulist.append(lNode2);
    }
});