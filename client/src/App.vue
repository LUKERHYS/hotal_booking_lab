<template>
  <div id="app">
    <bookings-form />
    <bookings-table :bookings="bookings"/>
  </div>
</template>

<script>
import {eventBus} from './main.js';
import BookingsTable from '@/components/BookingsTable.vue';
import BookingsForm from '@/components/BookingsForm.vue';
import BookingService from '@/services/BookingService.js';

export default {
  data() {
    return {
      bookings: []
    }
  },
  components: {
    'bookings-table': BookingsTable,
    'bookings-form': BookingsForm,
  },
  mounted() {
    this.fetchBookings();
    eventBus.$on('delete-booking', id => {
      BookingService.deleteBooking(id)
      .then(() => {
        const index = this.bookings.findIndex(booking => booking._id === id);
        this.bookings.splice(index, 1);
      })
    })
    eventBus.$on('submit-booking', payload => {
      BookingService.postBooking(payload)
      .then(booking => this.bookings.push(booking));
    })
  },
  methods: {
    fetchBookings() {
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
