<template>
  <div>
    <h1>Create An Item</h1>
    <form v-on:submit.prevent="addItem">
      
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Please insert username that gets followed users' ids</label>
              <input type="text" class="form-control col-md-6" v-model="item.price">
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Find</button>
        </div>
    </form>
  </div>
</template>
<script>
export default {
    data(){
        return{
          item:{}
        }
    },
    methods: {
     addItem(){
        let uri = 'http://localhost:4000/items/add';
        this.axios.post(uri, this.item).then((response) => {
          console.log(response)
        })
    }
}
}
</script>