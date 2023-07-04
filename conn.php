<?php
// Replace the connection details with your own
$conn = oci_connect('system', 'Roma04061998', 'localhost:1521/xe');

if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

// Replace the query and table name with your own
$query = 'SELECT * FROM my_table';
$stid = oci_parse($conn, $query);
oci_execute($stid);

$data = array();
while ($row = oci_fetch_assoc($stid)) {
	$data[] = $row;
}

oci_free_statement($stid);
oci_close($conn);

echo json_encode($data);
?>
