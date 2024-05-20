function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    const hour = h < 10 ? "0" + h : h;
    const minute = m < 10 ? "0" + m : m;
    const second = s < 10 ? "0" + s : s;
    const hourTime = hour > 12 ? hour - 12 : hour;
    const ampm = h < 12 ? "A.M." : "P.M.";

    const time = hourTime + ":" + m + ":" + s + " " + ampm;

    document.getElementById('12hf').innerHTML =  time;
    document.getElementById('24hf').innerHTML =  h + ":" + m + ":" + s + " " + ampm;
    setTimeout(startTime, 1000);
  }
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
  


