let store = {drivers: [], trips: [], passengers: []}
let driverId = 0;
let tripsId = 0;
let passengersId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }
  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id;
      }.bind(this)
    );
  }
  passengers() {
    return 
  }
}

