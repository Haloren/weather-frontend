export function fetchWeather() {
    return (dispatch) => {
        fetch('http://localhost:3001')
          .then(resp => resp.json())
          .then(data => console.log(data))
    }
}