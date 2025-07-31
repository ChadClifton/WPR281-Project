async function loadUsernamesAndApsswords(){
    try{
        const response = await fetch('EmailsAndPasswords.txt');// FETCHS THE TXT
        const text = await response.text(); // assigns each line 
        const lines = text.split('\n');
        const userData = {};
        lines.forEach(line =>{
            if(line.trim() !== ''){
            const [email,password] = line.split(' ');
            userData[email.trim()] = password.trim();
            }
        });
        
        return userData;
    }catch(err){
        console.error('Error loading users:', err);
    }

}


async function validateForm(){
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const userData = await loadUsernamesAndApsswords();

    if(userData.hasOwnProperty(email)){
        if(userData[email] === password){

            courseDescription = document.getElementById('course').innerHTML.trim();
             
        
            
            if(courseDescription == 'Bachelors In Artificial Intelligence And Robotics'){
                window.location.href = '../CourseModule/CourseModule 1.html';
            }
            if(courseDescription == 'Certificate In Artificial Intelligence'){
                window.location.href = '../CourseModule/CourseModule 2.html';
            } 
            if(courseDescription == 'Diploma In Machine Learning And DataScience'){
                window.location.href = '../CourseModule/CourseModule 3.html';
            }
            if(courseDescription == 'Honors In Machine Learning'){
                window.location.href = '../CourseModule/CourseModule 4.html';
            }
            if(courseDescription == 'Masters In Artificial Intelligence'){
                window.location.href = '../CourseModule/CourseModule 5.html';
            }
            if(courseDescription == 'Postgrad Diploma In DataScience And Artificial Intelligence'){
                window.location.href = '../CourseModule/CourseModule 6.html';
            }
       }
        else{
            alert('Invalid password please try again');
        }
    }else{
        alert('Invalid email please try again');
    }

}
document.getElementById('input').addEventListener('click',function(){
    validateForm();
});