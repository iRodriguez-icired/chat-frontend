<template>
  <div id="app">
    <div class="container h-100">
      <div class="row justify-content-center h-100">
        <div class="col-6 align-self-center">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
.gif{
  height: 40%;
  width: 40%;
}
#box {
  min-height: 400px;
  max-height: 400px;
  overflow: scroll;
  background: white;
  width: 100%;
  margin: auto;
  border-radius: 15px;
}

.borde {
  border: solid 3px #5bc0de;
  border-radius: 15px;
}
.sala {
  min-height: 400px;
  max-height: 400px;
}
.sala .col-12 {
  padding: 0;
}
</style>
