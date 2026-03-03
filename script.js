 let picNum = 1;

        function fwd() {
            picNum++;
            if (picNum > 10) picNum = 1;
            document.getElementById("pictureGallery").src = `${picNum}.jpg`;
        }

        function bck() {
            picNum--;
            if (picNum < 1) picNum = 10;
            document.getElementById("pictureGallery").src = `${picNum}.jpg`;
        }