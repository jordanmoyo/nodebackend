<template>
  <div id="app">

    <div class="nav-container">
      <div class="nav">
        <ul class="ul">
          <div>
            <li class = "nav-brand"> <a href="https://github.com/jordan237prog/CRUD_nodeVueMsql#readme" target="_blank" >Jordan GitHub</a> </li>
          </div>

          <div>
            <li class = "nav-link"> <a href="/tutorials">Tutorials</a> </li>
          </div>

          <div>
            <li class = "nav-link"> <a href="/add">Add</a> </li>
          </div>

        </ul>
      </div>
    </div>
    
    <div class="container">
      <router-view />
    </div>

    <div class="footer"></div>

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #181b1d;
}
.nav-container{
  width: 100%;
  height: 50px;
  /* position: fixed; */
  background-image: linear-gradient(#c31432, #240b36);
  display: flex;
  justify-content: flex-start;
  align-content: center;
  box-shadow: 0px 1px 20px 2px rgba(0, 0, 0, 0.171);
}
li a {
  text-decoration: none;
  padding: 14px;
  margin: 20px
}
.nav{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.ul{
  list-style: none;
  display: flex;
  font-size: 20px;
  color:aliceblue; 
}

.nav-link a{
  color: white;
  font-size: 15px;
  padding: 18px 17px 15px 17px;
}
.nav-brand a{
  color: white;
}
div li a:hover{
  transition: 100000ms;
   background-image: linear-gradient(#240b36, #c31432);
} 
.footer{
  width: 100%;
  height: 30px;
  background-image: linear-gradient(#c31431a6, #240b3693);
  bottom: 0;
  margin-top: 50px;
  /* position: fixed; */
}
.container{
  margin-bottom: 70px; 
}
</style>
