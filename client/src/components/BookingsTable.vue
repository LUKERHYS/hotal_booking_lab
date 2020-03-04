<template lang="html">
  <table id="bookings-table">
    <thead>
    <tr>
      <td>Name</td>
      <td>email</td>
      <td>checked-in</td>
    </tr>
  </thead>
  <tbody>
    <booking v-for="(booking, index) in bookings" :key="index" :booking="booking" />
  </tbody>
  </table>
</div>

</template>

<script>
import Booking from '@/components/Booking.vue'
import BookingService from '@/services/BookingService.js'

export default {
  name: 'booking-table',
  props: ['bookings'],
  components: {
    'booking': Booking
  }
}
</script>

<style lang="css" scoped>
td {
  padding: 0 2%;
  border: solid black 1px;
}
</style>
