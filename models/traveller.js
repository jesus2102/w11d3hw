const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocation = this.journeys.map(journey => journey.startLocation);
  return startLocation;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocation = this.journeys.map(journey => journey.endLocation);
  return endLocation;
};

Traveller.prototype.getModesOfTransport = function () {
  const modesOfTransport = this.journeys.map(journey => journey.transport);
  return modesOfTransport;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter(journey => journey.transport === transport);
  return journeysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeyByMinDistance = this.journeys.filter(journey => journey.distance >= minDistance);
  return journeyByMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0);
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const allTransport = this.getModesOfTransport();
  const uniqueModesOfTransport = Array.from(new Set(allTransport));
  return uniqueModesOfTransport;
};


module.exports = Traveller;
