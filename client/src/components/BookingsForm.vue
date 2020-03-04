<template lang="html">
  <form id="bookings-form" v-on:submit.prevent="handleSubmit">
    <h4>Create booking</h4>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input required type="text" id="name" v-model="name"/>
    </div>
    <div class="formWrap">
      <label for="email">E-mail:</label>
      <input required type="text" id="email" v-model="email"/>
    </div>
    <div class="formWrap">
      <label for="checkedIn">Checked In?</label>
      <input type="checkbox" id="checkedIn" v-model="checkedIn"/>
    </div>
    <input type="submit" value="Save" id="save">
  </form>
</template>


<script>
import {eventBus} from '@/main.js'
export default {
  name: "bookings-form",
  data(){
    return{
      name: '',
      email: '',
      checkedIn: false
    }
  },
  methods: {
    handleSubmit(){
      const payload = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      };
    eventBus.$emit('submit-booking', payload);
    this.name = this.email = '';
    this.checkedIn = false;

    }
  }
}
</script>

<style lang="css" scoped>
</style>
