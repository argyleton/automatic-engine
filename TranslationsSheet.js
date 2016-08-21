function onOpen() {
  // Add a custom menu to the Google Doc.
  DocumentApp.getUi()
      .createMenu('Magic')
      .addItem('Abracadabra!', 'menuItem1')
      .addToUi();
}

function menuItem1() {
 
 var body = DocumentApp.getActiveDocument().getBody()
 var title = DocumentApp.getActiveDocument().getName()
 var ss = SpreadsheetApp.create(title + ' - Translations');
 var link = ss.getUrl();
 var info = body.findText('<<Insert Link>>');
  
 if(info){ // if found a match
     var start = info.getStartOffset();
     var text = info.getElement().asText();
     text.replaceText("<<Insert Link>>",link);
     text.setLinkUrl(link);}
 
 var numChildren = body.getNumChildren()
 var range = numChildren - 1
 var ranger = range.toFixed(0)
 
 var sheets = ss.getSheets()[0];
 sheets.setColumnWidth(1, 500);
 var cellCounter = 2
 for(counter = 0; counter < ranger; counter++){
  if(body.getChild(counter).getHeading() == 'Heading 3'){
    if(body.getChild(counter).getText() == 'COPY:'){
      sheets.getRange('A1').setValue('English').setFontWeight("bold").setWrap(true);
      counter++
    while(counter < ranger){
      if(body.getChild(counter).getHeading() == 'Normal'){
      copyText = body.getChild(counter).getText()
      sheets.getRange('A'+cellCounter).setValue(copyText).setWrap(true)
      counter++
      cellCounter++
      Logger.log(copyText)
      }
      else if(body.getChild(counter).getHeading() == 'Title'){
      copyText = body.getChild(counter).getText()
      sheets.getRange('A'+cellCounter).setValue(copyText).setFontWeight("bold").setWrap(true);
      counter++
      cellCounter++
      Logger.log(copyText)
      }
      else if(body.getChild(counter).getHeading() == 'Heading 3'){
        break
      }
    }
    }
    }
  }
 
  for(columnCounter = 2; columnCounter < 7; columnCounter++){
  sheets.setColumnWidth(columnCounter, 375);
  }
  sheets.getRange('B1').setValue('Spanish').setFontWeight("bold").setWrap(true);
  sheets.getRange('C1').setValue('German').setFontWeight("bold").setWrap(true);
  sheets.getRange('D1').setValue('Portuguese').setFontWeight("bold").setWrap(true);
  sheets.getRange('E1').setValue('French').setFontWeight("bold").setWrap(true);
  sheets.getRange('F1').setValue('Japanese').setFontWeight("bold").setWrap(true);
  sheets.setFrozenColumns(1);
  sheets.setFrozenRows(1);
  
  var email = "EMAILADDRESS" + "," + "EMAILADDRESS"+","+"EMAILADDRESS"+","+"EMAILADDRESS"+","+"EMAILADDRESS"+","+"EMAILADDRESS"+","+"EMAILADDRESS";
  var subject = ss.getName() + ' has been created!';
  var body = 'A translations sheet named, "' + ss.getName() + '" has been created.\n It can be found at '+ link + '\n\n\n\n\n\n\n\nYou have received this message by MAGIC!';
  // Send yourself an email with a link to the document.
  GmailApp.sendEmail(email, subject, body);
  var editors = ["EMAILADDRESS","EMAILADDRESS","EMAILADDRESS","EMAILADDRESS","EMAILADDRESS","EMAILADDRESS","EMAILADDRESS"]
  ss.addEditors(editors);
 }
 
 