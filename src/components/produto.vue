<template>

<div class="card">
   
      {{product.name}} - {{product.preco}}
      
      <button @click="add_product">Adicionar</button>
      <button @click="remove_product">Remove</button>
</div>
 
  
</template>

<script>
export default {
    props:{
        product: Object
    },

    methods:{

        add_product(){

            this.$store.commit('addProduct',  this.product)

        },
        remove_product(){
            this.$store.commit('removeProduct', this.product.id)
        }
    }

}
</script>

<style scoped>

.card{
    background: bisque;
    padding: 5px;
    margin-bottom: 5px;

}

</style>