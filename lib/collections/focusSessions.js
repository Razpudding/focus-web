FocusSessions = new Mongo.Collection('FocusSessions');

FocusSessions.schema = new SimpleSchema({
	type: {type: String},
	iteration: {type: Number},
	date: {type: Date, optional: true},
	participants: {type: [String], defaultValue: [], optional:true},
});
FocusSessions.attachSchema(FocusSessions.schema);

const fSession = {
	type: 'lab',
	iteration: 1,
	date: new Date(),
};

const wSession = {
	iteration: 1,
	date: new Date(),
};

FocusSessions.insert({iteration: 1, date: new Date()}, function(error, result) {
});

/*
console.log(FocusSessions.insert(fSession, function(error,result)
	{

	}));
console.log("second insert")
console.log(FocusSessions.insert(wSession, function(error,result)
	{
		
	}));
console.log(FocusSessions.schema.validate(fSession));
console.log(FocusSessions.schema.validate(wSession));
*/