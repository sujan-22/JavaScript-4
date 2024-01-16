    // Author: Sujan Rokad, 000882948
    function Day() {
        const sun = document.getElementById('sun');
        const f0 = document.getElementById('f0');
        const f1 = document.getElementById('f1');
        const f2 = document.getElementById('f2');
        const f3 = document.getElementById('f3');
        const f4 = document.getElementById('f4');
        const f5 = document.getElementById('f5');
        const f6 = document.getElementById('f6');
        const f7 = document.getElementById('f7');
        const f8 = document.getElementById('f8');
        const sun3 = document.getElementById('sun3');

        let cx = -50;
        let cy = 600;
        let isRising = true;
        let hasSunRisen = false;
        const time = setInterval(() => {
            cx += 8;
            sun.setAttribute('cx', cx);
            f0.setAttribute('cx', cx);
            f1.setAttribute('cx', cx);
            f2.setAttribute('cx', cx);
            f3.setAttribute('cx', cx);
            f4.setAttribute('cx', cx);
            f5.setAttribute('cx', cx);
            f6.setAttribute('cx', cx);
            f7.setAttribute('cx', cx);
            f8.setAttribute('cx', cx);
            sun3.setAttribute('cx', cx);
        
        if (isRising) {
            cy -= 5;
            } else {
            cy += 4;
            }
        
            sun.setAttribute('cy', cy);
            f0.setAttribute('cy', cy);
            f1.setAttribute('cy', cy);
            f2.setAttribute('cy', cy);
            f3.setAttribute('cy', cy);
            f4.setAttribute('cy', cy);
            f5.setAttribute('cy', cy);
            f6.setAttribute('cy', cy);
            f7.setAttribute('cy', cy);
            f8.setAttribute('cy', cy);
            sun3.setAttribute('cy', cy);
        
            if (cy <= 100) {
            isRising = false;
            } else if (cy >= 600) {
            isRising = true;
            hasSunRisen = true;
            }

            if (hasSunRisen && cy >= 600){
                cy = 600;
                cx = -50;
                hasSunRisen = false;
            }

            if (cx >= -30 && cx < 400 ){
                document.getElementById('sky').setAttribute('fill', 'url(#morning)' );
            }
            else if (cx >= 400 && cx <= 900) {
                document.getElementById('sky').setAttribute('fill', 'url(#midday)');
            }
            else if (cx >= 900 && cx <= 1400) {
                document.getElementById('sky').setAttribute('fill', 'url(#evening)');
            }
            else if (cx >= 1500 && cx <=2400){
                // if (lightPole.getAttribute('fill') === 'black') {
                document.getElementById('lightPole').setAttribute('fill', 'url(#radialGradient)');
                // } else {
                    //   lightPole.setAttribute('fill', 'black');
                //   }
                document.getElementById('sky').setAttribute('fill', 'url(#night)');
            }

        },100);   
    }
    window.addEventListener('load', () => {
        Morning();
    });



    function Morning(){
        const morning = document.getElementById('sky').setAttribute('fill', 'url(#morning)');
        document.getElementById('sun').setAttribute('cx', '262');
        document.getElementById('sun3').setAttribute('cx', '262');
        document.getElementById('f1').setAttribute('cx', '262');
        document.getElementById('f0').setAttribute('cx', '262');
        document.getElementById('f2').setAttribute('cx', '262');
        document.getElementById('f3').setAttribute('cx', '262');
        document.getElementById('f4').setAttribute('cx', '262');
        document.getElementById('f5').setAttribute('cx', '262');
        document.getElementById('f6').setAttribute('cx', '262');
        document.getElementById('f7').setAttribute('cx', '262');
        document.getElementById('f8').setAttribute('cx', '262');

        document.getElementById('sun').setAttribute('cy', '405');
        document.getElementById('sun3').setAttribute('cy', '405');
        document.getElementById('f0').setAttribute('cy', '405');
        document.getElementById('f1').setAttribute('cy', '405');
        document.getElementById('f2').setAttribute('cy', '405');
        document.getElementById('f3').setAttribute('cy', '405');
        document.getElementById('f4').setAttribute('cy', '405');
        document.getElementById('f5').setAttribute('cy', '405');
        document.getElementById('f6').setAttribute('cy', '405');
        document.getElementById('f7').setAttribute('cy', '405');
        document.getElementById('f8').setAttribute('cy', '405');
    }

    function Midday(){
        const midday = document.getElementById('sky').setAttribute('fill', 'url(#midday)');
        document.getElementById('sun').setAttribute('cx', '710');
        document.getElementById('sun3').setAttribute('cx', '710');
        document.getElementById('f1').setAttribute('cx', '710');
        document.getElementById('f0').setAttribute('cx', '710');
        document.getElementById('f2').setAttribute('cx', '710');
        document.getElementById('f3').setAttribute('cx', '710');
        document.getElementById('f4').setAttribute('cx', '710');
        document.getElementById('f5').setAttribute('cx', '710');
        document.getElementById('f6').setAttribute('cx', '710');
        document.getElementById('f7').setAttribute('cx', '710');
        document.getElementById('f8').setAttribute('cx', '710');

        document.getElementById('sun').setAttribute('cy', '125');
        document.getElementById('sun3').setAttribute('cy', '125');
        document.getElementById('f0').setAttribute('cy', '125');
        document.getElementById('f1').setAttribute('cy', '125');
        document.getElementById('f2').setAttribute('cy', '125');
        document.getElementById('f3').setAttribute('cy', '125');
        document.getElementById('f4').setAttribute('cy', '125');
        document.getElementById('f5').setAttribute('cy', '125');
        document.getElementById('f6').setAttribute('cy', '125');
        document.getElementById('f7').setAttribute('cy', '125');
        document.getElementById('f8').setAttribute('cy', '125');   
    }

    function Evening(){
        const evening = document.getElementById('sky').setAttribute('fill', 'url(#evening)');   
        document.getElementById('sun').setAttribute('cx', '982');
        document.getElementById('sun3').setAttribute('cx', '982');
        document.getElementById('f1').setAttribute('cx', '982');
        document.getElementById('f0').setAttribute('cx', '982');
        document.getElementById('f2').setAttribute('cx', '982');
        document.getElementById('f3').setAttribute('cx', '982');
        document.getElementById('f4').setAttribute('cx', '982');
        document.getElementById('f5').setAttribute('cx', '982');
        document.getElementById('f6').setAttribute('cx', '982');
        document.getElementById('f7').setAttribute('cx', '982');
        document.getElementById('f8').setAttribute('cx', '982');

        document.getElementById('sun').setAttribute('cy', '216');
        document.getElementById('sun3').setAttribute('cy', '216');
        document.getElementById('f0').setAttribute('cy', '216');
        document.getElementById('f1').setAttribute('cy', '216');
        document.getElementById('f2').setAttribute('cy', '216');
        document.getElementById('f3').setAttribute('cy', '216');
        document.getElementById('f4').setAttribute('cy', '216');
        document.getElementById('f5').setAttribute('cy', '216');
        document.getElementById('f6').setAttribute('cy', '216');
        document.getElementById('f7').setAttribute('cy', '216');
        document.getElementById('f8').setAttribute('cy', '216');
    }

    function Night(){
        const night = document.getElementById('sky').setAttribute('fill', 'url(#night)');   
        document.getElementById('sun').setAttribute('cx', '1502');
        document.getElementById('sun3').setAttribute('cx', '1502');
        document.getElementById('f1').setAttribute('cx', '1502');
        document.getElementById('f0').setAttribute('cx', '1502');
        document.getElementById('f2').setAttribute('cx', '1502');
        document.getElementById('f3').setAttribute('cx', '1502');
        document.getElementById('f4').setAttribute('cx', '1502');
        document.getElementById('f5').setAttribute('cx', '1502');
        document.getElementById('f6').setAttribute('cx', '1502');
        document.getElementById('f7').setAttribute('cx', '1502');
        document.getElementById('f8').setAttribute('cx', '1502');

        document.getElementById('sun').setAttribute('cy', '476');
        document.getElementById('sun3').setAttribute('cy', '476');
        document.getElementById('f0').setAttribute('cy', '476');
        document.getElementById('f1').setAttribute('cy', '476');
        document.getElementById('f2').setAttribute('cy', '476');
        document.getElementById('f3').setAttribute('cy', '476');
        document.getElementById('f4').setAttribute('cy', '476');
        document.getElementById('f5').setAttribute('cy', '476');
        document.getElementById('f6').setAttribute('cy', '476');
        document.getElementById('f7').setAttribute('cy', '476');
        document.getElementById('f8').setAttribute('cy', '476');
    }

    let score = 0;

    document.addEventListener('DOMContentLoaded', function() {
        const canvas = document.querySelector('#canvas');
        const addBird = document.getElementById('addBird'); //Button id 'addBird'

        function createBird() {
        
        let bird = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        bird.setAttribute('d', 'M5.700 55.05c30.268-27.054 46.071-9.91 46.071-9.91 17.223-8.496 25.878-.515 31.875 10.713-8.777-5.318-13.746-13.775-32.41.536-15.893-16.516-29.375-6.072-45.536-1.34z');
        bird.setAttribute('fill', Math.random() < 0.7 ? 'black' : 'red');
        bird.setAttribute('transform', 'translate(0, 0)');
    
        let y = Math.floor(Math.random()*(10 - 80 + 1) + 80);
        bird.setAttribute('transform', 'translate(0, ' + y + ')');

        canvas.appendChild(bird);
    
        let x = 0;
        let speed = Math.floor(Math.random() * (12 - 2 + 3)) + 5;
        setInterval(function() {
            x += speed;
            bird.setAttribute('transform', 'translate(' + x + ',' + y + ')');
            if (x >= canvas.clientWidth) {
            bird.remove();
            }
        }, 50);

        bird.addEventListener('click', function() {

            if (bird.getAttribute('fill') == 'red'){
                score += 1;
                bird.remove();
            }
            else {
                score -= 1;
                let newColor = randomColor();
                bird.setAttribute('fill', newColor);
            } 
            let birdScore = document.getElementById('score');
            birdScore.textContent = score.toString();

            if (score <= 0) {
                let birds = document.querySelectorAll('#canvas bird');
                birds.forEach(bird => bird.remove());

                score = 0;
                let birdScore = document.getElementById('score');
                birdScore.textContent = score.toString();
                location.reload();
            }
            })
        }

    
    addBird.addEventListener('click', function(){
        function randomInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 5)) + min;
        }
        
        setInterval(function() {
            createBird();
        }, randomInterval(1000, 2000));
    })
    
    }); 

    function randomColor(){
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random()*16)];
        }
        return color;
    }
    
    function toggleLight() {
        const lightPole = document.getElementById('lightPole');
        console.log('called')
        if (lightPole.getAttribute('fill') === 'url(#radialGradient)') {
        lightPole.setAttribute('fill', 'black');
        } else {
        lightPole.setAttribute('fill', 'url(#radialGradient)');
        }
    }

    
