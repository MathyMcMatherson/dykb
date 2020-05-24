var APP = angular.module("dykb", ['rzModule']);

APP.component('partOne', {
    templateUrl: 'templates/partOne.html',
    controller($scope) {
        let randDiv = document.getElementById('randomDiv');
        $scope.curColor = '';
        $scope.colorDivs = [];
        $scope.generate = function(button) {
            let tempObj = {
                answer: button,
                color: $scope.curColor
            };
            $scope.colorDivs.push(tempObj);
            $scope.changeColor();
        };

        $scope.changeColor = function() {
            let randRed = Math.floor(Math.random() * 256);
            let randBlue = Math.floor(Math.random() * 256);
            let randGreen = Math.floor(Math.random() * 256);
            $scope.curColor = "rgb(" + randRed + "," + randGreen + "," + randBlue + ")";
            randDiv.style.background = $scope.curColor;
        };

        $scope.changeColor();
    }
});

APP.component('partTwo', {
    templateUrl: 'templates/partTwo.html',
    controller($scope) {
        let randDiv = document.getElementById('randomDiv2');
        let colorDiv = document.getElementById('colorDiv');
        let randRed = Math.floor(Math.random() * 256);
        let randBlue = Math.floor(Math.random() * 256);
        let randGreen = Math.floor(Math.random() * 256);

        $scope.redSlider = 0;
        $scope.greenSlider = 0;
        $scope.blueSlider = 0;
        $scope.sliderOptions = {
            floor: 0,
            ceil: 255
        };
        $scope.colorDivs = [];

        $scope.$watch('redSlider', function(val) {
            $scope.redSlider = val;
            colorDiv.style.background = "rgb(" + $scope.redSlider + "," + $scope.greenSlider + "," + $scope.blueSlider + ")";
            $scope.testClose();
        });

        $scope.$watch('blueSlider', function(val) {
            $scope.blueSlider = val;
            colorDiv.style.background = "rgb(" + $scope.redSlider + "," + $scope.greenSlider + "," + $scope.blueSlider + ")";
            $scope.testClose();
        });

        $scope.$watch('greenSlider', function(val) {
            $scope.greenSlider = val;
            colorDiv.style.background = "rgb(" + $scope.redSlider + "," + $scope.greenSlider + "," + $scope.blueSlider + ")";
            $scope.testClose();
        });

        $scope.newColor = function() {
            let tempColor = {
                color: "rgb(" + randRed + "," + randGreen + "," + randBlue + ")",
                red: randRed,
                green: randGreen,
                blue: randBlue
            };
            $scope.colorDivs.push(tempColor);
            $scope.randomColor();
            $scope.redSlider = 0;
            $scope.greenSlider = 0;
            $scope.blueSlider = 0;
        };

        $scope.testClose = function() {
            if(Math.abs($scope.redSlider - randRed) < 25 && Math.abs($scope.greenSlider - randGreen) < 25 && Math.abs($scope.blueSlider - randBlue) < 25) {
                randDiv.innerHTML = "<strong>Success! Red: " + randRed + ", Green: " + randGreen + ", Blue: " + randBlue + "</strong>";
                colorDiv.innerHTML = "<strong>Success! Red: " + $scope.redSlider + ", Green: " + $scope.greenSlider + ", Blue: " + $scope.blueSlider + "</strong>";
                return true;
            } else {
                randDiv.innerHTML = "";
                colorDiv.innerHTML = "";
                return false;
            }
        };

        $scope.randomColor = function() {
            randRed = Math.floor(Math.random() * 256);
            randBlue = Math.floor(Math.random() * 256);
            randGreen = Math.floor(Math.random() * 256);
            randDiv.style.background = "rgb(" + randRed + "," + randGreen + "," + randBlue + ")";
        };

        $scope.randomColor();
    }
});

APP.component('partThree', {
    templateUrl: 'templates/partThree.html',
    controller($scope) {

        $scope.guesses = [];
        let tempText = "";
        $scope.showAnswer = function(text) {
            document.getElementById('randDiv3').style.background = "rgb(" + $scope.randRed + "," + $scope.randGreen + "," + $scope.randBlue + ")";
            $scope.toggle = true;
            if(text == 'yes') {
                tempText = "We Guessed Yes"
            } else {
                tempText = "We Guessed No"
            }
        };

        $scope.flipToggle = function() {
            let tempObj = {
                text: tempText,
                color: "rgb(" + $scope.randRed + "," + $scope.randGreen + "," + $scope.randBlue + ")"
            };
            $scope.guesses.push(tempObj);
            document.getElementById('randDiv3').style.background = "white";
            $scope.randRed = Math.floor(Math.random() * 256);
            $scope.randGreen = Math.floor(Math.random() * 256);
            $scope.randBlue = Math.floor(Math.random() * 256);
            $scope.toggle = false;
        };

        $scope.randRed = Math.floor(Math.random() * 256);
        $scope.randGreen = Math.floor(Math.random() * 256);
        $scope.randBlue = Math.floor(Math.random() * 256);
        $scope.toggle = false;
    }
});

