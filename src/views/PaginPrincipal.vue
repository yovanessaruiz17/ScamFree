<template>
    <div>
        <h2>SCAM FREE</h2>
        <carousel>
            <slide>
                <figure>
                     <img src="../assets/Cartagen1.jpg" alt="">
                </figure>
            </slide>
            <slide>
                <figure>
                    <img src="../assets/Cartagena2.jpg" alt="">
                </figure>
            </slide>
            <slide>
                <figure>
                    <img src="../assets/Cartagena3.jpg" alt="">
                </figure>
            </slide>
            <slide>
                <figure>
                    <img src="../assets/cartagena4.jpg" alt="">
                </figure>
            </slide>
            <slide>
                <figure>
                    <img src="../assets/Cartagena5.jpg" alt="">
                </figure>
            </slide>
        </carousel>
    </div>
    
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    components:{
        Carousel,
        Slide
    }
};
</script>
<style>
</style>