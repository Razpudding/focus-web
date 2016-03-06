if (FocusSessions.find().count() != 0) {
  FocusSessions.remove({});
}

if (FocusSessions.find().count() === 0) {
  FocusSessions.insert({
    type: 'normal',
    iteration: 2,
    date: new Date("March 4, 2016 9:50:00"),
    preTestLink: 'https://docs.google.com/forms/d/1ZanGWdNruYW1f46jUmGpL0TalLoZfRMVEMgdCDwPaJg/viewform',
    postTestLink: 'https://docs.google.com/forms/d/1GNDI9TU8uAuMOWRGrcqkF-Y_JINmhBAx3xptX26drzA/viewform',
   // <iframe src="https://docs.google.com/forms/d/1ZanGWdNruYW1f46jUmGpL0TalLoZfRMVEMgdCDwPaJg/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

  }, function (error, result){
    console.log(error ? error.invalidKeys : result);
  });
  
  FocusSessions.insert({
    type: 'lab',
    iteration: 1,
    date: new Date("March 10, 2016 9:50:00"),
    participants: ["snommie", 4, "snotboy"],
  }, function (error, result){
    console.log(error ? error.invalidKeys : result);
  });
}