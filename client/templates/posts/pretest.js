FocusSessions.insert({
    type: 'lab',
    iteration: 1,
    date: new Date("March 10, 2016 9:50:00"),
    participants: ["snommie", "4", "snotboy"],
  }, function (error, result){
    console.log(error ? error.invalidKeys : result);
  });