<script setup lang="ts">
const name = ref('')
const result = ref('')

const animal = computed(() => name.value[0].toUpperCase() + name.value.slice(1).toLowerCase())

const submit = async () => {
  result.value = ''

  const method = 'POST'
  const body = { animal: animal.value }
  const { data } = await useFetch('/api/generate', {
    method,
    body,
  })

  result.value = data.value?.result || 'Sorry, Error has occurred'
}
</script>

<template>
  <div>
    <Head>
      <Title>OpenAI Quickstart</Title>
      <Link rel="icon" href="/dog.png" />
    </Head>

    <main class="main">
      <img src="/dog.png" class="icon" />
      <h3>Name my pet</h3>
      <form @submit.prevent="submit">
        <input v-model="name" placeholder="Enter an animal" />
        <input type="submit" value="Generate names" />
      </form>
      <div class="result">{{ result }}</div>
    </main>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "ColfaxAI";
  src: url(https://cdn.openai.com/API/fonts/ColfaxAIRegular.woff2)
      format("woff2"),
    url(https://cdn.openai.com/API/fonts/ColfaxAIRegular.woff) format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "ColfaxAI";
  src: url(https://cdn.openai.com/API/fonts/ColfaxAIBold.woff2) format("woff2"),
    url(https://cdn.openai.com/API/fonts/ColfaxAIBold.woff) format("woff");
  font-weight: bold;
  font-style: normal;
}
.main,
.main input {
  font-size: 16px;
  line-height: 24px;
  color: #353740;
  font-family: "ColfaxAI", Helvetica, sans-serif;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
}
.main .icon {
  width: 34px;
}
.main h3 {
  font-size: 32px;
  line-height: 40px;
  font-weight: bold;
  color: #202123;
  margin: 16px 0 40px;
}
.main form {
  display: flex;
  flex-direction: column;
  width: 320px;
}
.main input[type="text"] {
  padding: 12px 16px;
  border: 1px solid #10a37f;
  border-radius: 4px;
  margin-bottom: 24px;
}
.main ::placeholder {
  color: #8e8ea0;
  opacity: 1;
}
.main input[type="submit"] {
  padding: 12px 0;
  color: #fff;
  background-color: #10a37f;
  border: none;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
}
.main .result {
  font-weight: bold;
  margin-top: 40px;
}
</style>
