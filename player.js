function Player_preload(game){
  game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}

function Player(game){
  this.sprite = game.add.sprite(32, game.world.height - 150, 'dude');
  game.physics.arcade.enable(this.sprite);
  this.sprite.body.bounce.y = 0.2;
  this.sprite.body.gravity.y = 300;
  this.sprite.body.collideWorldBounds = true;
  this.sprite.animations.add('left', [0, 1, 2, 3], 10, true);
  this.sprite.animations.add('right', [5, 6, 7, 8], 10, true);


  this.update = function(game){
    // ==collision==
    var hitPlatform = game.physics.arcade.collide(this.sprite, platforms);

    // ==movement==
    cursors = game.input.keyboard.createCursorKeys();
    this.sprite.body.velocity.x = 0;

    if(cursors.left.isDown){
      this.sprite.body.velocity.x = -150;
      this.sprite.animations.play('left');
    } else if(cursors.right.isDown){
      this.sprite.body.velocity.x = 150;
      this.sprite.animations.play('right');
    } else{
      this.sprite.animations.stop();
      this.sprite.frame = 4;
    }
    
    if (cursors.up.isDown && player.sprite.body.touching.down && hitPlatform){
        player.sprite.body.velocity.y = -350;
    }
  }
}

