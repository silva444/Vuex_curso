<template>
  <div>
    <button @click="updateData">Clique para mudar o nome do Home</button>
  </div>
</template>

<script>
export default {
  name: "pedidos",

  data() {
    return {};
  },

  methods: {
    updateData() {
      const newUser = {
        name: "Mateus",
        idade: 13,
        email: "Mat@3382gmail.com",
      };
    //  this.$store.commit("storeUsers", newUser);
    this.$store.dispatch('storeUser',newUser).then(()=>{
      console.log('terminou com sucesso')
    })

    },
  },

  created() {
    // commit serve para disparar a função dentro da STORE
    // no segundo paramentro é o dado que eu quero salvar;
  },
};
</script>

<style>
</style>