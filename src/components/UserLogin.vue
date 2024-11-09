<template>
  <div>
    <h2>Login</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" placeholder="Password" type="password" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
import { auth } from "../firebaseConfig";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      try {
        await auth.signInWithEmailAndPassword(this.email, this.password);
        alert("Login successful!");
        // 로그인 성공 후, 원하는 페이지로 리디렉션할 수 있습니다.
        this.$router.push({ name: "Home" }); // 예시: Home 페이지로 이동
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>