#!/usr/bin/python3
"""
This script connects to a MySQL database and displays all values in the states
table where the name matches the argument provided by the user.
"""

import MySQLdb
import sys


def find_states(username, password, database, state_name):
    """
    Connects to a MySQL database and prints all states with the given name.

    Args:
        username (str): The MySQL username.
        password (str): The MySQL password.
        database (str): The name of the MySQL database.
        state_name (str): The name of the state to search for.
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

        cursor = db.cursor()

        query = (
            "SELECT id, name FROM states WHERE name = '{}' ORDER BY id ASC"
        ).format(state_name)
        cursor.execute(query)
        
        # Fetch all the rows
        states = cursor.fetchall()
        
        # Print the results
        for state in states:
            print(state)
        
        # Close the cursor and the connection
        cursor.close()
        db.close()
    except MySQLdb.OperationalError as e:
        print(f"OperationalError: {e}")
    except MySQLdb.ProgrammingError as e:
        print(f"ProgrammingError: {e}")
    except MySQLdb.InternalError as e:
        print(f"InternalError: {e}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    # Check if the script is executed with the correct number of arguments
    if len(sys.argv) != 5:
        print("Usage: {} username password database state_name".format(sys.argv[0]))
        sys.exit(1)
    
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]
    state_name = sys.argv[4]
    
    find_states(username, password, database, state_name)
