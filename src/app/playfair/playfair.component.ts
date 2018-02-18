import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playfair',
  templateUrl: './playfair.component.html',
  styleUrls: ['./playfair.component.css']
})
export class PlayfairComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  MyTable = [
    ['A','B','C','D','E'],
    ['F','G','H','I','K'],
    ['L','M','N','O','P'],
    ['Q','R','S','T','U'],
    ['V','W','X','Y','Z']
  ];
  submittedtext = '';
  encryptedtext = [];

  submittedCipher = '';
  decryptedtext = [];

  EncryptText()
  {
    this.encryptedtext = [];
    var nospacetext = this.submittedtext.replace(/\s/g,'').toUpperCase();
    var arrayoftext = nospacetext.split("");
    //validation
    for(i=0;i<arrayoftext.length;i++)
    {
      if(arrayoftext[i]=='J')
      {
        return this.encryptedtext.push("Sorry J is not allowed");
      }
    }
    if (arrayoftext.length % 2 === 0) {
   
    } else {
       arrayoftext.push('X');
    }
    var groupedbytwo = [];
    var i,j,temparray,chunk = 2;
    for (i=0,j=arrayoftext.length; i<j; i+=chunk) {
    temparray = arrayoftext.slice(i,i+chunk);
    groupedbytwo.push(temparray);
    }

    var k;
    var y;


    for(i=0;i<groupedbytwo.length;i++)
    {
        var frow='';
        var fcol='';

        var srow='';
        var scol='';

        console.log(groupedbytwo[i][0]);
        console.log(groupedbytwo[i][1]);

        //table loop
        for(y=0;y<this.MyTable.length;y++)
        {
          for(k=0;k<this.MyTable[y].length;k++)
          {
           if(groupedbytwo[i][0] == this.MyTable[y][k])
           {
              frow = y;
              fcol = k;

           }
           if(groupedbytwo[i][1] == this.MyTable[y][k])
           {
              srow = y;
              scol = k;

           }
          }
        }
        console.log(fcol);
        console.log(frow);
        console.log(scol);
        console.log(srow);


        if(frow!=srow && fcol!=scol)
        {
          this.encryptedtext.push(this.MyTable[frow][scol]);
          this.encryptedtext.push(this.MyTable[srow][fcol]);
        }else if(frow==srow)
        {
          var newfcol=fcol+1;
          var newscol=scol+1;

          if(Number(newfcol)<5)
          {
            this.encryptedtext.push(this.MyTable[frow][newfcol]);
          }else{
            this.encryptedtext.push(this.MyTable[frow][0]);
          }

          if(Number(newscol)<5)
          {
            this.encryptedtext.push(this.MyTable[srow][newscol]);
          }else{
            this.encryptedtext.push(this.MyTable[srow][0]);
          }
        }else if(fcol==scol)
        {
          var newfrow=frow+1;
          var newsrow=srow+1;

          if(Number(newfrow)<5)
          {
            this.encryptedtext.push(this.MyTable[newfrow][fcol]);
          }else{
            this.encryptedtext.push(this.MyTable[0][fcol]);
          }

          if(Number(newsrow)<5)
          {
            this.encryptedtext.push(this.MyTable[newsrow][scol]);
          }else{
            this.encryptedtext.push(this.MyTable[0][scol]);
          }
        }
        console.log(this.encryptedtext);
    }

  }
  DecryptText()
  {
    this.decryptedtext = [];
    var nospacetext = this.submittedCipher.replace(/\s/g,'').toUpperCase();
    var arrayoftext = nospacetext.split("");

    //validation
    for(i=0;i<arrayoftext.length;i++)
    {
      if(arrayoftext[i]=='J')
      {
        return this.decryptedtext.push("Sorry J is not allowed");
      }
    }
    if (arrayoftext.length % 2 === 0) {
 
    } else {
       arrayoftext.push('X');
    }
    var groupedbytwo = [];
    var i,j,temparray,chunk = 2;
    for (i=0,j=arrayoftext.length; i<j; i+=chunk) {
    temparray = arrayoftext.slice(i,i+chunk);
    groupedbytwo.push(temparray);
    }

    var k;
    var y;


    for(i=0;i<groupedbytwo.length;i++)
    {
        var frow='';
        var fcol='';

        var srow='';
        var scol='';

        console.log(groupedbytwo[i][0]);
        console.log(groupedbytwo[i][1]);

        //table loop
        for(y=0;y<this.MyTable.length;y++)
        {
          for(k=0;k<this.MyTable[y].length;k++)
          {
           if(groupedbytwo[i][0] == this.MyTable[y][k])
           {
              frow = y;
              fcol = k;

           }
           if(groupedbytwo[i][1] == this.MyTable[y][k])
           {
              srow = y;
              scol = k;

           }
          }
        }
        console.log(fcol);
        console.log(frow);
        console.log(scol);
        console.log(srow);


        if(frow!=srow && fcol!=scol)
        {
          this.decryptedtext.push(this.MyTable[frow][scol].toLowerCase());
          this.decryptedtext.push(this.MyTable[srow][fcol].toLowerCase());
        }else if(frow==srow)
        {
          var newfcol=Number(fcol)-1;
          var newscol=Number(scol)-1;

          if(Number(newfcol)>=0)
          {
            this.decryptedtext.push(this.MyTable[frow][newfcol].toLowerCase());
          }else{
            this.decryptedtext.push(this.MyTable[frow][4].toLowerCase());
          }

          if(Number(newscol)>=0)
          {
            this.decryptedtext.push(this.MyTable[srow][newscol].toLowerCase());
          }else{
            this.decryptedtext.push(this.MyTable[srow][4].toLowerCase());
          }
        }else if(fcol==scol)
        {
          var newfrow=Number(frow)-1;
          var newsrow=Number(srow)-1;

          if(Number(newfrow)>=0)
          {
            this.decryptedtext.push(this.MyTable[newfrow][fcol].toLowerCase());
          }else{
            this.decryptedtext.push(this.MyTable[4][fcol].toLowerCase());
          }

          if(Number(newsrow)>=0)
          {
            this.decryptedtext.push(this.MyTable[newsrow][scol].toLowerCase());
          }else{
            this.decryptedtext.push(this.MyTable[4][scol].toLowerCase());
          }
        }
        console.log(this.decryptedtext);
    }

  }

}
