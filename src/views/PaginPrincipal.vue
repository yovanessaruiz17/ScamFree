<template>
    <div class="max-contenedor">
        <h2>Scam free</h2>
        <div class="image-grande">
            <img src="../assets/Cartagena2.jpg" alt="" width="100%" height="50%" >
        </div>    
    </div>
    
</template>

<script>
    import{ref} from 'vue'
export default {
    name:"PaginPrincipal",
    setup () {
            const images =document.querySelector(".images")
            const imagesCollection = document.querySelectorAll(".image")
            const prevBtn = document.querySelector(".prev")
            const nextBtn = document.querySelector(".next")

            
            return {
                images
            }
        }
};
</script>
<style>

/* Images */
.image-grande{
    width: 10% 20%;
    height: 10% 20%;
}
</style>