const geoFindMe = () => {
  let coords = ""

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    coords += `${latitude}, `
    coords += `${longitude}`
  }

  function error() {
    console.log('Unable to retrieve your location')
  }

  if (!navigator.geolocation) {
    console.log('Geolocation is not supported by your browser');
  } else {
    navigator.geolocation.getCurrentPosition(success, error)
  }
  return coords
}

export default geoFindMe
