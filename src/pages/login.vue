<template>
  <div>
    <div class="bk"></div>
    <div class="login-panel">
      <section class="subtitle">
        <span>FIND THE MOST LOVED ACTIVITIES</span>
      </section>
      <section class="title">
        <span>BLACK CAT</span>
      </section>
      <div class="logo">
        <div class="logo-box-wrap">
          <div class="logo-box">
            <span class="icon icon-logo"></span>
          </div>
        </div>
      </div>
      <div class="form">
        <form class="login-form" novalidate>
          <div class="login-input-wrap">
            <span class="icon icon-user"></span>
            <input type="text" value=username placeholder="user@blackcat.co">
          </div>
          <div class="login-input-wrap">
            <span class="icon icon-password"></span>
            <input type="password" value=password placeholder="Password">
          </div>
        </form>
      </div>
    </div>
    <div class="login-footer">
      <a href="javascript:void(0)">SIGN IN</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  display: block;
  left: 0.375rem;
  width: 0.5rem;
  height: 0.5rem;
}
.icon-home {
  width: 0.75rem;
  height: 0.75rem;
  background-image: url("../../public/svg/home.svg");
}
.icon-user {
  position: absolute;
  background-image: url("../../public/svg/user.svg");
}

.icon-password {
  position: absolute;
  background-image: url("../../public/svg/password.svg");
}

.bk {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 540px;
  background-color: #8560a9;
  opacity: 0.7;
}

.subtitle {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 2.1565rem;
  font-size: 0.5rem;
  color: #d5ef7f;
}

.title {
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 0.75rem;
  margin-top: 1.12475rem;
  color: #d5ef7f;
}

.login-panel {
  width: 100%;
  min-height: 540px;
  background-image: url("../../public/images/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

.login-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 100%;
  background: #d5ef7f;
}

.login-footer > a {
  font-size: 0.5rem;
  color: #453257;
  text-decoration: none;
}

.logo {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 1.15625rem;
  left: -5px;
  top: -3px;
}

.logo-box-wrap {
  display: flex;
  width: 2.2rem;
  height: 2.2rem;
  border: 1px solid #d5ef7f4d;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}

.logo-box {
  display: flex;
  width: 2rem;
  height: 2rem;
  border: 1px solid #d5ef7f;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}

.login-form {
  display: flex;
  height: 3rem;
  margin-top: 2.6875rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.login-input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.login-input-wrap > input {
  width: 240px;
  height: 40px;
  padding-left: 1.0625rem;
  font-size: 0.5rem;
  border-radius: 0.625rem;
  background: transparent;
  border: 1px solid #d3c1e5;
  color: #453257;
  outline: none;
  box-sizing: border-box;
}

.login-input-wrap > input:focus {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>

<script>
export default {
  data() {
    return {
      name: "zhangyan",
      password: "123"
    };
  }
};
</script>