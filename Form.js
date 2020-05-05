class Form {
    constructor() {
      
    }
  
    display(){
      var title = createElement('h2')
      title.html("Questions For Change");
      title.position(350, 0);
      var title = createElement('h2')
      title.html("Click on your option");
      title.position(350, 30);
      
      textSize(20);
      fill(0, 0, 0);
      text("Q1. Do you think we need to have free lunch \nmeals in our school canteen for the kids who \nare very poor?",0,20);
      var button = createButton('Yes');
      var button1 = createButton('No');
     
      
      
      var button = createButton('Yes');
      var button1 = createButton('No');
      var button2 = createButton('Yes');
      var button3 = createButton('No');
      var button4 = createButton('100');
      var button5 = createButton('500');
      var button6 = createButton('1000');
      var button7 = createButton('More');
  
      button.position(315, 180);
      button1.position(355, 180);
      
      button.mousePressed(function(){
        //input.hide();
        button1.hide();
        text("Q2. Would you be willing to contribute a \nsmall amount every month for such a \nprogram?",0,130);
        button2.position(315, 290);
      button3.position(355, 290);
      });
        button1.mousePressed(function(){
          //input.hide();
          button.hide();
          text("THANYOU FOR FILLING THE FORM !",0,450);
        });
        button2.mousePressed(function(){
          //input.hide();
          button3.hide();
          text("Q3. How much per month would you be \nwilling to pay?",0,240);
          button4.position(315, 400);
          button5.position(315, 430);
          button6.position(315, 460);
          button7.position(315, 490);
        });
          button3.mousePressed(function(){
            //input.hide();
            button2.hide();
            text("THANYOU FOR FILLING THE FORM !",0,450);
          });
          button4.mousePressed(function(){
            //input.hide();
            button5.hide();
            button6.hide();
            button7.hide();
            text("THANYOU FOR FILLING THE FORM !",0,450);
          });
          button5.mousePressed(function(){
            //input.hide();
            button4.hide();
            button6.hide();
            button7.hide();
            text("THANYOU FOR FILLING THE FORM !",0,450);
          });
          button6.mousePressed(function(){
            //input.hide();
            button4.hide();
            button5.hide();
            button7.hide();
            text("THANYOU FOR FILLING THE FORM !",0,450);
          });
          button7.mousePressed(function(){
            //input.hide();
            button4.hide();
            button5.hide();
            button6.hide();
            text("THANYOU FOR FILLING THE FORM !",0,450);
          });
        /*var name = input.value();
        
        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount);
        var greeting = createElement('h3');
        greeting.html("Hello " + name )
        greeting.position(130, 160)
      });*/
  
    }
  }