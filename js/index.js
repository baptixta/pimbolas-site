let loading = document.querySelector('.loading');

window.addEventListener('load', (event) => {
    loading.classList.add("fade-out");
    setTimeout(() => {
        loading.classList.add("hidden");
    }, 1000);
})