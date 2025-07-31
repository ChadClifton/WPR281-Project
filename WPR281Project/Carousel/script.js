let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

showSlide(currentSlide);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        } else {
            const courseDetailsDiv = slide.querySelector('.course-details');
            if (courseDetailsDiv) {
                courseDetailsDiv.innerHTML = '';
            }
        }
    });
}

function navigateSlides(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function showCourseDetails(slideIndex) {
    const slide = slides[slideIndex];
    const courseDetailsDiv = slide.querySelector('.course-details');
    
    const courseCode = slide.getAttribute('data-course-code');
    const lecturer = slide.getAttribute('data-lecturer');
    const duration = slide.getAttribute('data-duration');
    const startDate = slide.getAttribute('data-start-date');
    const venue = slide.getAttribute('data-venue');

    courseDetailsDiv.innerHTML = `
        <strong>Course Code:</strong> ${courseCode}<br>
        <strong>Lecturer:</strong> ${lecturer}<br>
        <strong>Duration:</strong> ${duration}<br>
        <strong>Start Date:</strong> ${startDate}<br>
        <strong>Venue:</strong> ${venue}
    `;
}

document.querySelectorAll('.learn-more').forEach((button, index) => {
    button.addEventListener('click', () => showCourseDetails(currentSlide));
});

document.querySelector('.prev').addEventListener('click', () => navigateSlides(-1));
document.querySelector('.next').addEventListener('click', () => navigateSlides(1));
