// បង្កើតមុខងារដាស់សំឡេងពេលអ្នកប្រើចុចលើអេក្រង់លើកដំបូង
document.addEventListener('click', function() {
    const audio = document.getElementById('notif-sound');
    audio.play().then(() => {
        audio.pause(); // បើកហើយបិទវិញភ្លាម ដើម្បីដាស់វាឱ្យស្គាល់
        console.log("Audio is unlocked");
    }).catch(e => console.log("Audio unlock failed", e));
}, { once: true });
