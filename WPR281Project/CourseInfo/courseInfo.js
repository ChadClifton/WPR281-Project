document.addEventListener('DOMContentLoaded', function() {

    // Creates the course info objects for each course
    function CourseInfo(overviewT, headings, descriptions) {
        this.overview = overviewT;
        this.moduleHeadings = headings;
        this.moduleDescriptions = descriptions;
    }

    function setCourseInfo(overviewText, headings, descriptions) {

        // Creating the CourseInfo object 
        let courseInfo1 = new CourseInfo(overviewText, headings, descriptions);

        // Creating the Overview section
        let overview = document.getElementById('overview');
        let p = document.createElement('p');
        p.textContent = courseInfo1.overview;
        p.style.fontSize = '18px';
        overview.appendChild(p);

        // This creates the heading and the list for the course descriptions
        let arrayOfArticles = document.querySelectorAll('.courseInfoContainer');

        arrayOfArticles.forEach((article, index) => {

            let h3 = document.createElement('h3');
            h3.textContent = courseInfo1.moduleHeadings[index];
            article.appendChild(h3);

            let ul = document.createElement('ul'); // Use ul to contain li elements
            article.appendChild(ul);

            // Loop through the module descriptions and create list items
            courseInfo1.moduleDescriptions[index].forEach(description => {
                let li = document.createElement('li');
                li.textContent = description;
                ul.appendChild(li);
            });
        });
    }

    function main() {
        let title = document.title;
        let overviewText;
        let headings;
        let descriptions;

        // Course information to pass into the function
        switch(title) {

            // Bachelor's Degree in Artificial Intelligence and Robotics
            case "Bachelor's Degree in Artificial Intelligence and Robotics":
                overviewText = "This degree combines AI and robotics, focusing on designing and implementing intelligent robotic systems. It covers theoretical and practical aspects, preparing students for careers in robotics and automation.";
                headings = ['Robotics Fundamentals', 'Deep Learning and Neural Networks', 'Natural Language Processing', 'Robotic Systems Design', 'Advanced Machine Learning', 'Capstone Project in Robotics'];
                descriptions = [
                    ['Introduction to robotics and control systems', 'Kinematics and dynamics of robots', 'Actuators and sensors'],
                    ['Understanding neural network architectures', 'Training deep learning models with frameworks like TensorFlow', 'Applications in image and speech recognition'],
                    ['Techniques for processing and analyzing textual data', 'Text mining and sentiment analysis', 'Building NLP models for various applications'],
                    ['Designing and building robotic prototypes', 'Integration of sensors and control systems', 'Testing and evaluation of robotic systems'],
                    ['Advanced algorithms for predictive modeling', 'Ensemble methods and boosting', 'Model deployment and maintenance'],
                    ['Design and implementation of a robotic solution', 'Project management and teamwork', 'Presentation and documentation of project outcomes']
                ];
                break;

            // Certificate in Artificial Intelligence
            case "Certificate in Artificial Intelligence":
                overviewText = "This certificate course is designed to provide a foundational understanding of AI concepts and techniques. It is ideal for beginners who want to start a career in AI or incorporate AI knowledge into their current roles.";
                headings = ['AI Basics', 'Machine Learning Fundamentals', 'Data Science Essentials', 'AI Ethics and Policy', 'Practical AI Applications', 'AI in Business'];
                descriptions = [
                    ['Introduction to AI concepts', 'History and applications of AI', 'Future of AI technology'],
                    ['Supervised and unsupervised learning', 'Model evaluation and improvement', 'AI project lifecycle'],
                    ['Data collection and processing', 'Data visualization techniques', 'Statistical analysis and interpretation'],
                    ['Ethical considerations in AI', 'AI policy and regulation', 'Societal impacts of AI'],
                    ['AI in healthcare', 'AI in finance', 'AI in marketing'],
                    ['AI strategy and implementation', 'AI project management', 'Business intelligence with AI']
                ];
                break;

            // Diploma in Machine Learning and Data Science
            case "Diploma in Machine Learning and Data Science":
                overviewText = "This diploma program covers essential machine learning and data science skills, preparing students for data-driven careers in various industries.";
                headings = ['Data Science Fundamentals', 'Machine Learning Techniques', 'Practical Data Analysis', 'Data Visualization', 'Big Data Technologies', 'Capstone Project'];
                descriptions = [
                    ['Exploratory data analysis', 'Data cleaning and preprocessing', 'Introduction to data pipelines'],
                    ['Classification and regression algorithms', 'Clustering and association rules', 'Dimensionality reduction techniques'],
                    ['Real-world data analysis projects', 'Using Python for data science', 'Building interactive data dashboards'],
                    ['Visual analytics', 'Data visualization tools', 'Interactive visualizations'],
                    ['Introduction to Hadoop and Spark', 'NoSQL databases', 'Big data processing frameworks'],
                    ['Data-driven project execution', 'Collaboration with industry partners', 'Presentation of findings']
                ];
                break;

            // Honors Degree in Machine Learning
            case "Honors Degree in Machine Learning":
                overviewText = "This honors program offers a focused study on machine learning, providing in-depth knowledge and research opportunities. It is designed for students who wish to pursue a career in academia or advanced industry roles.";
                headings = ['Advanced Machine Learning', 'Research Methodologies', 'Thesis Project', 'Computational Learning Theory', 'Applied Machine Learning', 'Machine Learning Ethics'];
                descriptions = [
                    ['Deep reinforcement learning', 'Advanced neural networks', 'Graphical models and Bayesian networks'],
                    ['Research design and ethics', 'Qualitative and quantitative analysis', 'Literature review and synthesis'],
                    ['Conducting original research', 'Writing and defending a thesis', 'Publishing research findings'],
                    ['Complexity of learning', 'PAC learning framework', 'VC dimension theory'],
                    ['Machine learning in healthcare', 'Machine learning in finance', 'Machine learning in industry'],
                    ['Ethical machine learning practices', 'Fairness and transparency in AI', 'Regulation and compliance']
                ];
                break;

            // Master's Degree in Artificial Intelligence
            case "Master's Degree in Artificial Intelligence":
                overviewText = "This master's program delves deeper into AI research, focusing on cutting-edge developments and complex AI systems. It prepares students for advanced roles in AI development and research.";
                headings = ['AI Theory and Practice', 'Advanced AI Systems', 'Capstone Project', 'AI Research Methods', 'AI in Industry', 'AI Strategy and Innovation'];
                descriptions = [
                    ['Advanced algorithm design', 'Computational intelligence', 'Emerging AI technologies'],
                    ['Building large-scale AI systems', 'AI ethics and regulation', 'AI in industry applications'],
                    ['Complex AI project implementation', 'Collaboration with industry partners', 'Technical and business impact assessment'],
                    ['Research methodologies in AI', 'Experimental design', 'Data collection and analysis'],
                    ['AI in autonomous vehicles', 'AI in robotics', 'AI in natural language processing'],
                    ['Innovation in AI', 'AI project lifecycle management', 'AI and digital transformation']
                ];
                break;

            // Postgraduate Diploma in Data Science and Artificial Intelligence
            case "Postgraduate Diploma in Data Science and Artificial Intelligence":
                overviewText = "This program is designed for graduates who want to specialize in data science and AI, focusing on advanced techniques and tools used in the industry.";
                headings = ['Data Engineering', 'Predictive Analytics', 'AI and Machine Learning', 'Advanced Data Science Techniques', 'Data Science Project', 'Industry Applications'];
                descriptions = [
                    ['Data architecture and infrastructure', 'Data processing frameworks', 'Cloud-based data solutions'],
                    ['Predictive modeling techniques', 'Advanced statistical methods', 'Data-driven decision making'],
                    ['Implementing AI solutions', 'Machine learning in practice', 'AI project management'],
                    ['Time series analysis', 'Survival analysis', 'Bayesian data analysis'],
                    ['End-to-end data science project', 'Cross-functional collaboration', 'Project documentation'],
                    ['Data science in healthcare', 'Data science in finance', 'Data science in e-commerce']
                ];
                break;

            default:
                console.error('Course information not found for this title');
                return;
        }

        setCourseInfo(overviewText, headings, descriptions);
    }

    main();
});
