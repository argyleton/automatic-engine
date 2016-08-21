function onOpen() {
  // Add a custom menu to the Google Doc.
  DocumentApp.getUi()
      .createMenu('Trello-inate-it!')
      .addItem('Create Trello Card (for Growth requests)', 'menuItem1')
      .addItem('Create Trello Card (for other requests)', 'menuItem2')
      .addToUi();
}

function menuItem1() {
  var body = DocumentApp.getActiveDocument().getBody()
  var title = DocumentApp.getActiveDocument().getName()
  var doc = DocumentApp.getActiveDocument()
  var link = doc.getUrl()
  var numChildren = body.getNumChildren()
  var range = numChildren - 1
  var ranger = range.toFixed(0)
  var requestor = Session.getActiveUser()
  
  description = []
 
  
  for(counter = 1; counter < ranger; counter++){
      if (body.getChild(counter).getText() == 'Business Objective (Goal of Campaign)*'){
      break
    }
    else {
      var copyText = body.getChild(counter).getText() + '\n';
      description.push(copyText)
      
    }
  }
   var desc = description.join("")
  
   var payload = {"name":title, //(required) Valid Values: a string with a length from 1 to 16384
                  "desc":desc + '\n\n Creative Services Brief: ' + link + '\n\n Submitted by: ' + requestor + ' via the Trello-inator!', //(optional)Valid Values: a string with a length from 0 to 16384
                  "pos":"top", //(optional) Default: bottom Valid Values: A position. top, bottom, or a positive number.
                  //"due": "", //(required) Valid Values: A date, or null
                   "idList":"IDLIST", //(required)Valid Values: id of the list that the card should be added to
                  "idLabels": "IDLABELS"
                  //"idMembers": ,//(optional)Valid Values: A comma-separated list of objectIds, 24-character hex strings
                  //"idCardSource": ,//(optional)Valid Values: The id of the card to copy into a new card.
                  //"keepFromSource": ,//(optional)Default: all Valid Values: Properties of the card to copy over from the source.
                };

   // Because payload is a JavaScript object, it will be interpreted as
   // an HTML form. (We do not need to specify contentType; it will
   // automatically default to either 'application/x-www-form-urlencoded'
   // or 'multipart/form-data')
  var url = 'https://api.trello.com/1/cards?key=KEY&token=TOKEN' //optional... -&cards=open&lists=open'-
   var options = {"method" : "post",
                 "payload" : payload};

   UrlFetchApp.fetch(url, options);

  }

function menuItem2() {
  var body = DocumentApp.getActiveDocument().getBody()
  var title = DocumentApp.getActiveDocument().getName()
  var doc = DocumentApp.getActiveDocument()
  var link = doc.getUrl()
  var numChildren = body.getNumChildren()
  var range = numChildren - 1
  var ranger = range.toFixed(0)
  var requestor = Session.getActiveUser()
  
  description = []
 
  
  for(counter = 1; counter < ranger; counter++){
      if (body.getChild(counter).getText() == 'Business Objective (Goal of Campaign)*'){
      break
    }
    else {
      var copyText = body.getChild(counter).getText() + '\n';
      description.push(copyText)
      
    }
  }
   var desc = description.join("")
   
   var payload = {"name":title, //(required) Valid Values: a string with a length from 1 to 16384
                 "desc":desc + '\n\n Creative Services Brief: ' + link + '\n\n Submitted by: ' + requestor, //(optional)Valid Values: a string with a length from 0 to 16384
                 "pos":"top", //(optional) Default: bottom Valid Values: A position. top, bottom, or a positive number.
                  //"due": "", //(required) Valid Values: A date, or null
                   "idList":"IDLIST", //(required)Valid Values: id of the list that the card should be added to
                  //"idLabels":
                  //"idMembers": ,//(optional)Valid Values: A comma-separated list of objectIds, 24-character hex strings
                  //"idCardSource": ,//(optional)Valid Values: The id of the card to copy into a new card.
                  //"keepFromSource": ,//(optional)Default: all Valid Values: Properties of the card to copy over from the source.
                 };

   // Because payload is a JavaScript object, it will be interpreted as
   // an HTML form. (We do not need to specify contentType; it will
   // automatically default to either 'application/x-www-form-urlencoded'
   // or 'multipart/form-data')
  var url = 'https://api.trello.com/1/cards?key=KEY&token=TOKEN' //optional... -&cards=open&lists=open'-
  var options = {"method" : "post",
                 "payload" : payload};

   UrlFetchApp.fetch(url, options);

  }