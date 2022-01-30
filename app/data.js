// TODO:This should be a database
// uri is unused but kept because functionality could become important
const primaryOptions = [
    //{ name: "Timeline", uri: "#", sortSelector: "start" },
    { name: "Title", uri: "#", sortSelector: "title" },
    { name: "Company", uri: "#", sortSelector: "company" },
    { name: "Key Skills", uri: "#", sortSelector: "language" },
];

// TODO:This should be a database
const workHistory =
    [
        {
            title: "Teacher",
            company : "Albuquerque Public Schools",
            startYear: 2020,
            endYear: 2021,
            language: "Unity",
            repeat: "N",
            task: "Migrated student data from one excel sheet for the school into one sheet per student"
        },
        {
            title: "Teacher",
            company : "Albuquerque Public Schools",
            startYear: 2020,
            endYear: 2021,
            language: "C#",
            repeat: "Y",
            task: "Migrated student data from one excel sheet for the school into one sheet per student"
        },
        {
            title: "Teacher",
            company : "Albuquerque Public Schools",
            startYear: 2019,
            endYear: 2020,
            language: "Unity",
            repeat: "N",
            task: "Created program to transfer student date between different teacher websites"
        },
        {
            title: "Teacher",
            company : "Albuquerque Public Schools",
            startYear: 2019,
            endYear: 2020,
            language: "C#",
            repeat: "Y",
            task: "Created program to transfer student date between different teacher websites"
        },
        {
            title: "Teacher",
            company : "Albuquerque Public Schools",
            startYear: 2018,
            endYear: 2020,
            language: "N\/A",
            repeat: "N",
            task: "Took time off from tech to give back to community as substitute teacher"
        },
        {
            title: "Teacher",
            company : "Albuquerque Public Schools",
            startYear: 2020,
            endYear: 2021,
            language: "N\/A",
            repeat: "N",
            task: "Combined mathematics and google sheets functions to display practical application."
        },
        {
            title: "Teacher",
            company : "Albuquerque Public Schools",
            startYear: 2020,
            endYear: 2021,
            language: "Leadership",
            repeat: "N",
            task: "Created PD to teach educators how to use google suite"
        },
        {
            title: "Database Administrator",
            company : "Consulting",
            startYear: 2018,
            endYear: 2019,
            language: "AWS",
            repeat: "N",
            task: "Migrated art assets into a restful AWS api"
        },
        {
            title: "Database Administrator",
            company : "Consulting",
            startYear: 2018,
            endYear: 2019,
            language: "Java",
            repeat: "Y",
            task: "Migrated art assets into a restful AWS api"
        },
        {
            title: "Software Engineer",
            company : "Consulting",
            startYear: 2019,
            endYear: 2020,
            language: "C#",
            repeat: "N",
            task: "Created VR Unity program for displaying art"
        },
        {
            title: "Software Engineer",
            company : "Consulting",
            startYear: 2019,
            endYear: 2020,
            language: "Unity",
            repeat: "Y",
            task: "Created VR Unity program for displaying art"
        },
        {
            title: "Software Engineer",
            company : "Consulting",
            startYear: 2020,
            endYear: 2021,
            language: "C#",
            repeat: "N",
            task: "Created program to pull Tennis information and analyze it for trends"
        },
        {
            title: "Software Engineer",
            company : "Consulting",
            startYear: 2020,
            endYear: 2021,
            language: "Unity",
            repeat: "Y",
            task: "Created program to pull Tennis information and analyze it for trends"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "Unity",
            repeat: "N",
            task: "Optimized player experience"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "C#",
            repeat: "Y",
            task: "Optimized player experience"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "AWS",
            repeat: "Y",
            task: "Optimized player experience"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "Unity",
            repeat: "N",
            task: "Analyzed and balanced critical gameplay"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "C#",
            repeat: "Y",
            task: "Analyzed and balanced critical gameplay"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "AWS",
            repeat: "Y",
            task: "Analyzed and balanced critical gameplay"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "Unity",
            repeat: "N",
            task: "Designed proto-type game for investor display"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "C#",
            repeat: "Y",
            task: "Designed proto-type game for investor display"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "AWS",
            repeat: "Y",
            task: "Designed proto-type game for investor display"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "Unity",
            repeat: "N",
            task: "Lead team to build proto-type game"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "C#",
            repeat: "Y",
            task: "Lead team to build proto-type game"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "AWS",
            repeat: "Y",
            task: "Lead team to build proto-type game"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "Leadership",
            repeat: "N",
            task: "Maintained and built investor relationships"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "Unity",
            repeat: "N",
            task: "Implemented software to detect and report cheating"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "C#",
            repeat: "Y",
            task: "Implemented software to detect and report cheating"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "AWS",
            repeat: "Y",
            task: "Implemented software to detect and report cheating"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "Unity",
            repeat: "N",
            task: "Maintained codebase"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "C#",
            repeat: "Y",
            task: "Maintained codebase"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2017,
            endYear: 2018,
            language: "AWS",
            repeat: "Y",
            task: "Maintained codebase"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Java",
            repeat: "N",
            task: "Optimized matching system to reduce runtime from >24 hours to 6-7 hours"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "MySql",
            repeat: "Y",
            task: "Optimized matching system to reduce runtime from >24 hours to 6-7 hours"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Command Line",
            repeat: "Y",
            task: "Optimized matching system to reduce runtime from >24 hours to 6-7 hours"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Bash",
            repeat: "Y",
            task: "Optimized matching system to reduce runtime from >24 hours to 6-7 hours"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "MySql",
            repeat: "N",
            task: "Transitioned databases to AWS"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Command Line",
            repeat: "Y",
            task: "Transitioned databases to AWS"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Bash",
            repeat: "Y",
            task: "Transitioned databases to AWS"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Java",
            repeat: "N",
            task: "Project Lead: Importing IPEDS, search engine, SQL injection protection, counselor center"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "JS",
            repeat: "Y",
            task: "Project Lead: Importing IPEDS, search engine, SQL injection protection, counselor center"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "CSS",
            repeat: "Y",
            task: "Project Lead: Importing IPEDS, search engine, SQL injection protection, counselor center"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "MySql",
            repeat: "Y",
            task: "Project Lead: Importing IPEDS, search engine, SQL injection protection, counselor center"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Command Line",
            repeat: "Y",
            task: "Project Lead: Importing IPEDS, search engine, SQL injection protection, counselor center"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Bash",
            repeat: "Y",
            task: "Project Lead: Importing IPEDS, search engine, SQL injection protection, counselor center"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Java",
            repeat: "N",
            task: "Assisted in implementation and creation of backend architecture"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "MySql",
            repeat: "Y",
            task: "Assisted in implementation and creation of backend architecture"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Command Line",
            repeat: "Y",
            task: "Assisted in implementation and creation of backend architecture"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Java",
            repeat: "N",
            task: "Optimized database scheme, queries, and backend"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "MySql",
            repeat: "Y",
            task: "Optimized database scheme, queries, and backend"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Command Line",
            repeat: "Y",
            task: "Optimized database scheme, queries, and backend"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Bash",
            repeat: "Y",
            task: "Optimized database scheme, queries, and backend"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Java",
            repeat: "N",
            task: "Maintained, upgraded, and tested databases"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "JS",
            repeat: "Y",
            task: "Maintained, upgraded, and tested databases"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "CSS",
            repeat: "Y",
            task: "Maintained, upgraded, and tested databases"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "MySql",
            repeat: "Y",
            task: "Maintained, upgraded, and tested databases"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Command Line",
            repeat: "Y",
            task: "Maintained, upgraded, and tested databases"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Bash",
            repeat: "Y",
            task: "Maintained, upgraded, and tested databases"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "MySql",
            repeat: "N",
            task: "Released Code to Production"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Command Line",
            repeat: "Y",
            task: "Released Code to Production"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Bash",
            repeat: "Y",
            task: "Released Code to Production"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Java",
            repeat: "N",
            task: "Supported full team of developers on backend"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "MySql",
            repeat: "Y",
            task: "Supported full team of developers on backend"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Command Line",
            repeat: "Y",
            task: "Supported full team of developers on backend"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Bash",
            repeat: "Y",
            task: "Supported full team of developers on backend"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Java",
            repeat: "N",
            task: "Protected code and database from injection and other forms of attack"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "MySql",
            repeat: "Y",
            task: "Protected code and database from injection and other forms of attack"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Command Line",
            repeat: "Y",
            task: "Protected code and database from injection and other forms of attack"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Bash",
            repeat: "Y",
            task: "Protected code and database from injection and other forms of attack"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Java",
            repeat: "N",
            task: "Awards for performance, taking ownership and discovering better ways"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "JS",
            repeat: "Y",
            task: "Awards for performance, taking ownership and discovering better ways"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "CSS",
            repeat: "Y",
            task: "Awards for performance, taking ownership and discovering better ways"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "MySql",
            repeat: "Y",
            task: "Awards for performance, taking ownership and discovering better ways"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Command Line",
            repeat: "Y",
            task: "Awards for performance, taking ownership and discovering better ways"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Bash",
            repeat: "Y",
            task: "Awards for performance, taking ownership and discovering better ways"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Java",
            repeat: "N",
            task: "Worked as System Admin and DBA during company interim"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "MySql",
            repeat: "Y",
            task: "Worked as System Admin and DBA during company interim"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Command Line",
            repeat: "Y",
            task: "Worked as System Admin and DBA during company interim"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Bash",
            repeat: "Y",
            task: "Worked as System Admin and DBA during company interim"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Java",
            repeat: "N",
            task: "Generated analytics"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "MySql",
            repeat: "Y",
            task: "Generated analytics"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Command Line",
            repeat: "Y",
            task: "Generated analytics"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Bash",
            repeat: "Y",
            task: "Generated analytics"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Java",
            repeat: "N",
            task: "Expert on MySql script optimization"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "MySql",
            repeat: "Y",
            task: "Expert on MySql script optimization"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Java",
            repeat: "N",
            task: "Migrated system to restful api"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "JS",
            repeat: "Y",
            task: "Migrated system to restful api"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "CSS",
            repeat: "Y",
            task: "Migrated system to restful api"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "MySql",
            repeat: "Y",
            task: "Migrated system to restful api"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Command Line",
            repeat: "Y",
            task: "Migrated system to restful api"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Bash",
            repeat: "Y",
            task: "Migrated system to restful api"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Java",
            repeat: "N",
            task: "Designed architecture for restful api as database expert"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "JS",
            repeat: "Y",
            task: "Designed architecture for restful api as database expert"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "CSS",
            repeat: "Y",
            task: "Designed architecture for restful api as database expert"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "MySql",
            repeat: "Y",
            task: "Designed architecture for restful api as database expert"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Command Line",
            repeat: "Y",
            task: "Designed architecture for restful api as database expert"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Bash",
            repeat: "Y",
            task: "Designed architecture for restful api as database expert"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Java",
            repeat: "N",
            task: "Created restful api as Full Stack Java developer"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "JS",
            repeat: "Y",
            task: "Created restful api as Full Stack Java developer"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "CSS",
            repeat: "Y",
            task: "Created restful api as Full Stack Java developer"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "MySql",
            repeat: "Y",
            task: "Created restful api as Full Stack Java developer"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Command Line",
            repeat: "Y",
            task: "Created restful api as Full Stack Java developer"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Bash",
            repeat: "Y",
            task: "Created restful api as Full Stack Java developer"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Java",
            repeat: "N",
            task: "Maintained Code base"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "JS",
            repeat: "Y",
            task: "Maintained Code base"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "CSS",
            repeat: "Y",
            task: "Maintained Code base"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "MySql",
            repeat: "Y",
            task: "Maintained Code base"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Command Line",
            repeat: "Y",
            task: "Maintained Code base"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Bash",
            repeat: "Y",
            task: "Maintained Code base"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Java",
            repeat: "N",
            task: "Created detection for sql injection"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "MySql",
            repeat: "Y",
            task: "Created detection for sql injection"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Command Line",
            repeat: "Y",
            task: "Created detection for sql injection"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Bash",
            repeat: "Y",
            task: "Created detection for sql injection"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Java",
            repeat: "N",
            task: "Created Search engine"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "MySql",
            repeat: "Y",
            task: "Created Search engine"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Command Line",
            repeat: "Y",
            task: "Created Search engine"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Bash",
            repeat: "Y",
            task: "Created Search engine"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Java",
            repeat: "N",
            task: "Created resources to display college information to students"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "JS",
            repeat: "Y",
            task: "Created resources to display college information to students"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "CSS",
            repeat: "Y",
            task: "Created resources to display college information to students"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "MySql",
            repeat: "Y",
            task: "Created resources to display college information to students"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Command Line",
            repeat: "Y",
            task: "Created resources to display college information to students"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Bash",
            repeat: "Y",
            task: "Created resources to display college information to students"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Java",
            repeat: "N",
            task: "Created resource for clients to observe student interest"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "JS",
            repeat: "Y",
            task: "Created resource for clients to observe student interest"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "CSS",
            repeat: "Y",
            task: "Created resource for clients to observe student interest"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "MySql",
            repeat: "Y",
            task: "Created resource for clients to observe student interest"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Command Line",
            repeat: "Y",
            task: "Created resource for clients to observe student interest"
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Bash",
            repeat: "Y",
            task: "Created resource for clients to observe student interest"
        },
        {
            title: "Software Engineer",
            company : "Universal Medical Data",
            startYear: 2010,
            endYear: 2012,
            language: "Python",
            repeat: "N",
            task: "Created a Web user interface to handle personal data"
        },
        {
            title: "Software Engineer",
            company : "Universal Medical Data",
            startYear: 2010,
            endYear: 2012,
            language: "Python",
            repeat: "N",
            task: "Created a pdf of data to verify and print"
        },
        {
            title: "Software Engineer",
            company : "Universal Medical Data",
            startYear: 2010,
            endYear: 2012,
            language: "Leadership",
            repeat: "N",
            task: "Worked with others to enable communication with their database"
        },
        {
            title: "Software Engineer",
            company : "Universal Medical Data",
            startYear: 2010,
            endYear: 2012,
            language: "Java",
            repeat: "N",
            task: "Designed and programmed the primary code for assigning subscriber numbers to customers. Generated ten million unique numbers as users identifying codes. Designed to ensure that if any two numbers were swapped, mistyped, or incremented, then the program would recognize the number to be invalid"
        },
        {
            title: "Software Engineer",
            company : "Rapscallion Studios",
            startYear: 2011,
            endYear: 2012,
            language: "Flash",
            repeat: "N",
            task: "Programmed the AI for two shooter games. AI was required to handle predetermined paths and paths based on players dynamic position to provide a challenge to the player. Designed level layout. Programmed UI interface. Uploaded projects on Git while working with others in company."
        },
        {
            title: "Software Engineer",
            company : "Rapscallion Studios",
            startYear: 2011,
            endYear: 2012,
            language: "C++",
            repeat: "Y",
            task: "Programmed the AI for two shooter games. AI was required to handle predetermined paths and paths based on players dynamic position to provide a challenge to the player. Designed level layout. Programmed UI interface. Uploaded projects on Git while working with others in company."
        },
        {
            title: "Software Engineer",
            company : "Rapscallion Studios",
            startYear: 2011,
            endYear: 2012,
            language: "Unity",
            repeat: "Y",
            task: "Programmed the AI for two shooter games. AI was required to handle predetermined paths and paths based on players dynamic position to provide a challenge to the player. Designed level layout. Programmed UI interface. Uploaded projects on Git while working with others in company."
        },
        {
            title: "Software Engineer",
            company : "Cappex",
            startYear: 2013,
            endYear: 2015,
            language: "Leadership",
            repeat: "N",
            task: "Worked with team to design Agile 2 week sprints"
        },
        {
            title: "Database Administrator",
            company : "Cappex",
            startYear: 2015,
            endYear: 2016,
            language: "Leadership",
            repeat: "N",
            task: "Worked with team to design Agile 2 week sprints"
        },
        {
            title: "Project Director",
            company : "Gaudium, Inc",
            startYear: 2013,
            endYear: 2015,
            language: "Leadership",
            repeat: "N",
            task: "Worked with team to design Agile 2 week sprints"
        },
        {
            title: "Technical Analysis",
            company : "Sandia National Labs",
            startYear: 2019,
            endYear: 2010,
            language: "Python",
            repeat: "N",
            task: "Designed and programmed a tool for engineers that would estimate the average radius of curvature of a computer chip given a series of thermal processes."
        },
        {
            title: "Technical Analysis",
            company : "Sandia National Labs",
            startYear: 2019,
            endYear: 2010,
            language: "Command Line",
            repeat: "Y",
            task: "Designed and programmed a tool for engineers that would estimate the average radius of curvature of a computer chip given a series of thermal processes."
        },
        {
            title: "Tutor",
            company : "Self-Employed",
            startYear: 2003,
            endYear: 2019,
            language: "N\/A",
            repeat: "N",
            task: "Highly rated math tutor who taught a variety of classes from algebra through advanced calculus to students from age 16 to 60 at the secondary and university levels. Teacher Assistant for complex analysis class. Aided people on SAT and ACT preparation"
        }
    ]