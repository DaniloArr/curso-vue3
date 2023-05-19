<template>
    <div class="message-container">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    name: "Message",
    props: {
        msg: String
    }
}
</script>

<style scoped>
    .message-container{
        color: #000000;
        background-color: #eeeeee;
        border: 2px solid  rgb(252, 186, 3);
        border-radius: 5px;
        padding: 10px;
        max-width: 400px;
        margin: 30px auto;
        font-weight: bold;
    }
</style>