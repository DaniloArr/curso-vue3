const MyNameApp = {
    data() {
        return {
            name: "",
            age: 20,
            input_name: ""
        }
    },          //data: retorna dados do front end
    methods: {
        submitForm(e){

            e.preventDefault();
            this.name = this.input_name;
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")