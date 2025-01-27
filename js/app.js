function toggleNamoz(namoz) {
    const button = document.getElementById(${namoz}Btn);

    if (button.innerText === '❌') {
        button.innerText = '✅'; // Agar ❌ bo'lsa, ✅ ga o'zgartir
        button.style.backgroundColor = '#d4edda'; // Yashil rang
    } else {
        button.innerText = '❌'; // Agar ✅ bo'lsa, ❌ ga o'zgartir
        button.style.backgroundColor = '#f8d7da'; // Qizil rang
    }
}