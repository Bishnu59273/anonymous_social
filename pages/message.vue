<script setup>
useHead({
  title: "messages",
});
const { data: users } = await useFetch("/api/users");
</script>
<template>
  <NuxtLayout name="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <login />
          <div class="text-center">
            <h1>Messagess</h1>
          </div>
          <div>
            <h3>Users:</h3>
            <pre>{{ users }}</pre>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
