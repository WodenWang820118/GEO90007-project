document.body.innerHTML =
`
<div class="header">
  <img id="header-pic" src="assets/flinder_railway.jpg">
  <div class="header-text">
    <div><span class="title">City of Melbourne - Cafes and restaurants</span></div>
    <div><span class="title2">A guide to local tourists</span></div>
  </div>
</div>

<style scoped>
body, html {
  margin: 0;
}

#header-pic {
  padding: 0;
  margin: 0;
  border:0;
  width:100%;
}

.header {
  height: 1000px;
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.header-text {
  position: absolute;
  top: 170px;
  left: 50px;
  font-size: 3rem;
  color: white;
}
</style>
`