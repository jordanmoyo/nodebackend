<template>
  <div v-if="currentTutorial" class="submit-form">
    <h4>Tutorial</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentTutorial.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentTutorial.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentTutorial.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="btn"
      v-if="currentTutorial.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="btn"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="btn-delete"
      @click="deleteTutorial"
    >
      Delete
    </button>

    <button type="submit" class="btn"
      @click="updateTutorial"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "tutorial",
  data() {
    return {
      currentTutorial: null,
      message: ''
    };
  },
  methods: {
    getTutorial(id) {
      TutorialDataService.get(id)
        .then(response => {
          this.currentTutorial = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentTutorial.id,
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
        published: status
      };

      TutorialDataService.update(this.currentTutorial.id, data)
        .then(response => {
          this.currentTutorial.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateTutorial() {
      TutorialDataService.update(this.currentTutorial.id, this.currentTutorial)
        .then(response => {
          console.log(response.data);
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "tutorials" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getTutorial(this.$route.params.id);
  }
};
</script>

<style>

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
.active:active{
    background-color: rgba(128, 128, 128, 0.256);
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

</style>