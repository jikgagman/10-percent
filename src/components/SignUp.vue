// SignUp.vue
<template>
  <div>
    <h2>Sign Up</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" placeholder="Password" type="password" />
    <button @click="signUp">Sign Up</button>
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
    async signUp() {
      try {
        await auth.createUserWithEmailAndPassword(this.email, this.password);
        alert("Sign up successful!");
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>