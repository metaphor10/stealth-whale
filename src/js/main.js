var app = {};

app.setup = function () {
    app.renderer = new PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
    app.background = new PIXI.Stage;
    app.whale = new PIXI.Sprite(PIXI.Texture.fromImage('/img/whale.png'));

    app.whale.position.x = window.innerWidth / 2;
    app.whale.position.y = window.innerHeight / 2;
    app.whale.rotation 
    app.background.addChild(app.whale);

    document.body.appendChild(app.renderer.view);
};

app.animate = function () {
    app.whale.rotation += 0.01;
    app.renderer.render(app.background);
    requestAnimationFrame(app.animate);
};

app.run = function () {
    requestAnimationFrame(app.animate);
};

$(function () {
    app.setup();
    app.run();
});
