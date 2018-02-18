import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atbash',
  templateUrl: './atbash.component.html',
  styleUrls: ['./atbash.component.css']
})
export class AtbashComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  plaintext = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  ciphertext = ['Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A'];
  encryptedtext =[];
  decryptedtext=[];
  submittedtext = '';
  submittedCipher= '';
  EncryptText()
  {
    this.encryptedtext =[];
    var nospacetext = this.submittedtext.replace(/\s/g,'');
    var submittedArrayForm = nospacetext.split("");
    for(var i=0;i<submittedArrayForm.length;i++)
    {
      for(var n=0;n<this.plaintext.length;n++)
      {
        if(submittedArrayForm[i] == this.plaintext[n])
        {
          this.encryptedtext.push(this.ciphertext[n]);
        }
      }
    }
  }
  DecryptText()
  {
    var nospacetext = this.submittedCipher.replace(/\s/g,'');
    var submittedArrayForm = nospacetext.split("");
    for(var i=0;i<submittedArrayForm.length;i++)
    {
      for(var n=0;n<this.ciphertext.length;n++)
      {
        if(submittedArrayForm[i] == this.ciphertext[n])
        {
          this.decryptedtext.push(this.plaintext[n]);
        }
      }
    }
  }
}
