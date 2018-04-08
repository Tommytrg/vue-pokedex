<template>
  <div v-if='user'>
    <span>Hola {{user.name}}</span>
    <button>Cerrar sesión</button>
  </div>
  <div v-else>
    <button>Iniciar sesión</button> / <button>Registro</button>
  </div>
</template>

<script>
export default {
  computed: {
    user: function () {
      return this.$store.getters.user
    }
  }
}
</script>

<style scoped>

  button{
    background: none;
    border: none;
    font-size: 12px;
    color: #242424;
  }

  button:hover{
    color: #484848;
    text-decoration: underline;
    cursor: pointer;
  }

</style>
