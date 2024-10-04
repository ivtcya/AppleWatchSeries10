function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
}

function handleClick(event) {
    event.preventDefault(); // 阻止默認行為
    if (confirm("確定要點擊嗎?")) {
        if (confirm("真的想看?")) {
            window.location.href = event.target.href;
        } else {
            alert("真沒毅力");
        }
    } else {
        alert("真沒毅力");
    }
}
