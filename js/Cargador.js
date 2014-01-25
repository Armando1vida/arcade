/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function(scope) {
    function Cargador() {
        this.initialize();
    }
    var cargadas = Cargador.prototype;
    var totales = Cargador.prototype;
    var onComplete = Cargador.prototype;


    Cargador.prototype.initialize = function() {
//        console.log('Cargador inicializado');
    };
    Cargador.prototype.loadImagenes = function(lista) {
        this.cargadas = 0;
        this.totales = lista.length;
        for (i = 0; i < this.totales; i++) {
            this.cargaImagen(lista[i]);
        }
    }
    Cargador.prototype.cargaImagen = function(ruta) {
        var self = this;
        var image = new Image();
        this[ruta] = image;
        image.onload = function(e) {
            self.imagenCargada();
        }
        image.src = image.url = ruta;
    }
    Cargador.prototype.imagenCargada = function() {
        this.cargadas++;
        if (this.cargadas == this.totales) {
            if (this.onComplete) {
                this.onComplete();
            } else {
//                console.log('onComplete no definida en App');
            }
        }
    }

    scope.Cargador = Cargador;
}(window));


