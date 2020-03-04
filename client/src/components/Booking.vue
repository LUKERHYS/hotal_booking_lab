<template lang="html">
  <tr>
    <td>{{booking.name}}</td>
    <td>{{booking.email}}</td>
    <td>{{booking.checkedIn}}</td>
    <!-- <td>
      <button v-on:click="updateBooking" type="button" name="button">Checked In</button></td> -->
    <td>
      <button v-on:click="handleDelete(booking._id)" type="button" name="button">Delete</button></td>
  </tr>
</template>

<script>
import {eventBus} from '@/main.js'
import BookingService from '@/services/BookingService.js'
export default {
  name: 'booking',
  props: ['booking'],
  methods: {
    handleDelete(id){
      eventBus.$emit('delete-booking', id);
    }
  }
}
</script>

<style lang="css" scoped>
td {
  padding: 2%;
}
</style>
