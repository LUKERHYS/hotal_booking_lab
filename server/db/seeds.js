use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Zsolt Podoba",
    email: "zsolt1999@gmail.com",
    checkedIn: true
  },
  {
    name: "Louise",
    email: "louise@gmail.com",
    checkedIn: false
  },
  {
    name: "John",
    email: "John2@gmail.com",
    checkedIn: false
  },
  {
    name: "Sky",
    email: "sky@gmail.com",
    checkedIn: true
  }
]);
