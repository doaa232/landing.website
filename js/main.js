
new Vue({
    el:'#app',
    data:{
        showMenu:false, 
        mutualMon:true,
        cart1Front:false,
        cart2Front:false,
        ceo:true,
        themeMode:"light",
        questions:[
            {
                id:1,
                question:"App installation failed, how to update system information?",
                answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error soluta nam mollitia vel placeat, consequuntur cumque harum quisquam numquam totam velit, accusamus deserunt, inventore sequi doloribus quas! Repudiandae, saepe doloremque.",
                display: 'none',
                showAnswer:true,
            },
            {
                id:2,
                question:"Website reponse taking time, how to improve?",
                answer:"Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error soluta nam mollitia vel placeat accusamus deserunt, inventore sequi doloribus quas! Repudiandae, saepe doloremque.",
                display: 'none',
                showAnswer:true,
            },
            {
                id:3,
                question:"New update fixed all bug and issues?",
                answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.doloremque.",
                display: 'none',
                showAnswer:true,
            },
            {
                id:4,
                question:"How to contact with riders emergency?",
                answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error soluta nam mollitia vel placeat, consequuntur cumque harum quisquam numquam totam velit, Error soluta nam mollitia vel placeat, consequuntur cumque harum quisquam numquam totam velit accusamus deserunt, inventore sequi doloribus quas! Repudiandae, saepe doloremque.",
                display: 'none',
                showAnswer:true,
            },
        ],


    },
    methods: {
        themeSwitch(){
            if(this.themeMode == "light"){
                this.trans();
                document.documentElement.setAttribute('data-theme','dark')
                this.themeMode = "dark"
            }else{
                this.trans();
                document.documentElement.setAttribute('data-theme','light')
                this.themeMode = "light"
            }
        },
        trans(){
            document.documentElement.classList.add('transition')
            setTimeout(() => {
                document.documentElement.classList.remove('transition')
            }, 1000);
        },
        showTheAnswer(id){

            this.questions.forEach(question => {
                if (question.id == id) {
                    var idIndex = this.questions.indexOf(question);
                    if (this.questions[idIndex].display == "none") {
                        this.questions[idIndex].display="block";

                        this.questions[idIndex].showAnswer=false;
                        
                    }else{
                        this.questions[idIndex].display="none";
                        this.questions[idIndex].showAnswer=true;

                    }
                    
                }
            });
            
        },
    },
});
