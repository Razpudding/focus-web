// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
	console.log("owned ie em?" + (doc && doc.userId === userId));
	return doc && doc.userId === userId;	
}
