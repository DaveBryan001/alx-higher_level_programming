#!/usr/bin/python3
"""
This module provides functionalities to connect to a MySQL database
and retrieve a list of states ordered by their IDs.
"""
import MySQLdb
import sys


def list_states(username, password, database):
    """
    Connects to a MySQL database and prints the list of states.

    Args:
        username (str): The MySQL username.
        password (str): The MySQL password.
        database (str): The name of the MySQL database.

    Prints:
        The list of states ordered by their IDs.
    """
    try:
        # Connect to the MySQL server
        db = MySQLdb.connect(
            host="localhost",
            port=3306,
            user=username,
            passwd=password,
            db=database
        )

        # Create a cursor object
        cursor = db.cursor()

        # Execute the SQL query
        cursor.execute("SELECT id, name FROM states ORDER BY id ASC")

        # Fetch all the rows
        states = cursor.fetchall()

        # Print the results
        for state in states:
            print(state)

        # Close the cursor and the connection
        cursor.close()
        db.close()
    except MySQLdb.OperationalError as e:
        print(f"Error connecting to MySQL: {e}")


if __name__ == "__main__":
    # Get command-line arguments
    if len(sys.argv) != 4:
        print("Usage: {} username password database".format(sys.argv[0]))
        sys.exit(1)

    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]

    list_states(username, password, database)
