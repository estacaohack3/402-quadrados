let section = document.querySelector('section');

    for(let i = 0; i < 5000; i++){
        let div = document.createElement('div');

        div.addEventListener('mouseover', function(){
            this.style.backgroundColor = 'purple';
        });

        section.appendChild(div);
    }