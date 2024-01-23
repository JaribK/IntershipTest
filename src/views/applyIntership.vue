<template>
    <div class="bg-blue-300 w-full h-dvh bg-gray text-black">
        <div id="boxform" class=" h-full flex justify-center">
            <form ref="form" class="flex flex-col w-[500px]" @submit.prevent="sendEmail">
                <h1 class="text-center font-bold pt-5">Apply Work</h1>
                <label for="name" class="mt-5">Name</label>
                <input name="f-name" type="text" placeholder="Name" class="input input-bordered w-full text-white" required/>
                <label for="email" class="mt-5">Email</label>
                <input name="f-email" type="text" placeholder="Email" class="input input-bordered w-full text-white" required/>
                <label for="phone" class="mt-5">Phone</label>
                <input name="f-tel" type="tel" placeholder="Phone" class="input input-bordered w-full text-white" required/>
                <label for="resume" class="mt-5">Resume (Link)</label>
                <input name="f-resume" type="text" placeholder="Link Google Drive, etc." class="input input-bordered w-full text-white" required/>
                <label for="message" class="mt-5">Message</label>
                <textarea name="f-message" type="text" id="message" cols="30" placeholder="Text here..." rows="10" class="textarea textarea-bordered w-full text-white" required></textarea>
                <button type="submit" class="btn mt-[10px]">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';
    export default {
        methods:{
            sendEmail() {
                event.preventDefault();
                emailjs.sendForm('service_7ybeorb', 'template_wtglgeg', this.$refs.form, 'YlYIgelU9v-sC-Puz')
                    .then((result) => {
                        console.log('SUCCESS!', result.text);
                    }, (error) => {
                        console.log('FAILED...', error.text);
                    });
            },
        }
    }
</script>