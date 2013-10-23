var app = {};

app.setupStage = function () {
    app.renderer = new PIXI.autoDetectRenderer(800, 600, $('#game')[0]);
    app.background = new PIXI.Stage(0x66FF99);
    app.whale = new PIXI.Sprite(PIXI.Texture.fromImage('img/whale.png'));

    app.whale.position.x = window.innerWidth / 2;
    app.whale.position.y = window.innerHeight / 2;
    app.whale.rotation 
    app.background.addChild(app.whale);
};



app.update = function () {
    app.whale.rotation += 0.01;
    app.renderer.render(app.background);
    window.requestAnimationFrame(app.update);
};

$(function () {
    app.setupStage();
    window.requestAnimationFrame(app.update);
});
