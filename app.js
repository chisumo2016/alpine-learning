document.addEventListener('alpine:init', ()=> {
    Alpine.data("dropdown",() => ({
        open : false,
        toggle() {
            this.open = !this.open;
        }
    }));

    Alpine.store('currentUser', {
        username : 'TheTes',
        posts: ['Post 1 ', 'Post 2 ']
    })
});