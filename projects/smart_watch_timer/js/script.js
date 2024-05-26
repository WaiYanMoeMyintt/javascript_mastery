const hour =  document.querySelector(".hour");
const minute =  document.querySelector(".minute");
const second =  document.querySelector(".second");

const getTheTime = ()=>{
      setInterval(()=>{
        const getDate = new Date();
        const getHour =   getDate.getHours();
        const getMinutes = getDate.getMinutes();
        const getSeconds = getDate.getSeconds();
        hour.textContent = getHour;
        minute.textContent = getMinutes;
        second.textContent = getSeconds;
      },1000)
}
getTheTime();


