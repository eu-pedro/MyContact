const app = Vue.createApp({
  data(){
    return{
        nome: '',
        whats: '',
        msg1: '',
        msg3: '',
         
    }
  },
  methods:{
    verificar(){
      if(this.nome != ''){
          this.msg1 = 'campo válido!'
        
      } else{
          this.msg1 = 'verifique seus dados e tente novamente!'
      } 
      

      
    }
  }

  
})
app.mount('#app')