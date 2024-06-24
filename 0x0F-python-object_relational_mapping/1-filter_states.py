#!/usr/bin/python3
"""
This module connects to a MySQL database and lists all states with a name
starting with 'N' (upper 'N') from the database hbtn_0e_0_usa.
"""

import MySQLdb
import sys


def list_states_starting_with_N(username, password, database):
    """
    Connects to a MySQL database and prints all
    states with names starting with 'N'.

    Args:
        username (str): The MySQL username.
        password (str): The MySQL password.
        database (str): The name of the MySQL database.
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

        query = ("SELECT id, name FROM states "
                 "WHERE name LIKE 'N%' ORDER BY id ASC;")

        cursor.execute(query)

        states = cursor.fetchall()

        for state in states:
            print(state)

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
    if len(sys.argv) != 4:
        print("Usage: {} username password database".format(sys.argv[0]))
        sys.exit(1)

    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]

    list_states_starting_with_N(username, password, database)
