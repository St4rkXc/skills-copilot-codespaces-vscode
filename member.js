function skillsMember(){
    let member = {
        name: "Javier",
        age: 25,
        skills: ["JavaScript", "HTML", "CSS", "React", "Node.js"],
        showSkills: function(){
            this.skills.forEach(function(skill){
                console.log(`${this.name} knows ${skill}`);
            });
        }
    }
    member.showSkills();
}