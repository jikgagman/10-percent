// IdeaUpload.vue
<template>
  <div>
    <h2>Upload Idea</h2>
    <textarea v-model="ideaText" placeholder="Share your idea..."></textarea>
    <button @click="uploadIdea">Upload</button>
  </div>
</template>

<script>
import { db } from "../firebaseConfig";

export default {
  data() {
    return {
      ideaText: ""
    };
  },
  methods: {
    async uploadIdea() {
      try {
        await db.collection("ideas").add({
          text: this.ideaText,
          createdAt: new Date(),
          percent: 10, // 초기 퍼센트
        });
        alert("Idea uploaded!");
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>