function displayTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,"0");
    const minutes = now.getMinutes().toString().padStart(2,"0");
    const seconds = now.getSeconds().toString().padStart(2,"0");
    const minseconds = now.getMilliseconds().toString().padStart(3,"0");
    const timeString = `${hours}:${minutes}:${seconds}.${minseconds}`;
    const years = now.getFullYear().toString();
    const months = now.getMonth().toString().padStart(2,"0");
    const days = now.getDate().toString().padStart(2,"0");
    const dayString = `${years}/${months}/${days}`
    document.getElementById("time").textContent = timeString;
    document.getElementById("day").textContent = dayString;
    const unixTime = Date.now()
    const unixStr = `UNIX:${unixTime}`
    document.getElementById("unix").textContent = unixStr;
}

setInterval(displayTime, 1);

