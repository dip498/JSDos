function time() {
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const ampmEl = document.getElementById('ampm'); // optional
    const now = new Date();

    let h = now.getHours();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12; // convert 0 -> 12

    hoursEl.textContent = String(h).padStart(2, '0');
    minutesEl.textContent = String(now.getMinutes()).padStart(2, '0');
    secondsEl.textContent = String(now.getSeconds()).padStart(2, '0');
    if (ampmEl) ampmEl.textContent = ampm;
}

time();
setInterval(time, 1000);

function search() {
    const query = document.getElementById('search').value;
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    window.location.href = url;
}

function shutdown() {
    window.close();
    
}
function restart() {
    location.reload();
    
}