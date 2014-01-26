/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(scope) {
    function App() {
        this.initialize();
    }
    var canvas = App.prototype;
    var stage = App.prototype;
    var cargador = App.prototype;
    var fondo = App.prototype;
    var nave = App.prototype;

    var rutaNave = "assets/nave.png";
    var _rutaMalo = "assets/malo.png";
    var rutaFondo = "assets/nebulosa.jpg";
    var rutaDisplay = "assets/DisparoNave.png";
    App.prototype.initialize = function() {
        var self = this;
        this.canvas = document.createElement('canvas');
        this.canvas.width = 600;
        this.canvas.height = 600;
        var contenedor = document.getElementById('juego');
        contenedor.appendChild(this.canvas);

        this.stage = new createjs.Stage(this.canvas);
        this.cargador = new Cargador();
        this.cargador.onComplete = function() {
            self.assetsCargados();
        }
        this.cargador.loadImagenes([rutaNave, _rutaMalo, rutaFondo, rutaDisplay]);


    };
    App.prototype.assetsCargados = function() {
        console.debug(this.cargador);
//        console.log('Imagenes al sido cargadas');
        var bmp = this.cargador[rutaFondo];
        this.fondo = new createjs.Bitmap(bmp);
        this.fondo.alpha = 0.8;
        this.stage.addChild(this.fondo);
//        var dataNave = {
//            images: [this.cargador[rutaNave]],
//            frames: {with : 103, height: 90},
//            animatios: {run: [0, 19], fire: [19, 47, 'fire'], boom: [48, 71, 'boom']}
//        };
//        var spriteSheet=new createjs.StriteSheet(dataNave);
//        this.nave=new Nave(spriteSheet);
//        this.stage.addChild(this.nave);
//        

        var self = this;
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addListener(function(e) {
            self.tick();
        }
        );
    }
    App.prototype.tick = function() {
        this.stage.update();
    }
    scope.App = App;
}(window));

window.onload = function() {
    this.app = new App();
}

