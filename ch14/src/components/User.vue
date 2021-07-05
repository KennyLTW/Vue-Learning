<template>
  <h2 class="red">hello, {{ msg }} 
    {{ $route.params.id }}
    {{ $route.params }} 
    </h2>

</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "User msg",
    },
  },
  methods: {},
  data() {
    return {};
  },
};

</script>

<style>
.red {
  color: red;
}
</style>