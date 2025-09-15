//Chmurki
const chmury = document.getElementsByClassName("chmury");
for(let i = 0; i < chmury.length;i++){

    let akapity = Array.from(chmury[i].getElementsByTagName("p"));
    let bloki = Array.from(chmury[i].getElementsByTagName("div"));
    const witdhBig = "1400px";
    const heightBig = "700px";
    const widthTiny = "800px";
    const heightTiny = "400px";
    console.log(akapity.length);

    chmury[i].addEventListener("mouseenter", () => {
        chmury[i].style.width = witdhBig;
        chmury[i].style.height = heightBig;
        chmury[i].style["clip-path"] = 'path("M 0 0 L 1200 0 Q 1300 75, 1200 150 Q 1200 450 ,900 450 Q 700 650, 400 500 Q 250 600 ,0 600 Z")';
        bloki[0].style.setProperty("--sciezka",'path("M 0 0 L 1180 0 Q 1270 75, 1170 140 Q 1180 430 ,880 420 Q 680 630, 400 470 Q 230 580 ,0 580 Z")');
        bloki[0].style.setProperty("--szerok",witdhBig);
        bloki[0].style.setProperty("--wysok",heightBig);
        bloki[0].style["clip-path"] = 'path("M 0 0 L 1200 0 Q 1300 75, 1200 150 Q 1200 450 ,900 450 Q 700 650, 400 500 Q 250 600 ,0 600 Z")';
        bloki[0].style.width = witdhBig;
        bloki[0].style.height = heightBig;
        akapity[0].style.top = "50%";
        akapity[0].style.left = "20%";
        let x = 45;
        let y = 35;
        for(let z = 1; z < akapity.length;z++){
            akapity[z].style.top = x+"%";
            akapity[z].style.left = y+"%";
            akapity[z].style.opacity = 1;
            akapity[z].style.transition = "opacity 0.2s ease 1s";
            x = x - 5;
        }
    })


    chmury[i].addEventListener("mouseleave", ()=>{
        chmury[i].style.width = widthTiny;
        chmury[i].style.height = heightTiny;
        chmury[i].style["clip-path"] = 'path("M 0 0 L 720 0 Q 720 60, 620 100 Q 540 220, 370 180 Q 320 270, 170 260 Q 120 370, 0 370 Z")';
        bloki[0].style.setProperty("--sciezka",'path("M 0 0 L 700 0 Q 700 50, 600 80 Q 520 200, 350 150 Q 300 250, 150 240 Q 110 350, 0 350 Z")');
        bloki[0].style.setProperty("--szerok",widthTiny)
        bloki[0].style.setProperty("--wysok",heightTiny)
        bloki[0].style["clip-path"] = 'path("M 0 0 L 720 0 Q 720 60, 620 100 Q 540 220, 370 180 Q 320 270, 170 260 Q 120 370, 0 370 Z")'
        bloki[0].style.width = widthTiny;
        bloki[0].style.height = heightTiny;
        akapity[0].style.top = "5%";
        akapity[0].style.left = "3%";
        for(let z = 1; z < akapity.length;z++){
            akapity[z].style.opacity = 0;
            akapity[z].style.transition = "opacity 0.2s ease ";
        }
    })
}