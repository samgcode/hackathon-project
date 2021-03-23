<template>
    <div class="d-flex justify-content-center align-items-center login-container">
        <form class="login-form text-center">
          <div class = "center">
            <img src="https://cdn.discordapp.com/attachments/716328281493995611/716419523162406912/hands.png" alt="hands" class="center" >
          </div>
            <h1 class="mb-5 font-weight-light text-uppercase">Households and Individuals Signup</h1>
            <div class="form-group">
                <input type="text" class="form-control rounded-pill form-control-lg" placeholder="Username">
            </div>
            <div class="form-group">
                <input type="password" class="form-control rounded-pill form-control-lg" placeholder="Password">
            </div>
             <div class="form-group">
                <input type="password" class="form-control rounded-pill form-control-lg" placeholder="Repeat password">
            </div>
            <div class="forgot-link form-group d-flex justify-content-between align-items-center">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="remember">
                    <label class="form-check-label" for="remember">Remember Password</label>
                </div>
            </div>
            <router-link :to="{ name: 'AddData' }" class="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase text-white">Signup</router-link>
        </form>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900%27');

body{
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  background: #eee;
  color:#666;
}
.login-container{
  height: 100vh;
  width: 100%;
}
.login-form .form-control{
  font-size: 15px;
  min-height: 48px;
  font-weight: 500;
}

.login-form a{
  text-decoration: none;
  color:#666;
}
.login-form a:hover{
  color:#723dbe;
}
.forgot-link{
  font-size: 13px;
}

.form-control:focus{
  border-color:#723dbe;
  box-shadow: 0 0 0 0.2rem rgba(114,61,190,.25);
}
.btn-custom{
  background: #723dbe;
  border-color:#723dbe;
  color:#fff;
  font-size: 15px;
  font-weight: 600;
  min-height: 48px;
}
.btn-custom:focus,
.btn-custom:hover,
.btn-custom:active,
.btn-custom:active:focus{
  background: #54229d;
  border-color: #54229d;
  color:#fff;
}
.btn-custom:focus{
  box-shadow: 0 0 0 0.2rem rgba(114,61,190,.25);
}

.center{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}
.text-white {
    color: white !important;
}

</style>