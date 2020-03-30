<template>
    <div class="container">
        <div class="top">
            <div class="form-group">

                <input type="text"
                class="form-control"
                placeholder="Search by title"
                id="description"
                require
                v-model ="title"
                >
                <button @click="searchTitle" class="btn btn-success">Search</button>

            </div>

            
        </div>

        <div class="bottom">

            <div class="bottom-child left">
                <h2>Tutorial List</h2>
                
                <ul class="list-group">
                    <li class="list-group-item"
                    :class="{active : index == currentIndex }"
                    v-for="(tutorial, index) in tutorials" 
                    :key="index"
                    @click="setActiveTutorial(tutorial, index)"

                    >{{ tutorial.title || tutorial }}</li>
                    
                </ul>

                

                <div class="container space-btw">

                    <button class="btn-delete" @click="removeAllTutorials">Remove All</button>
                    <button class="btn-delete btnSpecial" @click="mounted">Load list </button>

                </div>

            </div>


            <div class="bottom-child right">

                <div v-if = "currentTutorial">

                    <h3>Tutorial</h3>

                    <div class="tutorial-detail">
                        <label> <strong>Title: </strong> </label> <p>{{ currentTutorial.title }}</p>
                    </div>

                    <div class="tutorial-detail">
                        <label> <strong>Description: </strong> </label><p > {{ currentTutorial.description }}</p>
                    </div>

                    <div class="tutorial-detail">
                        <label> <strong>Status: </strong> </label> <p>{{ currentTutorial.published ? "Published" : "Pending"}}</p>
                    </div>

                    
                    <a :href="'/tutorials/' + currentTutorial.id">
                        <button class="btn">Edit</button>
                    </a>
                    

                </div>

                <div v-else >
                    <br> <p>Please click on a tutorial...</p>
                </div>

            </div>

        </div>
    </div>
</template>



<script>
import TutorialDataService from "../services/TutorialDataService";
export default {
    name        : "tutorials",
    data(){
        return{
            tutorials        : [],
            currentTutorial : null,
            currentIndex    : -1,
            title           : ""
        };
    },
    methods    : {
        retrieveTutorials(){
            TutorialDataService.getAll()
                .then(response => {
                    this.tutorials = response.data;
                    console.log(response);
                })
                .catch(e => console.log (e));
        },
        refreshList(){
            this.retrieveTutorials();
            this.currentTutorial = null;
            this.currentIndex = -1;
        },
        setActiveTutorial(tutorial, index){
            this.currentTutorial = tutorial;
            this.currentIndex    = index;
        },
        removeAllTutorials(){
            TutorialDataService.deleteAll()
                .then(response => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch(e => console.log(e))
        },
        searchTitle(){
            TutorialDataService.findByTitle(this.title)
                .then(response => {
                    this.tutorials = response.data;
                    console.log(response.data);
                })
                .catch(e => console.log(e));
        },
        mounted(){
            this.retrieveTutorials();
        }
    }
};


</script>





<style >

.container {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    padding-top: 7px;
}
.top , .bottom{
    display: flex;
    justify-content: center;
    /* align-items: center; */
}
.submit-form{
    max-width: 300px;
    margin: auto;
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
.form-control::placeholder{
   text-align: center;  
   font-size: 15px;
}
.btn{
    height: 42px;
    border: solid 1px #240b36;
    width: 100px;
    color: white;
    background-color: #240b36;
}
.btn-delete{
    height: 42px;
    border: solid 1px #c31432;
    width: 100px;
    color: white;
    background-color: #c31432;
    margin: 40px 0 0 0;
}
.btn:hover{
    
    border: solid 1px #240b36;
    width: 100px;
    color: #240b36;
    background-color: white;
    transition: 1000ms; 
}
.btn-delete:hover{
    
    border: solid 1px #c31432;
    width: 100px;
    color: #c31432;
    background-color: white;
    transition: 1000ms; 
}
h3 ,h2{
    color: #240b36;
}
.bottom-child{
    width: 400px;
}
.list-group{
    list-style: none;
    color: #240b36e3;
    font-size: 20px;
    margin: 8% 0 0 0;
    /* border: #240b36 1px solid;
    border-radius: 3px;
    border-top: none; 
    border-bottom: none;  */

}
.list-group li {
    padding:15px 0 20px 35px;
    border: grey solid 1px;
    border-bottom: none; 
    
    
}
.active{
    background-color: rgba(128, 128, 128, 0.256);
    transition: 1000ms;
}

.list-group li:last-child {
    border: none;
    border: grey solid 1px;
    /* border-left: grey solid 1px;
    border-right: grey solid 1px; */
}

.bottom-child.right{
    padding: 0 50px;
}
.bottom-child.right div{
    padding: 0 0 3%;
}
.bottom-child.right div h3{
    padding:0  0 40px;
}
.btn a{
    text-decoration:none;
    color:white;
}
.btn:hover a{
    color:#240b36;
}
.space-btw {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.btnSpecial{
    border: solid 1px #240b36;
    color: white;
    background-color: #240b36;
}
.btnSpecial:hover{
    border: solid 1px #240b36;
    color:  #240b36;
    background-color:white;
}
.tutorial-detail{
    display: flex;
    flex-direction: row;
}
.tutorial-detail p{
    padding: 0 30px;
}
</style>