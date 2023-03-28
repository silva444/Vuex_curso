import { createStore } from 'vuex'

export default createStore({
  state: {
    users:{
      name: "vinicius",
      idade: 13,
      email: "vinnicus@3382gmail.com"
    }
    ,products: [
      {
        id: 1,
        name: "bola",
        preco:23
      },
      {
        id: 2,
        name: "arroz",
        preco:29
      },
      {
        id: 3,
        name: "Lin",
        preco:87
      },
    ],
    cart: []
  },
  getters: { // é um conjunto de função também // é  comptado quando o valor é alterado/

    total(state){

      return state.cart.reduce((total, item) => total+=item.preco,0)


    }

  },
  mutations: { // para mudar o state // atualizar os dados;
    storeUsers(state,data){ // para salvar o usuario; é uma função dentro da mutation
      state.users = data;// atualizo o state com o data que esta vindo do pedido;
      console.log(data)
    }, // se eu quiser fazer algo sincrono uso o mutations
    addProduct(state,data){
      state.cart.push(data)
    }, 
    removeProduct(state,id){

      const idx = state.cart.findIndex(o =>  o.id == id)
      state.cart.splice(idx,1)

    }
  },
  // actions: { // também é um conjunto de funções;
  // // no context // vou ter acesso ao state , getters , mutations, e outras actions
  //   storeUser({ commit },data){

  //     // pode colocar o context sem o commit e os barras 
  //     // e chamar context.commit

    
  //   //context.state.users = data // aqui o state não é alterado,
  //   // o estate so pode ser alterado dentro da  Mutations

  //   return new Promise ((resolve)=> 
  //   {

  //     setTimeout( () =>{
  //       resolve()
  //       console.log('here')
  //     }, 3000)

  //   })

  //   commit('storeUsers',data) // é equivalente ao de cima 



  //   } // se eu quuiser fazer algo assyncronno , devo usar o actions

  //   // quando eu quiser salvar algo so depois de uma ação acabar para executar uma ação secundaria , devo usar os actionn
  // },
  actions: { // também é um conjunto de funções;
  // no context // vou ter acesso ao state , getters , mutations, e outras actions
    storeUser({ commit },data){

      // pode colocar o context sem o commit e os barras 
      // e chamar context.commit

    
    //context.state.users = data // aqui o state não é alterado,
    // o estate so pode ser alterado dentro da  Mutations

    return new Promise ((resolve)=> 
    {

      setTimeout( () =>{
        commit('storeUsers',data)
        resolve()
        console.log('here')
      }, 3000)

    })

     // é equivalente ao de cima 



    } // se eu quuiser fazer algo assyncronno , devo usar o actions

    // quando eu quiser salvar algo so depois de uma ação acabar para executar uma ação secundaria , devo usar os actionn
  },

})
