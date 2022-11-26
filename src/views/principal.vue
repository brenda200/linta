<template>
<div>
    <div>
            <form>
              <h1>Cadastro</h1>
                <div class="form-group">
                  <label for="exampleInputEmail1">Nome</label>
                  <input type="text" v-model="nome" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" >
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Telefone</label>
                    <input type="text" v-model="telefone" class="form-control" id="exampleInputPassword1" >
                </div>
              
                <button type="button" @click.prevent="adicionar()" class="btn btn-primary">incluir</button>
              </form>
            
        </div>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Telefone</th>
                <th scope="col">ação</th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in lista" :key="item.index" >
                <td>{{item.nome}}</td>
                <td>{{item.telefone}}</td>
                <td><button type="button" @click.prevent="excluir(item)" class="btn btn-danger">excluir</button></td>
                <td><button type="button" @click.prevent="edita(item)" class="btn btn-danger">edita</button></td>
              </tr>
            </tbody>
          </table>
</div>

</template>
  
  <script>
  export default {
    name: 'principal',
    components: {
    },
    data: function() {
       return{
        nome       : '',
        telefone   : '',
        lista:       []
       }
    },
   
    methods: {
        adicionar(){
          let  tmp = {
                   'nome'     : this.nome,
                   'telefone' : this.telefone

                };
                this.lista.push(tmp);
                
                this.nome         = '';
                this.telefone     = '';
        }, 

        excluir(item){
            this.lista.splice(this.PegaIndice(item), 1);
        },

         PegaIndice(reg) {
            for (var i = 0; i < this.lista.length; i++) {
                if (parseInt(this.lista[i]['id']) === parseInt(reg.id)) return i;
            }
                return -1;
}
    }
  }
 
  
  </script>
  
  <style>
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(46, 45, 126, 0.1);
}
button {
  cursor: pointer;
}

.divtable {
  padding: 20px;
  width: auto; 
  height:inherit; 
  overflow:auto;
}

.divtable::-webkit-scrollbar {
  width: 12px;
  background-color: rgb(17, 103, 153); 
}

</style>

  