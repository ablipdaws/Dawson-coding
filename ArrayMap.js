const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
]
/*];
	users.map = [
	{
	function(fullName) = user.map(firstName, lastName)
		console.log(fullName);}	
	{
	function(membershipStatus) = 
		if points > 100
		return: 'Premium'
		if points < 100
		return: 'Standard'	
	}
*/

const newUsers = users.map(function (user)
    	{
	return 
		{
	fullName: `${user.firstName} ${user.lastName}`;
	membershipStatus: user.points > 100 ? "Premium" : "Standard"
	    };
    });

console.log(newUsers);
