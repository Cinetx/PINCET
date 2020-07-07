window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let menuBtn = document.querySelector('.menu-btn'),
        navMenu = document.querySelector('.nav'),
        closeBtn = document.querySelector('.menu-close'),
        openBtn = document.querySelector('.menu-open');
        
        menuBtn.addEventListener('click', function() {
            menuBtn.classList.toggle('menuOpen');
            if (menuBtn.classList.contains('menuOpen')) {
                navMenu.style.display = 'block';
                openBtn.style.display = 'none';
                closeBtn.style.display = 'block';
            } else {
                navMenu.style.display = 'none';
                openBtn.style.display = 'block'; 
                closeBtn.style.display = 'none';
            }
        });


    let clickButton = document.querySelectorAll('.pop-up--btn'),
        popup = document.querySelector('.pop-up'),
        closeButton = document.querySelectorAll('.close');
        
    clickButton.forEach(clickButton => {
        clickButton.addEventListener('click', function() {
            popup.style.display = 'block';
            });
        });
    (function(){
        let popup = document.querySelectorAll('#pop-up');
        
        popup.forEach(popup => {
            closeButton.forEach(closeButton => {
                closeButton.addEventListener('click', function() {
                    popup.style.display = 'none';
            })
            })
        });
    }());

    let submitBtn = document.querySelector('.pop-up__btn'),
        popupDone = document.querySelector('.pop-up--done');

        submitBtn.addEventListener('click', function() {
            event.preventDefault();
            popup.style.display = 'none';
            popupDone.style.display = 'flex';
        });
  
});