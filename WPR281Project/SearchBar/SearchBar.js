document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const autocompleteItems = document.getElementById('autocomplete-items');
    const searchForm = document.getElementById('searchForm');

    const suggestions = [
        'Bachelors in Artificial Intelligence and Robotics',
        'Certificate in Artificial Intelligence',
        'Diploma in Machine Learning and Data Science',
        'Honors in Machine Learning',
        'Masters in Artificial Intelligence',
        'Postgrad Diploma in Data Science and Artificial Intelligence'
    ];

    const courseMap = suggestions.map(suggestion => suggestion.toLowerCase());

    searchInput.addEventListener('input', () => {
        const inputValue = searchInput.value.toLowerCase();
        autocompleteItems.innerHTML = '';

        suggestions.forEach(suggestion => {
            if (suggestion.toLowerCase().includes(inputValue) && inputValue) {
                const section = document.createElement('section');
                section.classList.add('autocomplete-item');
                section.textContent = suggestion;

                section.addEventListener('click', () => {
                    navigateToCourse(suggestion);
                });

                autocompleteItems.appendChild(section);
            }
        });
    });

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const enteredCourse = searchInput.value.trim();
        const matchedCourse = courseMap.find(course => course.toLowerCase() === enteredCourse.toLowerCase());

        if (matchedCourse) {
            navigateToCourse(matchedCourse);
        } else {
            alert('Course not found. Please select a valid course.');
        }
    });

    function navigateToCourse(course) {
        const coursePage = `../CourseInfo/${course.toLowerCase().replace(/\s+/g, '')}.html`;
        window.location.href = coursePage;
    }

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !autocompleteItems.contains(e.target)) {
            autocompleteItems.innerHTML = '';
        }
    });
});
