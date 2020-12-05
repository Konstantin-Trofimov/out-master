const search = () => {
        

    document.querySelector('.loupe').addEventListener('click', () => {
        loupe.forEach(i => i.classList.toggle('loupe_active'));
        loupe[1].focus();
    });
}

export default search;