APP.component('partFour', {
    templateUrl: 'templates/partFour.html',
    controller($scope) {
        let randDiv = document.getElementById('randomDiv4');
        let colorDiv = document.getElementById('colorDiv4');
        let randRed = Math.floor(Math.random() * 256);
        let randBlue = Math.floor(Math.random() * 256);
        let randGreen = Math.floor(Math.random() * 256);

        $scope.redSlider = 0;
        $scope.greenSlider = 0;
        $scope.blueSlider = 0;
        $scope.sliderOptions = {
            floor: 0,
            ceil: 255,
            translate: function(value) {
                return value.toString(16).toUpperCase();
            }
        };
        $scope.colorDivs = [];

        $scope.$watch('redSlider', function(val) {
            $scope.redSlider = val;
            colorDiv.style.background = "rgb(" + $scope.redSlider + "," + $scope.greenSlider + "," + $scope.blueSlider + ")";
            $scope.testClose();
        });

        $scope.$watch('blueSlider', function(val) {
            $scope.blueSlider = val;
            colorDiv.style.background = "rgb(" + $scope.redSlider + "," + $scope.greenSlider + "," + $scope.blueSlider + ")";
            $scope.testClose();
        });

        $scope.$watch('greenSlider', function(val) {
            $scope.greenSlider = val;
            colorDiv.style.background = "rgb(" + $scope.redSlider + "," + $scope.greenSlider + "," + $scope.blueSlider + ")";
            $scope.testClose();
        });

        $scope.newColor = function() {
            let tempColor = {
                color: "rgb(" + randRed + "," + randGreen + "," + randBlue + ")",
                red: randRed,
                green: randGreen,
                blue: randBlue
            };
            $scope.colorDivs.push(tempColor);
            $scope.randomColor();
            $scope.redSlider = 0;
            $scope.greenSlider = 0;
            $scope.blueSlider = 0;
        };

        $scope.testClose = function() {
            if(Math.abs($scope.redSlider - randRed) < 25 && Math.abs($scope.greenSlider - randGreen) < 25 && Math.abs($scope.blueSlider - randBlue) < 25) {
                randDiv.innerHTML = "<strong>Success! Red: " + randRed.toString(16).toUpperCase() + ", Green: " + randGreen.toString(16).toUpperCase() + ", Blue: " + randBlue.toString(16).toUpperCase() + "</strong>";
                colorDiv.innerHTML = "<strong>Success! Red: " + $scope.redSlider.toString(16).toUpperCase() + ", Green: " + $scope.greenSlider.toString(16).toUpperCase() + ", Blue: " + $scope.blueSlider.toString(16).toUpperCase() + "</strong>";
                return true;
            } else {
                randDiv.innerHTML = "";
                colorDiv.innerHTML = "";
                return false;
            }
        };

        $scope.randomColor = function() {
            randRed = Math.floor(Math.random() * 256);
            randBlue = Math.floor(Math.random() * 256);
            randGreen = Math.floor(Math.random() * 256);
            randDiv.style.background = "rgb(" + randRed + "," + randGreen + "," + randBlue + ")";
        };

        $scope.randomColor();
    }
});

APP.component('partFive', {
    templateUrl: 'templates/partFive.html',
    controller($scope) {
        $scope.guesses = [];
        let tempText = "";
        $scope.showAnswer = function(text) {
            document.getElementById('randDiv5').style.background = "rgb(" + $scope.randRed + "," + $scope.randGreen + "," + $scope.randBlue + ")";
            $scope.toggle = true;
            if(text == 'yes') {
                tempText = "We Guessed Yes"
            } else {
                tempText = "We Guessed No"
            }
        };

        $scope.flipToggle = function() {
            let tempObj = {
                text: tempText,
                color: "rgb(" + $scope.randRed + "," + $scope.randGreen + "," + $scope.randBlue + ")"
            };
            $scope.guesses.push(tempObj);
            document.getElementById('randDiv5').style.background = "white";
            $scope.randRed = Math.floor(Math.random() * 256);
            $scope.randGreen = Math.floor(Math.random() * 256);
            $scope.randBlue = Math.floor(Math.random() * 256);
            $scope.toggle = false;
        };

        $scope.randRed = Math.floor(Math.random() * 256);
        $scope.randGreen = Math.floor(Math.random() * 256);
        $scope.randBlue = Math.floor(Math.random() * 256);
        $scope.toggle = false;
    }
});