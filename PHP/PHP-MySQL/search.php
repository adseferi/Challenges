<?php
if(isset($_POST['submit'])){
    if(isset($_GET['go'])){
        if(preg_match("/^[  a-zA-Z]+/", $_POST['name'])){
            $name=$_POST['name'];
            //connect  to the database
            $db=mysql_connect  ("localhost", "root",) or die ('I cannot connect to the database  because: ' . mysql_error());
            //-select  the database to use
            $mydb=mysql_select_db("bookstore");
            //-query  the database table
            $sql="SELECT  id,book_title,book_author FROM book WHERE book_title LIKE '%$name' OR book_author LIKE '%$name'";
            //-run  the query against the mysql query function
            $result=mysql_query($sql);
            //-create  while loop and loop through result set
            while($row=mysql_fetch_array($result)){
                $FirstName  =$row['book_title'];
                $LastName=$row['book_author'];
                $ID=$row['id'];
                //-display the result of the array
                echo "<ul>\n";
                echo "<li>" . "<a  href=\"search.php?id=$ID\">"   .$FirstName . " " . $LastName .  "</a></li>\n";
                echo "</ul>";
            }
        }
        else{
            echo  "<p>Please enter a search query</p>";
        }
    }
}
?>