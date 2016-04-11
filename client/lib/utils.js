Template.registerHelper("shortDate", function(date)
{
	if(date)
		return date.toLocaleDateString();
});