<template>
  <div>

    <form class="login__form"  @submit.prevent="onSubmit">
      <div class="login__logo">
        <a target="_blank">

        </a>
      </div>
      <div class="login__title">
        Sign In
      </div>

      <div class="login__field">

        <label class="login__input">
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6972 4.73571C12.6623 7.2413 10.5556 9.31412 8.00008 9.33248C5.44458 9.31412 3.33785 7.2413 3.30295 4.73571C3.26635 2.12871 5.39832 0.0151709 7.97492 0H8.02524C10.6018 0.0151709 12.7337 2.12871 12.6972 4.73571Z" fill="#8C8C8C"/>
            <path d="M15.9813 15H0.0186346C-0.0454761 14.5345 0.0656221 14.1233 0.20277 13.7217C0.550997 12.702 1.21401 11.9131 2.09696 11.2975C3.28179 10.4703 4.61918 10.1014 6.05721 10.0822C6.7047 10.0743 7.3523 10.0695 8.00001 10.0679C8.6475 10.0687 9.2951 10.0735 9.9428 10.0822C11.3807 10.1014 12.7182 10.4703 13.9031 11.2975C14.786 11.9131 15.4489 12.702 15.7972 13.7217C15.9343 14.1233 16.0455 14.5345 15.9813 15Z" fill="#8C8C8C"/>
          </svg>
          <input v-model="form.email" type="text" name="email" id="email" value="" required>
        </label>
      </div>
      <div class="login__field">

        <label class="login__input">
          <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9656 4.50552V6.07172H11.0698C11.7257 6.07172 12.259 6.60503 12.259 7.26093V13.8108C12.259 14.4667 11.7257 15 11.0698 15H1.93006C1.27415 15 0.740847 14.4667 0.740847 13.8108V7.25787C0.740847 6.60196 1.27415 6.06866 1.93006 6.06866H1.96071V4.50245C1.96071 2.01982 3.98053 0 6.46316 0C8.94579 0.00306498 10.9656 2.02289 10.9656 4.50552ZM5.795 10.8255C5.88694 10.8929 5.91147 10.9573 5.91147 11.0646C5.9084 11.5458 5.9084 12.0239 5.9084 12.5051C5.8992 12.7043 6.00035 12.9005 6.17812 12.9894C6.59802 13.2039 7.01792 12.9036 7.01792 12.5051V12.502C7.01792 12.0208 7.01792 11.5396 7.01486 11.0584C7.01486 10.9604 7.03631 10.896 7.12213 10.8316C7.55736 10.5098 7.70141 9.96118 7.4838 9.47998C7.27231 9.01103 6.75433 8.73519 6.267 8.83327C5.7245 8.9436 5.34751 9.37883 5.34138 9.92133C5.34138 10.2983 5.49156 10.6048 5.795 10.8255ZM8.99483 4.50552C8.99483 3.10789 7.85773 1.97385 6.46316 1.97385C5.06553 1.97385 3.93149 3.11095 3.93149 4.50552V6.07172H8.99483V4.50552Z" fill="#8C8C8C"/>
          </svg>
          <input  v-model="form.password"  type="password" name="password" required>
        </label>
      </div>
      <div class="login__btns">

        <button   v-bind:disabled="this.$v.$invalid" class="login__btn">
          Login
        </button>
      </div>
    </form>


  </div>
</template>

<script>



import {minLength, required} from 'vuelidate/lib/validators'

export default {
  props: {},
  data () {
    return {
      form: {
        email: 'arthur@apiato.com',
        password: '123456',
      },
      access_token: null
    }
  },
  validations: {
    form: {
      email: {
        required,
        minLength: minLength(4),
      },
      password: {
        required,
        minLength: minLength(4),

      }
    }
  },
  methods: {
    onSubmit() {

      this.$v.$touch();
      if(this.$v.$invalid)
        return;


      let app = this,
          domain = process.env.VUE_APP_BASE_API_URL

      axios.post(domain+'/v1/clients/web/login', app.form)
          .then(function (resp) {
            app.access_token = resp.data.access_token

            // this.$v.$reset()

          })
          .catch(function (resp) {
            console.log(resp);
          });

    }
  }
}


</script>



