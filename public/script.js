// api url
const api_url = "https://api.thingspeak.com/channels/2070634/feeds.json?api_key=2BZ2Q21MLOFIGY5C&results=1";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("distance_cm").innerHTML = obj.field1;
      document.getElementById("temperature").innerHTML = obj.field2;
      document.getElementById("kelembapan").innerHTML = obj.field3;
    });
}, 1000);
