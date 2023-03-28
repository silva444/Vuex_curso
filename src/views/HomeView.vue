<template>

<div>
<h1> {{$store.state.users.name}}</h1>
<app_produto v-for="(produto) in $store.state.products" :key="produto.id"
:product="produto"/>


<pre>

{{$store.state.cart}}
{{$store.getters.total}}
</pre>

<button>alterar</button>
</div>
  
</template>

<script>
import app_produto from "../components/app_produto.vue"
export default {
  name:"Home",
  components:{
    app_produto
  }

}
</script>
font-
<style>




</style>