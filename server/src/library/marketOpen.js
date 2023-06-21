const marketOpen = () => {
  const openingHours = 8;
  const closingHours = 15.5;
  const currentTime = new Date();
  const currentTimeOfDay =
    currentTime.getHours() + currentTime.getMinutes() / 60 + currentTime.getSeconds() / 3600;
  return openingHours < currentTimeOfDay && currentTimeOfDay < closingHours;
};

module.exports = marketOpen;
