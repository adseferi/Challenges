<?php

if (isset($_POST['submit'])) {
    $DBServer = 'localhost';
    $DBUser = 'root';
    $DBName = 'bookstore';
    $conn = mysqli_connect($DBServer, $DBUser, $DBPass, $DBName);

// check connection
    if (mysqli_connect_errno()) {
        trigger_error('Database connection failed: ' . mysqli_connect_error(), E_USER_ERROR);
    }

    if (isset($_GET['go'])) {
        if (preg_match("/^[  a-zA-Z]+/", $_POST['name'])) {

            $name = $_POST['name'];

        }



        $results = mysqli_query($conn, "SELECT * FROM book INNER JOIN series ON book.serie_id=series.id WHERE book.book_title LIKE '%$name%' OR series.series_author LIKE '%$name%'");


        $myarray = array();

        echo "<table border='1'><tr><th>Id</th><th>Title</th><th>Author</th></tr>";

        while ($record = mysqli_fetch_assoc($results)) {

            $temparray = $record;

            echo "<tr ><td>" . $temparray['id'] . "</td><td>" . $temparray['book_title'] ."</td><td>" .$temparray['series_author'] . "</td></tr>";
//
//            echo $temparray['id'];
//            echo $temparray['book_title'];
//            echo $temparray['series_author'];
//            echo '</br>';

//            echo "<table style='border: 1px solid black;'>"."<td>" . $temparray['id'] . "</td>" . "<td>" . $temparray['book_title'] ."</td>"."<td>" ." By ". "</td>". "<td>" . $temparray['series_author'] ."</td>"."</table>";


        }
        echo "</table>";

    }
}
?>