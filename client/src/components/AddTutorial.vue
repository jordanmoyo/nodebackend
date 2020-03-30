<template>
    
    <div class ="submit-form">
        <div v-if="!submitted">
            
            <div class="form-group">
                <label for="title">Title</label>

                <input type="text"
                class="form-control"
                id="title"
                require
                v-model ="tutorial.title"
                name ="title"
                >

            </div>

            <div class="form-group">
                <label for="description">Description</label>

                <input type="text"
                class="form-control"
                id="description"
                require
                v-model ="tutorial.description"
                name ="description"
                >

            </div>

            <button @click="saveTutorial" class="btn btn-success">submit</button>

        </div>

        <div v-else>
            <h4>submitted Successfully!</h4>
            <button @click="newTutorial" class="btn btn-success">Add</button>
        </div>

    </div>

</template>


<script>

    import TutorialDataService from "../services/TutorialDataService";

    export default {
        name    : "add-tutorial",
        data (){
            return{
                tutorial  : {
                    id           : null,
                    title        : "",
                    description  : "",
                    published    : false
                },
                submitted : false
            }
        },
        methods :{
            saveTutorial(){
                var data = {
                    title       : this.tutorial.title,
                    description : this.tutorial.description
                };
                console.log(data);
                TutorialDataService.create(data)
                    .then(response => {
                        this.tutorial.id = response.data.id;
                        console.log(response.data);
                        this.submitted = true;
                    })
                    .catch(e => {
                        console.log(e);
                    });

            },

            newTutorial(){
                this.submitted = false;
                this.tutorial ={};
            }
        }
    }

</script>


<style >

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 56px;
}
.submit-form{
    max-width: 300px;
    margin: auto auto 30px auto;
    box-shadow: 0px 1px 20px 2px rgba(0, 0, 0, 0.075);
    padding: 70px 250px;
}

label{
    display: block;
    color: #240b36;
}
.form-control{
    margin:20px 0;
    height: 40px;
    width: 300px;
    border: 1px solid gray;
    border-radius:2px; 
}


.form-control:focus{
     box-shadow:  0px 0px 2px 0px #240b36;
}
.btn{
    height: 40px;
    border: solid 1px #240b36;
    width: 100px;
    color: white;
    background-color: #240b36;
}
.btn:hover{
    height: 40px;
    border: solid 1px #240b36;
    width: 100px;
    color: #240b36;
    background-color: white;
    transition: 1000ms; 
}
</style>