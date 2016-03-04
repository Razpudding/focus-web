if (FocusSessions.find().count() != 0) {
  FocusSessions.remove({});
}

if (FocusSessions.find().count() === 0) {
  FocusSessions.insert({
    type: 'normal',
    iteration: 3,
    date: new Date("March 4, 2016 9:50:00"),
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