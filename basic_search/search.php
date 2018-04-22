
<?php

// Enter username and password
$username = root;
$password = root;
$db_name = tutorial_search;
$connection = "mysql:host=localhost;dbname=".$db_name;

// Create database connection using PHP Data Object (PDO)
$db = new PDO($connection, $username, $password);

// Identify name of table within database
$table = 'articles';

// Create the query - here we grab everything from the table
$search=$_POST['search'];
echo $search;
$stmt = $db->query("SELECT * FROM " . $table . " WHERE text LIKE '%" . $search . "%'");


while($rows = $stmt->fetch()){
	echo "<tr><td>". $rows['id'] . "</td><td>" . $rows['text'] . "</td></tr>";
};

$db = NULL;


?>
