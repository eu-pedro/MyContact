const app = Vue.createApp({
  data(){
    return{
        nome: '',
        email: '',
        whats: '',
        msg1: '',
        msg2: '',
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
      if(this.email != ''){
          this.msg2 = 'campo válido'
      } else{
          this.msg2 = 'verifique seus dados e tente novamente!'
      } 
      if(this.whats == ''){
        this.msg3 = 'verifique seus dados e tente novamente!'
      }
      else{
        this.msg3 = 'campo válido!'
      }

      
    }
  }

  
})
app.mount('#app')